export enum CandidateStatus {
  NEW = 'new',
  IN_PROGRESS = 'in_progress',
  HIRED = 'hired',
  REJECTED = 'rejected',
}

export const CandidateStatusMapping = {
  [CandidateStatus.NEW]: {
    title: 'Новый',
    color: 'blue',
  },
  [CandidateStatus.IN_PROGRESS]: {
    title: 'В процессе',
    color: 'orange',
  },
  [CandidateStatus.HIRED]: {
    title: 'Приглашен',
    color: 'green',
  },
  [CandidateStatus.REJECTED]: {
    title: 'Отклонен',
    color: 'red',
  },
}
