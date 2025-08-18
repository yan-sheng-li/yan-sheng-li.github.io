#  基于 Vue3 + Element Plus 的评论组件

## CommentBox.vue

支持：

- 评论 / 回复
- 二级评论（树形结构）
- 删除（仅本人可删除）
- 分页显示
- 评论总数显示
- 可配置接口，适配不同业务模块

```vue
<template>
  <div class="comment-box" style="padding: 20px 0">
    <!-- 评论输入框 -->
    <div style="margin-bottom: 20px">
      <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px">评论 {{ commentCount }}</div>
      <el-input
        style="margin-bottom: 5px"
        type="textarea"
        v-model="form.content"
        placeholder="请输入评论">
      </el-input>
      <div style="text-align: right">
        <el-button type="primary" @click="addComment(null)">评论</el-button>
      </div>
    </div>

    <!-- 评论列表 -->
    <div>
      <div v-for="item in commentList" :key="item.id">
        <div style="display: flex; align-items: flex-start; grid-gap: 20px; margin-bottom: 10px">
          <img :src="item.userAvatar" alt="" style="width: 50px; height: 50px; border-radius: 50%">
          <div style="flex: 1; width: 0">
            <div style="margin-bottom: 10px; color: #666">{{ item.userName }}</div>
            <div style="margin-bottom: 10px; text-align: justify">{{ item.content }}</div>
            <div style="margin-bottom: 10px; color: #666; font-size: 13px">
              <span>{{ item.time }}</span>
              <span style="margin: 0 20px; cursor: pointer" @click="toggleReply(item)" :class="{ 'active-btn': item.showReply }">回复</span>
              <span style="cursor: pointer" v-if="item.userId === currentUser.id" @click="del(item.id)">删除</span>
            </div>
            <div v-if="item.showReply">
              <el-input type="textarea" v-model="item.replyContent" placeholder="请输入评论"></el-input>
              <div style="margin-top: 5px; text-align: right">
                <el-button type="primary" @click="addComment(item)">保存</el-button>
              </div>
            </div>
          </div>
        </div>

        <!-- 二级评论 -->
        <div style="padding-left: 70px" v-if="item.children?.length">
          <div v-for="subItem in item.children" :key="subItem.id">
            <div style="display: flex; align-items: flex-start; grid-gap: 20px; margin-bottom: 10px">
              <img :src="subItem.userAvatar" alt="" style="width: 50px; height: 50px; border-radius: 50%">
              <div style="flex: 1; width: 0">
                <div style="margin-bottom: 10px; color: #666">
                  {{ subItem.userName }}
                  <span v-if="subItem.parentUserName !== item.userName"> 回复 @{{ subItem.parentUserName }}</span>
                </div>
                <div style="margin-bottom: 10px; text-align: justify">{{ subItem.content }}</div>
                <div style="margin-bottom: 10px; color: #666; font-size: 13px">
                  <span>{{ subItem.time }}</span>
                  <span style="margin: 0 20px; cursor: pointer" @click="toggleReply(subItem)" :class="{ 'active-btn': subItem.showReply }">回复</span>
                  <span style="cursor: pointer" v-if="subItem.userId === currentUser.id" @click="del(subItem.id)">删除</span>
                </div>
                <div v-if="subItem.showReply">
                  <el-input type="textarea" v-model="subItem.replyContent" placeholder="请输入评论"></el-input>
                  <div style="margin-top: 5px; text-align: right">
                    <el-button type="primary" @click="addComment(subItem)">保存</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 二级评论结束 -->
      </div>

      <!-- 分页 -->
      <div style="padding: 20px 0" v-if="total">
        <el-pagination
          size="small"
          @current-change="load"
          background
          layout="prev, pager, next"
          :page-size="pageSize"
          v-model:current-page="pageNum"
          :total="total" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import request from "@/utils/request.js";

const props = defineProps({
  fid: { type: [String, Number], required: true }, // 业务主键 ID
  module: { type: String, required: true }, // 模块名
  currentUser: { type: Object, required: true }, // 当前用户
  api: { // 接口地址，可配置
    type: Object,
    default: () => ({
      list: "/comment/selectTree",
      count: "/comment/selectCount",
      add: "/comment/add",
      delete: "/comment/delete"
    })
  }
});

const emit = defineEmits(["added", "deleted", "loaded"]);

const commentList = ref([]);
const commentCount = ref(0);
const form = reactive({});
const pageNum = ref(1);
const pageSize = ref(10);
const total = ref(0);

// 切换回复输入框
const toggleReply = (comment) => {
  comment.showReply = !comment.showReply;
};

// 删除评论
const del = (id) => {
  ElMessageBox.confirm("删除后数据无法恢复，您确定删除吗？", "删除确认", { type: "warning" })
    .then(() => {
      request.delete(`${props.api.delete}/${id}`).then(res => {
        if (res.code === "200") {
          ElMessage.success("删除成功");
          load();
          emit("deleted", id);
        } else {
          ElMessage.error(res.msg);
        }
      });
    })
    .catch(() => {});
};

// 加载评论
const load = () => {
  request.get(props.api.list, {
    params: {
      pageNum: pageNum.value,
      pageSize: pageSize.value,
      fid: props.fid,
      module: props.module
    }
  }).then(res => {
    commentList.value = res.data?.list || [];
    total.value = res.data?.total || 0;
    emit("loaded", res.data);
  });

  request.get(`${props.api.count}/${props.fid}/${props.module}`).then(res => {
    commentCount.value = res.data || 0;
  });
};

// 添加评论/回复
const addComment = (parentComment) => {
  if (parentComment) {
    form.pid = parentComment.id;
    form.content = parentComment.replyContent;
  }
  if (!form.content) {
    ElMessage.warning("请输入评论");
    return;
  }
  form.fid = props.fid;
  form.module = props.module;
  request.post(props.api.add, form).then(res => {
    if (res.code === "200") {
      form.content = "";
      ElMessage.success("评论成功");
      load();
      emit("added", res.data);
    } else {
      ElMessage.error(res.msg);
    }
  });
};

onMounted(() => {
  load();
});
</script>

<style>
.active-btn {
  color: #1890ff;
}
</style>
```



