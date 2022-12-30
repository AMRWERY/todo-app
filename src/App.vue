<template>
  <ToDo />
  <router-view />
</template>

<script>
import ToDo from './component/ToDo.vue';

export default {
  name: 'app',

  components: {
    ToDo
  }
}
</script>

<style>
  * {
    background-color: #FCF9BE;
    font-family: 'Noto Serif NP Hmong', serif;
  }
</style>