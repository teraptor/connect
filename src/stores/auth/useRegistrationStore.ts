import { defineStore } from "pinia";
import axios from "axios";
import { REGISTRATION } from "@/constants";

interface IRegistration {
  email: string;
  password: string;
  tgAccount: string;
  phone: string;
  companyINN: string;
}

export const useRegistrationStore = defineStore("registration", {
  state: () => ({
    successMessage: "",
    errorMessage: "",
  }),
  actions: {
    async registerUser(formData: IRegistration) {
      this.successMessage = "";
      this.errorMessage = "";

      try {
        const response = await axios.post(
          REGISTRATION,
          formData
        );

        if (response.status === 200) {
          this.successMessage = "Регистрация прошла успешно!";
        }
      } catch (error) {
        const err = error as any;
        this.errorMessage = err.response?.data?.message || "Ошибка регистрации.";
      }
    }
  }
});
