<template>
  <Table
    :columns="$props.cols"
    :data-source="$props.data"
    :scroll="{ y: 'calc(100vh - 250px)' }"
    :expand-column-width="70"
    bordered
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'candidateStatus'">
        <Tag
          :color="
            CandidateStatusMapping[
              record.candidateStatus as keyof typeof CandidateStatusMapping
            ].color
          "
        >
          {{
            CandidateStatusMapping[
              record.candidateStatus as keyof typeof CandidateStatusMapping
            ].title
          }}
        </Tag>
      </template>
      <template v-if="column.key === 'technologiesOwnershipList'">
        <Tag
          v-for="technology in record.technologiesOwnershipList"
          :key="technology"
        >
          {{ technology }}
        </Tag>
      </template>
    </template>
    <template #expandedRowRender="{ record }">
      <Timeline class="h-full">
        <TimelineItem
          v-for="(experience, index) in record.experienceInCompanies"
          :key="index"
          class=""
        >
          {{
            `${experience.companyName} - ${experience.position} ${experience.startDate} - ${experience.endDate}`
          }}
        </TimelineItem>
      </Timeline>
    </template>
    <template #expandColumnTitle>
      <span>Опыт</span>
    </template>
  </Table>
</template>

<script setup lang="ts">
import Table from '@/components/ui/Table/Table.vue'
import Tag from '@/components/ui/Tag/Tag.vue'
import Timeline from '@/components/ui/Timeline/Timeline.vue'
import TimelineItem from '@/components/ui/Timeline/TimelineItem/TimelineItem.vue'

import { CandidateStatusMapping } from '@/model/candidate/candidateStatus.enum'
import type { ICandidate } from '@/model/candidate/candidate'
import type { ColumnGroupType, ColumnType } from 'ant-design-vue/es/table'

interface IProps {
  cols: (ColumnGroupType<ICandidate> | ColumnType<ICandidate>)[]
  data: ICandidate[]
}

defineProps<IProps>()
</script>

<style scoped></style>
