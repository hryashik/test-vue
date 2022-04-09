<template>
   <select class="select"
           v-model="modelValue"
           @change="changeOption">
      <option selected disabled value="">Выбрать сортировку</option>
      <option v-for="option in options"
              :key="option.value"
              :value="option.value">
         {{ option.name }}
      </option>
   </select>
</template>

<script>
export default {
   name: 'my-select',
   props: {
      modelValue: {
         type: String
      },
      options: {
         type: Array,
         default: () => []
      }
   },
   data() {
      return {
         selected: ''
      }
   },
   methods: {
      changeOption(event) {
         this.$emit('update:modelValue', event.target.value)
      }
   }
}
</script>

<style scoped>
.select {
   border: 2px solid cornflowerblue;
}
</style>