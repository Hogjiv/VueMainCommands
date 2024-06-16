<script>
import PropsComplicated from "../components/PropsComplicated.vue";
export default {
  name: "PropsDecomposited",
  data() {
    return {
      post: {
        adress: "Zatonnaya 12",
        surname: {
          name: "Same Rouy",
        },
      },
    };
  },
  components: {
    PropsComplicated,
  },
};
</script>

<template>
  <div>
    <PropsComplicated
      :adress="post.adress + '  registrated ' + post.surname.name"
    >
    </PropsComplicated>
  </div>
</template>
