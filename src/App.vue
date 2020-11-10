<template>
  <div id="app">
    <Form />
  </div>
</template>

<script>
import Form from '@/components/Form';

export default {
  name: 'App',
  components: {
    Form,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 16pt;
    letter-spacing: -0.07pt;
    line-height: 24pt;
    background-color: rgba(244, 247, 252, 1);
  }

  .fill-current {
    fill: currentColor;
  }
</style>
