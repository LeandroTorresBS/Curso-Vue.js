<template>
  <div class="citacao">
    <div class="autor">
      <slot name="autor"></slot>
    </div>
    <slot></slot>
    <slot name="fonte"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}

.autor {
    float: right;
}
</style>
