<template>
  <div class="doctorSignUp">
    <router-view  />
  </div>
</template>

<script>

export default {
  name: 'DoctorSignUp',
};
</script>

<style lang="scss" scoped>
  .doctorSignUp {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  };

  @media (min-width: 1024px) {
    .doctorSignUp {
      height: 100vh;
      width: 100vw;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      justify-items: center;
    }
  }
</style>
