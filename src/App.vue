<template>
  <div class="app">
    <form @submit.prevent>
      <input
        type="text"
        placeholder="Название поста"
        v-model="title">
      <input
        type="text"
        placeholder="Описание поста"
        v-model="body">
      <button
        class="btn"
        @click="createPost">Добавить
      </button>
    </form>
    <post-list :posts="posts"/>
  </div>
</template>

<script>
import postList from "@/components/postList";

export default {
  components: {
    postList
  },
  data() {
    return {
      posts: [],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      let newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      };
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    }
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

.app {
  padding: 15px;
}

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
}

</style>