import { defineStore } from 'pinia'

interface IAdvantagesItem {
  id: number
  icon: string
  text: string
}

interface ITableItem {
  headers: string[]
  rows: (string | { icon: string; text: string })[][]
}

interface IHelpItem {
  icon: string
  text: string
}

interface IHowItWorkItem {
  id: number
  icon: string
  title: string
  description: string
}

interface IHelpSection {
  id: number
  title: string
  items: IHelpItem[]
}

interface State {
  items: IAdvantagesItem[]
  table: ITableItem
  help: IHelpSection[]
  howItWork: IHowItWorkItem[]
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
          'Привлечение специалистов любых ИТ-специальностей',
          { icon: 'icon icon-check-circle', text: 'Да' },
          { icon: 'icon icon-x-circle', text: 'Нет' },
          { icon: 'icon icon-x-circle', text: 'Нет' },
        ],
        [
          'Скорость подбора',
          { icon: 'icon icon-check-circle', text: 'Быстро' },
          {
            icon: 'icon icon-x-circle',
            text: 'Дольше за счёт ограниченности ресурса у ИТ-партнеров и коммуникации',
          },
          { icon: 'icon icon-x-circle', text: 'Долго, самостоятельный поиск' },
        ],
        [
          'Скорость замены',
          { icon: 'icon icon-check-circle', text: 'Быстро' },
          { icon: 'icon icon-x-circle', text: 'Дольше' },
          { icon: 'icon icon-x-circle', text: 'Долго, самостоятельный поиск' },
        ],
        [
          'Оптимальный документооборот',
          { icon: 'icon icon-check-circle', text: '1 договор, 1 акт, 1 счет' },
          {
            icon: 'icon icon-x-circle',
            text: 'N договоров, N актов, N счетов',
          },
          {
            icon: 'icon icon-x-circle',
            text: 'N договоров, N актов, N счетов',
          },
        ],
        [
          'Разнообразие ставок',
          {
            icon: 'icon icon-check-circle',
            text: 'Множество компаний из РФ и СНГ',
          },
          {
            icon: 'icon icon-x-circle',
            text: 'Ставки фиксированные в рамках договора',
          },
          {
            icon: 'icon icon-x-circle',
            text: 'Множество специалистов по всему миру',
          },
        ],
        [
          'Безопасность сделки',
          {
            icon: 'icon icon-check-circle',
            text: 'Поставщики — только проверенные ИТ-партнеры',
          },
          {
            icon: 'icon icon icon-check-circle',
            text: 'Проверенные вами поставщики',
          },
          {
            icon: 'icon icon-x-circle',
            text: 'Нет гарантий выполнения работ и соблюдения NDA',
          },
        ],
      ],
    },
    help: [
      {
        id: 1,
        title: 'CTO, руководитель направления, руководитель проектного офиса',
        items: [
          {
            icon: 'icon icon-check',
            text: 'Одно окно для поиска различных специализаций',
          },
          {
            icon: 'icon icon-check',
            text: 'Актуальные даты доступности и ставки',
          },
          {
            icon: 'icon icon-check',
            text: 'Удобство планирования и контроля бюджета',
          },
          {
            icon: 'icon icon-check',
            text: 'Персональный менеджер для решения всех вопросов',
          },
        ],
      },
      {
        id: 2,
        title: 'Product-owner, руководитель проекта, проектная команда',
        items: [
          {
            icon: 'icon icon-check',
            text: 'Предварительное тестирование кандидатов',
          },
          {
            icon: 'icon icon-check',
            text: 'Гарантированное бронирование специалиста через заявку',
          },
          {
            icon: 'icon icon-check',
            text: 'Возможность краткосрочной аренды для закрытия горящих задач',
          },
          {
            icon: 'icon icon-check',
            text: 'Подбор специалистов узкой направленности',
          },
        ],
      },
      {
        id: 3,
        title: 'Бухгалтер, юрист, отдел закупок',
        items: [
          { icon: 'icon icon-check', text: 'Единый формат отчётов' },
          { icon: 'icon icon-check', text: 'Единый договор с платформой' },
          {
            icon: 'icon icon-check',
            text: 'Юридически проверенные ИТ-партнеры',
          },
        ],
      },
    ],
    howItWork: [
      {
        id: 1,
        icon: 'icon-edit',
        title: 'Заключаете 1 договор',
        description: 'Договор не подразумевает какую‑либо оплату до того, как вы арендовали специалиста. Ставки в каталоге являются конечными.Использование платформы — бесплатно для вас'
      },
      {
        id: 2,
        icon: 'icon-search1',
        title: 'Персональный менеджер SkillStaff вместе с вами подберёт подходящих специалистов и организует собеседования',
        description: 'Оперативная обратная связь по резюме кандидатов — залог быстрого подбора наиболее релевантных ИТ‑специалистов'
      },
      {
        id: 3,
        icon: 'icon-edit-3',
        title: 'Утверждаете ИТ‑специалиста и подписываете дополнительное соглашение на период работ',
        description: 'Оплата за специалиста рассчитывается с первого дня, указанного в дополнительном соглашении'
      },
      {
        id: 4,
        icon: 'icon-group',
        title: 'Подключаете ИТ‑специалиста к команде, ставите задачи, контролируете результат',
        description: 'Персональный менеджер SkillStaff регулярно запрашивает обратную связь по работе специалиста'
      },
      {
        id: 5,
        icon: 'icon-clipboard',
        title: 'Ежемесячно производим взаиморасчёты за работы специалистов и предоставляем полный комплект закрывающих документов',
        description: 'Предварительно согласование отчётов происходит прямо в Личном кабинете платформы'
      },
    ]
  }),
})
