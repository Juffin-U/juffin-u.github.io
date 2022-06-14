<template>
  <div class="mainCont">
    <div class="contentCont">
      <div
        class="sliderCont"
        style="background-size: cover; background: url(../assets/Looding.jpeg)"
      ></div>
      <div class="infoCont">
        <div class="headInfo"><p class="headText">Проживание</p></div>
        <div class="textCont">
          Мы предоставляем комфортабельные и раскошные аппартамнты из наивысших
          сортов тёмного дуба, обставленные по последнему слову современного
          дизайна и мебелированные фешенебельной мебелью
        </div>
      </div>
    </div>
    <div class="contentCont">
      <div class="infoCont">
        <div class="headInfo">
          <p class="headText">Аренда Коттеджа</p>
          <div class="t480__line t-margin_auto" style=""></div>
        </div>
        <div class="textCont">
          <p class="bigText">
            <strong>2-х этажный коттедж 500 м² на участке 20 соток</strong>
          </p>
          <div class="greenText">
            &#9733;
            <strong class="greenText">В стоимость включено:</strong>
          </div>
          <div>
            &bull;
            <span class="text"
              >На 1 этаже банкетный зал на 65 человек, кондиционеры, музыкальные
              колонки,светомузыка, телевизор с большим экраном со Smart TV, с
              большими витражными окнами с выходом на застекленную
              веранду;</span
            >
          </div>
          <div>
            &bull;
            <span class="text"
              >На веранде большая печь барбекю с возможностью готовить на
              открытом огне, на мангале и в казане на 10 - 22 литров, шпажками,
              решетками для барбекю;</span
            >
          </div>
          <div>
            &bull;
            <span class="text"
              >Кухня со всем необходимым оборудованием, 2 санузла,
              гардероб;</span
            >
          </div>
          <div>
            &bull;
            <span class="text"
              >На цокольном этаже большой караоке зал с мягкими диванами и
              столиками, музыкальными колонками, светомузыкой. Также караоке с
              большим экраном на стене;</span
            >
          </div>
          <div>
            &bull;
            <span class="text"
              >На 2 этаже гостиничные номера люкс с 2-х спальными кроватями,
              кондиционерами, телевизорами со Smart TV, чайниками, посудой,
              холодильником, 4 однокомнатных и 1 двухкомнатный. Всего 17
              спальных мест;</span
            >
          </div>
          <div class="greenText">
            &#9733;
            <span class="greenText">Цена:</span>
          </div>
          <p class="text">50 000 рублей / сутки 17 спальных мест</p>
        </div>
      </div>
      <div class="sliderCont">тут картинка</div>
    </div>
    <div class="contentCont">
      <div class="infoCont">
        <div class="headInfo">
          <p class="headText">Аренда однокомнатного Гостиничного номера Люкс</p>
        </div>
        <div class="t480__line t-margin_auto" style=""></div>
        <div class="textCont">
          <p class="bigText">
            <strong>
              Однокомнатный гостиничный люкс с 2-х спальной кроватью</strong
            >
          </p>
          <div class="greenText">
            &#9733;
            <span class="greenText">В стоимость включено:</span>
          </div>
          <div>
            &bull;
            <span class="text">Кондиционер;</span>
          </div>
          <div>
            &bull;
            <span class="text">Телевизор со Smart TV;</span>
          </div>
          <div>
            &bull;
            <span class="text">Чайник;</span>
          </div>
          <div>
            &bull;
            <span class="text">Холодильник;</span>
          </div>
          <div>
            &bull;
            <span class="text">Собственный санузел;</span>
          </div>
          <div>
            &bull;
            <span class="text">Душевая;</span>
          </div>
          <div class="greenText">
            &#9733;
            <span class="greenText">Цена:</span>
          </div>

          <p class="text">2 000 рублей / сутки</p>
        </div>
      </div>
      <div class="sliderCont">тут картинка</div>
    </div>
    <div class="contentCont">
      <div class="infoCont">
        <div class="headInfo">
          <p class="headText">Аренда двухкомнатного Гостиничного номера Люкс</p>
        </div>
        <div class="t480__line t-margin_auto" style=""></div>
        <div class="textCont">
          <p class="bigText">
            <strong>
              Двухкомнатный гостиничный люкс с двумя 2-х спальными
              кроватями</strong
            >
          </p>
          <div class="greenText">
            &#9733;
            <span class="greenText">В стоимость включено:</span>
          </div>
          <div>
            &bull;
            <span class="text">Кондиционер;</span>
          </div>
          <div>
            &bull;
            <span class="text">Телевизор со Smart TV;</span>
          </div>
          <div>
            &bull;
            <span class="text">Чайник;</span>
          </div>
          <div>
            &bull;
            <span class="text">Собственный санузел;</span>
          </div>
          <div>
            &bull;
            <span class="text">Душевая;</span>
          </div>
          <div class="greenText">
            &#9733;
            <span class="greenText">Цена:</span>
          </div>

          <p class="text">4 000 рублей/сутки.</p>
        </div>
      </div>
      <div class="sliderCont">тут картинка</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default {
  name: "LeisurePage",
};
</script>

<style lang="scss" scoped>
.mainCont {
  width: 100%;
  height: 3060px;
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

.t480__line {
  margin: -3.5% auto auto;
  max-width: 65px;
  width: 100%;
  height: 3px;
  background-color: #666;
  display: block;
}
.sliderCont {
  height: 40%;
  width: 45%;
  margin: auto;
}
.infoCont {
  height: 40%;
  width: 35%;
  margin: 0 auto auto;
}
.headInfo {
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  height: 30%;
}
.textCont {
  text-align: left;
  margin: auto;
  height: 60%;
  width: 80%;
  font-size: 17px;
  color: #000;
}
.headText {
  color: rgb(0, 166, 42);
  text-align: center;
  font-family: Arial, serif;
  font-size: 26px;
}
.text {
  text-align-all: left;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: #000;
}
.greenText {
  text-align-all: left;
  font-family: "Roboto", Arial, sans-serif;
  font-size: 15px;
  color: rgb(0, 166, 42);
  font-weight: bold;
}
.bigText {
  text-align: left;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  color: #000;
}
</style>
