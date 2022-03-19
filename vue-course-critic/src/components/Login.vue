<template>
  <div class="page-container" id="login">
    <section class="section-app-face children-center grid-cover-container">
      <div class="grid-cover-content children-center">
        <div class="title">
          Administration Login
        </div>
        <form>
          <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Remember Me</label>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
     </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style>
.ant-popover-arrow {
  border-color: #0c0926 !important;
}
.ant-popover-inner-content {
  background-color: #0c0926 !important;
}
</style>
<style scoped>
/* utilities */

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

.grid-cover-container {
  place-items: center;
  display: grid;
}
.grid-cover-container > * {
  max-width: 100%;
  grid-area: 1 / 1;
  overflow: auto;
}

.section-app-face {
  margin-top: 80px;
  margin-bottom: 72px;
  height: 804px;
  position: relative;
}

.section-app-face .title {
  font-weight: 300;
  font-size: 64px;
  line-height: 60px;
  color: #000000;
  margin-bottom: 16px;
  margin-top: 56px;
}

@media (max-width: 1128px) {
  /* is tablet */

  .section-app-face {
    margin-top: 116px;
    height: 720px;
  }

  .section-app-face .title {
    font-size: 48px;
    line-height: 44px;
  }
}

@media (max-width: 768px) {
  /* is phone */
  .section-app-face {
    margin-top: 116px;
    height: unset;
  }
}
</style>
