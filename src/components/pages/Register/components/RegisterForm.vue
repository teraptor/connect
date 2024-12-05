<template>
  <Form
    ref="registerForm"
    :model="registerFormState"
    :rules="rules"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    name="register-form"
  >
    {{ registerFormState }}
    <FormItem v-bind="validateInfos?.['phone']" label="Телефон" name="phone">
      <TextInput
        v-model:value="registerFormState.phone"
        placeholder="+79119999999"
      />
    </FormItem>
    <FormItem v-bind="validateInfos?.['inn']" label="ИНН" name="inn">
      <TextInput v-model:value="registerFormState.inn" />
    </FormItem>
    <FormItem v-bind="validateInfos?.['email']" label="Email" name="email">
      <TextInput v-model:value="registerFormState.email" />
    </FormItem>
    <FormItem v-bind="validateInfos?.['tg']" label="Ник в Telegram" name="tg">
      <TextInput v-model:value="registerFormState.tg" />
    </FormItem>
    <FormItem
      v-bind="validateInfos?.['password']"
      label="Пароль"
      name="password"
    >
      <TextInput v-model:value="registerFormState.password" />
    </FormItem>
    <FormItem
      v-bind="validateInfos?.['repeatPassword']"
      label="Повторите пароль"
      name="repeatPassword"
    >
      <TextInput v-model:value="registerFormState.repeatPassword" />
    </FormItem>
    <FormItem :wrapper-col="{ span: 32 }">
      <Button
        :disabled="disableRegisterButton"
        type="primary"
        block
        @click="validate"
      >
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
const {
  registerFormState,
  rules,
  validate,
  disableRegisterButton,
  validateInfos,
} = useRegister(registerFormRef)
</script>

<style scoped></style>
