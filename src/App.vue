<template>
  <router-view></router-view>
  <main-tab-bar></main-tab-bar>
</template>

<script>
import MainTabBar from "@/components/content/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar
  }
}
</script>


<style>
@import "assets/css/base.css";


</style>
