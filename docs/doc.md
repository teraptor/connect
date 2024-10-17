# Техническое задание

## Цели разработки
Разрабатываемая CRM система предназначена для учета клиентов, кандидатов, сделок и продаж компании с целью обеспечить структурированное хранение данных и дальнейший их анализ для выявления слабых и сильных сторон ведения бизнеса компании, оценки эффективности сотрудников, финансовых потоков от тех или иных клиентов компании.

Система должна поддерживать модульность, что позволяло бы в дальнейшем сторонним разработчикам создавать свои компоненты, расширяющие возможности системы.

## Функциональные требования

### Ключевые сущности системы
#### ● Контрагент
**Контрагент** — это компания или физлицо, которое выступает в качестве заказчика или исполнителя.

#### ● Бенчмарк
**Бенчмарк** — это список кандидатов компании или физлица, которое выступает в качестве исполнителя. В списке иммется ФИО, ставка, грейд, город, навыки, технологии, доступность к выходу: краткое описание "эссе"

#### ● Лид
**Лид** — лицо-представитель контрагента в качестве потенциального заказчика: лицо, проявившее интерес, но еще не заключившее контракт с исполнителем.

#### ● Кандидат
**Кандидат** — лицо-представитель контрагента в качестве потенциального исполнителя: лицо компании, которая заключилв NDA, подписав документы с владельцем CRM.

#### ● Пользователь
**Пользователь** — конкретная учетная запись со своими реквизитами входа в систему. 

#### ● Право/разрешение
**Право или разрешение** — это отдельная запись, которая обозначает возможность выполнения того или иного действия в системе.

#### ● Роль
**Роль** — это именованный набор прав или разрешений, которыми наделяются пользователи, принадлежащие к этой роли.

#### ● Контракт
**Контракт** — это документ, в рамках которого объединяются отдельные сделки на исполнение или заказ работ между исполнителем и заказчиком (контрагентами). В рамках одного контракта может быть совершена одна или более сделок 

#### ● Сделка
**Сделка** — поставка товаров или оказание услуги в рамках конкретного контракта, заключенного между заказчиком и исполнителем (между клиентом и компанией владельца соответстено).

### Какие действия могут совершаться в системе
Пользователи системы могут наделяться определенным набором прав, позволяющим осуществлять следующие действия:

* Аутентификация (вход в личный кабинет)
* Просмотр компаний и сделок
* Редактирование, создание и удаление компаний (внутри одной группы компаний или холдинга)
* Редактирование, создание и удаление клиентов
* Редактирование, создание и удаление сделок
* Редактирование, создание и удаление статусов сделок
* Редактирование, создание и удаление кандидатов
* Редактирование, создание и удаление сотрудников
* Привязывать сотрудников к тем или иным компаниям и сделкам
* Настраивать систему (изменять отдельные настройки)
* Интеграция с telegram ведение переписки

#### ● Аутентификация и регистрация
К данному функциональному блоку относятся все процедуры и модули, отвечающие за регистраци и вход пользователя в личный кабинет системы

#### ● Авторизация
Модули системы, отвечающие за проверку и раздачу прав пользователям

#### ● Редактирование контрагентов
Модули системы, относящиеся к редактированию групп компаний и контрагентов.

#### ● Редактирование пользователей (сотрудники и клиенты)
Модули системы, относящиеся к редактированию учетных записей пользователей, относящихся как к контрагентам-заказчикам, так и к исполнителям

#### ● Редактирование кандидатов
Модули системы, относящиеся к редактированию данных кандидатов относящихся к исполнителям

#### ● Контракты
Модули системы, относящиеся к редактированию контрактов

#### ● Сделки и статусы
Модули системы, относящиеся к редактированию сделок, статусов и механизмам проверки логики статусов и их взаимных переходов.

#### ● Настройки системы
Общие настройки системы

#### ● Уведомления
Модули системы, отвечающие за уведомления пользователей различными способами о событиях, происходящих в системе


### Типы пользователей
Типы пользователей — это набор стартовых ролей в системе, необходимых для начального функционирования. В системе данные роли должны быть неудаляемыми.

