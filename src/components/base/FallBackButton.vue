<template>
  <button class="submit-button" :type="type">
    <slot name="default" />
  </button>
</template>

<script>
export default {
  name: 'FallBackButton',
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
    border: none;
    background-color: transparent;
    color: var(--purple300);
    font-family: 'Comfortaa', sans-serif;
    font-size: 16px;
    font-weight: 400;
  };
</style>
