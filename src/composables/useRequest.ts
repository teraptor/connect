import api from '@/api'

export const useRequest = async <T, D>(
  method: string,
  url: string = '',
  dataJson?: D,
  formData?: FormData,
) => {
  let isError = false
  let responce = null

  try {
    const res = await api<T>(url, {
      method,
      json: dataJson ? dataJson : null,
      body: formData ? formData : null,
    }).json()

    responce = res
  } catch (e) {
    isError = true
    console.error(e)
  }

  return { isError, responce }
}
