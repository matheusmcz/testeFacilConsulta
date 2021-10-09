<template>
  <div class="services">
    <b-form v-if="show">
      <div class="cardHeader">
        <h1 class="about-professional">Sobre o atendimento</h1>
        <h2 class="professional-data">Dados do atendimento</h2>
      </div>

      <div class="skills">
        <b-form-group id="input-group-1" label="Especialidade principal*" label-for="input-1">
          <b-form-select
            v-model="form.skill"
            id="dropdown-1"
            :options="skills"
            @input="$emit('update', 'skill', $event)"
          ></b-form-select>
        </b-form-group>
      </div>

      <label class="sr-only" for="inline-form-input-username">
        Informe o preço da consulta*
      </label>
      <b-input-group prepend="R$" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
          v-model="form.prize"
          id="inline-form-input-username"
          placeholder="Valor"
          v-mask="'###,##'"
          @input="handlePrize"
        ></b-form-input>
      </b-input-group>

      <b-form-checkbox-group class="paymentMethod" v-model="form.paymentMethod">
        <label class="paymentTitle">Formas de pagamento da consulta*</label>

        <div class="moneyMethod">
          <b-form-checkbox
            type="checkbox"
            name="paymentMethod"
            id="money"
            value="Dinheiro"
            @input="$emit('update', 'paymentMethod')"
          >Em Dinheiro</b-form-checkbox>
        </div>

        <div class="pixMethod">
          <b-form-checkbox
            type="checkbox"
            name="paymentMethod"
            id="pix"
            value="Pix"
            @input="$emit('update', 'paymentMethod')"
          >Pix</b-form-checkbox>
        </div>

        <div class="credCardMethod">
            <b-form-checkbox
              v-b-toggle.collapse-1
              type="checkbox"
              name="paymentMethod"
              id="credCard"
              value="Cartão de crédito"
              @input="$emit('update', 'paymentMethod')"
            >Cartão de crédito</b-form-checkbox>

          <b-collapse id="collapse-1" class="mt-2">
            <span>Parcelamento em:</span>
            <b-card>
              <input type="radio" name="credCard1">
              <p class="card-text">1x, sem juros</p>
            </b-card>
            <b-card>
              <input type="radio" name="credCard2">
              <p class="card-text">2x, sem juros</p>
            </b-card>
            <b-card>
              <input type="radio" name="credCard3">
              <p class="card-text">3x, sem juros</p>
            </b-card>
          </b-collapse>
        </div>
      </b-form-checkbox-group>
    </b-form>
    <div class="image">
      <img src="../assets/backgroundImg/backgroundImg02.png" alt="Background image">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Services',
  data() {
    return {
      show: true,
      skills: [
        'Cardiologia',
        'Dermatologia',
        'Neurologia',
        'Oftalmologia',
        'Psiquiatria',
        'Urologia',
      ],
    };
  },
  props: {
    form: {
      default: () => ({}),
      type: Object,
    },
  },
  methods: {
    handlePrize(value) {
      if (Number(value) < 3) {
        this.$emit('update', 'prize', 3);
      } else if (Number(value) > 350) {
        this.$emit('update', 'prize', 350);
      } else {
        this.$emit('update', 'prize', value);
      }
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

    .professional-data {
      margin-top: 20px;
      font-size: 18px;
      font-weight: 700;
    };
  };

  .skills {
    display: flex;
    align-items: center;
    grid-gap: 16px;
    margin-top: 24px;

    #input-group-1 {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      width: 100%;

      #dropdown-1 {
        margin-top: 8px;
        width: 100%;
        height: 32px;
        border-radius: 8px;
        background-color: transparent;
        border: 1px solid var(--purple300);

        opition {
          border-radius: 8px;
        }

        &::placeholder {
          font-family: 'Open Sans', sans-serif;
          font-size: 12px;
        };
      };
    };

    #dropdown-1__BV_toggle_ {
      position: relative;
    };
  };

  .image {
    display: none;
  };

  .input-group {
    width: 75%;
  }

  .sr-only {
    margin-top: 16px;
    margin-bottom: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
  };

  .input-group-text{
    background-color: var(--purple300);
    border: 1px solid var(--purple300);
    color: var(--white300);
    border-radius: 4px 0 0px 4px;
  };

  #inline-form-input-username {
    border: 1px solid var(--purple300);

    &::placeholder {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: var(--gray300);
    }
  };

  .paymentMethod {
    div:not(:last-of-type) {
      margin-bottom: 16px;
    }
  };

  .paymentTitle {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    margin-bottom: 10px;
  };

  .moneyMethod,
  .pixMethod,
  .credCardMethod {
    background-color: var(--bs-gray-200);
    padding: 12px 24px;
    border-radius: 5px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.12);

    .moneyLabel,
    .pixLabel {
      margin-left: 24px;
      color: var(--black600);
    };
  };

  #credCard {
    margin-right: 24px;
  }

  .btn-secondary {
    border: none;
    background-color: transparent;
    color: #000000;
  };

  .btn {
    padding: 0;
    margin-right: 24px;
  };

  .card {
    background-color: transparent;
    border: none;
    border-radius: none;

    .card-body {
      display: flex;
      align-items: center;
      padding: 0;

      input {
        margin-right: 24px;
      };
    };
  };

  .m-md-2 {
    margin: 0 !important;
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

    .about-professional {
      font-size: 40px;
    };
  };
</style>
