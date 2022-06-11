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
              <router-link
                class="imgLeisure"
                @mouseover="indexOfSection = 0"
                to="/leisure-page"
              ></router-link>
              <router-link
                class="imgFood"
                @mouseover="indexOfSection = 1"
                to="/food-page"
              ></router-link>
              <router-link
                class="imgLodging"
                @mouseover="indexOfSection = 2"
                to="/lodging-page"
              ></router-link>
            </div>
          </div>
          <div class="sliderContainer">
            <div
              style="height: 100%; background-size: cover"
              :style="{
                backgroundImage:
                  'url(' +
                  require(`../assets/${arrOfIndex[indexOfImage][indexOfSection]}`) +
                  ')',
              }"
            >
              {{ indexOfImage }}
              {{ arrOfIndex.length }}
              {{ `url (http://localhost:8080/${arrOfIndex[indexOfImage]})` }}
            </div>
            <button
              class="button"
              @click="
                indexOfImage > 0
                  ? (indexOfImage -= 1)
                  : (indexOfImage = arrOfIndex[indexOfSection].length - 1)
              "
            >
              &lt;-
            </button>

            <button
              class="button"
              @click="
                indexOfImage < arrOfIndex[indexOfSection].length - 1
                  ? (indexOfImage += 1)
                  : (indexOfImage = 0)
              "
            >
              ->
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
    let indexOfSection = ref(0);

    let arrOfIndex: string[][] = [
      [
        "food2.jpg",
        "food3.webp",
        "food5.jpeg",
        "food6.webp",
        "food9.jpeg",
        "food10.webp",
      ],
      [
        "leisure2.jpg",
        "leisure3.webp",
        "leisure5.jpeg",
        "leisure6.webp",
        "leisure9.jpeg",
        "leisure10.webp",
        "leisure12.webp",
        "leisure13.webp",
      ],
      [
        "Looding2.jpg",
        "Looding3.webp",
        "Looding4.webp",
        "Looding5.jpeg",
        "Looding6.webp",
        "Looding7.webp",
        "Looding9.jpeg",
      ],
    ];
    return {
      indexOfSection,
      arrOfIndex,
      indexOfImage,
    };
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
  height: 2660px;
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
  height: 50%;
  margin: auto;
  margin-bottom: 10%;
}
.linkContainer {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sliderContainer {
  height: 50%;
  width: 40%;
  margin: auto;
  background-size: cover;
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
  background: url("../assets/DSC02445-min.webp") no-repeat;
  background-size: cover;
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
