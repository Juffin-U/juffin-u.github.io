<template>
  <nav class="hat">
    <div style="width: 20%; height: 55px; display: flex; align-items: start">
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
    <div class="iconCont">
      <div class="navInfoCont">
        <router-link to="/leisure" style="width: 20%">
          <div
            class="icon"
            style="margin-left: 10%"
            :style="{
              backgroundImage:
                'url(' + require(`@/assets/icons/microphoneR.png`) + ')',
            }"
          ></div>
          <p class="classP">Досуг</p>
        </router-link>
      </div>
      <div class="navInfoCont">
        <router-link to="/food" style="width: 20%">
          <div
            class="icon"
            style="margin-left: 7%"
            :style="{
              backgroundImage:
                'url(' + require(`@/assets/icons/kokR.png`) + ')',
            }"
          ></div>
          <p class="classP">Банкет</p>
        </router-link>
      </div>
      <div class="navInfoCont">
        <router-link to="/loodging" style="width: 20%">
          <div
            class="icon"
            style="margin-left: 55%"
            :style="{
              backgroundImage:
                'url(' + require(`@/assets/icons/homeR.png`) + ')',
            }"
          ></div>
          <p class="classP">Проживание</p>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HatComponent",
};
</script>

<style>
.hat {
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: rgb(0, 166, 42);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon {
  width: 50px;
  height: 50px;
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
}
.iconHolder {
  margin-bottom: 10%;
  width: 75px;
  height: 65px;
  background-size: cover;
  background: white;
  border-radius: 50%;
}
.iconCont {
  display: flex;
  width: 70%;
  justify-content: space-evenly;
}
.navInfoCont {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 15%;
}
.classP {
  width: auto;
}
</style>
