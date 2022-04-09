<template>
  <form @submit.prevent>
    <my-input
      placeholder="Название поста"
      v-model="post.title"/>
    <my-input
      placeholder="Описание поста"
      v-model="post.body"/>
    <my-button class="btn" @click="createPost">Добавить</my-button>
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
.btn {
  margin: 5px 0 15px;
}
</style>