<template>
    <div class="scrolling-notice">
        <marquee behavior="scroll" direction="left" scrollamount="10">
            <!-- 这里放你的通告内容 -->
            <span style="color: red;">提示：本站所有项目均可二改扩展，使其更贴近您的需求；如果没有你要的课题，也可找我定做，欢迎滴滴😀！</span>
        </marquee>
    </div>
</template>

<script>
export default {
  name: 'ScrollingNotice'
}
</script>

<style>
.scrolling-notice {
    background-color: #f5f5f5;
    padding: 10px;
    border: 1px solid #ddd;
    overflow: hidden;
    white-space: nowrap;
}

.scrolling-notice span {
    display: inline-block;
    padding-right: 50px;
}
</style>