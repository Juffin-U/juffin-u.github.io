<template>
  <div class="mainContainer">
    <div class="solidColumnContainer">
      <div class="imgContainer">
        <div class="separateColumnContainer">
          <div class="mainHeader">
            <p class="mainHeaderText">Зеленый сад</p>
          </div>
          <div class="mainInfo">
            <p class="mainInfoText">Прекрасное место для вашего отдыха</p>
          </div>
        </div>
      </div>
      <div class="infoContainer">
        <div class="info">
          <div class="separateColumnContainer">
            <p class="mainIntroductionToTheDescription">О нас</p>
            <p class="mainDescription">
              «Зеленый сад» — место, где можно отдохнуть у края соснового леса в
              пределах г. Барнаула. Восстановиться после тяжелых будней и
              получить огромное количество впечатлений! У нас можно провести
              запоминающийся и яркий праздник, который еще долго будет дарить
              вам теплые воспоминания!
            </p>
            <div class="image-bgContainer">
              <div class="image-bg"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="sliderAndLinkContainer">
        <p class="mainIntroductionToTheDescription">Наши услуги</p>
        <div class="solidColumnContainer">
          <div class="linkContainer">
            <div class="lineImageContainer">
              <router-link class="imgLeisure" to="/leisure-page"></router-link>
              <router-link class="imgFood" to="/food-page"></router-link>
              <router-link class="imgLodging" to="/lodging-page"></router-link>
            </div>
          </div>
          <div class="sliderContainer">
            <div
              style="height: 30px; width: 30px"
              :style="{
                backgroundImage: `url (http://localhost:8080/${arrOfIndex[indexOfImage]})`,
              }"
            >
              {{ `url (http://localhost:8080/${arrOfIndex[indexOfImage]})` }}
            </div>
            <button class="button" @click="indexOfImage += 1">
              контейнер для слайдера
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    let indexOfImage = ref(0);

    let arrOfIndex: Array<string> = [
      "DSC_1627.jpg",
      "DSC02445-min.webp",
      "WhatsApp_Image_2022-.jpeg",
      "WhatsApp_Image_2022-.webp",
    ];
    return {
      arrOfIndex,
      indexOfImage,
    };
    // for (let i = 0; i < arrOfIndex.length; ) {}
  },
});
</script>

<style lang="scss" scoped>
.infoContainer {
  height: 40%;
  margin-top: -18%;
}
.info {
  height: 50%;
  width: 70%;
  margin: auto;
}
.mainContainer {
  width: 100%;
  height: 2160px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.image-bg {
  width: 80px;
  height: 65px;
  /* Не повторяем */
  background-size: cover; /* Размер фона */
  /* Позиция картинкипо центру */
  background: url(../assets/logo.webp) no-repeat center;
}
.button {
}
.sliderAndLinkContainer {
  width: 85%;
  height: 100%;
  margin: auto;
}
.linkContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sliderContainer {
  height: 100%;
}
.mainInfoText {
  margin: auto;
}
.imgFood {
  background-size: cover;
  background: url(../assets/Food.jpg) no-repeat center;
  width: 33%;
}
.imgLeisure {
  background-size: cover;
  background: url(../assets/Leisure.png) no-repeat center;
  width: 33%;
}
.imgSlider {
  background-size: cover;
  background: url(../assets/Leisure.png) no-repeat center;
  width: 33%;
}
.imgLodging {
  background-size: cover;
  background: url(../assets/Looding.jpeg) no-repeat center;
  width: 33%;
}
.mainIntroductionToTheDescription {
  color: rgb(0, 166, 42);
  font-size: 40px;
  font-family: sans-serif;
}
.mainDescription {
  font-family: sans-serif;
  font-size: 24px;
}
.mainHeaderText {
  margin: auto;
}
.mainHeader {
  font-size: 70px;
  line-height: 1.17;
  letter-spacing: 5px;
  font-family: Arial, serif;
  height: 50%;
  display: flex;
  color: bisque;
  margin-top: 13%;
}

.mainInfo {
  height: 50%;
  font-size: 32px;
  line-height: 1.5;
  display: flex;
  color: bisque;
  font-family: Arial, serif;
  font-weight: 300;
  margin-bottom: 35%;
}
.imgContainer {
  background-image: url("../assets/DSC02445-min.webp");
  background-repeat: no-repeat;
  height: 50%;
  align-items: center;
}
.image-bgContainer {
  margin: auto;
}
.solidColumnContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.separateColumnContainer {
  height: 30%;
  width: 37%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 27% auto auto;
}
.lineImageContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80%;
  margin-top: 3.5%;
}
</style>
