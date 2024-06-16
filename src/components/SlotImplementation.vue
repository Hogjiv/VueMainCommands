<script>
import SlotComponent from "../components/SlotComponent.vue";
export default {
  name: "SlotImplementation",
  components: {
    SlotComponent,
  },
};
</script>
<template>
  <div>
    <SlotComponent>
      <template v-slot:header>
        <h3>implement</h3>
      </template>
      <p>Content..</p>
      <template v-slot:footer>
        <p>footer!</p>
      </template>
    </SlotComponent>
  </div>
</template>
