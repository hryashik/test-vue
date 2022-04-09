<template>
   <div class="dialog"
        @click="hiddenDialog">
      <div class="dialog__content" @click.stop>
         <slot></slot>
      </div>
   </div>
</template>

<script>
export default {
   name: 'my-dialog',
   methods: {
      hiddenDialog() {
         this.$emit('hiddenDialog', false)
      }
   }
}
</script>

<style scoped>
.dialog {
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: rgba(0, 0, 0, 0.5);
   position: fixed;
   display: flex;

}

.dialog__content {
   margin: auto;
   padding: 25px;
   background: white;
   border-radius: 20px;
   min-height: 50px;
   min-width: 350px;
   /*border: 2px solid cornflowerblue;*/
   box-shadow: 2px 2px 5px;
}

</style>