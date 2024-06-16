<script>
export default {
  name: 'RefComponent',
  data() {
    return {
      showClickedText: false,
    };
  },
  methods: {
    toggleText() {
      this.showClickedText = !this.showClickedText;
      this.$refs.toggleButton.textContent = this.showClickedText ? 'Btn 1' : 'Btn 2';
    },
  },
};
</script>

<template>
  <div>
    <h3>Using ref to change button text</h3>
    <button ref="toggleButton" @click="toggleText">Btn Click me!</button>
  </div>
</template>


 