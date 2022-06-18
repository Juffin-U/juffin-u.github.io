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
    <ServiceContentFood
      class="contentCont"
      v-for="item in serviceData"
      :addition="item.addition"
      :symbol="item.symbol"
      :key="item"
      :headerText="item.name"
      :description="item.discript"
      :content="item.arrayComponents"
      :contentLust="item.arrayComponentsLust"
      :price="item.price"
      :humans="item.humans"
      :image-paths="item.imagePaths"
    >
    </ServiceContentFood>
  </div>
</template>

<script>
import ServiceContentFood from "@/components/ServiceContentFood";
import HeadComponent from "@/components/HeadComponent";
import BasementComponent from "@/components/BasmentComponent";

const slides = [
  [
    require("@/assets/food1.webp"),
    require("@/assets/food2.webp"),
    require("@/assets/food3.webp"),
    require("@/assets/food4.webp"),
  ],
  [
    require("@/assets/food6.webp"),
    require("@/assets/food7.webp"),
    require("@/assets/food9.webp"),
    require("@/assets/food10.webp"),
  ],
  [
    require("@/assets/Food.jpg"),
    require("@/assets/food8.webp"),
    require("@/assets/leisure6.webp"),
  ],
];

export default {
  name: "FoodPage",
  data: () => {
    return {
      serviceData: [
        {
          name: "Аренда Банкетного зала",
          discript: "Банкетный зал, вместимостью до 65 человек",
          arrayComponents: [
            [
              "Кондиционеры;",
              "Светомузыка;",
              "Музыкальные колонки с возможностью запуска со смартфона, флешки или ноутбука ;",
              "Караоке;",
              "Телевизор с большим экраном и Smart TV.",
            ],
            ["барбекю"],
          ],
          price: 1500,
          arrayComponentsLust: [
            "Свыше 10 человек + 100 рублей/час за каждого последующего человека;",
            "Минимальное время аренды 5 часов",
          ],
          humans: 10,
          imagePaths: slides[0],
          addition: true,
        },
        {
          name: "Аренда веранды барбекю",
          discript: "Дополнительно к Банкетному залу",
          arrayComponents: [
            [
              "Печь барбекю;",
              "Мангал;",
              "Шпажки и решётки для шашлыка;",
              "Казан - 10 и 22 литра.",
            ],
            ["барбекю"],
          ],
          price: 3000,
          arrayComponentsLust: [],
          humans: 10,
          imagePaths: slides[1],
          addition: false,
        },
        {
          name: "Аренда Кухни",
          discript: "Дополнительно к Банкетному залу",
          arrayComponents: [
            [
              "Оборудованная кухня со всем необходимым для приготовления блюд, на которой вы можете приготовить сами из ваших собственных продуктов со своим алкоголем или пригласить повара.",
            ],
            ["барбекю"],
          ],
          price: 2500,
          arrayComponentsLust: [],
          humans: 10,
          imagePaths: slides[2],
          addition: false,
          symbol: "&#9733",
        },
      ],
      HeadData: [
        {
          description:
            "В Зелёном саду вы, ваша семья и ваши друзья можете отлично провести время позабыв о проблемах, бущуих за стенами этого прекрасного места",
          name: "Банкет",
          image: "food5.webp",
        },
      ],
    };
  },
  components: { BasementComponent, HeadComponent, ServiceContentFood },
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
.t4801__line {
  margin: auto;
  max-width: 65px;
  width: 100%;
  height: 3px;
  background-color: #666;
  display: block;
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
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
