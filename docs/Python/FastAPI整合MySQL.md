# FastAPI整合MySQL

## 1. 准备工作

首先安装必要的依赖包：

```bash
pip install sqlalchemy pymysql  # 同步方式
pip install sqlalchemy aiomysql  # 异步方式
```

## 2. 同步方式 (SQLAlchemy + PyMySQL)

### 2.1 配置数据库连接

```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# MySQL连接URL格式: mysql+pymysql://用户名:密码@主机:端口/数据库名
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:password@localhost:3306/fastapi_db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_size=5,  # 连接池大小
    max_overflow=10,  # 超出连接池大小后允许的最大连接数
    pool_timeout=30,  # 获取连接的超时时间(秒)
    pool_recycle=3600  # 连接回收时间(秒)
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
```

### 2.2 定义模型

```python
from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True)
    email = Column(String(100), unique=True, index=True)
    hashed_password = Column(String(200))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def __repr__(self):
        return f"<User(id={self.id}, username={self.username}, email={self.email})>"

# 创建表
Base.metadata.create_all(bind=engine)
```

### 2.3 创建依赖项

```python
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

app = FastAPI()

# 数据库会话依赖
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

### 2.4 实现CRUD操作

```python
from pydantic import BaseModel
from typing import List

# Pydantic模型
class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    created_at: datetime
    
    class Config:
        orm_mode = True

# 创建用户
@app.post("/users/", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    # 在实际应用中应该对密码进行哈希处理
    hashed_password = user.password + "_hashed"  # 简化示例
    
    db_user = User(
        username=user.username,
        email=user.email,
        hashed_password=hashed_password
    )
    
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# 获取用户列表
@app.get("/users/", response_model=List[UserResponse])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = db.query(User).offset(skip).limit(limit).all()
    return users

# 获取单个用户
@app.get("/users/{user_id}", response_model=UserResponse)
def read_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
```

## 3. 异步方式 (SQLAlchemy + aiomysql)

### 3.1 配置异步数据库连接

```python
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

# 异步MySQL连接URL格式: mysql+aiomysql://用户名:密码@主机:端口/数据库名
ASYNC_SQLALCHEMY_DATABASE_URL = "mysql+aiomysql://root:password@localhost:3306/fastapi_db"

async_engine = create_async_engine(
    ASYNC_SQLALCHEMY_DATABASE_URL,
    echo=True,  # 打印SQL语句(调试用)
    pool_size=5,
    max_overflow=10,
    pool_timeout=30,
    pool_recycle=3600
)

AsyncSessionLocal = sessionmaker(
    bind=async_engine,
    class_=AsyncSession,
    expire_on_commit=False
)
```

### 3.2 定义异步依赖项

```python
async def get_async_db():
    async with AsyncSessionLocal() as db:
        yield db
```

### 3.3 实现异步CRUD

```python
from fastapi import APIRouter

router = APIRouter()

@router.post("/async/users/", response_model=UserResponse)
async def async_create_user(user: UserCreate, db: AsyncSession = Depends(get_async_db)):
    hashed_password = user.password + "_hashed_async"  # 简化示例
    
    db_user = User(
        username=user.username,
        email=user.email,
        hashed_password=hashed_password
    )
    
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user

@router.get("/async/users/", response_model=List[UserResponse])
async def async_read_users(skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_async_db)):
    result = await db.execute(select(User).offset(skip).limit(limit))
    users = result.scalars().all()
    return users

app.include_router(router)
```

## 4. 数据库迁移 (Alembic)

对于生产环境，建议使用Alembic进行数据库迁移管理：

1. 安装Alembic：

```bash
pip install alembic
```

1. 初始化Alembic：

```bash
alembic init alembic
```

1. 修改`alembic.ini`中的数据库连接：

```ini
sqlalchemy.url = mysql+pymysql://root:password@localhost:3306/fastapi_db
```

1. 修改`alembic/env.py`：

```python
from models import Base  # 导入你的Base
target_metadata = Base.metadata
```

1. 创建迁移脚本：

```bash
alembic revision --autogenerate -m "create user table"
```

1. 应用迁移：

```bash
alembic upgrade head
```

## 5. 性能优化建议

1. **连接池配置**：

   - 根据应用负载调整`pool_size`和`max_overflow`
   - 设置合理的`pool_recycle`防止连接超时

2. **批量操作**：

   ```python
   # 批量插入
   db.bulk_save_objects([User(...), User(...)])
   db.commit()
   
   # 批量更新
   db.query(User).filter(User.id.in_([1,2,3])).update({"is_active": False})
   db.commit()
   ```

3. **索引优化**：

   - 为常用查询字段添加索引
   - 考虑复合索引

4. **查询优化**：

   ```python
   # 使用selectinload进行关联加载
   from sqlalchemy.orm import selectinload
   users = db.query(User).options(selectinload(User.posts)).all()
   ```

## 6. 实际应用示例

以下是一个完整的用户认证系统示例：

```python
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import JWTError, jwt
from typing import Optional

# 安全配置
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
        
    user = db.query(User).filter(User.username == token_data.username).first()
    if user is None:
        raise credentials_exception
    return user

@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users/me/", response_model=UserResponse)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user
```

## 7. 常见问题解决

1. **连接超时问题**：
   - 增加`pool_timeout`
   - 检查MySQL的`wait_timeout`设置
2. **字符编码问题**：
   - 在连接URL中添加`?charset=utf8mb4`
   - 确保MySQL服务器配置了正确的字符集
3. **性能瓶颈**：
   - 使用EXPLAIN分析慢查询
   - 考虑添加缓存层(如Redis)
4. **连接泄露**：
   - 确保每个请求后关闭会话
   - 使用`try/finally`或上下文管理器