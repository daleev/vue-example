<template>
  <button class="button-default">
    <slot/>
  </button>
</template>

<script>
export default {
  props: ['value'],
};
</script>

<style lang="scss" scoped>
  .button-default {
    @extend .text-action;
    display: flex;
    align-items: center;
    height: 40pt;
    padding: 0 28pt;
    border: none;
    border-radius: 24pt;
    background-color: $blue;
    color: white;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .button-default:hover {
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }

  .button-default:focus {
    outline: none;
  }

  .button-default:active {
    outline: none;
  }
</style>

