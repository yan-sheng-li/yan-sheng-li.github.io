---
permalink: /Java/1
---
# JDBC常用方法封装

## 依赖
```xml
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.20</version>
        </dependency>
```

## 数据库连接配置
```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class ConnDB {
	// 获取连接通道
	// Connection 
	public static Connection getConnection() {
		Connection conn = null;
		// 1.加载驱动类
		try {
			// Mysql驱动
			Class.forName("com.mysql.cj.jdbc.Driver");
			// 获取连接通道
			String url ="jdbc:mysql://localhost:3306/bm?useSSL=false&serverTimezone=Asia/Shanghai";
			String user = "root";
			String password = "root";
			conn = DriverManager.getConnection(url,user,password);
		} catch (ClassNotFoundException  e) {
			// 1.类名错误 2.外部jar没有引用
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return conn;
	}
	// 关闭资源
	public  static void closeDB(ResultSet rs,Statement pst,Connection conn) {
		try {
			if(rs!=null) {
				rs.close();
			}
			if(pst!=null) {
				pst.close();
			}
			if(conn!=null) {
				conn.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public static void main(String[] args) {
		System.out.println(ConnDB.getConnection());
	}
}

```

## 方法封装1
```java
import java.sql.*;
public class DataUtil {
   static Connection conn= ConnDB.getConnection();

   public static String getCount(String sql) {
      int count=0;
      try {
         ResultSet set=query(sql, new Object[] {});
         if (set.next()) {
            count=set.getInt(1);
         }
      } catch (SQLException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      }
      return String.valueOf(count);
   }

   public static ResultSet query(String sql, Object[] objects) throws SQLException {
        PreparedStatement pst = conn.prepareStatement(sql,ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
        ResultSet resultSet=null;
//        判断Object是否为空，为空直接执行sql语句
        if (objects == null) {
            resultSet = pst.executeQuery();
        } else {
            for (int i = 0; i < objects.length; i++) {
                pst.setObject(i+1,objects[i]);
            }
            resultSet = pst.executeQuery();
        }
        return resultSet;
    }

    public static int Update(String sql,Object[] objects) throws SQLException {
        Connection conn = ConnDB.getConnection();
        PreparedStatement pst = conn.prepareStatement(sql,ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
//      判断数组是否为空
        try {
            if (objects == null || objects.equals("")) {
                return pst.executeUpdate();
            } else {
                for (int i = 0; i < objects.length; i++) {
                    pst.setObject(i + 1, objects[i]);
                }
                return pst.executeUpdate();
            }
        } finally {

        }

    }

   public static Object[][] getSetArrays(ResultSet set) throws SQLException {
        Object[][] objects;
        set.last();
        int rowcount = set.getRow();
        ResultSetMetaData rsm = set.getMetaData();
        int colcount = rsm.getColumnCount();//获取列数
//      创建二维数组
        objects = new Object[rowcount][colcount+1];
        set.first();
        for (int i = 0; i < rowcount; i++) {
            objects[i][0]=i+1;//给每一行的第一列添加序号
            for (int j = 1; j < colcount+1; j++) {
                objects[i][j] = set.getObject(j);
            }
            set.next();
        }
        return objects;
    }
}
```
## 方法封装2
```java


import java.sql.*;

public class ConnDB {
	// 获取连接通道
	// Connection 
	public static Connection getConnection() {
		Connection conn = null;
		// 1.加载驱动类
		try {
			// Mysql驱动
			Class.forName("com.mysql.cj.jdbc.Driver");
			// 获取连接通道
			String url ="jdbc:mysql://localhost:3306/library_v2_db?useSSL=false&serverTimezone=Asia/Shanghai";
			String user = "root";
			String password = "root";
			conn = DriverManager.getConnection(url,user,password);
		} catch (ClassNotFoundException  e) {
			// 1.类名错误 2.外部jar没有引用
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return conn;
	}
	// 关闭资源
	public  static void closeDB(ResultSet rs,Statement pst,Connection conn) {
		try {
			if(rs!=null) {
				rs.close();
			}
			if(pst!=null) {
				pst.close();
			}
			if(conn!=null) {
				conn.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	// 查询操作
	public static ResultSet executeQuery(String sql, Object... params) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			conn = getConnection();
			pstmt = conn.prepareStatement(sql);
			setParameters(pstmt, params);
			rs = pstmt.executeQuery();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return rs;
	}

	// 增删改操作
	public static int executeUpdate(String sql, Object... params) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		int result = 0;
		try {
			conn = getConnection();
			pstmt = conn.prepareStatement(sql);
			setParameters(pstmt, params);
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			closeDB(null, pstmt, conn);
		}
		return result;
	}

	// 设置参数
	private static void setParameters(PreparedStatement pstmt, Object... params) throws SQLException {
		for (int i = 0; i < params.length; i++) {
			pstmt.setObject(i + 1, params[i]);
		}
	}

}
```
## 方法封装3：BaseDao
```java
package com.lys.meeting.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.lys.meeting.utils.ConnDB;


public abstract class BaseDAO {
   // 共通的增删改方法
      public int update(String sql,Object[] arr) {
         Connection conn = ConnDB.getConnection();
         PreparedStatement pst = null;
         try {
            pst = conn.prepareStatement(sql);
            //对占位符赋值
            for (int i = 0; i < arr.length; i++) {
               pst.setObject(i+1, arr[i]);
            }
            int row = pst.executeUpdate();
            return row;
         } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
         }finally {
            ConnDB.closeDB(null, pst, conn);
         }
         return 0;
      }
      // 共通查询
      public <T>T select(String sql,Object[] arr){
         Connection conn = ConnDB.getConnection();
         PreparedStatement pst = null;
         ResultSet rs = null;
         T t = null;
         try {
            pst= conn.prepareStatement(sql);
            for (int i = 0; i < arr.length; i++) {
               pst.setObject(i+1, arr[i]);
            }
            rs = pst.executeQuery();
            // 对结果集的收集
            if(rs.next()) {
               // 收集对象的属性
               t = this.rowMapper(rs);
            }
         } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
         }finally {
            ConnDB.closeDB(null, pst, conn);
         }
         return t;
      }
      // 查询结果集合
      public <T> List<T> selectAll(String sql,Object[] arr){
         List<T> list = new ArrayList<>();
         Connection conn = ConnDB.getConnection();
         PreparedStatement pst = null;
         ResultSet rs = null;
         
         try {
            pst= conn.prepareStatement(sql);
            for (int i = 0; i < arr.length; i++) {
               pst.setObject(i+1, arr[i]);
            }
            rs = pst.executeQuery();
            T t = null;
            // 对结果集的收集
            while(rs.next()) {
               // 收集对象的属性
               t = this.rowMapper(rs);
               // 添加到集合
               list.add(t);
            }
         } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
         }finally {
            ConnDB.closeDB(null, pst, conn);
         }
         return list;
      }
      // 定义方法  每个查询的结果集获取对应的属性
      public  abstract <T> T rowMapper(ResultSet rs) ;
}
```
