<template>
  <input type="text"
         @input="inputUpdate"
  v-model="modelValue">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: {
      type: [String, Number]
    }
  },
  methods: {
    inputUpdate(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
input {
  margin-bottom: 15px;
  border: 2px solid cornflowerblue;
  padding: 10px 15px;
}
</style>