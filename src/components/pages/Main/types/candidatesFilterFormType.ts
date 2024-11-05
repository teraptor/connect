import type { ICandidate } from '@/model/candidate/candidate'

export type TCandidatesFilter = Record<
  keyof Omit<ICandidate, 'viewsCount'>,
  string | undefined
>
