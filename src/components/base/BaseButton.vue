<template>
  <button
    :class="`submit-button ${this.class}`"
    :type="type"
  >
    <slot name="default" />{{title}}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      default: 'button',
      type: String,
    },
    title: {
      default: 'PRÓXIMO',
      type: String,
    },
    class: {
      default: '',
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  .submit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 24px;
    border-radius: 50px;
    border: none;
    font-family: 'Comfortaa', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 34px;
  };

  .nextButton {
    background-color: var(--purple300);
    color: var(--white300);
  };

  .submitForm {
    background-color: var(--yellow300);
    color: var(--black600);
  };

  @media (min-width: 1024px) {
    .submit-button {
      border-radius: 12px;
    };
  };
</style>
