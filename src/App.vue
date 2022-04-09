<template>
   <div class="app">
      <my-button @click="dialogFlag = true">Создать пост</my-button>
      <my-dialog v-show="dialogFlag"
                 @hiddenDialog="hiddenDialog"
      >
         <post-form @create="createPost"/>
      </my-dialog>
      <post-list :posts="posts"
                 @remove="deletePost"/>
   </div>
</template>

<script>
import postList from "@/components/postList";
import postForm from "@/components/postForm";
import MyDialog from "@/components/UI/MyDialog";

export default {
   components: {
      MyDialog,
      postList, postForm
   },
   data() {
      return {
         posts: [],
         dialogFlag: false
      }
   },
   methods: {
      createPost(post) {
         this.posts.push(post)
         this.dialogFlag = false;
      },
      deletePost(obj) {
         this.posts = this.posts.filter(post => post.id !== obj.id)
      },
      hiddenDialog(boolean) {
         this.dialogFlag = boolean
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