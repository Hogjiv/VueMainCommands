<script>
import PropsFrom from "../components/PropsFrom.vue";
export default {
  name: "propsSimple",
  components: { PropsFrom },
 
};
</script>
<template>
  <PropsFrom propMessage="props from other component 'がんばって！'">
  </PropsFrom>

</template>
