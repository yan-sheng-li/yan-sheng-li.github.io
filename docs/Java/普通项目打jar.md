# 普通项目打jar

在 IntelliJ IDEA 中，可以按照以下步骤将一个 Java 文件打成 JAR 包：

## 创建或打开项目
   如果是新的 Java 项目，创建一个新的 IntelliJ IDEA 项目，并将 Java 文件添加到项目中合适的目录结构下。如果是已有项目，直接打开项目。
## 设置项目结构（可选）
   右键点击项目根目录，选择 “Project Structure”。在 “Project Settings” 中，确保 “Project SDK” 和 “Project language level” 设置正确，以匹配你的 Java 版本和代码要求。在 “Modules” 中，确认源文件（包括你的 Java 文件）所在的目录被正确识别为 “Sources”。
## 配置 Artifacts
   选择 “File”->“Project Structure”，在弹出的窗口中选择 “Artifacts”。
   点击 “+” 按钮，选择 “JAR”->“From modules with dependencies”。
   在 “Create JAR from Modules” 对话框中：
   Main Class：选择你的 Java 文件中的主类（包含main方法的类）。
   JAR Files from Libraries：可以选择将项目依赖的库以不同的方式打包到 JAR 中。例如，“Extract to the target JAR” 会将依赖库解压并包含在生成的 JAR 中；“Copy to the output directory and link via manifest” 会将依赖库复制到输出目录，并通过manifest.mf文件中的类路径进行链接。
   Directory for META - INF/MANIFEST.MF：可以指定manifest.mf文件的目录。如果使用默认设置，IDEA 会自动创建一个manifest.mf文件，其中包含指定的主类等信息。
## 构建 JAR 包
   选择 “Build”->“Build Artifacts”。在弹出的菜单中，选择刚刚配置的 JAR Artifact，然后点击 “Build”。IDEA 会在指定的输出目录下生成 JAR 包。默认的输出目录是项目根目录下的out/artifacts目录。
## 查看生成的 JAR 包
   可以在指定的输出目录中找到生成的 JAR 文件。你可以使用命令行（如java -jar your_jar_file.jar）来测试运行这个 JAR 包，前提是你的 Java 程序是可独立运行的（有main方法等）。
   此外，如果需要对生成的 JAR 包进行签名等其他操作，可以使用额外的工具或插件来完成相关步骤。



