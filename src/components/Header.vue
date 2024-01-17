<template>
  <div class="qtim-header">
    <img src="/Qtim.svg" alt="qtim-logo" class="qtim-header__img">
    <div class="qtim-header__navigation">
      <div class="qtim-header__navigation__link">
        Works
      </div>
      <div class="qtim-header__navigation__link">
        About
      </div>
      <img src="/language.svg"  alt="qtim-language"  class="qtim-header__navigation__lang"/>

      <button class="qtim-header__navigation__button">
        Let’s work
      </button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.qtim-header {
  min-height: 120px;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;

  .qtim-header__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;

    .qtim-header__navigation__link {
      margin-right: 58px;
    }

    .qtim-header__navigation__lang {
      margin-left: 33px;
      margin-right: 16px;
    }

    .qtim-header__navigation__button {
      background: #101010;
      color: white;
      border: none;
      border-radius: 999px;
      height: 52px;
      width: 142px;
    }
  }
}
</style>