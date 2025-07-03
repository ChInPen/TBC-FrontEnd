<template>
  <div class="main">
    <h1>收費標準</h1>
    <table class="fee">
      <thead>
        <tr>
          <th>下載 / 上傳速率</th>
          <th>每月費用</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>100M / 50M</td>
          <td>$799</td>
        </tr>
        <tr>
          <td>300M / 50M</td>
          <td>$899</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
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
}
.fee tbody tr:nth-child(even) {
  background: #f0f0f0;
}
</style>
