<script>
export default {
  name: "SlotComponent",
};
</script>
<template>
  <div>
    <slot name="header"> </slot>
    <slot name="footer"> </slot>
  </div>
</template>
