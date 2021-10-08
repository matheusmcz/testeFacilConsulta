<template>
  <div class="doctorSignupSuccess" @submit.prevent="handleSubmit">
    <section>
      <Success />
    </section>
  </div>
</template>

<script>
import Success from '../components/Success.vue';

export default {
  name: 'DoctorSignupSuccess',
  components: {
    Success,
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
   .doctorSignupSuccess {
     margin-top: 50px;
     height: 100vh;
    box-shadow: none;
    padding: 50px 16px 70px 16px;
    border-radius: 40px 40px 0 0;
    background: var(--white300);
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   };

   @media (min-width: 1024px) {
     .doctorSignupSuccess {
       height: auto;
       margin: 0;
      padding: 32px 0px 32px 100px;
      box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.12);
      border-radius: 40px;
      align-items: start;
     };
   };
</style>
