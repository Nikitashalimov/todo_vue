<template>
  <div class="navbar">
    <div class="navbar_wrapper">
      <div class="navbar_home_btn" @click="$router.push('/')">
        <img
          class="navbar_icon"
          src="https://img.icons8.com/material-rounded/192/2B7A78/home.png"
        />
      </div>
      <div class="navbar_settings_box">
        <div class="navbar_info">
          <div class="navbar_status">
            <img
              class="navbar_info_icon"
              src="https://img.icons8.com/color/144/000000/ok--v1.png"
            />
            {{ sumFinishedTasks }}
          </div>
          <div class="navbar_status">
            <img
              class="navbar_info_icon"
              src="https://img.icons8.com/color/144/000000/cancel--v1.png"
            />
            {{ sumAllTasks }}
          </div>
        </div>
        <div @click="$router.push('/settings')" class="navbar_settings_btn">
          <img
            class="navbar_icon"
            src="https://img.icons8.com/ios-filled/150/2B7A78/settings.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["sumAllTasks", "sumFinishedTasks"]),
  },
};
</script>

<style scoped>
@media (max-width: 767px) {
  .navbar_wrapper {
    padding: 0 20px;
  }
}

@media (min-width: 768px) {
  .navbar_wrapper {
    max-width: 900px;
    margin: auto;
    padding: 0 25px;
  }
}

.navbar {
  height: 50px;
  background-color: #feffff;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
}

.navbar_wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar_settings_box {
  display: flex;
  align-items: center;
}

.navbar_home_btn {
  cursor: pointer;
  margin-right: auto;
}

.navbar_info {
  display: flex;
  flex-direction: column;
}

.navbar_settings_btn {
  margin-left: 20px;
  cursor: pointer;
}

.navbar_icon {
  width: 30px;
  height: 30px;
}

.navbar_status {
  display: flex;
  font-family: opensans_bold;
  color: #2b7a78;
  font-size: 1.8rem;
}

.navbar_info_icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>