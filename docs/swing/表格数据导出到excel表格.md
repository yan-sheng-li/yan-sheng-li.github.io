---
permalink: /swing/7
---

# 表格数据导出到excel表格

## 依赖

```xml
    <dependency>
        <groupId>org.apache.poi</groupId>
        <artifactId>poi</artifactId>
        <version>5.0.0</version>
    </dependency>
    <dependency>
        <groupId>org.apache.poi</groupId>
        <artifactId>poi-ooxml</artifactId>
        <version>5.0.0</version>
    </dependency>


```

## 示例1
```java
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import javax.swing.*;
import java.io.FileOutputStream;
import java.io.IOException;

public class SwingTableToExcelExporter {
    public static void exportToExcel(JTable table, String filePath) throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Sheet1");

        // 获取表格模型
        TableModel tableModel = table.getModel();

        // 创建表头行
        Row headerRow = sheet.createRow(0);
        for (int col = 0; col < tableModel.getColumnCount(); col++) {
            Cell cell = headerRow.createCell(col);
            cell.setCellValue(tableModel.getColumnName(col));
        }

        // 填充数据行
        for (int row = 0; row < tableModel.getRowCount(); row++) {
            Row dataRow = sheet.createRow(row + 1);
            for (int col = 0; col < tableModel.getColumnCount(); col++) {
                Cell cell = dataRow.createCell(col);
                Object cellValue = tableModel.getValueAt(row, col);
                if (cellValue != null) {
                    cell.setCellValue(cellValue.toString());
                }
            }
        }

        try (FileOutputStream fileOut = new FileOutputStream(filePath)) {
            workbook.write(fileOut);
        }

        workbook.close();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                JTable table = new JTable();

                // 添加表格数据

                String filePath = "C:/path/to/output.xlsx";

                try {
                    exportToExcel(table, filePath);
                    JOptionPane.showMessageDialog(null, "导出成功！");
                } catch (IOException e) {
                    JOptionPane.showMessageDialog(null, "导出失败：" + e.getMessage());
                }
            }
        });
    }
}

```

## 示例2
> 可选择保存位置

```java
package com.carease.util;
 
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
 
import javax.swing.*;
import javax.swing.filechooser.FileNameExtensionFilter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
 
public class ExcelExporter {
    public static void exportToExcel(ResultSet resultSet, String[] headers) {
        try (Workbook workbook = new XSSFWorkbook()) {
            Sheet sheet = workbook.createSheet("产品数据");
 
            // 创建表头行
            Row headerRow = sheet.createRow(0);
            for (int i = 0; i < headers.length; i++) {
                Cell cell = headerRow.createCell(i);
                cell.setCellValue(headers[i]);
            }
            // 获取结果集元数据
            ResultSetMetaData metaData = resultSet.getMetaData();
            int columnCount = metaData.getColumnCount();
 
            // 遍历结果集
            int rowIndex = 1;
            while (resultSet.next()) {
                Row row = sheet.createRow(rowIndex++);
                for (int i = 1; i <= columnCount; i++) {
                    Cell cell = row.createCell(i - 1);
                    Object value = resultSet.getObject(i);
                    if (value != null) {
                        cell.setCellValue(value.toString());
                    }
                }
            }
            // 自动调整列宽
            for (int i = 0; i < headers.length; i++) {
                sheet.autoSizeColumn(i);
            }

            // 保存Excel文件
// 创建文件选择对话框
            JFileChooser fileChooser = new JFileChooser();
            fileChooser.setDialogTitle("选择保存位置");
            fileChooser.setFileFilter(new FileNameExtensionFilter("Excel文件 (*.xlsx)", "xlsx"));
            // 显示文件选择对话框
            int userSelection = fileChooser.showSaveDialog(null);

            if (userSelection == JFileChooser.APPROVE_OPTION) {
                // 用户选择了保存位置
                File selectedFile = fileChooser.getSelectedFile();

                try {
                    // 保存Excel文件到用户选择的位置
                    try (FileOutputStream outputStream = new FileOutputStream(selectedFile.getAbsolutePath()+".xlsx")) {
                        workbook.write(outputStream);
                    }
                    JOptionPane.showMessageDialog(null, "导出成功");
                    System.out.println("导出成功！");
                } catch (IOException ex) {
                    JOptionPane.showMessageDialog(null, "导出失败");
                    throw new RuntimeException(ex);
                }
            } else {
                // 用户取消了保存位置选择
                JOptionPane.showMessageDialog(null, "取消导出");
            }
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,"导出失败：" + e.getMessage());
            System.out.println("导出失败：" + e.getMessage());
        }
    }
}
```