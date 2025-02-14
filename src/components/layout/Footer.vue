<script lang="ts" setup>
import { useFooterStore } from '@/stores/layout/useFooterStore'
import dayjs from 'dayjs'

const { footerNav, contacts, documents } = useFooterStore()
const currentYear: number = dayjs().year()
</script>
<template>
  <div class="footer">
    <div class="footer__items">
      <div class="footer__item-logo">
        <div class="footer__logo">
          <RouterLink to="/">
            <img src="/logo.png" alt="logo" />
          </RouterLink>
        </div>
        <p class="footer__description">
          Сервис быстрого и эффективного<br />
          подбора профессионалов в сфере ИТ
        </p>
      </div>
      <div
        v-for="(section, index) in footerNav"
        :key="index"
        class="footer__item-nav"
      >
        <RouterLink
          class="footer__item-nav-link"
          active-class="footer__active-link"
          v-for="item in section"
          :key="item.title"
          type="link"
          :to="{ name: item.routeName }"
        >
          {{ item.title }}
        </RouterLink>
      </div>
      <div class="footer__item-сontacts">
        <div>{{ contacts.mail }}</div>
        <div>{{ contacts.phone }}</div>
        <div>{{ contacts.address }}</div>
        <div class="footer__item-сontacts-telegram">
          Связаться в:
          <a
            class="icon icon-telegram"
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <RouterLink
          class="footer__item-сontacts-link"
          active-class="footer__active-link"
          v-for="item in documents"
          :key="item.title"
          type="link"
          :to="{ name: item.routeName }"
        >
          {{ item.title }}
        </RouterLink>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-copywriting">
        © {{ currentYear }} - Все права защищены
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 40px 16px 20px;
  background: $footer-background;
  margin-top: auto;
  border-top: 3px solid $border-light-grey;
  display: flex;
  flex-direction: column;
  gap: 36px;

  &__logo {
    max-width: 250px;
  }

  &__description {
    padding-left: 16px;
    font-size: 16px;
    font-weight: 300;
    white-space: normal;
    word-wrap: break-word;
    color: transparent;
    background: $main-gradient-color;
    background-clip: text;
    -webkit-background-clip: text;
  }

  &__items {
    width: 100%;
    display: flex;
    gap: 32px;
    justify-content: flex-start;
  }

  &__item-logo {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 25%;
  }

  &__item-nav {
    width: 15%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-weight: 300;

    &-link:hover {
      color: transparent;
      background: $main-gradient-color;
      background-clip: text;
      -webkit-background-clip: text;
    }
  }

  &__item-сontacts {
    width: 30%;
    border-left: 2px solid $border-light-grey;
    padding: 20px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 16px;

    div:nth-child(2),
    div:nth-child(3) {
      font-weight: 400;
      font-size: 14px;
    }

    &-telegram {
      font-size: 12px;
      font-weight: 300;
      color: $help-color;
      display: flex;
      align-items: center;
      gap: 8px;
      .icon {
        font-size: 18px;
        color: $main-color;
        cursor: pointer;
      }
    }

    &-link {
      font-size: 12px;
      font-weight: 300;
      color: $help-color;

      &:hover {
        color: transparent;
        background: $main-gradient-color;
        background-clip: text;
        -webkit-background-clip: text;
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    font-weight: 500;

    &-copywriting {
      font-weight: 300;
    }
  }

  &__active-link {
    color: $main-color;
    font-weight: 400;
  }
}
</style>
