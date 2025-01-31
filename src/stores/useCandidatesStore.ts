import { defineStore } from 'pinia';
import axios from 'axios';
import { GET_CANDIDATES, PARSE_CANDIDATE, ADD_CANDIDATE } from '@/constants';
import { push } from 'notivue';
import dayjs from "dayjs";

export interface ICandidate {
  about: string;
  certification: string | null;
  country: string;
  cv_item: ICVItem[];
  date_registration: string;
  dateofbirth: string;
  education: IEducation[];
  email: string;
  employement: {
    fulltime: boolean;
    parttime: boolean;
  };
  id: string;
  inavailible_date_end: string;
  inavailible_date_start: string;
  is_visible: boolean;
  language: string | null;
  lastname: string;
  name: string;
  nationality: string;
  phone: string;
  prof_communities: string[] | null;
  projects: string[] | null;
  salary: {
    salary_hour: number;
    salary_month: number;
  };
  sex: string;
  skills: string[] | null;
  surname: string;
  work_format: {
    business_trip: boolean;
    foreign_project: boolean;
    foreign_relocate: boolean;
    national_relocate: boolean;
    rent_in_team: boolean;
    work_type: string;
  };
  total: number;
  currentPage: number;
  pageLimit: number;
}

export interface INewCandidate {
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
  education: IEducation[];
  language: ILanguage[];
  certification: ICertification[];
  cv_item: ICVItem[];
  work_format: IWorkFormat;
  employement: IEmployement;
  salary: ISalary;
}

export interface IEducation {
  institution: string;
  degree: string;
  date_start: string;
  date_end: string;
}

export interface ILanguage {
  name: string;
  level: string;
}

export interface ICertification {
  title: string;
  issuer: string;
  date_issued: string;
}

export interface ICVItem {
  position_name: string; 
  employer: string; 
  start_period: string; 
  end_period: string; 
  description: string; 
  cv_technology: ICVTechnology[]
}

export interface ICVTechnology {
  name: string;
}

export interface IWorkFormat {
  business_trip: boolean;
  foreign_project: boolean;
  foreign_relocate: boolean;
  national_relocate: boolean;
  rent_in_team: boolean;
  work_type: string;
}

export interface IEmployement {
  fulltime: false;
  parttime: false;
}

export interface ISalary {
  salary_hour: number;
  salary_month: number;
}


