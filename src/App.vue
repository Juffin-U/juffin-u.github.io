<template>
  <router-view />
  <div class="basement">
    <div class="linkLogoCont">
      <div class="formLogo">
        <router-link to="/" class="linkLogo"></router-link>
      </div>
    </div>
    <div class="callBackCont">
      <div class="headrCont">Связаться с нами</div>
      <div class="callbackContText">
        <p>Телефон: +7 (913) 210-19-19</p>
        <p>Почта: green_sad22@mail.ru</p>
        <p>Адрес: г.Барнаул, ул.Власихинская, 67а/210</p>
      </div>
    </div>
    <div class="linksCont">
      <div class="mediaLink">1</div>
      <div class="mediaLink">2</div>
      <div class="mediaLink">3</div>
      <div class="mediaLink">4</div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.basement {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  background-color: #00a62a;
}
.linkLogoCont {
  width: 15%;
  height: 100%;
  display: flex;
}
.linkLogo {
  margin: auto;
  display: flex;
  width: 80px;
  height: 65px;
  background-size: cover;
  background: url(@/assets/logo.webp) no-repeat center;
}
.formLogo {
  margin: auto;
  display: flex;
  width: 80px;
  height: 75px;
  background-size: cover;
  background: bisque;
  border-radius: 130px;
}
.callBackCont {
  height: 90%;
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.headrCont {
  margin: auto;
  width: auto;
}
.callbackCont {
  margin: auto;
  width: auto;
}
.callbackContText {
  margin-bottom: 1%;
  width: auto;
}
.linksCont {
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 1%;
}
body {
  margin: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
