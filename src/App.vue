<template>
   <navbar/>
   <div class="app">
      <router-view></router-view>
   </div>
</template>

<script>
import navbar from "@/components/Navbar";

export default {
   components: {navbar}
}
</script>

<style>
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

.app {
   padding: 15px;
}

</style>