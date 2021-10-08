<template>
  <div class="success">
    <div class="info">
      <b-form>
        <div class="cardHeader">
          <h1 class="about-professional">Cadastro realizado com sucesso!</h1>
        </div>
        <span class="message">
          Seja bem vindo Matheus Vieira
        </span>
      </b-form>

       <div class="cardFooter">
        <button>
          <img src="../assets/checked.icon.svg" alt="">
        </button>
      </div>

    </div>
      <div class="image">
        <img src="../assets/doctor.svg" alt="Background image">
      </div>
  </div>
</template>

<script>

export default {
  name: 'DoctorSignupSuccess',
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
  .cardHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Comfortaa', sans-serif;
    text-align: center;

    .about-professional {
      font-size: 32px;
      font-weight: 700;
      color: var(--purple300);
    };
  };

    .message {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 32px;
      font-size: 24px;
      font-weight: 700;
    };

  .image {
    display: none;
  };

  .input-group {
    width: 75%;
  };

   .cardFooter {
     display: flex;
     width: 100%;
     align-items: center;
     justify-content: center;
     margin-top: 122px;

     button {
       border: none;
       border-radius: 50%;
       padding: 16px 16px;
       background-color: var( --bs-green);

       img {
         width: 62px;
         height: 62px;
       }
     }
   }

  @media(min-width: 1024px) {
    .success {
      display: grid;
      grid-template-columns: 0.7fr 1fr;
      grid-gap: 12px;
      align-items: center;
      justify-content: center;
    };

    .cardHeader {
    text-align: start;

    .about-professional {
      font-size: 32px;
      font-weight: 700;
      color: var(--purple300);
    };
  };

    .image {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
    };

    .cardHeader {
      .about-professional {
        font-size: 30px;
      };
    };

    .cardFooter {
     display: flex;
     width: 40%;
     align-items: center;
     justify-content: center;
     margin-top: 100px;
     margin-left: 30%;

     button {
       border: none;
       border-radius: 50%;
       padding: 16px 16px;
       background-color: var( --bs-green);

       img {
         width: 62px;
         height: 62px;
       }
     }
   }
  };
</style>
