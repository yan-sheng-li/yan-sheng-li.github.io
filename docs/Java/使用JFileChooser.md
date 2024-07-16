---
permalink: /Java/2
---

# 使用JFileChooser


> 在Java中，通过使用JFileChooser类，可以方便地打开和保存文件。本文将介绍如何使用JFileChooser类来打开、选择和保存文件，以及通过BufferedReader和BufferedWriter来读写文件数据。

## 打开文件选择器并读取文件数据

在Java中，可以使用JFileChooser类来打开文件选择器，并获取用户选择的文件。以下是一个示例代码：

```java

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import javax.swing.JFileChooser;

public class FileReadExample {
    public static void main(String[] args) {
        JFileChooser fileChooser = new JFileChooser(); // 创建文件选择器对象
        
        int result = fileChooser.showOpenDialog(null); // 打开文件选择对话框
        
        if (result == JFileChooser.APPROVE_OPTION) { // 用户选择了一个文件
            File selectedFile = fileChooser.getSelectedFile(); // 获取选择的文件
            
            try (BufferedReader reader = new BufferedReader(new FileReader(selectedFile))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println(line); // 输出文件内容
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

![image-20231212002457640](http://cdn.qiniu.liyansheng.top/typora/image-20231212002457640.png)

## 保存文件并选择保存位置

在Java中，可以使用JFileChooser类来打开文件选择器，并获取用户选择的保存位置。以下是一个示例代码：

```java
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import javax.swing.JFileChooser;

public class FileWriteExample {
    public static void main(String[] args) {
        JFileChooser fileChooser = new JFileChooser(); // 创建文件选择器对象
        
        int result = fileChooser.showSaveDialog(null); // 打开保存文件对话框
        
        if (result == JFileChooser.APPROVE_OPTION) { // 用户选择了保存位置
            File selectedFile = fileChooser.getSelectedFile(); // 获取选择的文件
            
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(selectedFile))) {
                String data = "这是要导出的数据"; // 要导出的数据
                
                writer.write(data); // 将数据写入文件
                
                System.out.println("数据已成功导出到：" + selectedFile.getAbsolutePath());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

![image-20231212002606050](http://cdn.qiniu.liyansheng.top/typora/image-20231212002606050.png)

