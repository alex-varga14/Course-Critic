<template>
  <div>
    <section class="section-app-face">
      <div class="row">
      <div class="col-sm-4 title-big">
         <label >{{currentCourse.CourseCode}}{{currentCourse.CourseNo}}: {{currentCourse.Title}} </label>
        </div>
        <br>
        <hr class="line">
        <div class="col-sm-8 course-description">
          <div class="row">
               FACULTY: {{currentCourse.Faculty}}
            </div>
            <div class="row">
               DESCRIPTION: {{currentCourse.Description}} 
               </div>
         </div>
      </div>
    </section>

    <section class="section-features children-center grid-cover-container">
      <div class="container p-5 my-5 border">
        <div class="row">
            <div class="rating-form-title">
              <label for="title">Past Reviews</label>
              <table class="table rating-form-body" id="formtable">
                <thead>
                  <tr id="header">
                    <th scope="col">Comment</th>
                    <th scope="col">Instructor</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Date</th>
                    <th scope="col">HelpfulCount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="courseReviews in courseReviews" v-bind:key="courseReviews" id="rows">
                    <td>{{courseReviews.Comment}}</td>
                    <td>{{courseReviews.Instructor}}</td>
                    <td class="text-center">{{courseReviews.Semester}}</td>
                    <td >{{courseReviews.Date}}</td>
                    <td>{{courseReviews.HelpfulCount}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      <div v-if="!submitted">
        <div class="row">
          <div class="col-sm-4">
                <label class="rating-form-title" for="title">Leave a Rating</label>
              <div class="rating-form">
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
                    <label for="10">☆</label>
                    <input type="radio" name="rating1" value="4" id="9">
                    <label for="9">☆</label>
                    <input type="radio" name="rating1" value="3" id="8">
                    <label for="8">☆</label>
                    <input type="radio" name="rating1" value="2" id="7">
                    <label for="7">☆</label>
                    <input type="radio" name="rating1" value="1" id="6">
                    <label for="6">☆</label>
                  </div>

                </div>
                  <label for="title">Course Workload</label>
                  <div id="inline">
                  <div class="rating2 children-center text-center">
                    <input type="radio" name="rating2" value="5" id="15">
                    <label for="15">☆</label>
                    <input type="radio" name="rating2" value="4" id="14">
                    <label for="14">☆</label>
                    <input type="radio" name="rating2" value="3" id="13">
                    <label for="13">☆</label>
                    <input type="radio" name="rating2" value="2" id="12">
                    <label for="12">☆</label>
                    <input type="radio" name="rating2" value="1" id="11">
                    <label for="11">☆</label>
                  </div>
                </div>
              </div>
            </div>
      <div class="col-sm-8">
        <label class="rating-form-title" for="title">Leave a Review</label>
        <div class="row page">
          <form>
          <!-- 2 column grid layout with text inputs for the Instructor and Semester -->
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="Instructor">Instructor</label>
                <input 
                  type="text" 
                  id="Instructor" 
                  class="form-control"
                  required
                  v-model="newReview.Instructor"
                  name="Instructor"
                  placeholder="Joerg Denzinger"
                   />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="Semester">Semester</label>
                <input 
                  type="text" 
                  id="Semester" 
                  class="form-control" 
                  required
                  v-model="newReview.Semester"
                  name="Semester"
                  placeholder="Fall 1998"
                  />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="Date">Date Taken</label>
                    <input 
                      id="Date" 
                      class="form-control" 
                      type="Date" 
                      required
                      v-model="newReview.Date"
                      name="Date"/>
                    <span id="dateSelected"></span>
              </div>
            </div>
          </div>

          <!-- Comment input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="Comment">Comment</label>
            <textarea 
              class="form-control" 
              id="Comment" 
              rows="4"
              type="Comment"
              required
              v-model="newReview.Comment"
              name="Comment"
              ></textarea>
          </div>

          <!-- Checkbox -->
          <!-- <div class="form-check d-flex justify-content-center mb-4">
            <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
            <label class="form-check-label" for="form6Example8"> Create an account? </label>
          </div> -->

          <!-- Submit button -->
          <button @click="saveReview" type="submit" class="btn btn-primary btn-block mb-4">Submit Review</button>
        </form>
      </div>
      </div>
      </div>
      </div>
      <div v-else>
          <h4 class ="title-big text-center">Review Submitted!</h4>
          <!-- <button class="btn btn-success submit-btn text-center" @click="newCourse">Review Another Course</button> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CourseDataService from "../services/CourseDataService";
import ReviewDataService from "../services/ReviewDataService";
// import RatingDataService from "../services/RatingDataService";
export default {
  name: "course",
  data() {
    return {
      currentCourse: {
        Title: null,
        Description: null,
        Faculty: null,
        CourseCode: null,
        CourseNo: null,
        },
      data: null,
      courseReviews: [],
      reviews: [],
      newReview: {
          Comment: null,
          Instructor: null,
          Semester: null,
          Date: null,
          CourseID: null,
        },
      ratings: [],
      newRating: {
          Enjoyment: null,
          Difficulty: null,
          Workload: null,
          CourseID: null,
          ReviewID: null,
        },
        submitted: false
    };
  },
  methods: {
    getCourse(id) {
      CourseDataService.get(id)
        .then(response => {
          this.currentCourse = response.data;
          this.data = id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrieveReviews() {
      ReviewDataService.getAll()
        .then(response => {
          this.reviews = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrieveCoursesReviews(id){
      ReviewDataService.getCourseReviews(id)
      .then(response => {
        this.courseReviews= response.data;
        console.log(response.data);
      })
      .catch(e => {
          console.log(e);
        });
    },
    saveReview() {
      var data = {
        Comment: this.newReview.Comment,
        Instructor: this.newReview.Instructor,
        Semester: this.newReview.Semester,
        Date: this.newReview.Date
      };
      ReviewDataService.create(data)
        .then(response => {
          this.newReview.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    postNewReview() {
      this.submitted = false;
      this.newReview = {};
      // RatingDataService.get(id)
      //   .then(response => {
      //     this.currentCourse = response.data;
      //     console.log(response.data);
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
    }
  },
  mounted() {
    this.getCourse(this.$route.params.data);
    this.retrieveReviews();
    this.retrieveCoursesReviews(this.$route.params.data);
  }
};
</script>
<style>

hr.line {
  border-top: 2px solid #000000;
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
.course-description {
  font-weight: 100;
  font-size: 20px;
  color: #000000;
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
  height: 150px;
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

.rating-form-body {
  font-weight: 100;
  font-size: 12px;
  color: #000000;
}

.rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    margin: auto;
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

.rating1 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    margin: auto;
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


.rating2 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    margin: auto;
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