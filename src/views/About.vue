<template>
  <v-container class="ma-0 pa-0 wrapper" fluid>
    <v-sheet id="headline" class="display-2 align-center">
      <span id="spacing-text" class="text-style pa-right"
        >A nossa missão é te possibilitar viver<br />
        da melhor forma que pode!<br />
        Do seu jeito. <br />
        De acordo com suas necessidades.</span
      >
      <span class="text-style secondary--text pa-right"
        >O tempo é agora. Bora viver?
      </span>
    </v-sheet>
    <v-sheet class="display-2">
      <v-row class="d-flex align-center">
        <v-col
          class="d-flex flex-column align-center"
          xs="12"
          sm="12"
          md="6"
          lg="6"
          style="padding-bottom:50px;"
        >
          <span class="text-style-secondary pa-left pa-bottom"
            >Somos uma plataforma<br />
            desenvolvida para você<br />
            encontrar o melhor lugar <br />
            para viver!
          </span>
        </v-col>
        <v-col
          class="d-flex flex-column align-center mb-10"
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <v-img src="../assets/images/about-girl.png" class="" />
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="d-flex align-center" no-gutters="">
        <v-col
          class="d-flex flex-column justify-center "
          xs="12"
          sm="6"
          md="3"
          lg="3"
        >
          <v-img
            class="img-icon-size"
            src="../assets/images/icon-confort.png"
            style="width: 72.76px"
          />
          <span class="text-icon">Conforto</span>
        </v-col>
        <v-col
          class="d-flex flex-column justify-center "
          xs="12"
          sm="6"
          md="3"
          lg="3"
        >
          <v-img class="img-icon-size" src="../assets/images/icon-safety.png" />
          <span class="text-icon">Segurança</span>
        </v-col>
        <v-col
          class="d-flex flex-column justify-center "
          xs="12"
          sm="6"
          md="3"
          lg="3"
        >
          <v-img class="img-icon-size" src="../assets/images/icon-key.png" />
          <span class="text-icon">Facilidade</span>
        </v-col>
        <v-col
          class="d-flex flex-column justify-center "
          xs="12"
          sm="6"
          md="3"
          lg="3"
        >
          <v-img src="../assets/images/icon-home.png" class="img-icon-size" />
          <span class="text-icon">Novo lar</span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="d-flex align-center">
        <v-col
          class="d-flex flex-column align-center mt-12 "
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <v-img src="../assets/images/couple.png" class="" />
        </v-col>
        <v-col
          class="d-flex flex-column align-center"
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <span class="text-style-secondary pa-left pa-bottom">
            Nosso objetivo é ajudar você <br />
            a encontrar o imóvel ideal, no <br />
            lugar que tem a sua cara!
          </span>
        </v-col>
      </v-row>
    </v-sheet>
    <v-divider style="margin-top: 6%; margin-bottom:4%;"></v-divider>
    <v-row no-gutters class="d-flex align-center">
      <span class="text-style-tertiary pa-left">
        <span>Então,</span> qual vida você quer viver?
      </span>
    </v-row>
    <v-divider style="margin-top: 4%;"></v-divider>
    <v-row no-gutters class="d-flex text-style-tertiary align-center">
      <v-col class="text-center" style="padding-top:5%; padding-bottom:3%;">
        <span>Fundadores</span>
      </v-col>
    </v-row>
    <v-row no-gutters class="d-flex align-center" align="center">
      <v-col class="d-flex flex-column justify-center mb-12 align-center">
        <v-img src="../assets/images/handall.png" />
        <span class="text-name-founders">Handall</span>
        <span class="text-part-founders">Co-Founder</span>
      </v-col>
      <v-col class="d-flex flex-column justify-center mb-12 align-center">
        <v-img src="../assets/images/andre.png" />
        <span class="text-name-founders">André Filipe Freitas</span>
        <span class="text-part-founders">Founder</span>
      </v-col>
      <v-col class="d-flex flex-column justify-center mb-12 align-center">
        <v-img src="../assets/images/alexandre.png" />
        <span class="text-name-founders">Alexandre Martins</span>
        <span class="text-part-founders">Co-Founder</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
  width: 100% !important;
  max-width: 100% !important;
  position: relative;
}

#headline {
  width: 100% !important;
  max-width: 100% !important;
  min-height: 770px;
  background: linear-gradient(
      90deg,
      rgba(127, 86, 195, 0.9) 0%,
      rgba(81, 194, 247, 0.9) 121.21%
    ),
    url('../assets/images/frontpage-background.png') no-repeat;
  background-size: cover;
  z-index: 1;
}
.text-style {
  font-family: Roboto, sans-serif;
  font-style: bold;
  font-size: 35px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 1.02px;
  color: white;
  margin-left: 5%;
}
#spacing-text {
  margin-top: 8%;
}
.text-style-secondary {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 41px;
  letter-spacing: 1.02px;
  margin-top: 10%;
  color: #7f56c3;
}
.bottom-text {
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 1.48194px;
}
.bottom {
  width: 100%;
  max-width: 100% !important;
  padding: 40px 80px;
}
.img-container {
  left: 8%;
  width: 100%;
  max-width: 380px;
  height: 430px;
  background-color: #7f56c3;
  position: relative;
  padding-top: 37px;
  padding-left: 25px;
}
.img-container-over {
  bottom: 20px;
  right: 20px;
  width: 380px;
  height: 430px;
  background-color: #7f56c3;
  position: absolute;
  padding-top: 84px;
}
.img-icon-size {
  margin-top: 40px;
  width: 81px;
  height: 81px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
.text-icon {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 20px;
  letter-spacing: 1.02px;
  margin-left: auto;
  margin-right: auto;
  color: #34b6f2;
  padding-top: 4%;
}
.text-style-tertiary {
  color: #34b6f2;
  font-style: bold;
  font-size: 35px;
  font-family: Roboto;
  font-weight: 500;
  margin: auto;
}
.text-style-tertiary span {
  color: #7f56c3;
  font-size: 35px;
}
.text-name-founders {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 1.02px;
  padding-top: 20px;
  color: #454646;
}
.text-part-founders {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 1.02px;
  color: #7f56c3;
}

.couple-center {
  margin-top: auto;
  margin-bottom: auto;
}
@media screen and (max-width: 600px) {
  .pa-right {
    padding-right: 4%;
  }
  .pa-left {
    padding-left: 4%;
  }
  .pa-bottom {
    padding-bottom: 5%;
  }
}
</style>
