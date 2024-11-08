# 基于Flask写API

### 1. 安装 Flask

在开始之前，请确保已经安装了 Flask。如果没有安装，可以使用`pip install flask`命令进行安装。

### 2. 创建 Flask 应用并编写 API 端点

```python
from flask import Flask, jsonify,render_template

# 创建Flask实例
app = Flask(__name__)

@app.route('/html')
def index():
    return render_template('index.html')

@app.route('/user')
def user():
    user_name = "John"
    return render_template('user.html', name=user_name)

# 定义一个简单的GET API，返回一个包含消息的JSON对象
@app.route('/hello', methods=['GET'])
def hello():
    data = {'message': 'Hello, World!'}
    return jsonify(data)

# 定义一个接受参数的GET API
@app.route('/user/<username>', methods=['GET'])
def get_user(username):
    user_data = {'username': username, 'message': 'User information'}
    return jsonify(user_data)

# 定义一个POST API，接收JSON数据并返回
@app.route('/add_data', methods=['POST'])
def add_data():
    data = request.get_json()
    # 这里可以对接收的数据进行处理，例如保存到数据库等
    return jsonify({'status':'success','received_data': data})


```

### 3. 运行应用

在代码的末尾添加以下内容来启动 Flask 应用：

```python
if __name__ == '__main__':
    app.run(debug=True)
    # 指定端口
    # app.run(debug=True, port=8888) 
```

当你运行这个脚本时，Flask 应用会在本地启动。你可以使用工具（如`curl`或者`Postman`等）来测试这些 API：

- 对于`/hello`端点，使用`GET`请求`http://127.0.0.1:5000/hello`，会得到`{"message": "Hello, World!"}`的响应。
- 对于`/user/<username>`端点，使用`GET`请求`http://127.0.0.1:5000/user/john`（这里`john`是示例用户名），会得到`{"username": "john", "message": "User information"}`的响应。
- 对于`/add_data`端点，使用`POST`请求`http://127.0.0.1:5000/add_data`，并在请求体中发送 JSON 数据（例如`{"key": "value"}`），会得到包含状态和接收数据的响应。

> 此外

此外，HTML 表单可以提交数据到 Flask 应用的路由，Flask 通过接收和处理这些数据来实现交互。例如，在 HTML 中有一个简单的表单：

```html
<form action="/submit" method="post">
    <input type="text" name="input_data">
    <input type="submit" value="Submit">
</form>
```

在 Flask 应用中可以这样接收和处理：

```python
@app.route('/submit', methods=['POST'])
def submit():
    input_data = request.form.get('input_data')
    # 对数据进行处理，比如打印
    print(input_data)
    return "Data received"
```

> 使用pm2启动（可选）

### 1. 安装 pm2

使用`npm install -g pm2`命令安装 pm2（需要先安装 Node.js 环境）。

### 2. 创建启动脚本

创建一个名为`start_flask_app.sh`（文件名可自定义）的脚本文件，内容如下：

```bash
#!/bin/bash
export FLASK_APP=your_flask_app.py  # 将your_flask_app.py替换为你的Flask应用主文件
flask run --host=0.0.0.0 --port=5000  # 这里端口根据你的实际设置修改
```

注意：

- 如果你的 Flask 应用有其他的环境变量设置（如数据库连接字符串等），也需要在这个脚本中进行设置。
- 确保脚本有可执行权限，可以使用`chmod +x start_flask_app.sh`命令赋予权限。

### 3. 使用 pm2 启动应用

在终端中执行以下命令：

```
pm2 start start_flask_app.sh --name flask-api
```

这里`--name`参数用于指定 pm2 中应用的名称，可以根据需要修改。通过这种方式，pm2 就会启动并管理你的 Flask 应用。你可以使用`pm2 list`查看应用的运行状态，使用`pm2 logs flask-api`查看应用的日志，使用`pm2 stop flask-api`停止应用等操作。