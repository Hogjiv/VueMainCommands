<script>
export default {
  name: "BtnCatchEmit",
  methods: {
    handleClick(){
      this.$emit('increaseCount', 3)
    }
  }
};
</script>

<template>
  <div>
   event EventEmit
   <button @click="handleClick"> Click ++ </button>
  
  </div>
</template>
