import { defineStore } from "pinia";
import axios from "axios";
import { push } from "notivue";
import dayjs from "dayjs";

interface INewCandidate {
  name: string;
  lastname: string;
  date_of_birth: string;
  education: Education[];
}

interface Education {
  institution: string;
  degree: string;
  date_start: string;
  date_end: string;
}

export const useCandidateStore = defineStore('candidate', {
  state: () => ({
    form: {
      name: '',
      lastname: '',
      date_of_birth: '',
      education: [
        {
          institution: '',
          degree: '',
          date_start: '',
          date_end: '',
        }
      ] as Education[]
    } as INewCandidate,
  }),
  actions: {
    async newCandidate() {
      try {
        this.form.date_of_birth = dayjs(this.form.date_of_birth).toISOString();
        this.form.education.forEach(edu => {
          edu.date_start = dayjs(edu.date_start).toISOString();
          edu.date_end = dayjs(edu.date_end).toISOString();
        });

        const response = await axios.post(
          'http://5.188.30.192:8081/v1/candidate',
          this.form,
          {
            headers: {
              Bearer: localStorage.getItem('authToken'),
            },
          }
        );
        push.success('Сотрудник успешно добавлен');
        this.clearForm();
      } catch (error) {
        push.error('Ошибка создания сотрудника');
      }
    },

    addEducation() {
      this.form.education.push({
        institution: '',
        degree: '',
        date_start: '',
        date_end: '',
      });
    },

    removeEducation(index: number) {
      if (this.form.education.length > 1) this.form.education.splice(index, 1);
    },
    clearForm() {
      this.form = {
        name: '',
        lastname: '',
        date_of_birth: '',
        education: [],
      };
    }
  },
});

