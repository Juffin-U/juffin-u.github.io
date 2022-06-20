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
      <p class="bigText">
        <strong>{{ description }}</strong>
      </p>
      <div class="greenText">
        &#9733;
        <strong class="greenText">В стоимость включено:</strong>
      </div>
      <div
        class="text"
        v-for="index in content[0].length"
        :key="index"
        style="display: flex; flex-direction: row; align-items: center"
      >
        <div style="width: 6%">
          <div
            style="height: 40px; width: 40px; background-size: cover"
            :style="{
              backgroundImage:
                'url(' +
                require(`@/assets/icons/${content[1][index - 1]}.png`) +
                ')',
            }"
          />
        </div>
        <div>{{ content[0][index - 1] }}</div>
      </div>
      <div class="greenText">
        <span>&#9733; </span>
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
      type: Array,
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
