<template>
    <footer>
        总访问量 <span id="busuanzi_value_site_pv">0</span> 次，
        总访客数 <span id="busuanzi_value_site_uv">0</span> 人
        <br>
        <a href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2022000630号-1</a>
    </footer>
</template>

<script>
export default {
    name: 'CustomFooter',
}
</script>

<style scoped>
footer {
    background-color: #f5f5f5;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>