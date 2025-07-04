<template>
    <div class="main">
        <img :src="imgs[0]" alt="產品圖" />
        <h1 ref="el">產品介紹</h1>
        <section v-for="(item, idx) in product" :key="idx">
            <h3>{{ item.title }}</h3>
            <p class="desc" v-html="item.product"></p>
        </section>
    </div>
</template>
<script setup lang="ts">
import { useInView } from '../../composables/useInView'
const { el } = useInView()
const imgs = [
    "/img1.jpg"
]
const product = [
    {
        title: "大大寬頻：家用網路首選",
        product: "大大寬頻提供光纖寬頻，利用有線電視光纖同軸（HFC）網路架構，結合最新 DOCSIS 3.0 與通道匯整（Channel Bonding）技術，提供您頻寬更大、品質穩定的高速光纖寬頻服務！讓您收看有線電視時也能同時高速上網，盡情享受科技帶來的便利與樂趣，滿足全家人的數位新生活。大大寬頻提供的數位服務，讓您能由一條光纖網路連結世界，提供您大大的滿足，共同攜手共創大大美好的未來！"
    }, {
        title: "品牌故事",
        product: "夢想不能停格！大大寬頻以「One for all」作為品牌核心價值，象徵大大寬頻以用心服務做為回饋社會的決心，並透過不斷精進網路品質讓人們追求夢想不再受限，「大大超越原先期待」！今年，大大寬頻再透過全新的logo設計帶給市場全然不同的品牌新形象，並整合擴大電信服務，以提供更全面的優質服務。\n\n<b>我們的願景</b>：期許能讓每個人擁有實踐夢想的能力， 以超越自我的極限，並打造更美好的未來！"
    }
]


</script>
<style scoped>
.main img {
    align-self: stretch;
    margin-top: 40px;
}
.desc{
    white-space: pre-line;
}
</style>