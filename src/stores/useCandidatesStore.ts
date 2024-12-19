import { defineStore } from 'pinia';
import axios from 'axios';
import { GET_CANDIDATES } from '@/constants';

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
    selectedCandidate: null as ICandidate | null
  }),
  actions: {
    async getCandidates(): Promise<void> {
      try {
        const response = await axios.get(GET_CANDIDATES);
        this.candidates = response.data.items;
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    },
    selectCandidate(id: string): void {
      this.selectedCandidate = this.candidates.find(c => c.id === id) || null;
    }
  },
});
