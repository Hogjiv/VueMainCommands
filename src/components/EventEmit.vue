<script>
import BtnCatchEmit from "../components/BtnCatchEmit.vue";

export default {
  name: "EventEmit",
  data() {
    return {
      count: 1
    }
  },
  components: {
    BtnCatchEmit
  },
  methods: {
    increaseNum(n) { 
      this.count +=n
    }
  }
};
</script>

<template>
  <div> 
   <p> current coun: {{ count }} </p>
   <BtnCatchEmit @increaseCount="increaseNum"> </BtnCatchEmit>   
  </div>
</template>
