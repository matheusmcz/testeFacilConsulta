<template>
  <button class="submit-button" :type="type">
    <slot name="default" />
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
    background-color: var(--purple300);
    color: var(--white300);
    font-family: 'Comfortaa', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 34px;
  };

  @media (min-width: 1024px) {
    .submit-button {
      border-radius: 12px;
    };
  };
</style>
