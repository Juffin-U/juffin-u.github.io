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
    <ServiceContentLeisure
      class="contentCont"
      v-for="item in serviceData"
      :key="item"
      :headerText="item.name"
      :description="item.discript"
      :content="item.arrayComponents"
      :contentLust="item.arrayComponentsLust"
      :price="item.price"
      :humans="item.humans"
      :image-paths="item.imagePaths"
    >
    </ServiceContentLeisure>
  </div>
  <BasementComponent></BasementComponent>
</template>

<script>
import ServiceContentLeisure from "@/components/ServiceContentLeisure";
import HeadComponent from "@/components/HeadComponent";
import BasementComponent from "@/components/BasmentComponent";
import Food from "@/views/Food";
import HatCompomnent from "@/components/HatCompomnent";

const slides = [
  [
    require("@/assets/leisure1.jpeg"),
    require("@/assets/leisure2.webp"),
    require("@/assets/leisure3.webp"),
    require("@/assets/leisure4.webp"),
  ],
  [
    require("@/assets/leisure6.webp"),
    require("@/assets/leisure7.webp"),
    require("@/assets/leisure8.webp"),
    require("@/assets/leisure9.webp"),
  ],
  [
    require("@/assets/leisure10.webp"),
    require("@/assets/leisure11.webp"),
    require("@/assets/leisure12.webp"),
    require("@/assets/leisure13.webp"),
  ],
];

export default {
  name: "LeisurePage",
  data: () => {
    return {
      serviceData: [
        {
          name: "Русская баня на дровах",
          discript: "Уютная баня с обеденной зоной для вашего праздника!",
          arrayComponents: [
            [
              "Вместимость за столом до 12 человек;",
              "Печь в парной с двойной каменкой обложена камнем жадеитом;",
              "Можно поддавать и париться веником;",
              "В бане теплый пол;",
              "Туалет;",
              "Душевая;",
              "Стол, лавочки;",
              "Музыкальная колонка со светомузыкой;",
              "Чайник;",
              "Микроволновка;",
              "Холодильник;",
              "Посуда;",
              "Телевизоров со смарт-тв;",
            ],
            [
              "humans",
              "hot",
              "hand",
              "heat",
              "toilet",
              "shower",
              "bench",
              "music",
              "teapot",
              "oven",
              "refrigerator",
              "dishes",
              "TV",
            ],
          ],
          price: 1250,
          arrayComponentsLust: [
            "Свыше 5-ти человек + 100 рублей / час за каждого последующего человека",
            "Минимальное время аренды бани 3 часа",
          ],
          humans: 5,
          imagePaths: slides[0],
        },
        {
          name: "Аренда беседки с большой печью барбекю и кондиционером",
          discript:
            "Большая тёплая уютная беседка вместимостью до 36 человек, с возможностью готовить на открытом огне на мангале и в казане",
          arrayComponents: [
            [
              "Светомузыка;",
              "музыкальная колонка;",
              "Холодильник;",
              "микроволновка;",
              "чайник;",
              "Телевизор с подключением караоке;",
              "Печь барбекю;",
              "Мангал, шпажки и решётки для шашлыка;",
              "Казан - 10 и 22 литра;",
              "В беседке высокие потолки и витражные окна;",
              "Стулья с подлокотниками и мягкими подушками;",
              "Туалет;",
              "Гигиенический душ и раковина;",
            ],
            [
              "io",
              "music",
              "refrigerator",
              "oven",
              "teapot",
              "microphone",
              "bbq",
              "kebab",
              "pot",
              "home",
              "bench",
              "toilet",
              "shower",
            ],
          ],
          price: 1500,
          arrayComponentsLust: [
            "Свыше 15 человек + 100 рублей/час за каждого последующего человека;",
            "Минимальное время аренды беседки 5 часов.",
          ],
          humans: 15,
          imagePaths: slides[1],
        },
        {
          name: "Аренда караоке зала",
          discript:
            "Караоке зал с мягкими диванами и столиками на 30 посадочных мест, с мангальной зоной на улице",
          arrayComponents: [
            [
              "Светомузыка;",
              "Музыкальные колонки;",
              "Караоке с проектором и большим экраном на стене;",
              "Холодильник;",
              "Чайник;",
              "Вход в караоке зал отдельный с отдельный санузлом;",
            ],
            ["io", "music", "microphone", "refrigerator", "teapot", "toilet"],
          ],
          price: 1500,
          arrayComponentsLust: [
            "Свыше 15 человек + 100 рублей/час за каждого последующего человека;",
            "Минимальное время аренды зала 5 часов.",
          ],
          humans: 15,
          imagePaths: slides[2],
        },
      ],
      HeadData: [
        {
          description:
            "В Зелёном саду вы, ваша семья и ваши друзья можете отлично провести время позабыв о проблемах, бущуих за стенами этого прекрасного места",
          name: "Досуг",
          image: "leisure1.jpg",
        },
      ],
    };
  },
  components: {
    BasementComponent,
    HeadComponent,
    ServiceContentLeisure,
    HatCompomnent,
  },
};
</script>

<style lang="scss"></style>
