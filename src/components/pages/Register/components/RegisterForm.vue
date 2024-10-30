<template>
  <Form
    ref="registerForm"
    :model="registerFormState"
    :rules="rules"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    name="register-form"
  >
    <FormItem
      v-bind="validateInfos?.['phone_number']"
      label="Телефон"
      name="phone_number"
    >
      <TextInput
        v-model:value="registerFormState.phone_number"
        placeholder="+79119999999"
      />
    </FormItem>
    <FormItem v-bind="validateInfos?.['inn']" label="ИНН" name="inn">
      <TextInput v-model:value="registerFormState.inn" />
    </FormItem>
    <FormItem v-bind="validateInfos?.['email']" label="Email" name="email">
      <TextInput v-model:value="registerFormState.email" />
    </FormItem>
    <FormItem
      v-bind="validateInfos?.['tgname']"
      label="Ник в Telegram"
      name="tgname"
    >
      <TextInput v-model:value="registerFormState.tgname" />
    </FormItem>
    <FormItem :wrapper-col="{ span: 32 }">
      <Button :disabled="formIsEmpty" type="primary" block @click="validate">
        Зарегистрироваться
      </Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import Form from '@/components/ui/Form/Form.vue'
import FormItem from '@/components/ui/Form/FormItem/FormItem.vue'
import TextInput from '@/components/ui/TextInput/TextInput.vue'
import Button from '@/components/ui/Button/Button.vue'
import { useRegister } from '../composables/useRegister'

const registerFormRef = useTemplateRef('registerForm')
const { registerFormState, rules, validate, formIsEmpty, validateInfos } =
  useRegister(registerFormRef)
</script>

<style scoped></style>
