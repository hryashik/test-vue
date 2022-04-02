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
    <div class="post"
         v-for="post in posts"
         v-if="posts.length">
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <h3 v-else>Постов нет</h3>
  </div>
</template>

<script>
export default {
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

.post {
  margin-top: 5px;
  padding: 10px 15px;
  border: 2px solid teal;
}
</style>