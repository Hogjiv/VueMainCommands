<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
    };
  },
};
</script>

<template>
  <div>
    <!-- dynamic class -->
    <div :class="{ noerror: isActive, 'text-danger': hasError }">
      This div's classes depend on the component states
    </div>
    <div
      :style="{
        color: isActive ? 'green' : 'gray',
        fontWeight: hasError ? 'bold' : 'normal',
      }"
    >
      This div's classes depend on the component states
    </div>

    <button @click="isActive = !isActive">Toggle Active</button>
    <button @click="hasError = !hasError">Toggle Error</button>
  </div>
</template>

<style scoped>
.noerror {
  color: blue;
}

.text-danger {
  color: red;
}
</style>

<!--
<script>
export default {
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<template>
  <div :class="{ 'active': isActive, 'inactive': !isActive }">
    This div's class depends on the isActive state.
  </div>
  <button @click="toggleActive">Toggle Active</button>
</template>

<style>
.active {
  color: green;
}
.inactive {
  color: gray;
}
</style>
 -->
