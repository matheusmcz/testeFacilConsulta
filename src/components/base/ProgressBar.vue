<template>
  <div class="progressBar">
    <b-progress :max="max" animated>
      <b-progress-bar :value="value">
      </b-progress-bar>
    </b-progress>
    <p class="actual-progress">{{value}} de {{max}}</p>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    value: {
      default: 0,
      type: Number,
    },
    max: {
      default: 2,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
  .progressBar {
    margin-top: 32px;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 8px;
    width: 100%;
    justify-items: center;
    justify-content: center;
    text-align: center;
  };

  .progress {
    width: 100%;
  };

  .actual-progress {
    display: flex;
    font-family: 'Comfortaa', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--purple300);
  };

  .progress-bar {
    background-color: var(--purple300);
  };

  .progress-bar-striped {
    background-image: none;
  };
</style>
