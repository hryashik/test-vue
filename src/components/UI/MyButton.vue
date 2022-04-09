<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  margin-bottom: 25px;
  padding: 10px 15px;
  background: none;
  border: 2px solid cornflowerblue;
  align-self: flex-end;
  cursor: pointer;
}
</style>