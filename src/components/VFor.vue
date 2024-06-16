<script>
export default {
  name: "VFor",
  data() {
    return {
      items: [
        { cathegory: "Food" },
        { cathegory: "Clothes" },
        { cathegory: "Animals" },
      ],
      food: [{ eat: "apple" }, { eat: "banana" }, { eat: "neroli" }],
    };
  },
};
</script>

<template>
  <h3>vfor</h3>
  <li v-for="(уel, inx) in items" :key="inx">
    {{ уel.cathegory }}
  </li>
  <h2>more list</h2>
  <li v-for="(el, index) in food" :key="index">{{ index }} -- {{ el.eat }}</li>
</template>
