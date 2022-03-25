<template>
  <div class="page-container" id="home">
    <section class="section-app-face children-center grid-cover-container">
      <div class="image-1" />
      <div class="grid-cover-content children-center">
        <div class="title">
          A True <br />
          Critique of <span class="defi-text">Courses</span>
        </div>
        <div class="subtitle">
          Peer-to-Peer <b>review</b>. Honest <b>ratings</b>. {{ '\n' }} <span class="red-yel">Accurate</span> <b>workloads</b>.
        </div>

        <div class="row-box-1">
          <router-link to="/courselist">
            <div class="card button-like card-1"><span class="font">Courses</span>
            </div>
          </router-link>
        </div>
     </div>
    </section>

    <section class="section-app-face2 section-features -2 children-center grid-cover-container">
      <div class="content">
        <div class="title-text">
          <div class="line" />
          <div class="text">CourseCritic provides past students honest Ratings and Reviews!</div>
        </div>

        <div class="boards">
          <div class="card children-center forsted-glass buriedlightsmoke">
            <div class="card icon-like forsted-glass teal">
              <img class="icon" src="../assets/icons/order-book-AMM.svg" />
            </div>
            <div class="feature-title">Ratings</div>
            <div class="feature-description">
                  Rate Courses with Ease.
            </div>
          </div>

          <div class="card children-center forsted-glass buriedlightsmoke">
            <div class="card icon-like forsted-glass teal">
              <img class="icon" src="../assets/icons/best-price-swaps.svg" />
            </div>
            <div class="feature-title">Reviews</div>
            <div class="feature-description">
                View and Leave Candid Reviews.
            </div>
          </div>

          <div class="card children-center forsted-glass buriedlightsmoke">
            <div class="card icon-like forsted-glass teal">
              <img class="icon" src="../assets/icons/high-liquidity-launches.svg" />
            </div>
            <div class="feature-title">Discussion</div>
            <div class="feature-description">
                  Discussion Coming Soon...
            </div>
          </div>
        </div>

      </div>
    </section>

    <footer class="page-footer">
      <div class="links-group">
        <div class="group site">
          <div class="title-text">
            <div class="text">SITE</div>
            <div class="line" />
          </div>
          <ul class="links">
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact Us</router-link>
            </li>
          </ul>
        </div>

        <div class="group">
          <div class="title-text">
            <div class="text">GET STARTED</div>
            <div class="line" />
          </div>
          <ul class="links">
            <li>
              <router-link to="/courselist">View Courses</router-link>
            </li>
            <li>
              <router-link to="/add">Suggest Courses</router-link>
            </li>
          </ul>
        </div>

        <div class="group community">
          <div class="title-text">
            <div class="text">COMMUNITY</div>
            <div class="line" />
          </div>
          <ul class="links">
            <li>
              <router-link to="/guidelines">Site Guidelines</router-link>
            </li>
            <li>
              <router-link to="/terms">Terms and Conditions</router-link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
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

.forsted-glass {
  position: relative;
  backdrop-filter: blur(var(--blur-size));
  color: var(--text-color);
  border-radius: var(--border-radius);
  background: linear-gradient(126.7deg, var(--bg-board-color) 28.7%, var(--bg-board-color-2, var(--bg-board-color)));
}
.forsted-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.7;
  background: transparent;
  border-radius: inherit;
  box-shadow: inset 0 0 0 var(--border-line-width, 1.5px) var(--border-color);
  mask-image: radial-gradient(at -31% -58%, hsl(0, 0%, 0%, 0.5) 34%, transparent 60%),
    linear-gradient(to left, hsl(0, 0%, 0%, 0.2) 0%, transparent 13%),
    linear-gradient(hsl(0deg 0% 0% / 5%), hsl(0deg 0% 0% / 5%));
}
.forsted-glass.buriedlightsmoke,
.forsted-glass.lightsmoke {
 --border-color: hsl(36, 87%, 65%);
  --bg-board-color: rgba(221, 44, 21, 0.767);
  --bg-board-color-2: rgb(175, 96, 5);
  --text-color: hsl(0, 0%, 100%);
  --blur-size: 1.5px;
  --border-radius: 20px;
  --border-line-width: 2px;
}
.forsted-glass.buriedlightsmoke {
  --blur-size: 6px;
}