#### ● Гость (анонимный пользователь)
Гость не имеет права входа в личный кабинет и пользования всеми возможностями и интерфейсами, отображаемыми в защищенном разделе сайта.

#### ● Системный администратор (пользователь с неограниченными правами)
* Может входить в личный кабинет при помощи своей учетной записи
* Имеет неограниченный набор прав и может пользоваться всеми доступными функциями системы.

#### ● Сотрудник компании владельца
* Может входить в личный кабинет при помощи своей учетной записи
* Может наделяться определенным набором прав для управления (создания/редактирования/удаления) отдельными сущностями системы.

#### ● Сотрудник клиента
* Может входить в личный кабинет при помощи своей учетной записи
* Имеет ограниченный набор прав на просмотр сделок, в которых он непосредственно задействован

### Доступные интерфейсы системы
#### ● Фронт часть — короткая презентационная страница
Общая информационная страница с описанием ключевых возможностей системы, о способе приобретения, установке и разработчиках продукта

#### ● Страница входа
Страница ввода логина и пароля для входа в защищенную часть сайта (личный кабинет)
Элементы страницы:
* Форма ввода логина/пароля

#### ● Страница регистрации
Данная страница позволяет пользователю самостоятельно создать учетную запись с минимальным набором прав и отсутствием привязок к каким-либо компаниям. В последующем администратор системы может добавить права к этой учетной записи и привязать пользователя к той или иной компании.
Элементы страницы:

* поле ввода E-mail
* поля ввода ФИО
* поле ввода телефона
* кнопка регистрации


#### ● Личный кабинет (защищенная часть сайта)
В зависимости от наличия прав у текущего пользователя, набор элементов для редактирования/удаления и просмотра информации внутри каждого интерфейса может меняться.

#### ● Панель управления (Dashboard)
Данный интерфейс подразумевает центральный интерфейс для пользователя в авторизованном состоянии и предполагает наличие визуальных карточек для перехода к прочим внутренним интерфейсам системы


**Элементы и блоки:**
Центральная панель с карточками (виджетами) для отображения ключевой информации и возможностью с помощью них перехода в прочие внутренние интерфейсы системы
Страница с информацией текущего аутентифицированного пользователя.

**Элементы и блоки:**

* Фото профиля
* Имя
* Фамилия
* Отчество
* Компании, к которым привязан пользователь
* Должности (в разных компаниях)
* E-mail
* Телефон
* Пароль (поле только для создания нового пароля)
* Мои сделки (блок или ссылка на раздел со сделками пользователя)
* Мои клиенты
* Кастомные поля, добавленные через интерфейс кастомизации карточки пользователя (см. ниже)


#### ● Пользователи (сотрудники контрагентов)

Данный интерфейс предназначен для просмотра всех учетных записей системы и карточек пользователей, их принадлежности к тем или иным компаниям, а также к тем или иным сделкам.

Данный интерфейс должен предоставлять следующие возможности:

1. Добавление пользователя
2. Редактирование пользователя
3. Карточка пользователя (просмотр)
    1. …

**Элементы и блоки:**

* Таблица со списком пользователей с возможностью кастомизации набора столбцов для отображения
* Фильтр по компаниям
* Фильтр заказчики/исполнители
* Фильтр по ФИО
* Кнопка/окно добавления нового пользователя
* Кнопка удаления пользователя
* Кнопка изменения пользователя
* Постраничная навигация
* Окно просмотра подробной информации одного пользователя (карточка пользователя)

#### ● Карточка пользователя

**Элементы и блоки:**

* Фото профиля
* Имя
* Фамилия
* Отчество
* Компании, к которым привязан пользователь
* Должности (в разных компаниях)
* E-mail
* Телефон
* Сделки пользователя (блок или ссылка на раздел со сделками пользователя)
* Клиенты (только для сотрудников контрагентов-исполнителей)
* Блок или отдельный интерфейс для кастомизации набора полей сущности "Пользователь"


#### ● Контрагенты (исполнители и заказчики)

Данный интерфейс предоставляет следующие возможности:

1. Добавление контрагента
2. Редактирование контрагента
3. Карточка контрагента
    1. Сотрудники
    2. Клиенты (только для исполнителей)

