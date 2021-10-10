<template>
  <form class="doctorSignupForm" @submit.prevent="handleSubmit">
    <button class="fallBack" @click="handleClick('goBack')" :type="type">
      <img src="../assets/arrowBack.icon.svg" alt="">
    </button>
    <section>
      <Review />
    </section>
    <div class="cardFooter">
      <BaseButton @click.native="handleClick" title="CADASTRAR PROFISSIONAL" class="submitForm" />
      <FallBackButton @click.native="handleClick('gotToInit')">Editar cadastro</FallBackButton>
    </div>
  </form>
</template>

<script>
import Review from '../components/Review.vue';
import FallBackButton from '../components/base/FallBackButton.vue';
import BaseButton from '../components/base/BaseButton.vue';

export default {
  name: 'DoctorSignupReview',
  components: {
    Review,
    FallBackButton,
    BaseButton,
  },
  props: {
    type: {
      default: 'button',
      type: String,
    },
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
      if (action && action === 'gotToInit') {
        this.$router.push({ name: 'DoctorSignupForm' });
      } else if (action && action === 'goBack') {
        this.currentStep = this.steps.find((item) => item.step === this.currentStep.step + 1);
        this.$router.push({ name: 'DoctorSignupForm' });
      } else {
        this.$router.push({ name: 'DoctorSignupSuccess' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .doctorSignupForm {
    margin-top: 80px;
    box-shadow: none;
    padding: 50px 16px 70px 16px;
    border-radius: 40px 40px 0 0;
    background: var(--white300);
    border: none;
  };

    .fallBack {
      position: absolute;
      top: 0;
      left: 0;
      background-color: transparent;
      border: none;
      margin-left: 12px;
      margin-top: 25px;
    };

  @media (min-width: 1024px) {
    .doctorSignupForm {
      margin: 0;
      padding: 32px 0px 32px 100px;
      box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.12);
      border-radius: 40px;
      position: relative;
    };
      .cardFooter {
        display: flex;
        flex-direction: column;
        width: 42%;
        align-items: center;
        justify-content: center;
      };

    .fallBack {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: -50px;
      margin-left: 15px;
      background-color: transparent;
      border: none;
    };
  };
</style>
