<script setup lang="ts">
import MyHeader from '@/components/Header.vue';
import Product from '@/components/home/Product.vue';
import Fee from '@/components/home/Fee.vue';
import MyFooter from '@/components/Footer.vue';
import Terms from "@/components/home/Terms.vue";
import Select from '../components/home/Select.vue';
import { ref, onMounted } from 'vue';
const titleRef = ref<HTMLElement | null>(null)
onMounted(() => {
    if (!titleRef.value) return
    const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && titleRef.value) {
            titleRef.value.classList.add('in-view')
            io.disconnect()
        }
    })
    io.observe(titleRef.value)
})
</script>

<template>
    <MyHeader />
    <main>
        <Product />
        <Fee />
        <Select />
        <Terms />
    </main>
    <MyFooter />
</template>

<style>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 970px;
    margin: 0 auto;
}

.main h1 {
    align-self: flex-start;
    margin: 0.5rem 0;
}

.main h1.in-view {
    animation: dropIn 1.5s ease-out forwards;
}

@keyframes dropIn {
    from {
        transform: translateY(-120%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
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

.main p {
    font-size: 20px;
}
</style>