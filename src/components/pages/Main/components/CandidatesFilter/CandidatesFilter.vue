<template>
  <div class="filter">
    <Card bordered>
      <Form
        ref="candidatesFilterForm"
        :model="candidateFilterFormState"
        name="candidates-filter-form"
        :rules="{}"
        layout="vertical"
      >
        <FormItem label="Имя" name="firstName">
          <TextInput v-model:value="candidateFilterFormState.firstName" />
        </FormItem>
        <FormItem label="Фамилия" name="lastName">
          <TextInput v-model:value="candidateFilterFormState.lastName" />
        </FormItem>
        <FormItem label="Email" name="email">
          <TextInput v-model:value="candidateFilterFormState.email" />
        </FormItem>
        <FormItem label="Технологии" name="technologiesOwnershipList">
          <Select
            v-model:value="candidateFilterFormState.technologiesOwnershipList"
            :options="technologiesOwnershipOptions"
            :max-tag-count="3"
            mode="multiple"
          />
        </FormItem>
        <FormItem label="Статус кандидата" name="candidateStatus">
          <Select
            v-model:value="candidateFilterFormState.candidateStatus"
            :options="candidateStatusOptions"
          />
        </FormItem>
        <FormItem label="Уровень английского" name="englishLevel">
          <TextInput v-model:value="candidateFilterFormState.englishLevel" />
        </FormItem>
        <FormItem :wrapper-col="{ span: 32 }">
          <Button type="primary" block @click="() => {}"> Поиск </Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Form from '@/components/ui/Form/Form.vue'
import FormItem from '@/components/ui/Form/FormItem/FormItem.vue'
import TextInput from '@/components/ui/TextInput/TextInput.vue'
import Card from '@/components/ui/Card/Card.vue'
import Select from '@/components/ui/Select/Select.vue'
import Button from '@/components/ui/Button/Button.vue'

import { useCandidatesFilterForm } from '@/components/pages/Main/composables/useCandidatesFilterForm'

const candidatesFilterForm = useTemplateRef('candidatesFilterForm')
const {
  candidateFilterFormState,
  technologiesOwnershipOptions,
  candidateStatusOptions,
} = useCandidatesFilterForm(candidatesFilterForm)
</script>

<style scoped></style>
