<script setup lang="ts">
import MyHeader from '@/components/Header.vue';
import Product from '@/components/home/Product.vue';
import Fee from '@/components/home/Fee.vue';
</script>
<template>
    <MyHeader />
    <main>
        <Product />
        <Fee />
    </main>
</template>
<style>
.main h1 {
    align-self: flex-start;
    margin: 0.5rem 0;
}

.main h3 {
    border-bottom: 1px solid #c2c3c4;
    padding-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #e6423e;
    line-height: 125%;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>