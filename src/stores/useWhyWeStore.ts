import { defineStore } from 'pinia'

interface advantagesItem {
  id: number
  icon: string
  text: string
}

interface TableItem {
  headers: string[]
  rows: (string | { icon: string; text: string })[][]
}

interface State {
  items: advantagesItem[]
  table: TableItem
}

export const useWhyWeStore = defineStore('whyWe', {
  state: (): State => ({
    items: [
      {
        id: 1,
        icon: 'icon-group',
        text: 'Огромная база ИТ специалистов любого направления',
      },
      {
        id: 2,
        icon: 'icon-check-circle',
        text: 'Только проверенные кандидаты',
      },
      {
        id: 3,
        icon: 'icon-activity',
        text: 'Средний срок закрытия позиции 2 недели',
      },
      {
        id: 4,
        icon: 'icon-coin-dollar',
        text: 'Прозрачная система ценообразования',
      },
      { id: 5, icon: 'icon-shield', text: 'Гарантированная безопасность' },
      { id: 6, icon: 'icon-clock', text: 'Поддержка 24/7' },
    ],
    table: {
      headers: ['', 'StaffConnect', 'Работа с ИТ-партнерами', 'Фриланс'],
      rows: [
        [
          'Скорость подбора',
          'Быстро',
          'Дольше за счёт ограниченности ресурса у ИТ-партнеров и коммуникации',
          'Долго, самостоятельный поиск',
        ],
        ['Скорость замены', 'Быстро', 'Дольше', 'Долго, самостоятельный поиск'],
        [
          'Оптимальный документооборот',
          '1 договор, 1 акт, 1 счет',
          'N договоров, N актов, N счетов',
          'N договоров, N актов, N счетов',
        ],
        [
          'Разнообразие ставок',
          'Множество компаний из РФ и СНГ',
          'Ставки фиксированные в рамках договора',
          'Множество специалистов по всему миру',
        ],
        [
          'Безопасность сделки',
          'Поставщики — только проверенные ИТ-партнеры',
          'Проверенные вами поставщики',
          'Нет гарантий выполнения работ и соблюдения NDA',
        ],
      ],
    },
  }),
})
