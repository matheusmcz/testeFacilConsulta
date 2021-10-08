<template>
  <form class="doctorSignupForm" @submit.prevent="handleSubmit">
    <section>
      <Review />
    </section>
    <div class="cardFooter">
      <SubmitButton @click.native="handleClick">CADASTRAR PROFISSIONAL</SubmitButton>
      <FallBackButton @click.native="handleClick('goBack')">Editar cadastro</FallBackButton>
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
  data() {
    return {
      currentStep: { name: 'about', step: 1 },
      steps: [
        {
          name: 'about',
          step: 1,
        },
        {
          name: 'services',
          step: 2,
        },
      ],
    };
  },
  computed: {
    isLastStep() {
      return this.currentStep.step === this.steps.length;
    },
  },
  methods: {
    handleClick(action) {
      if (action && action === 'goBack') {
        this.$router.push({ name: 'DoctorSignupForm' });
      } else {
        console.log(action);
        this.$router.push({ name: 'DoctorSignupSuccess' });
      }
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
  };

  @media (min-width: 1024px) {
    .doctorSignupForm {
      margin: 0;
      padding: 32px 0px 32px 100px;
      box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.12);
      border-radius: 40px;
    };
      .cardFooter {
        display: flex;
        flex-direction: column;
        width: 42%;
        align-items: center;
        justify-content: center;
      };
  };
</style>
