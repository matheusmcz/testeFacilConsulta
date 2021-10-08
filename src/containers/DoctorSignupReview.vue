<template>
  <form class="doctorSignupForm" @submit.prevent="handleSubmit">
    <section>
      <Review />
    </section>
    <div class="cardFooter">
      <SubmitButton>CADASTRAR PROFISSIONAL</SubmitButton>
      <FallBackButton>Editar cadastro</FallBackButton>
    </div>
  </form>
</template>

<script>
import Review from '../components/Review.vue';
import SubmitButton from '../components/base/SubmitButton.vue';
import FallBackButton from '../components/base/FallBackButton.vue';

export default {
  name: 'DoctorSignupReview',
  components: {
    Review,
    SubmitButton,
    FallBackButton,
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

  @media (min-width: 1024px) {
    .doctorSignupForm {
      margin: 0;
      padding: 32px 0px 32px 100px;
      box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.12);
      border-radius: 40px;
    }
    .cardFooter {
      display: flex;
      flex-direction: column;
      width: 42%;
      align-items: center;
      justify-content: center;
    }
  }
</style>
