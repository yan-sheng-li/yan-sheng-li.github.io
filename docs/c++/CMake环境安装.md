> 在 Windows 电脑上配置 CMake 环境有以下几种方法，你可以根据需求选择最适合的方式：

---

### **方法 1：直接下载官方二进制包（推荐）**
1. **下载 CMake**  
   • 访问 [CMake 官网下载页面](https://cmake.org/download/)。
   • 选择 Windows 平台的 `.msi` 或 `.zip` 安装包（例如 `cmake-3.x.x-windows-x86_64.msi`）。

2. **安装**  
   • 运行 `.msi` 安装程序，勾选 **"Add CMake to the system PATH"**（方便命令行使用）。
   • 如果选择 `.zip`，解压后手动将 `bin` 目录（如 `C:\Program Files\CMake\bin`）添加到系统环境变量 `PATH`。

3. **验证**  
   打开命令提示符，运行：
   
   ```bash
   cmake --version
   ```
   如果显示版本号，说明安装成功。

---

### **方法 2：通过包管理器安装**
#### **2.1 使用 Chocolatey（需管理员权限）**
1. 安装 [Chocolatey](https://chocolatey.org/install)（Windows 包管理器）。
2. 在 PowerShell 中运行：
   ```powershell
   choco install cmake --installargs 'ADD_CMAKE_TO_PATH=System'
   ```

#### **2.2 使用 Scoop**
1. 安装 [Scoop](https://scoop.sh/)：
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   irm get.scoop.sh | iex
   ```
2. 安装 CMake：
   ```powershell
   scoop install cmake
   ```

---

### **方法 3：通过 Visual Studio 集成安装**
• 如果你已安装 **Visual Studio 2019 或更高版本**：
  1. 打开 Visual Studio Installer。
  2. 在“工作负载”中勾选 **“使用 C++ 的桌面开发”**。
  3. 在右侧的“可选组件”中勾选 **“CMake 工具”**。
  4. 安装完成后，CMake 会自动集成到 Visual Studio 中。

---

### **方法 4：通过 MinGW/MSYS2 安装**
如果使用 MinGW 或 MSYS2 开发环境：
1. 打开 MSYS2 终端，更新包数据库：
   ```bash
   pacman -Syu
   ```
2. 安装 CMake：
   ```bash
   pacman -S mingw-w64-x86_64-cmake
   ```

---

### **验证安装**
无论哪种方法，安装后均需验证：
```bash
cmake --version
```
输出类似 `cmake version 3.x.x` 即表示成功。

---

### **可选配置**
• **生成器选择**：CMake 支持多种构建工具（如 Visual Studio、Ninja、MinGW）。例如：
  ```bash
  cmake -G "Visual Studio 17 2022" ..   # 生成 VS 项目
  cmake -G "Ninja" ..                   # 使用 Ninja 构建
  ```
• **GUI 工具**：安装后可通过 `cmake-gui` 启动图形界面。

---

### **卸载 CMake**
1. 通过“控制面板”卸载程序（如果通过 `.msi` 安装）。
2. 或删除环境变量 `PATH` 中的 CMake 路径。

---

根据你的开发场景（是否需搭配 Visual Studio、MinGW 等），选择最便捷的方式即可。推荐直接下载官方安装包或通过 Chocolatey 安装。