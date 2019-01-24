<template>

  <div class="detail-displayer">
    <div
      v-for="item in items"
      :class="{
                'detail-displayer-item': true,
                'detail-displayer-item-border-right': item.hasBorderRight,
                'detail-displayer-item-active': item.isActive
            }"
      :has-border-right="item.hasBorderRight"
      @mouseenter="handleDetialDisplayerItemEnter"
      :key="item.key"
    >
      <detail-item>

        <div
          slot="detail-item-simple"
          style="text-align: center;"
        >
          <img
            :src="item.icon_1"
            style="width: 30px; height: 30px; margin-top: 16px;"
          />
        </div>

        <div
          slot="detail-item-rich"
          style="text-align: center;"
        >
          <img
            :src="item.icon_2"
            style="width: 30px; height: 30px; margin-top: 16px;"
          />
        </div>

      </detail-item>
    </div>
  </div>

</template>
<style>
.detail-displayer {
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: row nowrap;

  justify-content: space-between;
  align-items: center;
}

.detail-displayer-item {
  flex: 1;
  height: 80%;

  background-color: white;

  border-top: 4px solid #ccc;
  border-bottom: 1px solid #ccc;

  transition: border 0.3s, flex 0.3s, height 0.3s;
}

.detail-displayer-item-border-right {
  border-right: 1px solid #ccc;
}

.detail-displayer-item-active {
  border-top: 4px solid #0087fb;
  border-bottom: 1px solid #0087fb;
  border-left: 1px solid #0087fb;
  border-right: 1px solid #0087fb;

  flex: 2;

  height: 100%;
}
</style>
<script>
import DetailItem from "./DetailItem";

export default {
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    handleDetialDisplayerItemEnter(e) {
      let detailDisplayerItems = document.getElementsByClassName(
        "detail-displayer-item"
      );

      for (let i = 0; i < detailDisplayerItems.length; i++) {
        if (detailDisplayerItems[i].getAttribute("has-border-right")) {
          detailDisplayerItems[i].className =
            "detail-displayer-item detail-displayer-item-border-right";
        } else {
          detailDisplayerItems[i].className = "detail-displayer-item";
        }
      }

      if (e.target.getAttribute("has-border-right")) {
        e.target.className =
          "detail-displayer-item detail-displayer-item-border-right detail-displayer-item-active";
      } else {
        e.target.className =
          "detail-displayer-item detail-displayer-item-active";
      }
    }
  },
  components: {
    DetailItem
  }
};
</script>
