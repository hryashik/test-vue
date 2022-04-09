<template>
  <div class="app">
    <post-form @create="createPost"/>
    <post-list :posts="posts"
               @remove="deletePost"/>
  </div>
</template>

<script>
import postList from "@/components/postList";
import postForm from "@/components/postForm";

export default {
  components: {
    postList, postForm
  },
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    deletePost(obj) {
      this.posts = this.posts.filter(post => post.id !== obj.id)
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


</style>