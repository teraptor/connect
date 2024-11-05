import type { ShallowRef } from 'vue'
import Form from '@/components/ui/Form/Form.vue'
import {
  CandidateStatus,
  CandidateStatusMapping,
} from '@/model/candidate/candidateStatus.enum'
import type { DefaultOptionType } from 'ant-design-vue/es/select'
import type { TCandidatesFilter } from '@/components/pages/Main/types/candidatesFilterFormType'

const candidateFilterFormState = reactive<TCandidatesFilter>({
  firstName: '',
  lastName: '',
  email: '',
  candidateStatus: CandidateStatus.NEW,
  technologiesOwnershipList: undefined,
  experienceInCompanies: undefined,
  englishLevel: '',
})

export const useCandidatesFilterForm = (
  formRef: Readonly<ShallowRef<InstanceType<typeof Form> | null>>,
) => {
  const technologiesOwnershipOptions: DefaultOptionType[] = [
    { label: 'React', value: 'React' },
    { label: 'Vue', value: 'Vue' },
    { label: 'Angular', value: 'Angular' },
    { label: 'HTML', value: 'HTML' },
    { label: 'CSS', value: 'CSS' },
    { label: 'JavaScript', value: 'JavaScript' },
    { label: 'TypeScript', value: 'TypeScript' },
    { label: 'Node.js', value: 'Node.js' },
    { label: 'Express', value: 'Express' },
    { label: 'MongoDB', value: 'MongoDB' },
    { label: 'PostgreSQL', value: 'PostgreSQL' },
  ]

  const candidateStatusOptions: DefaultOptionType[] = [
    {
      label: CandidateStatusMapping[CandidateStatus.NEW].title,
      value: CandidateStatus.NEW,
    },
    {
      label: CandidateStatusMapping[CandidateStatus.HIRED].title,
      value: CandidateStatus.HIRED,
    },
    {
      label: CandidateStatusMapping[CandidateStatus.IN_PROGRESS].title,
      value: CandidateStatus.IN_PROGRESS,
    },
    {
      label: CandidateStatusMapping[CandidateStatus.REJECTED].title,
      value: CandidateStatus.REJECTED,
    },
  ]

  return {
    candidateFilterFormState,
    technologiesOwnershipOptions,
    candidateStatusOptions,
  }
}
