<template>
  <div class="contentCont">
    <div class="infoCont">
      <ServiceText
        v-if="addition"
        :headerText="headerText"
        :content="content"
        :description="description"
        :price="price"
      />
      <ServiceTextFood
        v-else
        :headerText="headerText"
        :content="content"
        :description="description"
        :price="price"
      />
    </div>
    <div class="sliderCont">
      <vueper-slides
        arrows-inside
        bullets-inside
        class="no-shadow"
        transition-speed="250"
        :slide-ratio="0.7"
      >
        <vueper-slide
          v-for="(imagePath, i) in imagePaths"
          :key="i"
          :image="imagePath"
        />
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import ServiceText from "@/components/ServiceText";
import ServiceTextFood from "@/components/ServiceTextFood";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "ServiceContentFood",
  components: { ServiceTextFood, ServiceText, VueperSlides, VueperSlide },
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
    price: {
      type: Number,
      required: true,
    },
    imagePaths: {
      type: Array,
      required: true,
    },
    addition: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
};
</script>

<style scoped></style>
