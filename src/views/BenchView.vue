<template>
  <!-- <div class="adverse">
    <p class="ad_head">Создай бенч своей компании и делись им!</p>
    <p class="ad_offer">Уже более 394 IT‑компаний воспользовались бесплатным бенчем</p>
  </div> -->
  <a-table :columns="columns" :data-source="result" @change="onChange">
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
import checkValue from '@/helpers/checkValue';
/**
 * variables for table
 */
const filtersByStack = [];
const filtersBySkill = [];
const result = [];
const columns = [
  { 
    title: 'Стек',
    dataIndex: 'stack',
    key: '3', 
    width: 100, 
    filters: filtersByStack,
    filterMode: 'tree', 
    filterSearch: true,
    onFilter: (value, record) => record.stack.startsWith(value),
  },  
  { title: 'Грейд', dataIndex: 'greid', key: '1', width: 100, filters: filtersBySkill, filterMode: 'tree',  filterSearch: true, onFilter: (value, record) => record.greid.startsWith(value),},
  { title: 'ФИО', width: 100, dataIndex: 'name', key: 'name'},
  { title: 'Город', dataIndex: 'city', key: '2', width: 100 },
  { title: 'Основные технологии', dataIndex: 'technology', key: '4', width: 100 },
  { title: 'Рейт', dataIndex: 'reit', key: '5', width: 100, sorter: true },
  { title: 'Доступность', dataIndex: 'apply', key: '6', width: 100 },
  { title: 'Резюме', dataIndex: 'cv', key: '7', width: 100 },
];



export default {
  mounted() {
    this.fetchData();
  },
  data: () =>  ({
    result,
    filtersByStack,
    filtersBySkill,
    columns
  }),
  methods: {
      fetchData() {
        candidatesAPI.getCandidates().then(
          (response) => {
            for (let i=0; i < response.length; i++) {
              var el = {
                key: i,
                name: response[i].name,
                greid: response[i].greid.toLowerCase(),
                stack: response[i].stack.toLowerCase(),
                city: response[i].city,
                technology: response[i].technology,
                reit: response[i].salary,
                apply: response[i].busy,
                cv : response[i].cv,
              };
              console.log(el.value);
              if (!this.filtersByStack.some(item => item.value == el.stack)) {
                this.filtersByStack.push({
                  text: el.stack,
                  value: el.stack,
                });
              }
              if (!this.filtersBySkill.some(item => item.value == el.greid)) {
                this.filtersBySkill.push({
                  text: el.greid,
                  value: el.greid,
               });
              }
              this.result.push(el);
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