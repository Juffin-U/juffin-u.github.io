<template>
  <HatCompomnent></HatCompomnent>
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
  <BasementComponent></BasementComponent>
</template>

<script>
import ServiceContent from "@/components/ServiceContent";
import HeadComponent from "@/components/HeadComponent";
import BasementComponent from "@/components/BasmentComponent";
import HatCompomnent from "@/components/HatCompomnent";
import Food from "@/views/Food";

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
            [
              "Банкетный зал на 65 человек;",
              "кондиционеры;",
              "музыкальные колонки;",
              "светомузыка;",
              "телевизор с большим экраном со Smart TV;",
              "Большая печь барбекю c решетками;",
              "Мангал c шпажками;",
              "Казан на 10 - 22 литров;",
              "Кухня со всем необходимым оборудованием; ",
              "2 санузла;",
              "Гардероб;",
              "Большой караоке зал с мягкими диванами и столиками;",
              "Гостиничные номера люкс с 2-х спальными кроватями ",
              "Чайник;",
              "Холодильник;",
              "Всего 17 спальныхмест;",
            ],
            [
              "humans",
              "conditioner",
              "music",
              "io",
              "TV",
              "bbq",
              "kebab",
              "pot",
              "oven",
              "toilet",
              "wardrobe",
              "bench",
              "home",
              "teapot",
              "refrigerator",
              "humans",
            ],
          ],
          price: 50000,
          imagePaths: slides[0],
        },
        {
          name: "Аренда однокомнатного Гостиничного номера Люкс",
          discript: "Однокомнатный гостиничный люкс с 2-х спальной кроватью",
          arrayComponents: [
            [
              "Кондиционер;",
              "Телевизор со Smart TV;",
              "Чайник;",
              "Холодильник;",
              "обственный санузел;",
              "Душевая;",
            ],
            ["conditioner", "TV", "teapot", "refrigerator", "toilet", "shower"],
          ],
          price: 2000,
          imagePaths: slides[1],
        },
        {
          name: "Аренда двухкомнатного Гостиничного номера Люкс",
          discript:
            "Двухкомнатный гостиничный люкс с двумя 2-х спальными кроватями",
          arrayComponents: [
            [
              "Кондиционер;",
              "Телевизор со Smart TV;",
              "Чайник;",
              "обственный санузел;",
              "Душевая;",
            ],
            ["conditioner", "TV", "teapot", "toilet", "shower"],
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
  components: {
    BasementComponent,
    HeadComponent,
    ServiceContent,
    HatCompomnent,
  },
};
</script>

<style lang="scss"></style>
