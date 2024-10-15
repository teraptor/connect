<template>
    <div>
    <v-chart :option="chartOptions" style="width: 100%; height: 400px;"></v-chart>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import VChart from 'vue-echarts';

// Регистрация необходимых компонентов ECharts
use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
]);

export default defineComponent({
    name: 'ForecastChart',
    components: {
    VChart,
    },
    setup() {
    const chartOptions = ref({
        title: {
             text: 'Прогноз доходов и расходов',
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['Доходы', 'Расходы', 'Выведено человек', 'Вакансии открыто', 'Вакансии закрыто', 'Вакансии не обработано'],
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
            name: 'Доходы',
            type: 'line',
            data: [5000, 6000, 7000, 8000, 7500, 8500],
            },
            {
            name: 'Расходы',
            type: 'line',
            data: [4000, 4500, 5000, 5500, 6000, 6500],
            },
            {
            name: 'Выведено человек',
            type: 'line',
            data: [100, 120, 150, 170, 160, 180],
            },
            {
            name: 'Вакансии открыто',
            type: 'line',
            data: [30, 40, 35, 50, 45, 55],
            },
            {
            name: 'Вакансии закрыто',
            type: 'line',
            data: [20, 25, 30, 35, 40, 45],
            },
            {
            name: 'Вакансии не обработано',
            type: 'line',
            data: [10, 15, 20, 15, 10, 5],
            },
        ],
    });

    return { chartOptions };
    },
});
</script>

<style scoped>
/* Добавьте стили для вашего компонента, если необходимо */
</style>