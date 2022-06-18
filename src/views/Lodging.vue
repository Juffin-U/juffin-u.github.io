<template>
  <BasementComponent></BasementComponent>
  <div class="mainCont">
    <HeadComponent
      class="contentContH"
      v-for="item in HeadData"
      :key="item"
      :description="item.description"
      :head-text="item.name"
      :image="item.image"
    ></HeadComponent>
    <ServiceContent
      class="contentCont"
      v-for="item in serviceData"
      :key="item"
      :headerText="item.name"
      :description="item.discript"
      :content="item.arrayComponents"
      :price="item.price"
      :image-paths="item.imagePaths"
    >
    </ServiceContent>
  </div>
</template>

<script>
import ServiceContent from "@/components/ServiceContent";
import HeadComponent from "@/components/HeadComponent";
import BasementComponent from "@/components/BasmentComponent";

const slides = [
  [
    require("@/assets/Food.jpg"),
    require("@/assets/food1.webp"),
    require("@/assets/food6.webp"),
    require("@/assets/Looding2.webp"),
  ],
  [
    require("@/assets/Looding2.webp"),
    require("@/assets/Looding3.webp"),
    require("@/assets/Looding4.webp"),
    require("@/assets/Looding5.webp"),
  ],
  [
    require("@/assets/Looding7.webp"),
    require("@/assets/Looding3.webp"),
    require("@/assets/Looding8.webp"),
    require("@/assets/Looding9.webp"),
  ],
];

export default {
  name: "LodgingPage",
  data: () => {
    return {
      serviceData: [
        {
          name: "Аренда Коттеджа",
          discript: "2-х этажный коттедж 500 м² на участке 20 соток",
          arrayComponents: [
            "На 1 этаже банкетный зал на 65 человек, кондиционеры, музыкальныеколонки,светомузыка, телевизор с большим экраном со Smart TV, сбольшими витражными окнами с выходом на застекленную веранду;",
            "На веранде большая печь барбекю с возможностью готовить на открытомогне, на мангале и в казане на 10 - 22 литров, шпажками, решетками длябарбекю;",
            "Кухня со всем необходимым оборудованием, 2 санузла, гардероб;",
            "На цокольном этаже большой караоке зал с мягкими диванами и столиками, музыкальными колонками, светомузыкой. Также караоке с большим экраном на стене;",
            "На 2 этаже гостиничные номера люкс с 2-х спальными кроватями,кондиционерами, телевизорами со Smart TV, чайниками, посудой,холодильником, 4 однокомнатных и 1 двухкомнатный. Всего 17 спальныхмест;",
          ],
          price: 50000,
          imagePaths: slides[0],
        },
        {
          name: "Аренда однокомнатного Гостиничного номера Люкс",
          discript: "Однокомнатный гостиничный люкс с 2-х спальной кроватью",
          arrayComponents: [
            "Кондиционер;",
            "Телевизор со Smart TV;",
            "Чайник;",
            "Холодильник;",
            "обственный санузел;",
            "Душевая;",
          ],
          price: 2000,
          imagePaths: slides[1],
        },
        {
          name: "Аренда двухкомнатного Гостиничного номера Люкс",
          discript:
            "Двухкомнатный гостиничный люкс с двумя 2-х спальными кроватями",
          arrayComponents: [
            "Кондиционер;",
            "Телевизор со Smart TV;",
            "Чайник;",
            "обственный санузел;",
            "Душевая;",
          ],
          price: 4000,
          imagePaths: slides[2],
        },
      ],
      HeadData: [
        {
          description:
            "Мы предоставляем комфортабельные и раскошные аппартамнты из наивысших сортов тёмного дуба, обставленные по последнему слову современного дизайна и мебелированные фешенебельной мебелью",
          name: "Проживание",
          image: "Looding3.webp",
        },
      ],
    };
  },
  components: { BasementComponent, HeadComponent, ServiceContent },
};
</script>

<style lang="scss">
.mainCont {
  width: 100%;
  height: 4560px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}
.contentCont {
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-between;
}

.contentContH {
  width: 80%;
  height: 15%;
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-between;
}

.t480__line {
  margin: -3.5% auto auto;
  max-width: 65px;
  width: 100%;
  height: 3px;
  background-color: #666;
  display: block;
}
.sliderCont {
  height: 85%;
  width: 45%;
  margin: auto;
}
.infoCont {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
  margin: 0 auto auto;
}
.infoContH {
  height: 40%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto auto;
}
.headInfo {
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  height: 30%;
}

.textCont {
  font-family: Comic Sans MS, Comic Sans, cursive;
  text-align: left;
  margin: auto;
  height: 60%;
  width: 80%;
  font-size: x-large;
  color: #000;
}
.headText {
  color: rgb(0, 166, 42);
  text-align: center;
  font-family: Arial, serif;
  font-size: 40px;
}
.text {
  text-align-all: left;
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-size: 20px;
  font-weight: 300;
  color: #000;
}
.greenText {
  text-align-all: left;
  font-size: x-large;
  font-family: Comic Sans MS, Comic Sans, cursive;
  color: rgb(0, 166, 42);
  font-weight: bold;
}
.bigText {
  text-align: left;
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-size: x-large;
  font-weight: 300;
  color: #000;
}
</style>
