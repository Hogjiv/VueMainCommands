<script>
export default {
  name: "PropsComplicated",
  props: {
    adress: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div>
    <h2>{{ adress }}</h2>
    <p>{{ name }}</p>
  </div>
</template>
