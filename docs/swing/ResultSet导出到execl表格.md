---
permalink: /swing/9
---
# ResultSet导出到execl表格

## 依赖：

```xml
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.33</version>
        </dependency>
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
## 方法封装：
参数：**结果集，表头**
```java
package com.DormCheck.utils;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import javax.swing.*;
import java.io.FileOutputStream;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

public class ExcelExporter {
    public static void exportToExcel(ResultSet resultSet, String[] headers) {
        try (Workbook workbook = new XSSFWorkbook()) {
            Sheet sheet = workbook.createSheet("xxxx");

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
            try (FileOutputStream outputStream = new FileOutputStream("xxxx.xlsx")) {
                workbook.write(outputStream);
            }
            JOptionPane.showMessageDialog(null,"导出成功");
            System.out.println("导出成功！");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,"导出失败：" + e.getMessage());
            System.out.println("导出失败：" + e.getMessage());
        }
    }
}
```