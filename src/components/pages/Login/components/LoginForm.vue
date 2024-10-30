<template>
  <Form
    ref="loginForm"
    :model="loginFormState"
    :rules="rules"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    name="login-form"
  >
    <FormItem
      v-bind="validateInfos?.['phone_number']"
      label="Телефон"
      name="phone_number"
    >
      <TextInput
        v-model:value="loginFormState.phone_number"
        placeholder="+79119999999"
      />
    </FormItem>
    <FormItem
      v-bind="validateInfos?.['password']"
      label="Пароль"
      name="password"
    >
      <PasswordInput v-model:value="loginFormState.password" />
    </FormItem>
    <FormItem :wrapper-col="{ span: 32 }">
      <Button :disabled="formIsEmpty" type="primary" block @click="validate">
        Войти
      </Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import Form from '@/components/ui/Form/Form.vue'
import FormItem from '@/components/ui/Form/FormItem/FormItem.vue'
import TextInput from '@/components/ui/TextInput/TextInput.vue'
import Button from '@/components/ui/Button/Button.vue'
import { useLogin } from '@/components/pages/Login/composables/useLogin'
import PasswordInput from '@/components/ui/PasswordInput/PasswordInput.vue'

const loginFormRef = useTemplateRef('loginForm')
const { loginFormState, rules, validate, formIsEmpty, validateInfos } =
  useLogin(loginFormRef)
</script>

<style scoped></style>