.forsted-glass.teal {
  --border-color: hsl(36, 87%, 65%);
  --bg-board-color: rgba(221, 44, 21, 0.767);
  --bg-board-color-2: rgb(175, 96, 5);
  --text-color: #FFFFFF;
  --blur-size: 6px;
  --border-radius: 12px;
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

.section-app-face2 {
  margin-top: 80px;
  margin-bottom: 72px;
  height: 402px;
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
  font-size: 64px;
  line-height: 60px;
  color: var(--text-primary);
  margin-bottom: 16px;
  margin-top: 56px;
}
.section-app-face .subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: transparent;
  background: radial-gradient(circle at top right, #e87938, #f20f0f);
  background-clip: text;
  margin-bottom: 24px;
}
 .section-app-face .red-yel {
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: transparent;
  background: radial-gradient(circle at top right, #f20f0f, #f2d00f);
  background-clip: text;
  margin-bottom: 24px;

   }

.section-app-face .defi-text {
  font-weight: 700;
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

.section-app-face .row-box-2 {
  display: grid;
  grid-auto-flow: column;
  gap: 32px;
  margin-bottom: 36px;
}
.section-app-face .row-box-2 .card {
  width: 260px;
  padding: 24px;
}
.section-app-face .row-box-2 .card .card-title {
  font-size: 14px;
  line-height: 18px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.page-footer {
  position: relative;
  display: flow-root;
}
.page-footer .links-group {
  width: 100%;
  padding: 100px 4% 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.page-footer .links-group > * {
  flex-basis: 220px;
}
.page-footer .group .title-text .text {
  font-size: 14px;
  margin-bottom: 8px;
}
.page-footer .group .title-text .line {
  width: 20px;
  margin: 0;
}
.page-footer .group .links {
  margin: 0;
  padding: 0;
  list-style: none;
  color: var(--text-secondary-light);
  margin-bottom: 10px;
  margin-top: 5px;
}
.page-footer .group .links .link {
  font-size: 16px;
  margin-bottom: 26px;
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 12px;
  align-items: center;
  color: var(--text-secondary-light);
}
.page-footer .group .links .link:hover {
  color: white;
}

.page-footer .foot-logo {
  margin: 16px auto 64px;
  display: block;
}

.section-features .feature-title {
  font-weight: 600;
  font-size: 20px;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.section-features .feature-description {
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-secondary-light);
  margin-bottom: 20px;
}
.section-features .content {
  max-width: 1220px;
  overflow: auto;
  width: 100%;
}

.section-features .boards {
  display: grid;
}

.section-features .boards > .card {
  padding: 24px 50px;
  flex: 1 0 120px;
}

.section-features .boards > .card > .feature-title {
  font-weight: 600;
  margin-bottom: 8px;
}

.section-features.\-1 {
  position: relative;
  margin: 0 auto;
  padding: 0 96px;
  max-width: 1320px;
  min-height: 506px;
  overflow: hidden;
  border-radius: 100px;
  box-shadow: 8px 8px 10px rgba(20, 16, 65, 0.05), -8px -8px 10px rgba(197, 191, 255, 0.05),
    inset 0 6px 20px rgba(197, 191, 255, 0.2), inset 0 -1px 25px rgba(197, 191, 255, 0.1);
  background-size: 100% 100%;
}

.section-features.\-1 .boards {
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.section-features.\-1 .boards > .card {
  grid-template-rows: auto auto 1fr auto;
}


.section-features.\-2 .image-3 {
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.section-features.\-2 .content {
  padding: 0 56px;
  margin: 108px 64px 172px;
}
.section-features.\-2 .boards {
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  justify-items: center;
}

.section-features.\-2 .feature-description {
  font-size: 16px;
  line-height: 24px;
}

.section-features.\-2 .boards > .card {
  max-width: 360px;
  grid-template-rows: auto auto 1fr;
  align-items: initial;
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
  .section-app-face .subtitle {
    font-size: 20px;
    line-height: 26px;
  }
  .section-app-face .row-box-1 {
    gap: 24px;
    margin-bottom: 84px;
  }
  .section-app-face .row-box-2 {
    gap: 24px;
  }
  .section-app-face .row-box-2 .card .card-title {
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
  }

  .page-footer {
    background-size: 200vw 600px, 100% 100%;
    text-align: center;
  }
  
  .page-footer .links-group .title-text .line {
    margin: 0 auto;
  }
  .page-footer .links-group .group.community .title-text {
    display: none;
  }
  .page-footer .links-group .group.community .links {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 24px;
    margin-bottom: 16px;
  }
  .page-footer .links-group .group.community .links .media-name {
    display: none;
  }
  .page-footer .group .links .link {
    justify-content: center;
  }

  
  .section-features.\-1 .boards {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .section-features.\-2 .boards {
    grid-template-columns: 1fr;
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
  .section-app-face .subtitle {
    font-size: 16px;
    line-height: 20px;
    white-space: pre-line;
    margin-top: -22px; /* to counteract the impact of white-space: pre-line */
  }
  .section-app-face .row-box-1 {
    gap: 20px;
    margin-bottom: 56px;
  }
  .section-app-face .row-box-1 .card-1 {
    font-size: 12px;
    line-height: 15px;
  }
  .section-app-face .row-box-2 {
    gap: 20px;
  }
  .section-app-face .row-box-2 .card {
    width: 165px;
    padding: 16px;

    --border-radius: 11.27px;
  }
  .section-app-face .row-box-2 .card .card-title {
    font-size: 8px;
    line-height: 10px;
  }

  .page-footer .links-group {
    gap: 56px;
  }

  .section-features .feature-title {
    font-size: 18px;
    line-height: 23px;
  }
  .section-features .feature-description {
    font-size: 14px;
    line-height: 16px;
  }

  .section-features.\-1 .boards {
    grid-template-columns: 1fr;
  }
  .section-features.\-2 .boards {
    grid-template-columns: 1fr;
  }
  .section-features.\-2 .content {
    padding: 0 20px;
  }
  
  .section-features.\-2 .feature-description {
    font-size: 14px;
    line-height: 20px;
  }
  .section-features .boards > .card {
    padding: 44px 20px;
  }
  .page-footer .links-group .group {
    flex-basis: 100vw;
  }
  .page-footer .group .links .link {
    justify-content: center;
  }
}
</style>
