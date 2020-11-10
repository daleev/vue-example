<template>
  <input class="input-field"
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  props: ['value'],
};
</script>

<style lang="scss" scoped>
  .input-field {
    display: block;
    width: 100%;
    height: 48pt;
    padding: 0 5pt;
    border: 1px solid $gray-2;
    border-radius: 24pt;
    outline: none;

    &:focus {
      border-color: $blue;
      outline: none;
    }
  }

</style>

