<template>
  <div class="adverse">
    <p class="ad_head">Создай бенч своей компании и делись им!</p>
    <p class="ad_offer">Уже более 394 IT‑компаний воспользовались бесплатным бенчем</p>
  </div>
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 500 }">
    <template #bodyCell="{ column }">
      
      <template v-if="column.key === 'operation'">
        <a>action</a>
      </template>
    </template>
    
  </a-table>
</template>

<script lang="ts" setup>
import type { TableColumnsType } from 'ant-design-vue';
const columns: TableColumnsType = [
  { title: 'Стек', dataIndex: 'stack', key: '3', width: 150, fixed: 'left' },  
  { title: 'Грейд', dataIndex: 'greid', key: '1', width: 150, fixed: 'left'  },
  { title: 'ФИО', width: 100, dataIndex: 'name', key: 'name'},
  { title: 'Возраст', width: 100, dataIndex: 'age', key: 'age'},
  
  { title: 'Город', dataIndex: 'city', key: '2', width: 150 },
  
  { title: 'Основные технологии', dataIndex: 'technology', key: '4', width: 150 },
  { title: 'Рейт', dataIndex: 'reit', key: '5', width: 150 },
  { title: 'Доступность', dataIndex: 'apply', key: '6', width: 150 },
  { title: 'Резюме', dataIndex: 'cv', key: '7', width: 150 },
  // {
  //   title: 'Action',
  //   key: 'operation',
  //   fixed: 'right',
  //   width: 100,
  // },
];


let candidate = [
  {
    key: 1,
    name:"Егор Б",
    age: "-",
    greid: "middle",
    stack: "frontend",
    city: "Минск",
    technology: "react",
    reit: "2500",
    apply: "свободен",
    cv : "",
  },
  {
    key: 1,
    name:"Кирилл",
    age: "-",
    greid: "middle",
    stack: "QA",
    city: "-",
    technology: "",
    reit: "2500",
    apply: "свободен",
    cv : "",
  },
  {
    key: 1,
    name:"Nbveh",
    age: "-",
    greid: "middle",
    stack: "QA",
    city: "-",
    technology: "",
    reit: "2500",
    apply: "свободен",
    cv : "",
  },
];


interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [];
for (let i=0; i<candidate.length; i++) {
  data.push(candidate[i]);
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.adverse {
  background-color: #414bc7;
  border-radius: 8px;
  color: #fff;
  padding: 32px;
  margin-bottom: 30px;
  margin-top: 15px;
}
.ad_head {
  font-size: 24px;
}
</style>