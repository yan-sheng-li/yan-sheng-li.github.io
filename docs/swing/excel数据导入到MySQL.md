---
permalink: /swing/11
---
# excel数据导入到MySQL

## 案例

```java
package com.carease.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelToMySQL {

    public static void importExcelToMySQL(String excelFilePath,int seller_id) throws IOException, SQLException {
        try (Connection connection = ConnectionSql.getConnection()) {
            FileInputStream file = new FileInputStream(excelFilePath);
            XSSFWorkbook workbook = new XSSFWorkbook(file);
            XSSFSheet sheet = workbook.getSheetAt(0);

            Iterator<Row> rowIterator = sheet.iterator();
            rowIterator.next(); // Skip header row

            String sql = "insert into tb_car values(0,?,?,?,?,?,"+seller_id+")"; // Adjust column count as needed
            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
                while (rowIterator.hasNext()) {
                    Row row = rowIterator.next();
                    Iterator<Cell> cellIterator = row.cellIterator();

                    int columnIndex = 1;
                    while (cellIterator.hasNext()) {
                        Cell cell = cellIterator.next();
                        switch (cell.getCellType()) {
                            case STRING:
                                preparedStatement.setString(columnIndex, cell.getStringCellValue());
                                break;
                            case NUMERIC:
                                preparedStatement.setDouble(columnIndex, cell.getNumericCellValue());
                                break;
                            // Add more cases as needed for other data types
                        }
                        columnIndex++;
                    }

                    preparedStatement.addBatch();
                }

                preparedStatement.executeBatch();
            }

            workbook.close();
        }
    }
}
```