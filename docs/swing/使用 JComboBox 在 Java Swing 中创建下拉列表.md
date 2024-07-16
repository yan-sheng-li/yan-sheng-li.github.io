---
permalink: /swing/2
---
# JComboBox创建下拉列表

> 在 Java Swing 中，JComboBox 是一个常用的组件，可以让用户从下拉列表中选择一个选项。本文将介绍如何在 Swing 中使用 JComboBox，并提供一个简单的示例代码。
## 使用步骤

1. 创建一个 JComboBox 实例：
        你可以使用一个字符串数组或一个向量来初始化它。

2. 添加到容器中：
        通常会将 JComboBox 添加到一个面板或其它容器中，比如 JFrame。

3. 处理事件：
        可以添加一个 ActionListener 来处理用户选择的事件。

## 示例代码

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class JComboBoxExample {
    public static void main(String[] args) {
        // 创建一个 JFrame
        JFrame frame = new JFrame("JComboBox Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 200);
        
        // 创建一个 JPanel
        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);
        
        // 设置 JFrame 可见
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);

        // 创建标签
        JLabel label = new JLabel("Choose an option:");
        label.setBounds(10, 20, 160, 25);
        panel.add(label);

        // 创建 JComboBox
        String[] options = { "Option 1", "Option 2", "Option 3", "Option 4" };
        JComboBox<String> comboBox = new JComboBox<>(options);
        comboBox.setBounds(180, 20, 160, 25);
        panel.add(comboBox);

        // 添加 ActionListener 处理事件
        comboBox.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                JComboBox<String> cb = (JComboBox<String>) e.getSource();
                String selectedOption = (String) cb.getSelectedItem();
                JOptionPane.showMessageDialog(panel, "Selected: " + selectedOption);
            }
        });
    }
}
```
## 代码解释

1. 创建 JFrame：
        JFrame 是 Swing 中主要的顶层容器，用于创建窗口。

2. 创建 JPanel 并设置布局：
        JPanel 是一个通用容器，可以包含其他 Swing 组件。这里设置为 null 布局以手动定位组件。

3. 创建 JComboBox 并添加选项：
        使用字符串数组初始化 JComboBox。

4. 添加事件监听器：
        addActionListener 方法用于处理当用户选择某个选项时的事件。在这个例子中，我们显示一个消息框来显示选择的选项。

通过这个简单的示例，你应该能够创建并使用 JComboBox。根据需要，你可以扩展这个示例来实现更复杂的功能。