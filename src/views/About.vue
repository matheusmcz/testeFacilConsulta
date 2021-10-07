<template>
  <div class="about">
    <div class="card">
      <h1 class="about-professional">Sobre o profissional</h1>
      <h2 class="professional-data">Dados do profissional</h2>

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <b-form-group id="input-group-1" label="Nome completo*" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Digite seu nome completo"
            required
            :state="nameState"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="CPF*" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Digite um CPF"
            required
            type="number"
            :state="cpfState"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Número de celular*" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.name"
            placeholder="(00) 0 0000-0000"
            required
            type="number"
          ></b-form-input>
        </b-form-group>

        <div class="location-section">
          <b-form-group id="input-group-4" label="Estado*" label-for="input-4">
            <b-dropdown id="dropdown-1" text="Selecione" class="m-md-2">
              <b-dropdown-item>First Action</b-dropdown-item>
            </b-dropdown>
          </b-form-group>

          <b-form-group id="input-group-5" label="Cidade*" label-for="input-5">
            <b-dropdown id="dropdown-1" text="Selecione" class="m-md-2">
              <b-dropdown-item>First Action</b-dropdown-item>
            </b-dropdown>
          </b-form-group>
        </div>

        <div class="progressBar">
          <b-progress :max="max" animated>
            <b-progress-bar :value="value">
            </b-progress-bar>
          </b-progress>
          <p class="actual-progress">1 de 2</p>
        </div>

        <b-button type="submit" class="submit-button">PRÓXIMO</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
  },
  data() {
    return {
      form: {
        name: '',
        cpf: '',
        cellPhone: '',
        state: '',
        city: '',
        value: 1,
        max: 2,
      },
      show: true,
    };
  },

};
</script>

<style lang="scss">
  .about {
    height: 100%;
    width: 100%;
    background: var(--white300);
    margin-top: 50px;
    border-radius: 40px 40px 0 0;
    padding: 50px 16px 70px 16px;
    border: none;
    box-shadow: none;
  };

  .card {
    border: none;
  };

  .about-professional {
    display: flex;
    font-family: 'Comfortaa', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: var(--purple300);
  };

  .professional-data {
    display: flex;
    margin-top: 20px;
    font-family: 'Comfortaa', sans-serif;
    font-size: 18px;
    font-weight: 700;
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

  .btn-secondary {
    color: var(--gray300);
    border: 1px solid var(--purple300);
    background-color: #ffffff;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    text-align: start;

    &:focus {
      color: #000000;
      background-color: #FFFFFF;
      border-color: var(--purple300);
    };
  };

  #dropdown-1__BV_toggle_ {
    position: relative;
  };

  #dropdown-1 {
    width: 100%;
  };

  .dropdown-toggle::after {
    position: absolute;
    margin: 12px 12px 0 0;
    vertical-align: 0;
    top: 0;
    right: 0;
  };

  .show > .btn-secondary.dropdown-toggle {
    color: #000000;
    background-color: #FFFFFF;
    border-color: var(--purple300);
  };

  .progressBar {
    margin-top: 32px;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 8px;
    width: 100%;
    justify-items: center;
    justify-content: center;
    text-align: center;
  }

  .progress {
    width: 100%;
  }

  .actual-progress {
    display: flex;
    font-family: 'Comfortaa', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--purple300);
  }

  .progress-bar {
    background-color: var(--purple300);
  }

  .progress-bar-striped {
    background-image: none;
  }

  .submit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 24px;
    border-radius: 50px;
    border: none;
    background-color: var(--purple300);
    color: var(--white300);
    font-family: 'Comfortaa', sans-serif;
    font-size: 18px;
    font-weight: 700;
  }
</style>
