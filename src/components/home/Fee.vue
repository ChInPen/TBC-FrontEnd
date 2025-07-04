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
        <tr v-for="(item, idx) in items" :key="idx">
          <td>{{ item.download }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { useInView } from '../../composables/useInView'
const { el } = useInView()
const headers = ['下載 / 上傳速率', '每月費用']
const items = [
  { download: "1G / 50M", price: "$1,199" },
  { download: "500M / 50M", price: "$999" },
  { download: "300M / 50M", price: "$899" },
  { download: "200M / 50M", price: "$849" },
  { download: "120M / 50M", price: "$799" },
  { download: "50M / 5M", price: "$599" }
]

</script>
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
