<template>
  <div class="notFoundCont"></div>
  <BasementComponent></BasementComponent>
</template>

<script>
import BasementComponent from "@/components/BasmentComponent";

export default {
  name: "NotFound",
  components: { BasementComponent },
};
</script>

<style scoped>
.notFoundCont {
  width: 100%;
  height: 1024px;
  background-size: cover;
  background-image: url("@/assets/orig.jpeg");
}
</style>
