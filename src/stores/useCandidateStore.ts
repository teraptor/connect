import { defineStore } from "pinia";
import axios from "axios";
import { push } from "notivue";
import dayjs from "dayjs";

interface INewCandidate {
  surname: string;
  name: string;
  lastname: string;
  sex: string;
  country: string;
  nationality: string;
  date_of_birth: string;
  phone: string;
  email: string;
  about: string;
  education: Education[];
  language: Language[];
  certification: Certification[];
  cv_item: CVItem[];
  work_format: WorkFormat;
  employement: Employement;
  salary: Salary;
}

interface Education {
  institution: string;
  degree: string;
  date_start: string;
  date_end: string;
}

interface Language {
  name: string;
  level: string;
}

interface Certification {
  title: string;
  issuer: string;
  date_issued: string;
}

interface CVItem {
  position_name: string; 
  employer: string; 
  start_period: string; 
  end_period: string; 
  description: string; 
  cv_technology: CVTechnology[]
}

interface CVTechnology {
  name: string;
}

interface WorkFormat {
  business_trip: boolean;
  foreign_project: boolean;
  foreign_relocate: boolean;
  national_relocate: boolean;
  rent_in_team: boolean;
  work_type: string;
}

interface Employement {
  fulltime: false;
  parttime: false;
}

interface Salary {
  salary_hour: number;
  salary_month: number;
}

export const useCandidateStore = defineStore('candidate', {
  state: () => ({
    form: {
      surname: '',
      name: '',
      lastname: '',
      sex: '',
      date_of_birth: '',
      phone: '',
      email: '',
      country: '',
      nationality: '',
      about: '',
      education: [
        {
          institution: '',
          degree: '',
          date_start: '',
          date_end: ''
        }
      ] as Education[],
      language: [
        {
          name: '',
          level: ''
        }
      ] as Language[],
      certification: [
        {
          title: '',
          issuer: '',
          date_issued: ''
        }
      ] as Certification[],
      cv_item: [
        {
          position_name: '',
          employer: '',
          start_period: '',
          end_period: '',
          description: '',
          cv_technology: [{ name: '' }]
        }
      ] as CVItem[],
      work_format: {
        business_trip: false,
        foreign_project: false,
        foreign_relocate: false,
        national_relocate: false,
        rent_in_team: false,
        work_type: ''
      } as WorkFormat,
      employement: {
        parttime: false,
        fulltime: false
      } as Employement,
      salary: {
        salary_hour: 0,
        salary_month: 0
      } as Salary
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
        this.form.certification.forEach(cert => {
          cert.date_issued = dayjs(cert.date_issued ).toISOString();
        });
        this.form.cv_item.forEach(cv => {
          cv.start_period = dayjs(cv.start_period ).toISOString();
          cv.end_period = dayjs(cv.end_period ).toISOString();
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

    addCertification() {
      this.form.certification.push({
        title: '',
        issuer: '',
        date_issued: ''
      });
    },

    removeCertification(index: number) {
      if (this.form.certification.length > 1) {
        this.form.certification.splice(index, 1);
      }
    },

    addLanguage() {
      this.form.language.push({
        name: '',
        level: ''
      });
    },

    removeLanguage(index: number) {
      if (this.form.language.length > 1) {
        this.form.language.splice(index, 1);
      }
    },

    addCVItem() {
      this.form.cv_item.push({
        position_name: '',
        employer: '',
        start_period: '',
        end_period: '',
        description: '',
        cv_technology: [{ name: '' }]
      });
    },

    removeCVItem(index: number) {
      if (this.form.cv_item.length > 1) {
        this.form.cv_item.splice(index, 1);
      }
    },

    addTechnologyToCV(index: number) {
      this.form.cv_item[index].cv_technology.push({ name: '' });
    },

    removeTechnologyFromCV(cvIndex: number, techIndex: number) {
      if (this.form.cv_item[cvIndex].cv_technology.length > 1) {
        this.form.cv_item[cvIndex].cv_technology.splice(techIndex, 1);
      }
    },

    clearForm() {
      this.form = {
        surname: '',
        name: '',
        lastname: '',
        sex: '',
        country: '',
        nationality: '',
        date_of_birth: '',
        phone: '',
        email: '',
        about: '',
        education: [
          {
            institution: '',
            degree: '',
            date_start: '',
            date_end: ''
          }
        ],
        language: [
          {
            name: '',
            level: ''
          }
        ],
        certification: [
          {
            title: '',
            issuer: '',
            date_issued: ''
          }
        ],
        cv_item: [
          {
            position_name: '',
            employer: '',
            start_period: '',
            end_period: '',
            description: '',
            cv_technology: [{ name: '' }]
          }
        ],
        work_format: {
          business_trip: false,
          foreign_project: false,
          foreign_relocate: false,
          national_relocate: false,
          rent_in_team: false,
          work_type: ''
        },
        employement: {
          fulltime: false,
          parttime: false
        },
        salary: {
          salary_hour: 0,
          salary_month: 0
        }
      };
    }
  },
});

