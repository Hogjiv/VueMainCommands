<script>
export default {
  name: "VIf",
  data() {
    return {
      showmessage: false, 
    };
  },
  computed: {
    buttonText() {
      return this.showmessage ? "Click the Button!" : "Button clicked";
    },
  },
  methods: {
    btnClicked() {
      this.showmessage = !this.showmessage;
    },
  },
};
</script>

<template>
  <h3>v if</h3>

  <button @click="btnClicked">{{ buttonText }}</button>
  <div v-if="showmessage">Show text 1</div>

  <div v-else>
    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever s ince the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining esse
    ntially unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently with
    desktop publishing software like Aldus PageMaker including versions of Lorem
    Ipsum.
  </div>
</template>
