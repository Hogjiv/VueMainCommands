<script> 
export default {
  name: "VModel", 
  data() {
    return {
      message: ''
    }
  }
};
</script>
<template>
 
  vmodel 
  <input v-model="message"/>
  <p> message is  {{ message }}</p>
 
</template>
