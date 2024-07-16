---
permalink: /swing/6
---

# table表格数据导出
## 效果
> 指定导出位置

![](http://cdn.qiniu.liyansheng.top/img/20240714111906.png)

## 代码
```java
public class MeetingTableApp extends JFrame {
    // 省略其他代码...
 
    public MeetingTableApp() {
        // 省略其他代码...
 
        JPanel buttonPanel = new JPanel();
        JButton addButton = new JButton("添加");
        // 省略其他代码...
 
        JButton exportButton = new JButton("导出");
        exportButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                exportTableData();
            }
        });
        buttonPanel.add(exportButton);
 
        add(formPanel, BorderLayout.EAST);
        add(buttonPanel, BorderLayout.SOUTH);
    }
 
    private void exportTableData() {
        JFileChooser fileChooser = new JFileChooser();
        int choice = fileChooser.showSaveDialog(this);
        if (choice == JFileChooser.APPROVE_OPTION) {
            try {
                String filePath = fileChooser.getSelectedFile().getPath();
                BufferedWriter writer = new BufferedWriter(new FileWriter(filePath));
 
                // 写入表头
                for (int i = 0; i < table.getColumnCount(); i++) {
                    writer.write(table.getColumnName(i));
                    writer.write("\t");
                }
                writer.newLine();
 
                // 写入表格数据
                for (int row = 0; row < table.getRowCount(); row++) {
                    for (int col = 0; col < table.getColumnCount(); col++) {
                        Object value = table.getValueAt(row, col);
                        writer.write(value.toString());
                        writer.write("\t");
                    }
                    writer.newLine();
                }
 
                writer.close();
                JOptionPane.showMessageDialog(this, "导出成功！");
            } catch (IOException ex) {
                ex.printStackTrace();
                JOptionPane.showMessageDialog(this, "导出失败！");
            }
        }
    }
 
    // 省略其他代码...
}
```