**Элементы и блоки:**

* Таблица со списком всех контрагентов с возможностью кастомизации набора столбцов для отображения
* Фильтр по названию
* Фильтр заказчики/исполнители (мои компании или клиенты)
* Статус сделок (контрагенты, у которых есть сделки в выбранном статусе)
* Кнопка для добавления нового контрагента (всплывающее окно или отдельная страница)
* Кнопка удаления контрагента
* Кнопка редактирования контрагента во всплывающем окне или на новой странице
* Окно просмотра подробной информации о контрагенте
* Постраничная навигация

#### ● Карточка контрагента

**Элементы и блоки:**

* Тип контрагента (компания или частное лицо)
* Исполнитель/заказчик
* Название или ФИО
* E-mail
* Телефон
* Веб-сайт
* Принадлежность к группе компаний/холдингу
* Блок сотрудников компании
* Сделки
* Связанные контрагенты (заказчики для исполнителя и исполнители для заказчика)
* Контракты, в которых участвует контрагент
* Блок или отдельный интерфейс для кастомизации набора полей сущности "Контрагент"
     
#### ● Контракты

Доступные действия:

1. Добавление
2. Редактирование
3. Карточка контракта (просмотр деталей)

**Элементы и блоки:**

* Таблица со списком контрактов с возможностью кастомизации столбцов для отображения
* Фильтр по заказчику/исполнителю
* Фильтр по дате
* Кнопка добавления контракта
* Кнопка удаления контракта
* Кнопка редактирования контракта
* Постраничная навигация
* Окно просмотра карточки отдельного контракта

#### ● Карточка кандидата
**Элементы и блоки:**
* см страницу cv HH.ru

#### ● Карточка контракта

**Элементы и блоки:**

* Дата контракта
* Контрагент заказчик
* Контрагент исполнитель
* Комментарии к контракту (условия оплаты и прочие комментарии)
* Создатель контракта (пользователь)
* Сделки внутри контракта
* Блок или отдельный интерфейс для кастомизации набора полей сущности "Контракт"

#### ● Сделки

1. Добавление
2. Редактирование
3. Карточка сделки (просмотр деталей)

**Элементы и блоки:**

* Таблица со списком сделок с возможностью кастомизации столбцов для отображения
* Фильтр по заказчику/исполнителю
* Фильтр по статусу сделки
* Фильтр по дате
* Кнопка добавления сделки
* Кнопка удаления сделки
* Изменение статуса отдельной сделки
* Кнопка редактирования сделки
* Постраничная навигация
* Окно просмотра карточки отдельной сделки

#### ● Карточка сделки

**Элементы и блоки:**

* Дата формирования сделки
* Предполагаемая дата завершения сделки
* Статус сделки
* Контрагент заказчик
* Контракт сделки
* Контрагент исполнитель
* Комментарии к сделке (условия оплаты и прочие комментарии)
* Создатель сделки (пользователь)
* Ответственное лицо (пользователь)
* Сумма сделки + валюта сделки
* История сделки (даты и лица, осуществлявшие переход сделки от статуса к статусу)
* Блок или отдельный интерфейс для кастомизации набора полей сущности "Сделка"
  
#### ● Настройки

**Элементы и блоки:**

* Таблица со списком всех настроек, доступных для редактирования

#### ● Настройка статусов сделок

**Элементы и блоки:**

* Список доступных статусов сделок
* Кнопка добавления нового статуса сделки

#### ● Настройка кастомизируемых сущностей

**Элементы и блоки:**

* Выбор сущности из фиксированного набора
* Список для добавления и редактирования пользовательских полей сущности
* Элементы управления для добавления/удаления/редактирования поля
* Всплывающее окно с настройками одного поля (при создани или редактировании)

#### ● Настройка прав и ролей

**Элементы и блоки:**

* Список доступных ролей
* Элементы управления для добавления/удаления/редактирования роли
* Всплывающее окно или отдельный интерфейс для редактирования роли и ее прав

#### ● Карточка настройка роли

**Элементы и блоки:**

* Список всех доступных прав в системе с возможностью выставить необходимые для роли права