import { useDefineMainPageTable } from '@/components/pages/Main/composables/useDefineMainPageTable'
import type { ICandidate } from '@/model/candidate/candidate'
import { CandidateStatus } from '@/model/candidate/candidateStatus.enum'

export const useMain = () => {
  const { cols } = useDefineMainPageTable()

  const mockData: ICandidate[] = [
    ...Array.from({ length: 50 }).map((_, i) => ({
      key: i,
      firstName: `long firstName ${i}`,
      lastName: `long lastName ${i}`,
      email: `email${i}@example.com`,
      viewsCount: i * 10,
      technologiesOwnershipList: [
        `React ${i * 2}`,
        `Vue ${i * 2 + 1}`,
        `технология ${i * 2}`,
      ],
      experienceInCompanies: [
        {
          companyName: `Компания ${i * 2}`,
          position: `Должность ${i * 2}`,
          startDate: `01.01.201${i * 2}`,
          endDate: `01.01.201${i * 2 + 1}`,
        },
        {
          companyName: `Компания ${i * 2 + 1}`,
          position: `Должность ${i * 2 + 1}`,
          startDate: `01.01.201${i * 2 + 1}`,
          endDate: `01.01.201${i * 2 + 2}`,
        },
      ],
      candidateStatus:
        i % 3 === 0 ? CandidateStatus.NEW : CandidateStatus.IN_PROGRESS,
      englishLevel: `Intermediate ${i}`,
    })),
  ]

  return { cols, mockData }
}
