export const isRequired = (value: string) =>
  value && value.toString() ? false : 'Необходимо заполнить поле'
export const isPhone = (value: string) =>
  /^\+7\d{10}$/.test(value)
    ? false
    : 'Поле должно начинаться с +7 и содержать 11 символов'
export const isTelegram = (value: string) =>
  value.startsWith('@') ? false : 'Поле должно начинаться с @'
export const isPassword = (value: string) => {
  if (value.length < 8) return 'Пароль должен содержать не менее 8 символов'
  if (!/^[A-Za-z0-9]+$/.test(value))
    return 'Пароль может содержать только цифры и латинские буквы'
  return false
}
export const isINN = (value: string) =>
  value.length === 10 ? false : 'Поле должно содержать 10 символов'
export const isEmail = (value: string) =>
  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)
    ? false
    : 'Некорректный email'
