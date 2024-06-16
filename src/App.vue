<script>
export default {
  name: "App",
  methods: {
    pushtoProp2() {
      this.$router.push("/props");
      console.log("push", this.$route);
    },
  },
};
</script>

<template>
  <div>
    <RouterLink to="/simple" class="style"> Simple props </RouterLink>
    <RouterLink to="/props" class="style"> Complicated props </RouterLink>
    <RouterLink to="/eventemit" class="style"> Event emit </RouterLink>
    <RouterLink to="/vmodel" class="style"> V-model </RouterLink>
    <RouterLink to="/slot" class="style"> Slot </RouterLink>
    <RouterLink to="/vfor" class="style"> V-for </RouterLink>
    <RouterLink to="/vIf" class="style"> V-if/show/hidden buttons </RouterLink>
    <RouterLink to="/ref" class="style"> Ref </RouterLink>

    <RouterLink to="/binding" class="style"> class and style binding </RouterLink>
  </div>

  <RouterView> </RouterView>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.style {
  color: red;
  margin-right: 30px;
}
</style>
