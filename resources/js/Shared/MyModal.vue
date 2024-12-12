
<script setup>
import {ref} from 'vue';
const props = defineProps({


  show:{
    type:Boolean,
    default:false,
  },
  title:{
    type:String,
    default:'Modal Title'
  }
});

const emit = defineEmits(['close-modal'])



</script>
<template>

<Teleport to="body">



  <div class="modal_overlay" v-if="props.show" @click="$emit('close-modal')">

    <div class="modal_content" @click.stop>

      <header class="mb-4">
        <div class="header">
          <h2 class="font-extrabold text-md"> {{ props.title }}</h2>
          <button @click="emit('close-modal')">
            Close
          </button>
        </div>

      </header>

      <div class="mb-4 modal_body">

        <slot />
      </div>

      <footer class="modal_footer">
        <slot name="footer">
          <div class="flex items-center justify-end">

            <button @click="emit('close-modal')">
              Close
            </button>
          </div>
          </slot>
      </footer>
    </div>
  </div>
</Teleport>
</template>



<style scoped>
.modal_overlay{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal_content{
  max-width:500px;
  width:100%;
  padding:20px;
  background-color:white;
  border-radius: 12px;
}

</style>
