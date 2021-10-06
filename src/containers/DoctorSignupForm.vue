<template>
  <form class="doctorSignupForm" @submit.prevent="handleSubmit">
    <section>
      <About v-if="currentStep.name === 'about'" :form="form" />
      <Services v-else-if="currentStep.name === 'services'" :form="form" />
    </section>
    <div class="cardFooter">
      <ProgressBar v-model="currentStep.step" :max="steps.length" />
      <BaseButton @click.native="handleClick">PRÓXIMO</BaseButton>
    </div>
  </form>
</template>

<script>

import About from '../components/About.vue';
import Services from '../components/Services.vue';
import ProgressBar from '../components/base/ProgressBar.vue';
import BaseButton from '../components/base/BaseButton.vue';

export default {
  name: 'DoctorSignupForm',
  components: {
    About,
    Services,
    ProgressBar,
    BaseButton,
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
      form: {
        name: '',
        cpf: '',
        cellPhone: '',
        state: '',
        city: '',
      },
    };
  },
  computed: {
    isLastStep() {
      return this.currentStep.step === this.steps.length;
    },
  },
  methods: {
    handleClick() {
      if (!this.isLastStep) {
        this.currentStep = this.steps.find((item) => item.step === this.currentStep.step + 1);
      }
    },
    handleSubmit() {
      console.log('submit-form');
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
