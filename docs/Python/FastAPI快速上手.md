# FastAPI 快速上手

FastAPI 是一个现代、快速（高性能）的 Web 框架，用于基于标准 Python 类型提示构建 API。它基于 Python 3.6+ 类型提示，使用 Starlette 和 Pydantic 构建。

## 1. 安装 FastAPI

首先，确保你已安装 Python 3.6+，然后安装 FastAPI 和 Uvicorn（ASGI 服务器）：

```bash
pip install fastapi uvicorn
```

## 2. 创建第一个 FastAPI 应用

创建一个名为 `main.py` 的文件：

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
```

## 3. 运行应用

使用 Uvicorn 运行你的应用：

```bash
uvicorn main:app --reload
```

- `main`: 文件名（不含 `.py`）
- `app`: FastAPI 实例的名称
- `--reload`: 开发时自动重载代码

## 4. 访问 API

打开浏览器访问：

- `http://127.0.0.1:8000/` - 返回 `{"Hello": "World"}`
- `http://127.0.0.1:8000/items/5?q=test` - 返回 `{"item_id": 5, "q": "test"}`

## 5. 自动生成的交互式文档

FastAPI 自动生成 API 文档：

- Swagger UI: `http://127.0.0.1:8000/docs`
- ReDoc: `http://127.0.0.1:8000/redoc`

## 6. 请求体和 POST 方法

添加 POST 方法处理请求体：

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None

@app.post("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}
```

## 7. 路径参数和查询参数

```python
@app.get("/users/{user_id}/items/{item_id}")
def read_user_item(
    user_id: int, 
    item_id: str, 
    q: str = None, 
    short: bool = False
):
    item = {"item_id": item_id, "owner_id": user_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update({"description": "This is a long description"})
    return item
```

## 8. 响应模型

你可以定义返回数据的模型：

```python
from typing import List

class User(BaseModel):
    username: str
    email: str
    full_name: str = None

@app.post("/users/", response_model=User)
def create_user(user: User):
    return user
```

## 9. 错误处理

FastAPI 提供了内置的错误处理：

```python
from fastapi import HTTPException

@app.get("/items/{item_id}")
def read_item(item_id: int):
    if item_id == 42:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"item_id": item_id}
```

## 10. 异步支持

FastAPI 原生支持异步：

```python
@app.get("/async/")
async def read_async():
    await some_async_function()
    return {"message": "Async endpoint"}
```

## 11. 依赖注入系统

FastAPI 强大的依赖注入系统可以简化代码复用：

```python
from fastapi import Depends, FastAPI

app = FastAPI()

# 简单依赖
def common_parameters(q: str = None, skip: int = 0, limit: int = 100):
    return {"q": q, "skip": skip, "limit": limit}

@app.get("/items/")
async def read_items(commons: dict = Depends(common_parameters)):
    return commons

# 类作为依赖
class QueryParams:
    def __init__(self, q: str = None, skip: int = 0, limit: int = 100):
        self.q = q
        self.skip = skip
        self.limit = limit

@app.get("/users/")
async def read_users(params: QueryParams = Depends()):
    return params
```

## 12. 数据库集成 (SQLAlchemy)

集成 SQLAlchemy ORM 的完整示例：

```python
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# 定义模型
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)

Base.metadata.create_all(bind=engine)

app = FastAPI()

# 依赖获取数据库会话
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 用户模型
class UserCreate(BaseModel):
    username: str
    email: str

@app.post("/users/", response_model=UserCreate)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/{user_id}", response_model=UserCreate)
def read_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
```

## 13. 文件上传

处理文件上传的示例：

```python
from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "size": len(await file.read())
    }
```

## 14. 表单数据处理

处理 HTML 表单数据：

```python
from fastapi import FastAPI, Form

app = FastAPI()

@app.post("/login/")
async def login(username: str = Form(...), password: str = Form(...)):
    return {"username": username}
