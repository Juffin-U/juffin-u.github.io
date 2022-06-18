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
</template>

<script>
import ServiceContentLeisure from "@/components/ServiceContentLeisure";
import HeadComponent from "@/components/HeadComponent";
import BasementComponent from "@/components/BasmentComponent";

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
            "Вместимость за столом до 12 человек;",
            "Печь в парной с двойной каменкой обложена камнем жадеитом;",
            "Можно поддавать и париться веником!;",
            "В бане теплый пол, туалет, душевая;",
            "Стол, лавочки;",
            "Музыкальная колонка со светомузыкой- есть возможность запуска со своего смартфона или флешки;",
            "Чайник, микроволновка, холодильник+ посуда;",
            "Телевизоров со смарт-тв;",
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
            "Светомузыка, музыкальная колонка - есть возможность запуска со своего смартфона или флешки (тогда дадим пульт);",
            "Холодильник, микроволновка, чайник, теплая вода;",
            "Телевизор с подключением караоке;",
            "Печь барбекю, мангал, шпажки и решётки для шашлыка, казан - 10 и 22 литра;",
            "В беседке высокие потолки и витражные окна, стулья с подлокотниками и мягкими подушками;",
            "Тёплый туалет с водой, гигиенический душ, раковина;",
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
            "Светомузыка;",
            "Музыкальные колонки с возможностью запуска со смартфона, флешки или ноутбука;",
            "Караоке с проектором и большим экраном на стене;",
            "Холодильник, чайник;",
            "Вход в караоке зал отдельный с отдельный санузлом;",
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
  components: { BasementComponent, HeadComponent, ServiceContentLeisure },
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
.contentCont {
  width: 80%;
  height: 15%;
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
