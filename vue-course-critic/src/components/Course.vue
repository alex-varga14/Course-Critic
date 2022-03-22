<template>
  <div class="page-container edit-form">
    <section class="section-app-face children-center grid-cover-container">
      <div class="title-big text-center">
        <h4> Title </h4>
      </div>

      <form>
        <div class="form-group">
          <input type="text" class="form-control" id="Title" v-model="currentCourse.Title"/>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="Title" v-model="currentCourse.Description"/>
        </div>
      </form>

        <!-- Rating, not sure
        <div class="form-group">
          <input type="text" class="form-control" id="Title" v-model="currentCourse."/>
        </div> -->

    </section>

    <section class="section-features -2 children-center grid-cover-container">
      <div class="rating-form-title">
        <label for="title">Past Reviews</label>

      </div>
    </section>


    <section class="section-features -2 children-center grid-cover-container">
      <div class="container-md">
        <label class="rating-form-title" for="title">Leave a Review</label>
        <div class="row page">
          <form>
          <!-- 2 column grid layout with text inputs for the Instructor and Semester -->
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example1">Instructor</label>
                <input type="text" id="form6Example1" class="form-control" />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example2">Semester</label>
                <input type="text" id="form6Example2" class="form-control" />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example2">Date Taken</label>
                <input type="text" id="form6Example3" class="form-control" />
              </div>
            </div>
          </div>

          <!-- Comment input -->
          <div class="form-outline mb-4">
            <textarea class="form-control" id="form6Example7" rows="4"></textarea>
            <label class="form-label" for="form6Example7">Comments</label>
          </div>

          <!-- Checkbox -->
          <!-- <div class="form-check d-flex justify-content-center mb-4">
            <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
            <label class="form-check-label" for="form6Example8"> Create an account? </label>
          </div> -->

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4">Submit Review</button>
        </form>
      </div>

      </div>
    </section>

    <section class="section-features children-center grid-cover-container">
      <label class="rating-form-title" for="title">Leave a Rating</label>
      <div class="container p-5 my-5 rating-form border">
          <label for="title">Course Enjoyment</label>
          <div id="inline">
          <div class="rating children-center text-center">
            <input type="radio" name="rating" value="5" id="5">
            <label for="5">☆</label>
            <input type="radio" name="rating" value="4" id="4">
            <label for="4">☆</label>
            <input type="radio" name="rating" value="3" id="3">
            <label for="3">☆</label>
            <input type="radio" name="rating" value="2" id="2">
            <label for="2">☆</label>
            <input type="radio" name="rating" value="1" id="1">
            <label for="1">☆</label>
          </div>
        </div>
          <label for="title">Course Difficult</label>
          <div id="inline">
          <div class="rating1 children-center text-center">
            <input type="radio" name="rating1" value="5" id="10">
            <label for="5">☆</label>
            <input type="radio" name="rating1" value="4" id="9">
            <label for="4">☆</label>
            <input type="radio" name="rating1" value="3" id="8">
            <label for="3">☆</label>
            <input type="radio" name="rating1" value="2" id="7">
            <label for="2">☆</label>
            <input type="radio" name="rating1" value="1" id="6">
            <label for="1">☆</label>
          </div>

        </div>
          <label for="title">Course Workload</label>
          <div id="inline">
          <div class="rating2 children-center text-center">
            <input type="radio" name="rating2" value="5" id="15">
            <label for="5">☆</label>
            <input type="radio" name="rating2" value="4" id="14">
            <label for="4">☆</label>
            <input type="radio" name="rating2" value="3" id="13">
            <label for="3">☆</label>
            <input type="radio" name="rating2" value="2" id="12">
            <label for="2">☆</label>
            <input type="radio" name="rating2" value="1" id="11">
            <label for="1">☆</label>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
import CourseDataService from "../services/CourseDataService";
// import RatingDataService from "../services/RatingDataService";
// import ReviewDataService from "../services/ReviewDataService";

export default {
  name: "course",
  data() {
    return {
      currentCourse: null
    };
  },
  methods: {
    getCourse(id) {
      CourseDataService.get(id)
        .then(response => {
          this.currentCourse = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    // newRating() {
    //   RatingDataService.get(id)
    //     .then(response => {
    //       this.currentCourse = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }

  },
  mounted() {
    this.getCourse(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}

.page {
  font-weight: 50;
  color: #000000;
}

.title-big {
  font-weight: 300;
  font-size: 40px;
  line-height: 60px;
  color: #000000;
  width: auto;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 30px;
  margin-right: -30px;
  margin-left: -30px;
}

.title-container {
  margin-left: -130px;
  margin-right: -140px;
  margin-bottom: 30px;
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
  --text-secondary-light: #c4d6ff;
}

.section-app-face {
  margin-top: 80px;
  margin-bottom: 72px;
  height: 804px;
  position: relative;
}

.section-app-face .title {
  font-weight: 300;
  font-size: 32px;
  line-height: 60px;
  color: #000000;
  margin-bottom: 16px;
  margin-top: 56px;
}


#inline{
  width:100%;
  height:auto;
  background-color:white;
  display:flex;
  margin-bottom: 15px;
}

.rating-form {
  font-weight: 300;
  font-size: 16px;
  line-height: 60px;
  color: #000000;
  margin-bottom: 16px;
  margin-top: 56px;
}

.rating-form-title {
  font-weight: 300;
  font-size: 32px;
  color: #000000;
  margin-bottom: 16px;
  margin-top: 56px;
}


.rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center
}

.rating>input {
    display: none
}

.rating>label {
    position: relative;
    width: 1em;
    font-size: 30px;
    font-weight: 300;
    color: #FFD600;
    cursor: pointer
}

.rating>label::before {
    content: "\2605";
    position: absolute;
    opacity: 0
}

.rating>label:hover:before,
.rating>label:hover~label:before {
    opacity: 1 !important
}

.rating>input:checked~label:before {
    opacity: 1
}

.rating:hover>input:checked~label:before {
    opacity: 0.4
}

.rating-submit {
    border-radius: 15px;
    color: #fff;
    height: 49px
}

.rating-submit:hover {
    color: #fff
}

.rating1 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center
}

.rating1>input {
    display: none
}

.rating1>label {
    position: relative;
    width: 1em;
    font-size: 30px;
    font-weight: 300;
    color: #FFD600;
    cursor: pointer
}

.rating1>label::before {
    content: "\2605";
    position: absolute;
    opacity: 0
}

.rating1>label:hover:before,
.rating1>label:hover~label:before {
    opacity: 1 !important
}

.rating1>input:checked~label:before {
    opacity: 1
}

.rating1:hover>input:checked~label:before {
    opacity: 0.4
}

.rating1-submit {
    border-radius: 15px;
    color: #fff;
    height: 49px
}

.rating1-submit:hover {
    color: #fff
}


.rating2 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center
}

.rating2>input {
    display: none
}

.rating2>label {
    position: relative;
    width: 1em;
    font-size: 30px;
    font-weight: 300;
    color: #FFD600;
    cursor: pointer
}

.rating2>label::before {
    content: "\2605";
    position: absolute;
    opacity: 0
}

.rating2>label:hover:before,
.rating2>label:hover~label:before {
    opacity: 1 !important
}

.rating2>input:checked~label:before {
    opacity: 1
}

.rating2:hover>input:checked~label:before {
    opacity: 0.4
}

.rating-submit {
    border-radius: 15px;
    color: #fff;
    height: 49px
}

.rating-submit:hover {
    color: #fff
}
</style>