```

## 15. Cookie 和 Header 参数

访问 Cookie 和 Header：

```python
from fastapi import FastAPI, Cookie, Header

app = FastAPI()

@app.get("/items/")
async def read_items(
    ads_id: str = Cookie(None),
    user_agent: str = Header(None),
    x_token: str = Header(None)
):
    return {
        "ads_id": ads_id,
        "User-Agent": user_agent,
        "X-Token": x_token
    }
```

## 16. 中间件

添加自定义中间件：

```python
from fastapi import FastAPI, Request
import time

app = FastAPI()

@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response
```

## 17. CORS (跨域资源共享)

启用 CORS 支持：

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 生产环境应更严格
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 18. 后台任务

在响应后运行后台任务：

```python
from fastapi import FastAPI, BackgroundTasks

app = FastAPI()

def write_notification(email: str, message=""):
    with open("log.txt", mode="w") as email_file:
        content = f"notification for {email}: {message}"
        email_file.write(content)

@app.post("/send-notification/{email}")
async def send_notification(email: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(write_notification, email, message="some notification")
    return {"message": "Notification sent in the background"}
```

## 19. 静态文件服务

提供静态文件服务：

```python
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
```

## 20. 测试 FastAPI 应用

使用 TestClient 进行测试

```python
from fastapi import FastAPI
from fastapi.testclient import TestClient

app = FastAPI()

@app.get("/")
async def read_main():
    return {"msg": "Hello World"}

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"msg": "Hello World"}
```

## 21. 安全性 (OAuth2 和 JWT)

实现基于 JWT 的身份验证：

```python
from datetime import datetime, timedelta
from typing import Optional
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel

# 配置
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
    }
}

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class User(BaseModel):
    username: str

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return User(**user_dict)

def authenticate_user(fake_db, username: str, password: str):
    user = get_user(fake_db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
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
    user = get_user(fake_users_db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user

@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(fake_users_db, form_data.username, form_data.password)
    if not user:
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

@app.get("/users/me/", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user
```

## 22. WebSocket 支持

实现 WebSocket 端点：

```python
from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse

app = FastAPI()

html = """
<!DOCTYPE html>
<html>
    <head>
        <title>WebSocket Demo</title>
    </head>
    <body>
        <h1>WebSocket Demo</h1>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var ws = new WebSocket("ws://localhost:8000/ws");
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""

@app.get("/")
async def get():
    return HTMLResponse(html)

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")
```

## 23. 部署 FastAPI 应用

使用 Uvicorn 和 Gunicorn 部署生产环境：

1. 安装 Gunicorn：

```bash
pip install gunicorn
```

1. 创建 `gunicorn_conf.py` 配置文件：

```python
workers = 4
worker_class = "uvicorn.workers.UvicornWorker"
bind = "0.0.0.0:8000"
```

1. 使用 Gunicorn 运行：

```bash
gunicorn -c gunicorn_conf.py main:app
```

## 24. 使用 Docker 容器化

创建 `Dockerfile`：

```dockerfile
FROM python:3.9

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["gunicorn", "-c", "gunicorn_conf.py", "main:app"]
```

创建 `docker-compose.yml`：

```yaml
version: "3.8"

services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - APP_ENV=production
    restart: always
```

## 25. 性能优化技巧

1. **使用异步数据库驱动**：如 asyncpg 用于 PostgreSQL，aiomysql 用于 MySQL
2. **启用 Gzip 压缩**：

```python
from fastapi.middleware.gzip import GZipMiddleware
app.add_middleware(GZipMiddleware, minimum_size=1000)
```

1. **缓存响应**：使用 `@lru_cache` 或 Redis
2. **使用 Pydantic 的 ORM 模式**：减少数据转换开销
3. **限制请求体大小**：

```python
from fastapi import FastAPI, Request
app = FastAPI(max_request_size=1024 * 1024)  # 1MB
```
