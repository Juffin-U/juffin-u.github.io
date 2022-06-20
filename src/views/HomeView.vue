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
        <div
          style="
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            width: 100%;
            margin-left: 2.5%;
          "
        >
          <div
            class="mainIntroductionToTheDescriptionT"
            style="margin-left: 1%"
          >
            Досуг
          </div>
          <div
            class="mainIntroductionToTheDescriptionT"
            style="margin-left: 3%"
          >
            Банкет
          </div>
          <div
            class="mainIntroductionToTheDescriptionT"
            style="margin-right: 4%"
          >
            Проживание
          </div>
        </div>
        <div class="solidColumnContainer">
          <div class="linkContainer">
            <div class="lineImageContainer">
              <router-link
                class="imgLeisure"
                @mouseover="indexOfSection = 0"
                to="/leisure"
              ></router-link>
              <router-link
                class="imgFood"
                @mouseover="indexOfSection = 1"
                to="/food"
              ></router-link>
              <router-link
                class="imgLodging"
                @mouseover="indexOfSection = 2"
                to="/loodging"
              ></router-link>
            </div>
          </div>
          <div class="sliderContainer">
            <div style="height: 100%; background-size: cover">
              <vueper-slides
                arrows-inside
                bullets-inside
                class="no-shadow"
                transition-speed="250"
              >
                <vueper-slide
                  v-for="(imagePath, i) in arrOfIndex[indexOfSection]"
                  :key="i"
                  :image="imagePath"
                />
              </vueper-slides>
            </div>
          </div>
        </div>
      </div>
    </div>
    <basement-component></basement-component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import BasementComponent from "@/components/BasmentComponent.vue";
import HatComponent from "@/components/HatCompomnent.vue";

export default defineComponent({
  name: "HomeView",
  components: { BasementComponent, VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide 1 content.",
      },
      {
        title: "Slide #2",
        content: "Slide 2 content.",
      },
    ],
  }),

  setup() {
    let indexOfImage = ref(0);
    let indexOfSection = ref(0);

    let arrOfIndex: string[][] = [
      [
        require("@/assets/food2.webp"),
        require("@/assets/food3.webp"),
        require("@/assets/food5.webp"),
        require("@/assets/food6.webp"),
        require("@/assets/food9.webp"),
        require("@/assets/food10.webp"),
      ],
      [
        require("@/assets/leisure2.webp"),
        require("@/assets/leisure1.jpg"),
        require("@/assets/leisure5.webp"),
        require("@/assets/leisure6.webp"),
        require("@/assets/leisure9.webp"),
        require("@/assets/leisure10.webp"),
        require("@/assets/leisure12.webp"),
        require("@/assets/leisure13.webp"),
      ],
      [
        require("@/assets/Looding2.webp"),
        require("@/assets/Looding3.webp"),
        require("@/assets/Looding4.webp"),
        require("@/assets/Looding5.webp"),
        require("@/assets/Looding6.webp"),
        require("@/assets/Looding7.webp"),
        require("@/assets/Looding9.webp"),
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
.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}

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
  height: 3360px;
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
.sliderAndLinkContainer {
  width: 85%;
  height: 50%;
  margin: auto auto 10%;
}
.linkContainer {
  height: auto;
  margin-top: -3%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sliderContainer {
  height: 50%;
  width: 60%;
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
  background: url(../assets/Looding3.webp) no-repeat center;
  width: 33%;
  height: 500px;
}
.mainIntroductionToTheDescription {
  color: rgb(0, 166, 42);
  font-size: 40px;
  font-family: Comic Sans MS, Comic Sans, cursive;
}
.mainIntroductionToTheDescriptionT {
  color: rgb(0, 166, 42);
  font-size: 30px;
  font-family: Comic Sans MS, Comic Sans, cursive;
}
.mainDescription {
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-size: 24px;
}
.mainHeaderText {
  margin: auto;
}
.mainHeader {
  font-size: 70px;
  line-height: 1.17;
  letter-spacing: 5px;
  font-family: Comic Sans MS, Comic Sans, cursive;
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
  font-family: Comic Sans MS, Comic Sans, cursive;
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
  height: auto;
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
  width: 92%;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  margin-left: 5%;
  margin-top: 3.5%;
}
</style>
