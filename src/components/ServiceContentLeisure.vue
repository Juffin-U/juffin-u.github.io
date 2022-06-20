<template>
  <div class="contentCont">
    <div class="infoCont">
      <ServiceTextLeisure
        :headerText="headerText"
        :content="content"
        :contentLust="contentLust"
        :description="description"
        :price="price"
        :humans="humans"
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
import ServiceTextLeisure from "@/components/ServiceTextLeisure";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "ServiceContentLeisure",
  components: { ServiceTextLeisure, VueperSlides, VueperSlide },
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
    contentLust: {
      type: Array[String],
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
    humans: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
