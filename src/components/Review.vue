<template>
  <div class="services">
    <div class="info">
      <b-form v-if="show">
        <div class="cardHeader">
          <h1 class="about-professional">Revisão do cadastro</h1>
        </div>

        <section>
          <div class="fullName">
            Nome completo
            <span class="fullNameLabel">{{formData.name}}</span>
          </div>

          <div class="cpf">
            CPF
            <span class="cpfLabel">{{formData.cpf}}</span>
          </div>

          <div class="cellNumber">
            Número de celular ou telefone
            <span class="cellNumberLabel">{{formData.cellphone}}</span>
          </div>

          <div class="state">
            Estado/Cidade
            <span class="stateLabel">{{formData.state.name}} / {{formData.city}}</span>
          </div>

          <div class="prize">
            Especialidade
            <span class="prizeLabel">{{formData.skill}}</span>
          </div>

          <div class="prize">
            Preço da consulta
            <span class="prizeLabel">{{formData.prize}}</span>
          </div>

          <div class="paymentMethod">
            Formas de pagamento da consulta
            <span class="paymentMethodLabel">
              {{paymentMethods}}
            </span>
          </div>
        </section>
      </b-form>
    </div>
    <div class="image">
      <img src="../assets/backgroundImg/backgroundImg03.png" alt="Background image">
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'Review',
  data() {
    return {
      show: true,
    };
  },
  props: {
    form: {
      default: () => ({}),
      type: Object,
    },
  },
  methods: {
    goBack() {
      this.$emit('back');
    },
  },
  computed: {
    ...mapGetters({ formData: 'signup/getSignupForm' }),
    paymentMethods() {
      return this.formData.paymentMethod.join(', ');
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

    .about-professional {
      font-size: 24px;
      font-weight: 700;
      color: var(--purple300);
    };
  };

  .image {
    display: none;
  };

  .input-group {
    width: 75%;
  };

  .fullName,
  .cpf,
  .cellNumber,
  .state,
  .prize,
  .paymentMethod {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  };

  .fullNameLabel,
  .cpfLabel,
  .cellNumberLabel,
  .stateLabel,
  .prizeLabel,
  .paymentMethodLabel {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin-top: 12px;
  }

  @media(min-width: 1024px) {
    .services {
      display: grid;
      grid-template-columns: 0.7fr 1fr;
      grid-gap: 12px;
      align-items: end;
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
    }
  };
</style>
