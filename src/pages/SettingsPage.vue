<template>
  <div class="settings_box">
    <div class="settings">
      <span>Страница создана с целью проверки Vue Router</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 767px) {
  .settings_box {
    min-width: 270px;
  }
}

@media (min-width: 768px) {
  .settings_box {
    max-width: 900px;
  }
}

.settings_box {
  margin: 30px auto 0px;
  padding: 0 15px;
}

.settings {
  height: auto;
  background-color: #def2f1;
  box-shadow: 2px 2px 5px gray;
  padding: 8px 0;
  text-align: center;
  font-family: opensans_bold;
  color: #2b7a78;
  font-size: 1.8rem;
}
</style>