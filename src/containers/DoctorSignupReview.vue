<template>
  <form class="doctorSignupForm" @submit.prevent="handleSubmit">
    <section>
      <About v-if="currentStep.name === 'about'" />
      <Services v-else-if="currentStep.name === 'services'" />
    </section>
    <ProgressBar v-model="currentStep.step" :max="steps.length" />
    <BaseButton :type="buttonType" @click.native="handleClick">PRÓXIMO</BaseButton>
  </form>
</template>

<script>

import About from '../components/About.vue';
import Services from '../components/Services.vue';
import ProgressBar from '../components/base/ProgressBar.vue';
import BaseButton from '../components/base/BaseButton.vue';

export default {
  name: 'DoctorSignupReview',
  components: {
    About,
    Services,
    ProgressBar,
    BaseButton,
  },
  props: {
    currentStep: {
      default: () => ({}),
      type: Object,
    },
    steps: {
      default: () => [],
      type: Array,
    },
  },
  computed: {
    isLastStep() {
      return this.currentStep.step === this.steps.length;
    },
    buttonType() {
      return this.isLastStep ? 'submit' : 'button';
    },
  },
  methods: {
    handleClick() {
      return !this.isLastStep && this.$emit('change-step', this.currentStep.step + 1);
    },
    handleSubmit() {
      return this.$emit('submit-form');
    },
  },
};
</script>

<style lang="scss" scoped>
  .doctorSignupForm {
    margin-top: 50px;
    box-shadow: none;
    padding: 50px 16px 70px 16px;
    border-radius: 40px 40px 0 0;
    background: var(--white300);
    border: none;
  }
</style>
