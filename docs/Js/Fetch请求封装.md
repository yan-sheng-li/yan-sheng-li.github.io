# Fetch请求封装


### 特性支持的扩展

1. Token 管理
   - `setToken(newToken)`: 用于设置或更新 Token。
   - `getToken()`: 可在需要时手动获取当前的 Token。
2. 自动携带 Token
   - 每个请求自动在 `Authorization` 中添加 `Bearer {token}`。
3. 灵活性
   - 可扩展支持 Token 过期后的自动刷新逻辑（需要与后端配合）。

------

### 改进后的封装代码


```javascript
// utils.js

// 全局存储 Token
let token = '';

// 设置 Token
export function setToken(newToken) {
    token = newToken;
}

// 获取 Token
export function getToken() {
    return token;
}

// 通用 fetch 封装
export function request(url, options = {}) {
    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    // 如果有 token，附加到请求头
    if (token) {
        defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        method: options.method || 'GET',
        headers: { ...defaultHeaders, ...options.headers },
        body: options.method === 'GET' ? undefined : JSON.stringify(options.body),
    };

    return fetch(url, config)
        .then((response) => {
            if (!response.ok) {
                return Promise.reject(new Error(`HTTP Error: ${response.status}`));
            }
            return response.json(); // 假设后端返回 JSON 格式
        })
        .catch((error) => {
            console.error('Request failed:', error);
            throw error;
        });
}
```

------

### 使用方法

#### 设置 Token

在用户登录成功后，从后端获取的 token 存储到封装中：

```javascript
methods: {
    async login() {
        try {
            const response = await request('/api/login', {
                method: 'POST',
                body: {
                    username: this.username,
                    password: this.password,
                },
            });
            // 假设返回的数据中包含 token
            setToken(response.token);
            this.$message.success('登录成功');
        } catch (error) {
            this.$message.error('登录失败');
        }
    },
}
```

#### 自动携带 Token

所有后续请求都会自动附加 `Authorization` 头：

```javascript
methods: {
    async fetchItems() {
        try {
            const items = await request('/api/items');
            this.items = items;
        } catch (error) {
            this.$message.error('获取数据失败');
        }
    },
    async addItem(newItem) {
        try {
            const response = await request('/api/items', {
                method: 'POST',
                body: newItem,
            });
            this.items.push(response);
        } catch (error) {
            this.$message.error('添加失败');
        }
    },
}
```

------



### 示例

在登录后：

1. 设置 token:

   ```javascript
   setToken('your-jwt-token');
   ```

2. 发起请求时，`Authorization: Bearer your-jwt-token` 自动附加到每个请求的头部。

这使得代码更简洁，同时增强了安全性和一致性。