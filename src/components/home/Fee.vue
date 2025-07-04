<script setup lang="ts">
import { useInView } from '../../composables/useInView'
import { defineProps, defineEmits } from 'vue'
const props = defineProps<{ selectedId: number | null }>()
const emit = defineEmits<{ (e: 'select', id: number): void }>()
const { el } = useInView()
const headers = ['下載 / 上傳速率', '每月費用']
const items = [
  { id: 1, download: "1G / 50M", price: "$1,199" },
  { id: 2, download: "500M / 50M", price: "$999" },
  { id: 3, download: "300M / 50M", price: "$899" },
  { id: 4, download: "200M / 50M", price: "$849" },
  { id: 5, download: "120M / 50M", price: "$799" },
  { id: 6, download: "50M / 5M", price: "$599" }
]
function rowClick(id: number) {
  emit('select', id)
}
</script>

<template>
  <div class="main">
    <h1 ref="el">收費標準</h1>
    <table class="fee">
      <thead>
        <tr>
          <th v-for="(item, idx) in headers" :key="idx">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in items" :key="idx" @click="rowClick(item.id)">
          <td>{{ item.download }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.fee {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.fee thead {
  background: #555;
  color: #fff;
}

.fee th,
.fee td {
  padding: 0.75rem;
  font-size: 20px;
}

.fee tbody tr:nth-child(even) {
  background: #f0f0f0;
}
</style>
