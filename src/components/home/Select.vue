<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue'
import { useInView } from '../../composables/useInView'
const props = defineProps<{ selectedId: number | null }>()
console.log(`從fee收到的資料${props}`);

const emit = defineEmits<{ (e: 'select', id: number): void }>()
const { el } = useInView()
const plans = [
    {
        id: 1,
        name: '1G/50M',
        price: 1199,
        setup: '$1,000',
        deposit: '$500',
        payCycle: '3個月',
        contract: '12/24個月',
        note: '首期3個月+裝機費'
    },
    {
        id: 2,
        name: '500M/50M',
        price: 999,
        setup: '$1,000',
        deposit: '$500',
        payCycle: '3個月',
        contract: '12/24個月',
        note: '首期3個月+裝機費'
    },
    {
        id: 3,
        name: '300M/50M',
        price: 899,
        setup: '$1,000',
        deposit: '$500',
        payCycle: '3個月',
        contract: '12/24個月',
        note: '首期3個月+裝機費'
    },
    {
        id: 4,
        name: '200M/50M',
        price: 849,
        setup: '$1,000',
        deposit: '$500',
        payCycle: '3個月',
        contract: '12/24個月',
        note: '首期3個月+裝機費'
    },
    {
        id: 5,
        name: '120M/50M',
        price: 799,
        setup: '$1,000',
        deposit: '$500',
        payCycle: '3個月',
        contract: '12/24個月',
        note: '首期3個月+裝機費'
    },
    {
        id: 6,
        name: '50M/5M',
        price: 599,
        setup: '$1,000',
        deposit: '$500',
        payCycle: '3個月',
        contract: '12/24個月',
        note: '首期3個月+裝機費'
    }
]
// 目前被選中的方案
const SelectedId = ref<number | null>(null)
function slelctPlan(id: number) {
    SelectedId.value = SelectedId.value === id ? null : id
}
const selectedPlan = computed(() =>
    plans.find(p => p.id === SelectedId.value) ?? null
)
function submit() {
    if (!selectedPlan.value) {
        alert("請選擇方案")
        console.log(selectedPlan.value);
        return
    }
    console.log(selectedPlan.value);
    alert(`你選擇的方案是:${selectedPlan.value.name}`)
}
function cardClick(id: number) {
    emit('select', id) 
}
function handleClick(id: number) {
    slelctPlan(id)
    cardClick(id)
}
</script>

<template>
    <div class="main">
        <h1 ref="el">立即預約</h1>
        <div class="cardOut">
            <article v-for="plan in plans" :key="plan.id" class="card" :class="{ highlight: plan.id === SelectedId }"
                v-on:click="handleClick(plan.id)">
                <div class="card-header">
                    <h2 class="title">{{ plan.name }}</h2>
                    <p>${{ plan.price }}/月</p>
                </div>
                <ul class="meta">
                    <li><span>裝機費</span>{{ plan.setup }}</li>
                    <li><span>保證金</span>{{ plan.deposit }}</li>
                    <li><span>繳　別</span>{{ plan.payCycle }}</li>
                    <li><span>合　約</span>{{ plan.contract }}</li>
                </ul>
                <div class="note">{{ plan.note }}</div>
            </article>
            <button class="btn" :disabled="!selectedPlan" @click="submit">
                <span v-if="selectedPlan">預約安裝</span>
                <span v-if="!selectedPlan">請先選擇方案</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.cardOut {
    padding: 1rem;
    width: 970px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
    background: #e5e5e5c9;
    margin-top: 10px;
}

.card {
    background: #fff;
    border: 1px solid #d2d2d2;
    border-radius: 6px;
    cursor: pointer;
    transition: transform .15s ease;
}

.card-header {
    padding: 1rem;
    border-bottom: 1px dotted #999;
    text-align: center;
}

.card:hover {
    transform: translateY(-4px);
}

.highlight .card-header {
    background: #f47c00;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.highlight .title {
    color: #fff
}

.highlight p {
    color: #ffffff
}


.title {
    color: #f47c00;
    font-size: 26px;
    font-weight: 700;
}

.meta {
    padding: 1rem 1.25rem;
}

.meta li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 15px;
}

.meta li span {
    background: #000;
    color: #fff;
    font-weight: 700;
    border-radius: 20px;
    padding: .1rem .8rem;
    margin-right: .5rem;
}

.note {
    padding: .75rem 1.25rem 1.25rem;
    font-size: 14px;
    color: #333;
}

.btn {
    color: #f58237;
    background-color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.25rem;
    border: solid 0.125rem #f58237;
    border-radius: 20rem;
    padding: 0.5rem 2rem;
    margin-bottom: 1.5rem;
    justify-self: center;
    grid-column: 1 / -1;
}

.btn:hover {
    background-color: #f58237;
    color: #fff;
}
</style>
