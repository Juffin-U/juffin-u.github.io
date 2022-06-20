<template>
  <nav class="hat">
    <div style="width: 20%; display: flex; align-items: start">
      <div class="iconHolder">
        <router-link to="/">
          <div
            class="icon"
            style="width: 75px"
            :style="{
              backgroundImage: 'url(' + require(`@/assets/logo.webp`) + ')',
            }"
          ></div>
        </router-link>
      </div>
    </div>
    <router-link to="/leisure" style="width: 20%">
      <div
        class="icon"
        :style="{
          backgroundImage:
            'url(' + require(`@/assets/icons/microphoneR.png`) + ')',
        }"
      ></div>
    </router-link>
    <router-link to="/food" style="width: 20%">
      <div
        class="icon"
        :style="{
          backgroundImage: 'url(' + require(`@/assets/icons/kokR.png`) + ')',
        }"
      ></div>
    </router-link>
    <router-link to="/loodging" style="width: 20%">
      <div
        class="icon"
        :style="{
          backgroundImage: 'url(' + require(`@/assets/icons/homeR.png`) + ')',
        }"
      ></div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "HatComponent",
};
</script>

<style>
.hat {
  width: 100%;
  height: 110px;
  background-color: rgb(0, 166, 42);
  display: flex;
  justify-content: space-around;
}
.icon {
  width: 60px;
  height: 60px;
  background-size: cover;
}
.iconHolder {
  width: 75px;
  height: 65px;
  background-size: cover;
  background: white;
  position: fixed;
  border-radius: 50%;
}
</style>
