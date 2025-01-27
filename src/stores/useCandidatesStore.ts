import { defineStore } from 'pinia';
import axios from 'axios';
import { GET_CANDIDATES, PARSE_CANDIDATES } from '@/constants';
import { push } from 'notivue';

export interface ICandidate {
  about: string;
  country: string;
  date_registration: string;
  dateofbirth: string;
  education: string | null;
  email: string;
  employement: {
    fulltime: boolean;
    parttime: boolean;
  };
  id: string;
  inavailible_date_end: string;
  inavailible_date_start: string;
  is_visible: boolean;
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
  sex: "male" | "female";
  skills: string[];
  surname: string;
  work_format: {
    business_trip: boolean;
    foreign_project: boolean;
    foreign_relocate: boolean;
    national_relocate: boolean;
    rent_in_team: boolean;
    work_type: "remote" | "office" | "hybrid";
  };
}

export const useCandidatesStore = defineStore('candidates', {
  state: () => ({
    candidates: [] as ICandidate[],
    selectedCandidate: null as ICandidate | null,
    candidateParseJSON: ''
  }),
  actions: {
    async getCandidates(): Promise<void> {
      try {
        const response = await axios.get(GET_CANDIDATES);
        if (response.data && Array.isArray(response.data.items)) {
          this.candidates = response.data.items.filter(
            (item: ICandidate | null) => item !== null
          ) as ICandidate[];
        }
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    },

    selectCandidate(id: string): void {
      this.selectedCandidate = this.candidates.find(c => c.id === id) || null;
    },

    async sendCandidateParseJSON() {
      if (this.candidateParseJSON) {
        try {
          const response = await axios.post(PARSE_CANDIDATES, this.candidateParseJSON, {
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
    }
  }
});
