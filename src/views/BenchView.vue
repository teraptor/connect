<template>
  <!-- <div class="adverse">
    <p class="ad_head">Создай бенч своей компании и делись им!</p>
    <p class="ad_offer">Уже более 394 IT‑компаний воспользовались бесплатным бенчем</p>
  </div> -->
  <a-table :columns="columns" :data-source="result">
    <template #bodyCell="{ column }">
      
      <template v-if="column.key === 'operation'">
        <a>action</a>
      </template>
    </template>
    
  </a-table>
</template>

<script>
import axios from 'axios';
import candidatesAPI from "@/api/candidates/candidates"

let candidate = [];
const columns = [
  { title: 'Стек', dataIndex: 'stack', key: '3', width: 100 },  
  { title: 'Грейд', dataIndex: 'greid', key: '1', width: 100 },
  { title: 'ФИО', width: 100, dataIndex: 'name', key: 'name'},
  { title: 'Город', dataIndex: 'city', key: '2', width: 100 },
  { title: 'Основные технологии', dataIndex: 'technology', key: '4', width: 100 },
  { title: 'Рейт', dataIndex: 'reit', key: '5', width: 100, sorter: true },
  { title: 'Доступность', dataIndex: 'apply', key: '6', width: 100 },
  { title: 'Резюме', dataIndex: 'cv', key: '7', width: 100 },
];
const result = [];


export default {
    data: () =>  ({
        result,
        columns
    }),
    created() { // можно использовать mounted
        // подгружаем данные когда предстваление создано
        this.fetchData();
    },
    methods: {
        fetchData() {
            candidatesAPI.getCandidates().then(
                (response) => {
                    for (let i=0; i < response.length; i++) {
                        var item = {
                                key: i,
                                name: response[i].name,
                                greid: response[i].greid,
                                stack: response[i].stack,
                                city: response[i].city,
                                technology: response[i].technology,
                                reit: response[i].salary,
                                apply: response[i].busy,
                                cv : response[i].cv,
                        }
                        this.result.push(item);
                    }
                }
            );
        }
    },
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