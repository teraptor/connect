import type { ColumnGroupType, ColumnType } from 'ant-design-vue/es/table'
import type { ICandidate } from '@/model/candidate/candidate'

export const useDefineMainPageTable = () => {
  const cols: (ColumnGroupType<ICandidate> | ColumnType<ICandidate>)[] = [
    {
      key: 'firstName',
      dataIndex: 'firstName',
      title: 'Имя',
    },
    {
      key: 'lastName',
      dataIndex: 'lastName',
      title: 'Фамилия',
    },
    {
      key: 'email',
      dataIndex: 'email',
      title: 'Email',
    },
    {
      key: 'viewsCount',
      dataIndex: 'viewsCount',
      title: 'Количество просмотров',
    },
    {
      key: 'technologiesOwnershipList',
      dataIndex: 'technologiesOwnershipList',
      title: 'Основные технологии',
    },
    {
      key: 'candidateStatus',
      dataIndex: 'candidateStatus',
      title: 'Статус кандидата',
    },
    {
      key: 'englishLevel',
      dataIndex: 'englishLevel',
      title: 'Уровень английского',
    },
  ]

  return {
    cols,
  }
}
