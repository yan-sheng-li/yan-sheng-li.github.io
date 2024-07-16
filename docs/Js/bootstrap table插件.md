---
permalink: /Js/6
---
# bootstrap table插件
> 一个扩展表，用于与一些最广泛使用的CSS框架集成。（支持Bootstrap、语义UI、Bulma、材质设计、Foundation）
## 官网
[https://bootstrap-table.com/](https://bootstrap-table.com/)

![](http://cdn.qiniu.liyansheng.top/img/20240715175926.png)


## 案例1：

```html
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Hello, Bootstrap Table!</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
  <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.22.3/dist/bootstrap-table.min.css">
</head>

<body>
  <div class="container">
    <div class="row">
      <table id="table" data-search="true" data-toggle="table" data-url="res.json" data-pagination="true">
        <thead>
          <tr>
            <th data-field="no">no</th>
            <th data-field="id">id</th>
            <th data-field="name">姓名</th>
            <th data-field="gender">性别</th>
            <th data-field="age">年龄</th>
            <th data-field="phone">电话</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
  <script src="https://unpkg.com/bootstrap-table@1.22.3/dist/bootstrap-table.min.js"></script>

  <script>

  </script>
</body>

</html>
```

## 案例2：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DataTables CRUD Example with Bootstrap</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <!-- DataTables CSS -->
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.css">
</head>

<body>

  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <button class="btn btn-primary mb-2" data-toggle="modal" data-target="#addModal">新增</button>
        <table id="example" class="table table-bordered table-hover" style="width:100%">
          <thead>
            <tr>
              <th>名字</th>
              <th>位置</th>
              <th>Office</th>
              <th>年龄</th>
              <th>开始日期</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- Table rows will be dynamically added here -->
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Add Modal -->
  <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addModalLabel">Add New Data</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="addForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" name="name">
            </div>
            <div class="form-group">
              <label for="position">Position</label>
              <input type="text" class="form-control" id="position" name="position">
            </div>
            <div class="form-group">
              <label for="office">Office</label>
              <input type="text" class="form-control" id="office" name="office">
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input type="number" class="form-control" id="age" name="age">
            </div>
            <div class="form-group">
              <label for="start_date">Start Date</label>
              <input type="text" class="form-control" id="start_date" name="start_date">
            </div>
            <div class="form-group">
              <label for="salary">Salary</label>
              <input type="text" class="form-control" id="salary" name="salary">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="addData()">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Modal -->
  <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">Edit Data</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="editForm">
            <input type="hidden" id="edit_id" name="id">
            <div class="form-group">
              <label for="edit_name">Name</label>
              <input type="text" class="form-control" id="edit_name" name="name">
            </div>
            <div class="form-group">
              <label for="edit_position">Position</label>
              <input type="text" class="form-control" id="edit_position" name="position">
            </div>
            <div class="form-group">
              <label for="edit_office">Office</label>
              <input type="text" class="form-control" id="edit_office" name="office">
            </div>
            <div class="form-group">
              <label for="edit_age">Age</label>
              <input type="number" class="form-control" id="edit_age" name="age">
            </div>
            <div class="form-group">
              <label for="edit_start_date">Start Date</label>
              <input type="text" class="form-control" id="edit_start_date" name="start_date">
            </div>
            <div class="form-group">
              <label for="edit_salary">Salary</label>
              <input type="text" class="form-control" id="edit_salary" name="salary">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="saveChanges()">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script>
    var table;

    $(document).ready(function () {
      table = $('#example').DataTable({
        // searching: false, // Disable default search box
        "language": {
          "search": "搜索:",
          "lengthMenu": "显示 _MENU_ 项结果",
          "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
          "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
          "infoFiltered": "(由 _MAX_ 项结果过滤)",
          "paginate": {
            "first": "首页",
            "previous": "上一页",
            "next": "下一页",
            "last": "末页"
          }
        },
        // "pagingType": "bootstrap",
        columns: [
          { data: "name" },
          { data: "position" },
          { data: "office" },
          { data: "age" },
          { data: "start_date" },
          { data: "salary" },
          {
            data: null,
            render: function (data, type, row) {
              return '<button onclick="editRow(' + row.id + ')" class="btn btn-info btn-sm">编辑</button>' +
                '<button onclick="deleteRow(' + row.id + ')" class="btn btn-danger btn-sm ml-1">删除</button>' +
                '<button class="btn btn-primary btn-sm ml-1 custom-button">自定义</button>';
            }
          }
        ],
        // columnDefs: [
        //   { targets: '_all', orderable: false } // Disable sorting for all columns
        // ]
      });

      // Example data, you can replace it with your data source
      var data = [
        { "id": 1, "name": "Tiger Nixon", "position": "System Architect", "office": "Edinburgh", "age": 61, "start_date": "2011/04/25", "salary": "$320,800" },
        { "id": 2, "name": "Garrett Winters", "position": "Accountant", "office": "Tokyo", "age": 63, "start_date": "2011/07/25", "salary": "$170,750" }
        // Add more data here if needed
      ];

      // Populate the table with data
      table.rows.add(data).draw();
    });

    function editRow(id) {
      var rowData = table.row(function (index, data, node) {
        return data.id === id;
      }).data();
      // Populate edit form with row data
      $('#edit_id').val(rowData.id);
      $('#edit_name').val(rowData.name);
      $('#edit_position').val(rowData.position);
      $('#edit_office').val(rowData.office);
      $('#edit_age').val(rowData.age);
      $('#edit_start_date').val(rowData.start_date);
      $('#edit_salary').val(rowData.salary);
      // Show edit modal
      $('#editModal').modal('show');
    }

    function deleteRow(id) {
      // Remove row from the table
      table.row(function (index, data, node) {
        return data.id === id;
      }).remove().draw();
      // Implement delete functionality here
      console.log("Deleting row with ID:", id);
    }

    function searchTable() {
      var searchText = $('#searchText').val();
      table.search(searchText).draw();
    }

    function addData() {
      var newData = {
        name: $('#name').val(),
        position: $('#position').val(),
        office: $('#office').val(),
        age: $('#age').val(),
        start_date: $('#start_date').val(),
        salary: $('#salary').val()
      };

      // Add new data to the table
      table.row.add(newData).draw();

      // Reset form fields
      $('#addForm')[0].reset();

      // Close the modal
      $('#addModal').modal('hide');
    }

    function saveChanges() {
      var editedData = {
        id: $('#edit_id').val(),
        name: $('#edit_name').val(),
        position: $('#edit_position').val(),
        office: $('#edit_office').val(),
        age: $('#edit_age').val(),
        start_date: $('#edit_start_date').val(),
        salary: $('#edit_salary').val()
      };

      // Update data in the table
      var rowIndex = table.row('#' + editedData.id).index();
      var rowData = table.row(rowIndex).data();
      $.each(editedData, function (key, value) {
        rowData[key] = value;
      });
      table.row(rowIndex).data(rowData).draw();

      // Close the modal
      $('#editModal').modal('hide');
    }

    // Event handler for custom button click
    $('#example').on('click', '.custom-button', function () {
      alert(2)
      // Get the data of the row where the button was clicked
      var rowData = table.row($(this).parents('tr')).data();
      // Do something with the rowData, e.g., display in console
      console.log("Custom button clicked for row data:", rowData);
    });

  </script>

</body>

</html>
```

## 案例3：高可用ajax版

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DataTables CRUD Example with Bootstrap</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <!-- DataTables CSS -->
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.css">
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>

  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <button class="btn btn-primary mb-2" data-toggle="modal" data-target="#addModal">新增</button>
        <table id="example" class="table table-bordered table-hover" style="width:100%">
          <thead>
            <tr>
              <th>类别</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <!-- Table rows will be dynamically added here -->
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Add Modal -->
  <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addModalLabel">新增数据</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="addForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" name="name">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary" onclick="addData()">保存</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Modal -->
  <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">编辑数据</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="editForm">
            <input type="hidden" id="edit_id" name="categoryId">
            <div class="form-group">
              <label for="edit_name">分类</label>
              <input type="text" class="form-control" id="edit_name" name="categoryName">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary" onclick="saveChanges()">保存</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script>
    var table;

    $(document).ready(function () {
      table = $('#example').DataTable({
        ajax: 'http://localhost:8080/novel-category/list',
        // searching: false, // Disable default search box
        language: {
          "search": "搜索:",
          "lengthMenu": "显示 _MENU_ 项结果",
          "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
          "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
          "infoFiltered": "(由 _MAX_ 项结果过滤)",
          "paginate": {
            "first": "首页",
            "previous": "上一页",
            "next": "下一页",
            "last": "末页"
          }
        },
        // "pagingType": "bootstrap",
        columns: [
          {
            data: "categoryName",
            sClass: "text-center",
            // 自定义列样式
            "render": function (data, type, row) {
              if (data === "") {
                return '<span style="background-color: red;">' + data + '</span>';
              } else {
                return data;
              }
            },
          },
          {
            data: null,
            render: function (data, type, row) {
              return '<button onclick="editRow(' + row.categoryId + ')" class="btn btn-info btn-sm">编辑</button>' +
                '<button onclick="deleteRow(' + row.categoryId + ')" class="btn btn-danger btn-sm ml-1">删除</button>'+
                '<button onclick="deleteRow(' + row.categoryId + ')" class="btn btn-danger btn-sm ml-1">锁定</button>'
                ;
            },
            sClass: "text-center"
          }
        ],
      });
    });

    function editRow(id) {
      var rowData = table.row(function (index, data, node) {
        return data.categoryId === id;
      }).data();
      // Populate edit form with row data
      $('#edit_id').val(rowData.categoryId);
      $('#edit_name').val(rowData.categoryName);
      // Show edit modal
      $('#editModal').modal('show');
    }

    function deleteRow(id) {
      // 弹出删除确认框
      Swal.fire({
        title: '确认删除？',
        text: "您确定要删除这条记录吗？",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '是的，删除它！'
      }).then((result) => {
        // 如果用户点击确认按钮，则执行删除操作
        if (result.isConfirmed) {
          // 这里添加执行删除操作的代码
          // ajax
          $.get("http://localhost:8080/novel-category/delete/" + id, function (data) {
            if (data.code === 200) {
              // Remove row from the table
              table.row(function (index, data, node) {
                return data.categoryId === id;
              }).remove().draw();
              // Implement delete functionality here
              tips("success", "删除成功！")
            }
          })
          // 在这个示例中，我们只是简单地弹出一个提示框
        }
      })

    }

    function searchTable() {
      var searchText = $('#searchText').val();
      table.search(searchText).draw();
    }

    function addData() {
      var newData = {
        categoryName: $('#name').val(),
      };
      $.post("http://localhost:8080/novel-category/add", newData, function (data) {
        if (data.code === 200) {
          newData.categoryId = data.data;
          // Add new data to the table
          table.row.add(newData).draw();
          tips("success", "新增成功！")
        }
      })
      // Reset form fields
      $('#addForm')[0].reset();

      // Close the modal
      $('#addModal').modal('hide');
    }

    // 保存修改
    function saveChanges() {
      var editedData = {
        categoryId: $('#edit_id').val(),
        categoryName: $('#edit_name').val(),
      };
      // ajax
      $.post("http://localhost:8080/novel-category/update", editedData, function (data) {
        if (data.code === 200) {
          table.ajax.reload();
          tips("success", "修改成功！")
        }
      })
      // Close the modal
      $('#editModal').modal('hide');
    }

    function tips(icon, msg) {
      Swal.fire({
        position: "top-end",
        icon: icon,
        title: msg,
        showConfirmButton: false,
        timer: 1500
      });
    }

  </script>

</body>

</html>
```



## 案例4：改bs5版

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DataTables CRUD Example with Bootstrap</title>
    <!-- Bootstrap CSS -->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> -->
    <!-- DataTables CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/2.0.2/css/dataTables.bootstrap5.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css">
    <style>
        /* 自定义样式 */
        body {
            background-color: #f8f9fa;
            /* 浅灰色背景 */
        }

        .navbar-brand img {
            max-height: 40px;
            /* 设置 Logo 图片高度 */
        }

        .avatar {
            width: 30px;
            /* 头像大小 */
            height: 30px;
            border-radius: 50%;
            /* 圆形头像 */
            margin-right: 5px;
            /* 头像和用户名间距 */
        }

        .navbar-nav {
            margin: auto;
            /* 网站公告和岗位招聘菜单居中显示 */
        }
    </style>
</head>

<body>

    <!-- 导航栏 -->
    <div th:insert="user/index :: navbar"></div>

    <div class="container mt-5">
        <div class="row">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                打开模态框
              </button>
            <div class="col">
                <button class="btn btn-primary mb-2" data-toggle="modal" data-target="#addModal">新增</button>
                <table id="example" class="table table-bordered table-hover" style="width:100%">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>岗位</th>
                            <th>薪资</th>
                            <th>地点</th>
                            <th>发布日期</th>
                            <th>截止日期</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Table rows will be dynamically added here -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 模态框 -->
    <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <!-- 模态框头部 -->
                <div class="modal-header">
                    <h4 class="modal-title">模态框标题</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- 模态框内容 -->
                <div class="modal-body">
                    模态框内容..
                </div>

                <!-- 模态框底部 -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">关闭</button>
                </div>

            </div>
        </div>
    </div>

    <!-- Add Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalLabel">新增数据</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="addForm">
                        <div class="form-group">
                            <label for="jobName">岗位</label>
                            <input name="jobName" type="text" class="form-control" id="jobName"
                                placeholder="Enter job name">
                        </div>
                        <div class="form-group">
                            <label for="jobDescription">描述</label>
                            <textarea name="jobDescription" class="form-control" id="jobDescription" rows="3"
                                placeholder="Enter job description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="salaryRange">薪资</label>
                            <input name="salaryRange" type="text" class="form-control" id="salaryRange"
                                placeholder="Enter salary range">
                        </div>
                        <div class="form-group">
                            <label for="location">地点</label>
                            <input name="location" type="text" class="form-control" id="location"
                                placeholder="Enter location">
                        </div>
                        <div class="form-group">
                            <label for="deadline">截止日期</label>
                            <input name="deadTime" type="text" class="form-control" id="deadline"
                                placeholder="xxxx-xx-xx">
                        </div>
                        <div class="form-group">
                            <label for="educationRequirement">学历要求</label>
                            <input name="educationRequirement" type="text" class="form-control"
                                id="educationRequirement" placeholder="Enter education requirement">
                        </div>
                        <div class="form-group">
                            <label for="experienceRequirement">经验要求</label>
                            <input name="experienceRequirement" type="text" class="form-control"
                                id="experienceRequirement" placeholder="Enter experience requirement">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" onclick="addData()">保存</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModalLabel">编辑数据</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="editForm">
                        <input type="hidden" id="edit_id" name="categoryId">
                        <div class="form-group">
                            <label for="edit_name">分类</label>
                            <input type="text" class="form-control" id="edit_name" name="categoryName">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" onclick="saveChanges()">保存</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> -->
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.js"></script>
    <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.datatables.net/2.0.2/js/dataTables.js"></script>
    <script src="https://cdn.datatables.net/2.0.2/js/dataTables.bootstrap5.js"></script>

    <script>
        var table;

        $(document).ready(function () {
            table = $('#example').DataTable({
                ajax: {
                    url: 'http://localhost:8080/company/hr/1',
                    dataSrc: 'data'
                },
                // searching: false, // Disable default search box
                language: {
                    "search": "搜索:",
                    "lengthMenu": "显示 _MENU_ 项结果",
                    "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                    "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                    "infoFiltered": "(由 _MAX_ 项结果过滤)",
                    "paginate": {
                        "first": "首页",
                        "previous": "上一页",
                        "next": "下一页",
                        "last": "末页"
                    }
                },
                // "pagingType": "bootstrap",
                columns: [
                    {
                        data: "jobId",
                    },

                    {
                        data: "jobName",
                        sClass: "text-center",
                        // 自定义列样式
                        // "render": function (data, type, row) {
                        //   if (data === "") {
                        //     return '<span style="background-color: red;">' + data + '</span>';
                        //   } else {
                        //     return data;
                        //   }
                        // },
                    }, { data: 'salaryRange' }, { data: 'location' }, { data: 'postDate' }, { data: 'deadline' },

                    {
                        data: null,
                        render: function (data, type, row) {
                            return '<button onclick="editRow(' + row.categoryId + ')" class="btn btn-info btn-sm">编辑</button>' +
                                '<button onclick="deleteRow(' + row.categoryId + ')" class="btn btn-danger btn-sm ml-1">删除</button>'
                                ;
                        },
                        sClass: "text-center"
                    }
                ],
            });
        });

        function editRow(id) {
            var rowData = table.row(function (index, data, node) {
                return data.categoryId === id;
            }).data();
            // Populate edit form with row data
            $('#edit_id').val(rowData.categoryId);
            $('#edit_name').val(rowData.categoryName);
            // Show edit modal
            $('#editModal').modal('show');
        }

        function deleteRow(id) {
            // 弹出删除确认框
            Swal.fire({
                title: '确认删除？',
                text: "您确定要删除这条记录吗？",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '是的，删除它！'
            }).then((result) => {
                // 如果用户点击确认按钮，则执行删除操作
                if (result.isConfirmed) {
                    // 这里添加执行删除操作的代码
                    // ajax
                    $.get("http://localhost:8080/novel-category/delete/" + id, function (data) {
                        if (data.code === 200) {
                            // Remove row from the table
                            table.row(function (index, data, node) {
                                return data.categoryId === id;
                            }).remove().draw();
                            // Implement delete functionality here
                            tips("success", "删除成功！")
                        }
                    })
                    // 在这个示例中，我们只是简单地弹出一个提示框
                }
            })

        }

        function searchTable() {
            var searchText = $('#searchText').val();
            table.search(searchText).draw();
        }

        function addData() {
            var newData = {
                categoryName: $('#name').val(),
            };
            $.post("http://localhost:8080/novel-category/add", newData, function (data) {
                if (data.code === 200) {
                    newData.categoryId = data.data;
                    // Add new data to the table
                    table.row.add(newData).draw();
                    tips("success", "新增成功！")
                }
            })
            // Reset form fields
            $('#addForm')[0].reset();

            // Close the modal
            $('#addModal').modal('hide');
        }

        // 保存修改
        function saveChanges() {
            var editedData = {
                categoryId: $('#edit_id').val(),
                categoryName: $('#edit_name').val(),
            };
            // ajax
            $.post("http://localhost:8080/novel-category/update", editedData, function (data) {
                if (data.code === 200) {
                    table.ajax.reload();
                    tips("success", "修改成功！")
                }
            })
            // Close the modal
            $('#editModal').modal('hide');
        }

        function tips(icon, msg) {
            Swal.fire({
                position: "top-end",
                icon: icon,
                title: msg,
                showConfirmButton: false,
                timer: 1500
            });
        }

    </script>

</body>

</html>
```



## 案例5：精装版

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DataTables CRUD Example with Bootstrap</title>
    <!-- Bootstrap CSS -->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> -->
    <!-- DataTables CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/2.0.2/css/dataTables.bootstrap5.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css">
    <style>
        /* 自定义样式 */
        body {
            background-color: #f8f9fa;
            /* 浅灰色背景 */
        }

        .navbar-brand img {
            max-height: 40px;
            /* 设置 Logo 图片高度 */
        }

        .avatar {
            width: 30px;
            /* 头像大小 */
            height: 30px;
            border-radius: 50%;
            /* 圆形头像 */
            margin-right: 5px;
            /* 头像和用户名间距 */
        }

        .navbar-nav {
            margin: auto;
            /* 网站公告和岗位招聘菜单居中显示 */
        }
    </style>
</head>

<body>

    <!-- 导航栏 -->
    <div th:insert="user/index :: navbar"></div>
    <div class="container mt-5">
        <div class="row">
            <h2>我的公司-岗位管理</h2>
            <hr>
            <div class="card">
                <div class="card-body">
                    <div class="col">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#addModal">新增</button>
                        <table id="example" class="table table-bordered table-hover" style="width:100%">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>岗位</th>
                                    <th>薪资</th>
                                    <th>地点</th>
                                    <th>发布日期</th>
                                    <th>截止日期</th>
                                    <th>描述</th>
                                    <th>学历</th>
                                    <th>经验</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Table rows will be dynamically added here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    </div>

    <!-- 新增 -->
    <div class="modal fade" id="addModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <!-- 模态框头部 -->
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalLabel">新增数据</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- 模态框内容 -->
                <div class="modal-body">
                    <form id="addForm">
                        <div class="form-group">
                            <label for="jobName">岗位</label>
                            <input name="jobName" type="text" class="form-control" id="jobName"
                                placeholder="Enter job name">
                        </div>
                        <div class="form-group">
                            <label for="jobDescription">描述</label>
                            <textarea name="jobDescription" class="form-control" id="jobDescription" rows="3"
                                placeholder="Enter job description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="salaryRange">薪资</label>
                            <input name="salaryRange" type="text" class="form-control" id="salaryRange"
                                placeholder="Enter salary range">
                        </div>
                        <div class="form-group">
                            <label for="location">地点</label>
                            <input name="location" type="text" class="form-control" id="location"
                                placeholder="Enter location">
                        </div>
                        <div class="form-group">
                            <label for="deadline">截止日期</label>
                            <input name="deadTime" type="text" class="form-control" id="deadline"
                                placeholder="xxxx-xx-xx">
                        </div>
                        <div class="form-group">
                            <label for="educationRequirement">学历要求</label>
                            <input name="educationRequirement" type="text" class="form-control"
                                id="educationRequirement" placeholder="Enter education requirement">
                        </div>
                        <div class="form-group">
                            <label for="experienceRequirement">经验要求</label>
                            <input name="experienceRequirement" type="text" class="form-control"
                                id="experienceRequirement" placeholder="Enter experience requirement">
                        </div>
                    </form>
                </div>

                <!-- 模态框底部 -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" onclick="addData()">保存</button>
                </div>

            </div>
        </div>
    </div>


    <!-- Edit Modal -->
    <div class="modal fade" id="editModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <!-- 模态框头部 -->
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalLabel">编辑数据</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- 模态框内容 -->
                <div class="modal-body">
                    <form id="editForm">
                        <div class="form-group">

                            <input name="jobId" type="hidden" class="form-control" id="jobId"
                                placeholder="Enter job name">
                        </div>
                        <div class="form-group">
                            <label for="jobName">岗位</label>
                            <input name="jobName" type="text" class="form-control" id="jobName"
                                placeholder="Enter job name">
                        </div>
                        <div class="form-group">
                            <label for="jobDescription">描述</label>
                            <textarea name="jobDescription" class="form-control" id="jobDescription" rows="3"
                                placeholder="Enter job description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="salaryRange">薪资</label>
                            <input name="salaryRange" type="text" class="form-control" id="salaryRange"
                                placeholder="Enter salary range">
                        </div>
                        <div class="form-group">
                            <label for="location">地点</label>
                            <input name="location" type="text" class="form-control" id="location"
                                placeholder="Enter location">
                        </div>
                        <div class="form-group">
                            <label for="deadline">截止日期</label>
                            <input name="deadTime" type="text" class="form-control" id="deadline"
                                placeholder="xxxx-xx-xx">
                        </div>
                        <div class="form-group">
                            <label for="educationRequirement">学历要求</label>
                            <input name="educationRequirement" type="text" class="form-control"
                                id="educationRequirement" placeholder="Enter education requirement">
                        </div>
                        <div class="form-group">
                            <label for="experienceRequirement">经验要求</label>
                            <input name="experienceRequirement" type="text" class="form-control"
                                id="experienceRequirement" placeholder="Enter experience requirement">
                        </div>
                    </form>
                </div>

                <!-- 模态框底部 -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" onclick="saveChanges()">保存</button>
                </div>

            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> -->
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.js"></script>
    <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.datatables.net/2.0.2/js/dataTables.js"></script>
    <script src="https://cdn.datatables.net/2.0.2/js/dataTables.bootstrap5.js"></script>

    <script>
        var table;

        $(document).ready(function () {
            table = $('#example').DataTable({
                columnDefs: [
                    { width: '100px', targets: [9] } // 设置第1、2、3列的宽度为100px
                ],
                ajax: {
                    url: '/company/hr/1',
                    dataSrc: 'data'
                },
                // searching: false, // Disable default search box
                language: {
                    "search": "搜索:",
                    "lengthMenu": "显示 _MENU_ 项结果",
                    "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                    "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                    "infoFiltered": "(由 _MAX_ 项结果过滤)",
                    "paginate": {
                        "first": "首页",
                        "previous": "上一页",
                        "next": "下一页",
                        "last": "末页"
                    }
                },
                // "pagingType": "bootstrap",
                columns: [
                    {
                        data: "jobId",
                    },

                    {
                        data: "jobName",
                        sClass: "text-center",
                        // 自定义列样式
                        // "render": function (data, type, row) {
                        //   if (data === "") {
                        //     return '<span style="background-color: red;">' + data + '</span>';
                        //   } else {
                        //     return data;
                        //   }
                        // },
                    }, {
                        data: 'salaryRange'
                    }, {
                        data: 'location'
                    }, {
                        data: 'postDate'
                    }, {
                        data: 'deadline'
                    },
                    {
                        data: 'jobDescription'
                    }, {
                        data: 'educationRequirement'
                    }, {
                        data: 'experienceRequirement'
                    },
                    {
                        data: null,
                        render: function (data, type, row) {
                            return '<button onclick="editRow(' + row.jobId + ')" class="btn btn-info btn-sm">编辑</button>' +
                                '<button onclick="deleteRow(' + row.jobId + ')" class="btn btn-danger btn-sm ml-1">删除</button>'
                                ;
                        },
                        sClass: "text-center"
                    }
                ],

            });
        });

        function editRow(id) {
            var rowData = table.row(function (index, data, node) {
                return data.jobId === id;
            }).data();
            // Populate edit form with row data
            // $('#edit_id').val(rowData.categoryId);
            // $('#edit_name').val(rowData.categoryName);
            console.log(rowData);
            // Show edit modal
            // 遍历对象，并将每个字段的值赋给相应的表单字段
            $.each(rowData, function (key, value) {
                $('#editForm input[name="' + key + '"]').val(value);
                $('#editForm textarea[name="' + key + '"]').val(value);
                // 如果表单字段是<input>标签之外的其他类型，也可以使用类似的方式进行赋值
            });
            $('#editForm input[name="deadTime"]').val(rowData.deadline);
            $('#editModal').modal('show');
        }

        function deleteRow(id) {
            // 弹出删除确认框
            Swal.fire({
                title: '确认删除？',
                text: "您确定要删除这条记录吗？",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '是的，删除它！'
            }).then((result) => {
                // 如果用户点击确认按钮，则执行删除操作
                if (result.isConfirmed) {
                    // 这里添加执行删除操作的代码
                    // ajax
                    console.log(id)
                    $.get("/job/del/" + id, function (data) {
                        if (data.code === 200) {
                            // Remove row from the table
                            table.row(function (index, data, node) {
                                return data.jobId === id;
                            }).remove().draw();
                            // Implement delete functionality here
                            tips("success", "删除成功！")
                        }
                    })
                    // 在这个示例中，我们只是简单地弹出一个提示框
                }
            })

        }

        function searchTable() {
            var searchText = $('#searchText').val();
            table.search(searchText).draw();
        }

        function addData() {
            // var newData = {
            //     categoryName: $('#name').val(),
            // };
            var newData = $("#addForm").serialize();
            $.post("/job/release", newData, function (data) {
                if (data.code === 200) {
                    // newData.categoryId = data.data;
                    // Add new data to the table
                    // table.row.add(newData).draw();
                    table.ajax.reload();
                    tips("success", "新增成功！")
                }
            })
            // Reset form fields
            $('#addForm')[0].reset();

            // Close the modal
            $('#addModal').modal('hide');
        }

        // 保存修改
        function saveChanges() {
            var editedData = $('#editForm').serialize();
            // ajax
            $.post("/job/edit", editedData, function (data) {
                if (data.code === 200) {
                    table.ajax.reload();
                    tips("success", "修改成功！")
                }
            })
            // Close the modal
            $('#editModal').modal('hide');
        }

        function tips(icon, msg) {
            Swal.fire({
                position: "top-end",
                icon: icon,
                title: msg,
                showConfirmButton: false,
                timer: 1500
            });
        }

    </script>

</body>

</html>
```
