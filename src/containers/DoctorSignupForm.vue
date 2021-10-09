<template>
  <form class="doctorSignupForm" @submit.prevent="handleSubmit">

    <button v-if="currentStep.name === 'services'" class="fallBack" @click="handleBack">
      <img src="../assets/arrowBack.icon.svg" alt="">
    </button>

    <section>
      <About
        v-if="currentStep.name === 'about'"
        :form="form"
        @update="handleUpdateForm"
      />
      <Services
        v-else-if="currentStep.name === 'services'"
        :form="form"
        @back="handleBack"
        @update="handleUpdateForm"
      />
    </section>
    <div class="cardFooter">
      <ProgressBar v-model="currentStep.step" :max="steps.length" />
      <BaseButton @click.native="handleClick">PRÓXIMO</BaseButton>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
      form: {},
    };
  },
  mounted() {
    this.form = { ...this.formData };
  },
  computed: {
    ...mapGetters({ formData: 'signup/getSignupForm' }),
    isLastStep() {
      return this.currentStep.step === this.steps.length;
    },
  },
  methods: {
    ...mapActions('signup', ['setSignupForm']),
    handleClick() {
      if (!this.isLastStep) {
        this.currentStep = this.steps.find((item) => item.step === this.currentStep.step + 1);
      } else {
        this.$router.push({ name: 'DoctorSignupReview' });
      }
    },
    handleUpdateForm() {
      this.setSignupForm(this.form);
    },
    handleBack() {
      this.currentStep = this.steps.find((item) => item.step === this.currentStep.step - 1);
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
  }
</style>
