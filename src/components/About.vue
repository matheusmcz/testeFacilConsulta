<template>
  <div class="about">
      <b-form v-if="show">
        <div class="cardHeader">
          <h1 class="about-professional">Sobre o profissional</h1>
          <h2 class="professional-data">Dados do profissional</h2>
        </div>

        <b-form-group id="input-group-1" label="Nome completo*" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Digite seu nome completo"
            required
            min="'3'"
            max="'48'"
            @input="$emit('update', 'name', $event)"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="CPF*" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.cpf"
            placeholder="Digite um CPF"
            required
            v-mask="'###.###.###-##'"
            @input="$emit('update', 'cpf', $event)"
          ></b-form-input>
          <sub
            v-if="form.cpf.length === 14 && !isValidCpf(form.cpf)"
            class="cpfValidation"
          >CPF inválido</sub>
        </b-form-group>

        <b-form-group id="input-group-3" label="Número de celular*" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.cellphone"
            placeholder="(00) 0 0000-0000"
            required
            v-mask="'(##) # ####-####'"
            @input="$emit('update', 'cellphone', $event)"
          ></b-form-input>
        </b-form-group>

        <div class="location-section">
          <b-form-group id="input-group-4" label="Estado*" label-for="input-4">
            <b-form-select
              id="dropdown-1"
              v-model="form.state"
              :options="states"
              @input="handleSelectState"
            >
            </b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" label="Cidade*" label-for="input-4">
            <b-form-select
              id="dropdown-1"
              v-model="form.city"
              :options="selectedState.cities"
              @input="handleSelectCity"
            >
            </b-form-select>
          </b-form-group>
        </div>
      </b-form>
      <div class="image">
        <img src="../assets/backgroundImg/backgroundImg01.png" alt="Background image">
      </div>
  </div>
</template>

<script>

import { isValid as isValidCpf } from '@fnando/cpf';

export default {
  name: 'About',
  data() {
    return {
      steps: {
        currentStep: 1,
        lastStep: 2,
      },
      show: true,
      states: [
        {
          text: 'Paraná',
          value: {
            name: 'Paraná',
            cities: [
              {
                text: 'Londrina',
                value: 'Londrina',
              },
              {
                text: 'Maringá',
                value: 'Maringá',
              },
            ],
          },
        },
        {
          text: 'Rio Grande do Sul',
          value: {
            name: 'Rio Grande do Sul',
            cities: [
              {
                text: 'Pelotas',
                value: 'Pelotas',
              },
              {
                text: 'Porto Alegre',
                value: 'Porto Alegre',
              },
            ],
          },
        },
        {
          text: 'Santa Catarina',
          value: {
            name: 'Santa Catarina',
            cities: [
              {
                text: 'Florianópolis',
                value: 'Florianópolis',
              },
              {
                text: 'Joinville',
                value: 'Joinville',
              },
            ],
          },
        },
      ],
      selectedState: {},
    };
  },
  props: {
    form: {
      default: () => ({}),
      type: Object,
    },
  },
  methods: {
    handleSelectState(state) {
      this.selectedState = { ...state };
      this.$emit('update', 'state', state);
    },
    handleSelectCity(city) {
      this.$emit('update', 'city', city);
    },
    isValidCpf,
  },
};
</script>

<style lang="scss">
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

  #input-group-2,
  #input-group-3 {
    width: 75%;
  };

  #input-group-1,
  #input-group-2,
  #input-group-3 {
    margin-top: 24px;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;

    #input-1,
    #input-2,
    #input-3 {
      margin-top: 8px;
      border: 1px solid var(--purple300);

      &::placeholder {
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
      };
    };
  };

  .location-section {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    margin-top: 24px;

    #input-group-4__BV_label_,
    #input-group-5__BV_label_ {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      margin-bottom: 8px;
    }
  };

  #dropdown-1__BV_toggle_ {
    position: relative;
  };

  #dropdown-1 {
    width: 100%;
  };

  .image {
    display: none;
  };

  .cpfValidation {
    color: var(--bs-danger);
  }

  @media(min-width: 1024px) {
    .about {
      display: grid;
      grid-template-columns: 0.7fr 1fr;
      align-items: center;
    };

    .image {
      display: flex;
      flex-direction: row-reverse;
    }

    .about-professional {
      font-size: 40px;
    }
  }
</style>
