<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-size: large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.basement {
  color: white;
  font-size: x-large;
  width: 100%;
  height: 260px;
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
  text-decoration: none;
  height: 90%;
  width: 90%;
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
  width: 5%;
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
