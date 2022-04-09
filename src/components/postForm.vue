<template>
  <form @submit.prevent>
    <my-input
      placeholder="Название поста"
      v-model="post.title"/>
    <my-input
      placeholder="Описание поста"
      v-model="post.body"/>
    <my-button @click="createPost">Добавить</my-button>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton, MyInput},
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
</style>