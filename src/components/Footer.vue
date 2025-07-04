<template>
    <footer class="footer">
        <ul>
            <li><a href="#">產品資訊</a></li>
            <li><a href="#">優惠訊息</a></li>
            <li><a href="#">節目內容</a></li>
            <li><a href="#">客戶服務</a></li>
        </ul>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
    margin-top: 100px;
    display: flex;
    width: 100%;
    background-color: #212529;
    height: 100px;
    align-items: center;
    justify-content: center;
}

.footer li {
    list-style: none;
}

.footer ul {
    display: flex;
}

.footer a::after {
    content: "｜";
    margin: 0px 0.25rem;
}

.footer a {
    color: #fff;
    text-decoration: none;
}
</style>