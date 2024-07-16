---
permalink: /swing/4
---
# 实现简单的CRUD

## 参考代码

```java
package com.lys;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MyTable extends JFrame implements ActionListener {
    private JTable table;
    private DefaultTableModel model;
    private JTextField idField, nameField, ageField;
    private JButton addButton, updateButton, deleteButton, searchButton, logoutButton;
    private Object[][] data = new Object[][]{
            {"001", "张三", 20},
            {"002", "李四", 22},
            {"003", "王五", 25},
            {"004", "赵六", 18},
    };
    private Object[] columnNames = {"编号", "姓名", "年龄"};

    public MyTable() {
        setTitle("Java Swing 表格操作");

        // 创建表格
        model = new DefaultTableModel(data, columnNames);
        table = new JTable(model);

        // 创建输入框和按钮
        idField = new JTextField(10);
        nameField = new JTextField(10);
        ageField = new JTextField(10);
        addButton = new JButton("添加");
        updateButton = new JButton("修改");
        deleteButton = new JButton("删除");
        searchButton = new JButton("查询");
        logoutButton = new JButton("退出");

        // 添加事件监听器
        addButton.addActionListener(this);
        updateButton.addActionListener(this);
        deleteButton.addActionListener(this);
        searchButton.addActionListener(this);
        logoutButton.addActionListener(this);

        // 创建面板并添加组件
        JPanel panel1 = new JPanel(new FlowLayout());
        panel1.add(new JLabel("编号"));
        panel1.add(idField);
        panel1.add(new JLabel("姓名"));
        panel1.add(nameField);
        panel1.add(new JLabel("年龄"));
        panel1.add(ageField);

        JPanel panel2 = new JPanel(new FlowLayout());
        panel2.add(addButton);
        panel2.add(updateButton);
        panel2.add(deleteButton);
        panel2.add(searchButton);
        panel2.add(logoutButton);

        // 添加组件到窗口
        Container container = getContentPane();
        container.setLayout(new BorderLayout(5, 5));
        container.add(panel1, BorderLayout.NORTH);
        container.add(new JScrollPane(table), BorderLayout.CENTER);
        container.add(panel2, BorderLayout.SOUTH);

        // 设置窗口属性
        setSize(400, 300);
        setLocationRelativeTo(null);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    // 实现事件监听器接口
    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == addButton) {  // 添加
            String[] row = new String[]{idField.getText(), nameField.getText(), ageField.getText()};
            model.addRow(row);
            clearFields();
        } else if (e.getSource() == updateButton) {  // 修改
            int row = table.getSelectedRow();
            if (row != -1) {
                model.setValueAt(idField.getText(), row, 0);
                model.setValueAt(nameField.getText(), row, 1);
                model.setValueAt(ageField.getText(), row, 2);
                clearFields();
            }
        } else if (e.getSource() == deleteButton) {  // 删除
            int row = table.getSelectedRow();
            if (row != -1) {
                model.removeRow(row);
                clearFields();
            }
        } else if (e.getSource() == searchButton) {  // 查询
            String id = idField.getText();
            String name = nameField.getText();
            String age = ageField.getText();
            for (int i = 0; i < table.getRowCount(); ++i) {
                if (id.equals(table.getValueAt(i, 0)) &&
                        name.equals(table.getValueAt(i, 1)) &&
                        age.equals(table.getValueAt(i, 2))) {
                    table.setRowSelectionInterval(i, i);
                    return;
                }
            }
            JOptionPane.showMessageDialog(this, "未找到符合条件的记录！");
        } else if (e.getSource() == logoutButton) {  // 退出
            dispose();  // 关闭当前窗口
            new LoginWindow();  // 打开登录窗口
        }
    }

    // 清空输入框
    private void clearFields() {
        idField.setText("");
        nameField.setText("");
        ageField.setText("");
    }

    public static void main(String[] args) {
        new LoginWindow();
    }
}

class LoginWindow extends JFrame implements ActionListener {
    private JTextField userField;
    private JPasswordField passwordField;
    private JButton loginButton, cancelButton;
    private String correctUser = "1";
    private String correctPass = "1";

    public LoginWindow() {
        setTitle("用户登录");

        // 创建输入框和按钮
        userField = new JTextField(20);
        passwordField = new JPasswordField(20);
        loginButton = new JButton("登录");
        cancelButton = new JButton("取消");

        // 添加事件监听器
        loginButton.addActionListener(this);
        cancelButton.addActionListener(this);

        // 创建面板并添加组件
        JPanel panel1 = new JPanel(new GridLayout(2, 1, 5, 5));
        panel1.add(new JLabel("用户："));
        panel1.add(new JLabel("密码："));

        JPanel panel2 = new JPanel(new GridLayout(2, 1, 5, 5));
        panel2.add(userField);
        panel2.add(passwordField);

        JPanel panel3 = new JPanel(new FlowLayout());
        panel3.add(loginButton);
        panel3.add(cancelButton);

        // 添加组件到窗口
        Container container = getContentPane();
        container.setLayout(new BorderLayout(5, 5));
        container.add(panel1, BorderLayout.WEST);
        container.add(panel2, BorderLayout.CENTER);
        container.add(panel3, BorderLayout.SOUTH);

        // 设置窗口属性
        setSize(300, 150);
        setLocationRelativeTo(null);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    // 实现事件监听器接口
    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == loginButton) {  // 登录
            String user = userField.getText().trim();
            String pass = new String(passwordField.getPassword()).trim();
            if (user.isEmpty() || pass.isEmpty()) {  // 用户名或密码为空
                JOptionPane.showMessageDialog(this, "用户名或密码不能为空！");
            } else if (user.equals(correctUser) && pass.equals(correctPass)) {  // 用户名和密码正确
                dispose();  // 关闭当前窗口
                new MyTable();  // 打开表格窗口
            } else {  // 用户名或密码错误
                JOptionPane.showMessageDialog(this, "用户名或密码错误！");
            }
        } else if (e.getSource() == cancelButton) {  // 取消
            System.exit(0);  // 退出程序
        }
    }
}



```

## 效果
![](http://cdn.qiniu.liyansheng.top/img/20240714111012.png)