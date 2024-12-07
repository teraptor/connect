import { defineStore } from 'pinia';
import axios from 'axios';
import { GET_CANDIDATES } from '@/constants';

export interface Candidate {
  avaliable: boolean;
  city: string;
  fio: string;
  greid: string;
  id: number;
  salary: number;
  technologyList: string[];
  vcLink: string;
  photo?: string;
}

export const useCandidatesStore = defineStore('candidates', {
  state: () => ({
    candidates: [] as Candidate[],
    selectedCandidate: null as Candidate | null,
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
    selectCandidate(id: number): void {
      this.selectedCandidate = this.candidates.find((c) => c.id === id) || null;
    },
  },
});