export const useCandidatesStore = defineStore('candidates', {
  state: () => ({
    candidates: [] as ICandidate[],
    candidatesTotal: 0,
    selectedCandidate: null as ICandidate | null,
    candidateParseJSON: '',
    addCandidateForm: {
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
      ] as IEducation[],
      language: [] as ILanguage[],
      certification: [] as ICertification[],
      cv_item: [
        {
          position_name: '',
          employer: '',
          start_period: '',
          end_period: '',
          description: '',
          cv_technology: [{ name: '' }]
        }
      ] as ICVItem[],
      work_format: {
        business_trip: false,
        foreign_project: false,
        foreign_relocate: false,
        national_relocate: false,
        rent_in_team: false,
        work_type: ''
      } as IWorkFormat,
      employement: {
        parttime: false,
        fulltime: false
      } as IEmployement,
      salary: {
        salary_hour: 0,
        salary_month: 0
      } as ISalary
    } as INewCandidate
  }),
  actions: {
    async getCandidates(
      pagination?: { page: number, limit: number }, 
      languages?: { id: string, languages: Array<{ id: string, name: string }> },
      specialization?: { id: string, specializations: string[] },
      subcategory?: { id: string, subcategories: string[] }
    ): Promise<void> { 
      try {
        const { page, limit } = pagination || {};
        const { languages: languageFilter } = languages || {};
        const { specializations } = specialization || {};
        const { subcategories } = subcategory || {};
        const response = await axios.post(GET_CANDIDATES, {
          page: page,
          limit: limit,
          sort: {
            param: "date_registration", 
            direction: "desc",
          },
          filters: {
            id: "filter1",
            languages: languageFilter ? {
              id: "languages",
              languages: languageFilter,
              name: "Владение языком"
            } : undefined,
            specialization: specializations && specializations.length > 0
            ? {
                id: "specialization",
                name: "Специализация",
                specializations: specializations,
              }
            : undefined,
            subcategory: subcategories && subcategories.length > 0
            ? {
                id: "subcategory",
                name: "Подкатегория",
                subcategories: subcategories,
              }
            : undefined,
            name: "Основной фильтр"  
          }
        });
    
        if (response.data && Array.isArray(response.data.items)) {
          this.candidates = response.data.items.filter(
            (item: ICandidate | null) => item !== null
          ) as ICandidate[];
          this.candidatesTotal = response.data.total;
        }
        
      } catch (error) {
        push.error('Ошибка загрузки данных');
      }
    },    
    async selectCandidate(id: string): Promise<void> {
      try {
        const response = await axios.get(`http://5.188.30.192:8081/v1/candidate/${id}`, {
          headers: {
            Bearer: localStorage.getItem('authToken'),
            'Content-Type': 'text/plain',
          }
        });
        if (response.data) {
          this.selectedCandidate = response.data;
        } else {
          this.selectedCandidate = null;
        }
      } catch (error) {
        console.error('Ошибка при загрузке кандидата:', error);
        this.selectedCandidate = null;
        push.error('Ошибка загрузки данных о кандидате');
      }
    },

    async sendCandidateParseJSON() {
      if (this.candidateParseJSON) {
        try {
          const response = await axios.post(PARSE_CANDIDATE, this.candidateParseJSON, {
            headers: {
              Bearer: localStorage.getItem('authToken'),
              'Content-Type': 'text/plain',
            },
          });
          push.success('Кандидат успешно добавлен');
        } catch (error: any) {
          push.error(`Ошибка создания кандидата: ${error}`);
        } finally {
          this.candidateParseJSON = '';
        }
      }
    },

    setCandidateParseJSON(content: string) {
      this.candidateParseJSON = content;
    },

    async newCandidate() {
      try {
        this.addCandidateForm.date_of_birth = dayjs(this.addCandidateForm.date_of_birth).toISOString();
        this.addCandidateForm.education.forEach(edu => {
          edu.date_start = dayjs(edu.date_start).toISOString();
          edu.date_end = dayjs(edu.date_end).toISOString();
        });
        this.addCandidateForm.certification.forEach(cert => {
          cert.date_issued = dayjs(cert.date_issued ).toISOString();
        });
        this.addCandidateForm.cv_item.forEach(cv => {
          cv.start_period = dayjs(cv.start_period ).toISOString();
          cv.end_period = dayjs(cv.end_period ).toISOString();
        });

        const response = await axios.post(
          ADD_CANDIDATE,
          this.addCandidateForm,
          {
            headers: {
              Bearer: localStorage.getItem('authToken'),
            },
          }
        );
        push.success('Сотрудник успешно добавлен');
        this.clearAddCandidateForm();
      } catch (error) {
        push.error('Ошибка создания сотрудника');
      }
    },

    addEducation() {
      this.addCandidateForm.education.push({
        institution: '',
        degree: '',
        date_start: '',
        date_end: '',
      });
    },

    removeEducation(index: number) {
      if (this.addCandidateForm.education.length > 1) this.addCandidateForm.education.splice(index, 1);
    },

    addCertification() {
      this.addCandidateForm.certification.push({
        title: '',
        issuer: '',
        date_issued: ''
      });
    },

    removeCertification(index: number) {
      this.addCandidateForm.certification.splice(index, 1);
    },

    addLanguage() {
      this.addCandidateForm.language.push({
        name: '',
        level: ''
      });
    },

    removeLanguage(index: number) {
      this.addCandidateForm.language.splice(index, 1);
    },

    addCVItem() {
      this.addCandidateForm.cv_item.push({
        position_name: '',
        employer: '',
        start_period: '',
        end_period: '',
        description: '',
        cv_technology: [{ name: '' }]
      });
    },

    removeCVItem(index: number) {
      if (this.addCandidateForm.cv_item.length > 1) {
        this.addCandidateForm.cv_item.splice(index, 1);
      }
    },

    addTechnologyToCV(index: number) {
      this.addCandidateForm.cv_item[index].cv_technology.push({ name: '' });
    },

    removeTechnologyFromCV(cvIndex: number, techIndex: number) {
      if (this.addCandidateForm.cv_item[cvIndex].cv_technology.length > 1) {
        this.addCandidateForm.cv_item[cvIndex].cv_technology.splice(techIndex, 1);
      }
    },

    clearAddCandidateForm() {
      this.addCandidateForm = {
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

        ],
        certification: [

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
  }
});
