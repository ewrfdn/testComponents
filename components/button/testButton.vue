<template>
  <div class="t-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TButton',
  props: {
    type: String
  }
}
</script>

<style scoped>
  .t-button {
      display: inline-block;
      padding: 3px 6px;
      background: #000;
      color: #fff;
  }
</style>
