<template>
  <form @submit.prevent>
    <input
      type="text"
      placeholder="Название поста"
      v-model="post.title">
    <input
      type="text"
      placeholder="Описание поста"
      v-model="post.body">
    <button
      class="btn"
      @click="createPost">Добавить
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        body: '',
        title: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

form input {
  margin-bottom: 10px;
  border: 2px solid teal;
  padding: 10px 15px;
}

.btn {
  margin-bottom: 25px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 2px solid teal;
  align-self: flex-end;
  cursor: pointer;
}

</style>