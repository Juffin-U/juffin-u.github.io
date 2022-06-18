<template>
  <div>
    <div class="headInfo">
      <h2 class="headText">{{ headerText }}</h2>
      <div class="t480__line t-margin_auto" style=""></div>
    </div>
    <div class="textCont">
      <p class="bigText">
        <strong>{{ description }}</strong>
      </p>
      <div class="greenText">
        &#9733;
        <strong class="greenText">В стоимость включено:</strong>
      </div>
      <ul>
        <li class="text" v-for="item in content" :key="item">
          {{ item }}
        </li>
      </ul>
      <div class="greenText">
        &#9733;
        <span class="greenText">Цена:</span>
      </div>
      <p class="text" style="margin-left: 35px">{{ price }} ₽ / сутки</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceText",
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
      type: Array[String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