## 使用方式

在业务页面里直接引入：

```vue
<CommentBox
  :fid="article.id"
  module="article"
  :currentUser="currentUser"
/>
```

如果接口不同，可以传入自定义 API：

```vue
<CommentBox
  :fid="video.id"
  module="video"
  :currentUser="user"
  :api="{
    list: '/videoComment/list',
    count: '/videoComment/count',
    add: '/videoComment/add',
    delete: '/videoComment/delete'
  }"
/>
```

## 后端对应

| 字段名        | 类型            | 描述                                             |
| ------------- | --------------- | ------------------------------------------------ |
| `id`          | BIGINT / INT PK | 评论ID，自增主键                                 |
| `fid`         | BIGINT / INT    | 评论所属对象ID（如文章ID、视频ID）               |
| `module`      | VARCHAR(50)     | 模块名，用于区分不同业务模块，如 article / video |
| `pid`         | BIGINT / NULL   | 父评论ID，一级评论为NULL，二级评论为父评论ID     |
| `user_id`     | BIGINT / INT    | 评论用户ID                                       |
| `user_name`   | VARCHAR(50)     | 评论用户昵称                                     |
| `user_avatar` | VARCHAR(255)    | 用户头像URL                                      |
| `content`     | TEXT            | 评论内容                                         |
| `status`      | TINYINT         | 评论状态：0-正常，1-删除（软删除可选）           |
| `created_at`  | DATETIME        | 评论时间                                         |
| `updated_at`  | DATETIME        | 更新时间，可用于编辑评论                         |
| `like_count`  | INT DEFAULT 0   | 点赞数（可选）                                   |

```sql
CREATE TABLE `comment` (
  `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `fid` BIGINT NOT NULL,
  `module` VARCHAR(50) NOT NULL,
  `pid` BIGINT DEFAULT NULL,
  `user_id` BIGINT NOT NULL,
  `user_name` VARCHAR(50),
  `user_avatar` VARCHAR(255),
  `content` TEXT NOT NULL,
  `status` TINYINT DEFAULT 0,
  `like_count` INT DEFAULT 0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_fid_module` (`fid`, `module`),
  INDEX `idx_pid` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

```

