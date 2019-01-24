<template>
  <div class="detail-item">

    <div class="detail-item-main detail-item-simple">
      <slot name="detail-item-simple" />
    </div>
    <div class="detail-item-main detail-item-rich">
      <slot name="detail-item-rich" />

    </div>

  </div>
</template>
<style>
.detail-item {
  height: 100%;
  width: 100%;
}

.detail-item-main {
  width: 100%;
  height: 100%;

  position: relative;
}

.detail-item-simple {
}
.detail-item-rich {
  display: none;
}

.detail-item:hover .detail-item-simple {
  display: none;
}

.detail-item:hover .detail-item-rich {
  display: inherit;
}
</style>
<script>
export default {};
</script>


