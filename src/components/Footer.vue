<template>
  <div class="qtim-footer">
    <div class="qtim-footer__upside">
      <div>
        <div>Is there a project?</div>
        <div class="qtim-footer__upside__text">Let’s work together</div>
      </div>
      <div class="qtim-footer__upside__contacts">
        <div class="qtim-footer__upside__contacts__block">
          For all questions
          <div class="qtim-footer__upside__contacts__block__content">
            <div>+7 (920) 278—00—68</div>
            <div>qtim@agency.com</div>
          </div>
        </div>

        <div class="qtim-footer__upside__contacts__block">
          Office in Russia
          <div class="qtim-footer__upside__contacts__block__content">
            139 Ruben Station Lake Drew, NM 52678
          </div>
          <img src="/tg.svg" alt="tg">
        </div>

        <div class="qtim-footer__upside__contacts__block">
          Office in Dubai
          <div class="qtim-footer__upside__contacts__block__content">
            139 Ruben Station Lake Drew, NM 52678
          </div>
          <img src="/tg.svg" alt="tg">
        </div>
      </div>
    </div>

    <div class="qtim-footer__downside">
      <div>
        <div
            v-for="social in linksLeft"
            :key="social.name"
            class="qtim-footer__downside__social"
        >
          {{ social.name }}
        </div>
      </div>

      <img src="/button.svg" alt="button" class="qtim-footer__downside__go"/>

      <div>
        <div v-for="social in linksRight"
           :key="social.name"
           class="qtim-footer__downside__social"
        >
          {{ social.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


const linksLeft = [
  {
    name: 'Telegram',
    link: 't.me'
  },
  {
    name: 'Instagram',
    link: 'instagram.com'
  },
  {
    name: 'Facebook',
    link: 'facebook.com'
  }
]

const linksRight = [
  {
    name: 'Bahance',
    link: 'behance.com'
  },
  {
    name: 'Linkedn',
    link: 'linkedin.com'
  },
  {
    name: 'Privacy Policy',
    link: '/'
  },
]
</script>

<style scoped lang="scss">
.qtim-footer {
  background: #E2BEFF;
  padding: 140px 112px 0;

  .qtim-footer__upside {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;

    .qtim-footer__upside__contacts {
      display: flex;
      flex-direction: column;
      max-width: 160px;

      .qtim-footer__upside__contacts__block {
        margin-top: 36px;

        .qtim-footer__upside__contacts__block__content {
          margin-top: 12px;
          margin-bottom: 8px;
        }
      }
    }

    .qtim-footer__upside__text {
      font-size: 112px;
      line-height: 112px;
      text-decoration: underline;
      margin-top: 56px;
    }
  }

  .qtim-footer__downside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 143px;

    .qtim-footer__downside__social {
      margin: 0 16px;
      display: inline-block;
    }
  }
}
</style>