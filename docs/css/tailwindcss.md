# tailwindcss

## 官网

[https://tailwindcss.com/](https://tailwindcss.com/)

## 区别

传统

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* CSS */
        .btn {
            background-color: #1d4ed8;
            /* 蓝色背景 */
            color: white;
            /* 白色文字 */
            padding: 0.5rem 1rem;
            /* 内边距 */
            border-radius: 0.375rem;
            /* 圆角 */
            font-weight: bold;
            /* 粗体 */
            transition: background-color 0.3s;
            /* 动画过渡 */
        }
        .btn:hover {
            background-color: #2563eb;
            /* 悬停变深蓝 */
        }
    </style>
</head>
<body>
    <button class="btn">点击我</button>
</body>
</html>
```

用tailwindcss

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
    <button class="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition">
        点击我
    </button>
</body>
</html>
```

## 自定义样式

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> -->
    <!-- 通过 CDN 引入 Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* 这里定义全局的样式 */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f8f8;
            color: #333;
        }

        /* 自定义全局按钮样式 */
        .btn {
            @apply bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-700 transition;
        }

        /* 统一设置链接样式 */
        a {
            color: #391dd8;
            /* text-decoration: none; */
        }

        a:hover {
            color: #eb2556;
        }
    </style>

</head>

<body>
    <div
        class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white mt-10 p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img class="size-12 shrink-0" src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Felix1"
            alt="ChitChat Logo" />
        <div>
            <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
            <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
    </div>
    <div class="max-w-2xl mx-auto mt-10">
        <!-- 评论标题 -->
        <h2 class="text-2xl font-semibold mb-6">评论区</h2>

        <!-- 评论输入框 -->
        <div class="mb-6">
            <textarea
                class="w-full h-32 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="留下你的评论..."></textarea>
            <button
                class="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">发布评论</button>
        </div>

        <!-- 评论列表 -->
        <div>
            <!-- 单条评论 -->
            <div class="flex items-start mb-6">
                <img src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Felix1" alt="User Avatar"
                    class="w-12 h-12 rounded-full mr-4">
                <div>
                    <p class="font-semibold">用户名1</p>
                    <p class="text-sm text-gray-600 mb-2">2025年12月16日</p>
                    <p class="text-gray-800">这是一条示例评论，内容可以是关于文章的反馈，问题或者其他讨论。</p>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        <button class="hover:text-blue-600">点赞</button>
                        <span class="mx-2">|</span>
                        <button class="hover:text-blue-600">回复</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>
```

