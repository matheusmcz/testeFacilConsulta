<template>
  <form class="doctorSignupForm" @submit.prevent="handleSubmit">
    <section>

    </section>
  </form>
</template>

<script>

export default {
  name: 'DoctorSignupReview',
  components: {
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
