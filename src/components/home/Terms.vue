<template>
    <div class="main">
        <h1 ref="addTitle">其他收費項目</h1>
        <ol>
            <li v-for="(item, idx) in Additional" :key="idx">
                {{ item.item }}
            </li>
        </ol>
        <h1 ref="noteTitle">注意事項</h1>
        <ol>
            <li v-for="(item, idx) in Reminders" key="idx">{{ item.item }}</li>
        </ol>
    </div>
</template>
<script setup lang="ts">
import { useInView } from '../../composables/useInView'
const { el:addTitle  } = useInView()
const { el:noteTitle  } = useInView()
const Additional = [
    { item: "光纖寬頻新申裝客戶，不分速率，須支付光纖寬頻裝機費1,000元，以及纜線數據機保證金500元．客戶退租時歸還纜線數據機，保證金無息退還給客戶。" },
    { item: "客戶居住地址變動，但仍在TBC營運及網路所及之範圍內，客戶可辦理移機．有線電視及光纖寬頻移機作業須同時進行．客戶須將纜線數據機帶至新址，每次移機費用：有線電視移機費800元+光纖寬頻移機費600元 = 1,400元，優惠只收1,100元。" },
    { item: "客戶使用速率變動，須重新做設定．每次設定費300元。" },
    { item: "光纖寬頻各項設備，客戶如有遺失或損壞，須付賠償金．各項設備賠償金為纜線數據機2,500 元；電源變壓器500元；網路線100元。" },
]
const Reminders = [
    { item: "收費標準及其他收費項目之內容若有變更，以本公司網頁公告為準．" },
    { item: "上述優惠價格須簽定專案合約12或24個月，且不得與其他優惠專案併用，如有未盡事宜悉依合約之條文為準。" },
    { item: "繳費方式：12或24個月約期方案須預付3個月費用，同時採預付限季繳以上方式繳費，不得變更繳款別為雙月繳或月繳，亦不得更改為現付制。" },
    { item: "優惠專案至少連續使用12或24個月，自本件服務皆完成開通之最後開通日起算。用戶不得要求本公司以折抵現金、轉換其他服務或其他方式提供本專案優惠。如用戶提前終止，或因違反服務契約遭本公司提前終止，用戶應於終止日時返還本專案所享有之優惠，12個月計1,200元 / 24個月計2,400元(含原優惠免收之裝機費、設備租金，以及專案優惠差價)。" },
    { item: "本公司保留活動辦法變更之權利。" },
]
</script>

<style scoped>
ol li {
    font-size: 20px;
    margin: 10px;
}
</style>