<template>
  <div style="width: 100%">
    <div class="headInfo">
      <div
        class="head align"
        style="display: flex; align-items: center; flex-direction: column"
      >
        <h2 class="headText">{{ headerText }}</h2>
        <div class="t480__line t-margin_auto" style=""></div>
      </div>
    </div>
    <div class="textCont">
      <p class="bigText" style="color: red">
        <strong>{{ description }}</strong>
      </p>
      <div class="greenText">
        &#9733;
        <strong class="greenText">В стоимость включено:</strong>
      </div>
      <ul>
        <li class="text" v-for="item in content" :key="item">
          <span
            style="height: 60px; width: 60px"
            :style="{
              backgroundImage:
                'url(' + require(`@/assets/icons/${item[1]}.png)` + ')'),
            }"
          >
          </span
          ><span>{{ item[0] }}</span>
        </li>
      </ul>
      <div class="greenText">
        <span>&#9733; </span>
        <span class="greenText">Цена:</span>
      </div>
      <p class="text" style="margin-left: 35px">{{ price }} ₽ / Весь банкет</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceTextFood",
  props: {
    headerText: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: Array[String][String],
      required: true,
    },
    contentLust: {
      type: Array[String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    humans: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
