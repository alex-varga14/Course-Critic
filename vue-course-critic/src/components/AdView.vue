<template>
  <div  id="adViewHome" class="page-container">
    <section class="section-app-face children-center grid-cover-container">
      <div class="image-1" />
      <div class="grid-cover-content children-center">
        <div class="title">
          <span class="defi-text">Admin Home Page</span>
        </div>
        <div class="row-box-1">
          <router-link to="/coursesAdmin">
            <div class="card button-like card-1">
              <span class="font">Courses-Admin View</span>
            </div>
          </router-link>
          <router-link to="/approve">
            <div class="card button-like card-1">
              <span class="font">Approve Course</span>
            </div>
          </router-link>
          <router-link to="/login">
            <div class="card button-like card-1">
              <span class="font">Logout</span>
            </div>
          </router-link>
        </div>
     </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "adViewHome",
  props: {
    msg: String
  }
}
</script>

<style scoped>
/* utilities */
.card {
  padding: 12px 24px;
  border-radius: 6px;
}
.button-like {
  cursor: pointer;
  user-select: none;
  transition: 75ms;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
}

.children-center {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr;
}
.children-center,
.children-text-center > * {
  text-align: center;
}
.children-center,
.children-flex-content-center > * {
  justify-content: center;
}

.title-text {
  margin-bottom: 32px;
}
.title-text .line {
  margin: 8px auto;
  width: 40px;
  height: 1px;
  border-radius: 2px;
  background: radial-gradient(39.84% 47.5% at 96.82% 58.33%, #d8c839 0%, #f19010 100%);
}
.title-text .text {
  font-size: 20px;
  line-height: 27px;
  color: #000000;
}

.grid-cover-container {
  place-items: center;
  display: grid;
}
.grid-cover-container > * {
  max-width: 100%;
  grid-area: 1 / 1;
  overflow: auto;
}

.page-container {
  --text-primary: #000000;
  --text-secondary: hsl(35deg, 100%, 75%);
}

.section-app-face {
  margin-top: 80px;
  margin-bottom: 72px;
  height: 804px;
  position: relative;
}

.section-app-face .image-1 {
  background-image: url('../assets/background/cc-svg-logo.svg');
  background-repeat: no-repeat;
  height: 100%;
  width: 744px;
}
.section-app-face .title {
  font-weight: 300;
  font-size: 48px;
  line-height: 50px;
  color: var(--text-primary);
  margin-bottom: 16px;
  margin-top: 56px;
}

.section-app-face .defi-text {
  font-weight: 550;
  color: transparent;
  background: radial-gradient(circle at top right, #e8b338, #f2800f);
  background-clip: text;
}
.section-app-face .row-box-1 {
  display: grid;
  grid-auto-flow: column;
  gap: 32px;
  margin-bottom: 68px;
}
.section-app-face .row-box-1 .card-1 {
  border-radius: 12px;
  color: white;
  background: linear-gradient(245.22deg, #fc2808 35%, #ed871a 65.17%, #f7f143 92.1%);
  background-position: 1% 50%;
  background-size: 150% 150%;
  transition: 500ms;
}
.section-app-face .row-box-1 .card-1:hover {
  border-radius: 12px;
  color: white;
  background-position: 99% 50%;
}

@media (max-width: 1128px) {
  /* is tablet */

  .section-app-face {
    margin-top: 116px;
    height: 720px;
  }
  .section-app-face .image-1 {
    background-size: 100%;
    width: 668px;
  }
  .section-app-face .title {
    font-size: 48px;
    line-height: 44px;
  }
  .section-app-face .row-box-1 {
    gap: 24px;
    margin-bottom: 84px;
  }
}

@media (max-width: 768px) {
  /* is phone */
  .button-like {
    font-size: 12px;
    line-height: 15px;
  }
  .card {
    padding: 10px 20px;
  }
  .title-text .text {
    font-size: 16px;
    line-height: 20px;
  }

  .section-app-face {
    margin-top: 116px;
    height: unset;
  }
  .section-app-face .image-1 {
    width: 394px;
    height: 430px;
  }
  .section-app-face .title {
    font-size: 32px;
    line-height: 32px;
  }
  .section-app-face .row-box-1 {
    gap: 20px;
    margin-bottom: 56px;
  }
  .section-app-face .row-box-1 .card-1 {
    font-size: 12px;
    line-height: 15px;
  }
}
</style>