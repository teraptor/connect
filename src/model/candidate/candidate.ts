import type { CandidateStatus } from '@/model/candidate/candidateStatus.enum'

export interface ICandidateExperienceInCompany {
  companyName: string
  position: string
  startDate: string
  endDate: string
}

export interface ICandidate {
  firstName: string
  lastName: string
  email: string
  viewsCount: number
  technologiesOwnershipList: string[]
  experienceInCompanies: ICandidateExperienceInCompany[]
  candidateStatus: CandidateStatus
  englishLevel: string
}
