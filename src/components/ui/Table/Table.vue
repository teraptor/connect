<template>
  <Table v-bind="$props">
    <template #headerCell="{ column }">
      <slot name="headerCell" :column="column" />
    </template>
    <template #bodyCell="{ column, record }">
      <slot name="bodyCell" :column="column" :record="record" />
    </template>
    <template #expandColumnTitle>
      <slot name="expandColumnTitle" />
    </template>
    <template #expandedRowRender="{ record }">
      <slot name="expandedRowRender" :record="record" />
    </template>
  </Table>
</template>

<script setup lang="ts">
import { Table } from 'ant-design-vue'
import type { ColumnGroupType, ColumnType } from 'ant-design-vue/es/table'

interface IProps {
  columns: (ColumnGroupType<any> | ColumnType<any>)[]
  dataSource: any[]
  scroll?: { x?: number | string; y?: number | string }
  sticky?: boolean
  bordered?: boolean
  loading?: boolean
  expandFixed?: boolean
  expandColumnWidth?: number
}

defineProps<IProps>()
</script>

<style lang="scss" scoped></style>
