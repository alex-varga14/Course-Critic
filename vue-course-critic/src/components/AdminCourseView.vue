<template>
  <div id="adminCourse">
    <section class="section-app-face">
      <div class="row">
        <div class="col-sm-4 title-big">
          <label><span class="bold">{{currentCourse.CourseCode}} {{currentCourse.CourseNo}}</span> - {{currentCourse.Title}} </label>
        </div>
        <br>
        <hr class="line">
      </div>
      <div class="row">
        <div class="col">
          <div class="row department">
              Department of {{currentCourse.Faculty}}
          </div>
          <div class="row course-description">
            <div class="container border">
              {{currentCourse.Description}} 
            </div>
          </div>
         </div>
         <div class="col avgRatings text-center" v-for="avgRatings in avgRatings" v-bind:key="avgRatings">
           <div class="row justify-content-center">
              <label for="title">Average Enjoyment</label>
              <div v-if="5.0 >= avgRatings.avgEnjoyment && avgRatings.avgEnjoyment >= 4.0">
                     <span class="badge bg-success avgRating-badge>">{{(Math.round(avgRatings.avgEnjoyment*100)/100).toFixed(2)}}</span>
              </div>
              <div v-else-if="4.0 > avgRatings.avgEnjoyment && avgRatings.avgEnjoyment >= 2.5">
                 <span class="badge bg-warning avgRating-badge">{{(Math.round(avgRatings.avgEnjoyment*100)/100).toFixed(2)}}</span>
                 </div>
              <div v-else-if="2.5 > avgRatings.avgEnjoyment && avgRatings.avgEnjoyment >= 0.0" >
                 <span class="badge bg-danger avgRating-badge">{{(Math.round(avgRatings.avgEnjoyment*100)/100).toFixed(2)}}</span>
              </div>
            </div>
            <div class="row justify-content-center">
                <label for="title">Average Difficulty</label>
                <div v-if="5.0 >= avgRatings.avgDifficulty && avgRatings.avgDifficulty >= 4.0">
                     <span class="badge bg-success avgRating-badge>">{{(Math.round(avgRatings.avgDifficulty*100)/100).toFixed(2)}}</span>
              </div>
              <div v-else-if="4.0 > avgRatings.avgDifficulty && avgRatings.avgDifficulty >= 2.5">
                 <span class="badge bg-warning avgRating-badge">{{(Math.round(avgRatings.avgDifficulty*100)/100).toFixed(2)}}</span>
                 </div>
              <div v-else-if="2.5 > avgRatings.avgDifficulty && avgRatings.avgDifficulty >= 0.0" >
                 <span class="badge bg-danger avgRating-badge">{{(Math.round(avgRatings.avgDifficulty*100)/100).toFixed(2)}}</span>
              </div>
            </div>
            <div class="row justify-content-center">
                <label for="title">Average Workload</label>
              <div v-if="5.0 >= avgRatings.avgWorkload && avgRatings.avgWorkload >= 4.0">
                     <span class="badge bg-success avgRating-badge>">{{(Math.round(avgRatings.avgWorkload*100)/100).toFixed(2)}}</span>
              </div>
              <div v-else-if="4.0 > avgRatings.avgWorkload && avgRatings.avgWorkload >= 2.5">
                 <span class="badge bg-warning avgRating-badge">{{(Math.round(avgRatings.avgWorkload*100)/100).toFixed(2)}}</span>
                 </div>
              <div v-else-if="2.5 > avgRatings.avgWorkload && avgRatings.avgWorkload >= 0.0" >
                 <span class="badge bg-danger avgRating-badge">{{(Math.round(avgRatings.avgWorkload*100)/100).toFixed(2)}}</span>
              </div>
            </div>
           </div>
      </div>
    </section>

    <section class="section-features children-center grid-cover-container">
      <div class="container p-5 my-5">
        <div class="row">
            <div class="col-sm-4 title-big">
              <label><span class="bold">Past Reviews</span></label>
            </div>
            <br>
            <hr class="line">
          </div>
              <!-- Ratings with Reviews -->
              <div class="rating-form-body" v-for="reviewsWRatings in reviewsWRatings" v-bind:key="reviewsWRatings">
                <div class="container border review-container">
                  <div class="row">
                      <div class="col">
                          <div class="row">
                            <div class="row userRatings justify-content-center text-center">
                              <label for="title"><span class="bold-md-review-rating">ENJOYMENT</span></label>
                              <div v-if="5.0 >= reviewsWRatings.Enjoyment && reviewsWRatings.Enjoyment >= 4.0">
                                <span class="badge bg-success avgRating-badge">{{reviewsWRatings.Enjoyment}}</span>
                              </div>
                              <div v-else-if="4.0 > reviewsWRatings.Enjoyment && reviewsWRatings.Enjoyment >= 2.5">
                               <span class="badge bg-warning avgRating-badge">{{reviewsWRatings.Enjoyment}}</span>
                               </div>
                              <div v-else-if="2.5 > reviewsWRatings.Enjoyment && reviewsWRatings.Enjoyment >= 0.0" >
                               <span class="badge bg-danger avgRating-badge">{{reviewsWRatings.Enjoyment}}</span>
                              </div>
                            </div>
                            <br>
                            <div class="row userRatings justify-content-center text-center">
                                <label for="title"><span class="bold-md-review-rating">DIFFICULTY</span></label>
                                <div v-if="5.0 >= reviewsWRatings.Difficulty && reviewsWRatings.Difficulty >= 4.0">
                                <span class="badge bg-success avgRating-badge>">{{reviewsWRatings.Difficulty}}</span>
                                </div>
                                <div v-else-if="4.0 > reviewsWRatings.Difficulty && reviewsWRatings.Difficulty >= 2.5">
                                <span class="badge bg-warning avgRating-badge">{{reviewsWRatings.Difficulty}}</span>
                                </div>
                                <div v-else-if="2.5 > reviewsWRatings.Difficulty && reviewsWRatings.Difficulty >= 0.0" >
                                <span class="badge bg-danger avgRating-badge">{{reviewsWRatings.Difficulty}}</span>
                               </div>
                            </div>
                            <br>
                            <div class="row userRatings justify-content-center text-center">
                                <label for="title"><span class="bold-md-review-rating">WORKLOAD</span></label>
                                <div v-if="5.0 >= reviewsWRatings.Workload && reviewsWRatings.Workload >= 4.0">
                                <span class="badge bg-success avgRating-badge>">{{reviewsWRatings.Workload}}</span>
                                </div>
                                <div v-else-if="4.0 > reviewsWRatings.Workload && reviewsWRatings.Workload >= 2.5">
                                <span class="badge bg-warning avgRating-badge">{{reviewsWRatings.Workload}}</span>
                                </div>
                                <div v-else-if="2.5 > reviewsWRatings.Workload && reviewsWRatings.Workload >= 0.0" >
                                <span class="badge bg-danger avgRating-badge">{{reviewsWRatings.Workload}}</span>
                               </div>
                            </div>
                          </div>
                      </div>
                      <div class="col">
                          <div class="row">
                            <label class="review-header">Instructor: <span class="bold-md-prof">{{reviewsWRatings.Instructor}}</span></label>
                          </div>
                      </div>
                        <div class="col">
                          <div class="row">
                            <label class="review-header">Semester: <span class="bold-md">{{reviewsWRatings.Semester}}</span></label>
                          </div>
                        </div>
                        <div class="col">
                          <div class="row bold-md" >
                            <label class="review-header"><span id="rdate" class="bold-md">{{new Date(reviewsWRatings.Date).toISOString().slice(0, 10)}}</span></label>
                          </div>
                        </div>
                  </div>
                  <div class="row">
                        <p class="review-comment">{{reviewsWRatings.Comment}}</p>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <label><span class="bold-md">{{reviewsWRatings.HelpfulCount}} Users found this Review Helpful!</span> </label>
                    </div>
                    <div class="col-4">
                      <div class="col">
                        <div class="row ">
                        <button @click="removeReview(reviewsWRatings.ID)" type="button" class="remove">
                            Remove Comment and Associated Review.
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <br>
              <hr class="line2">
            </div>
      </div>
    </section>
    </div>
</template>

<script>
import CourseDataService from "../services/CourseDataService";
import ReviewDataService from "../services/ReviewDataService";
import RatingDataService from "../services/RatingDataService";
export default {
  name: "adminCourse",
  data() {
    return {
      Date: new Date(),
      currentCourse: {
        Title: null,
        Description: null,
        Faculty: null,
        CourseCode: null,
        CourseNo: null,
        },
        avgRatings: [],
      data: null,
      lastRevID: null,
      reviewsWRatings: [],
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
    removeReview(id) {
        console.log("DELETE REVIEW..." + id);
          window.alert("Review Removed!");
          RatingDataService.deleteRating(id)
          .then(response => {
            console.log(response.data);
            ReviewDataService.deleteReview(id)
            .then(responseTwo => {
              console.log(responseTwo.data);
            })
          .catch(e => {
            console.log(e);
          });
        })
        .catch(e => {
            console.log(e);
            ReviewDataService.deleteReview(id)
            .then(responseTwo => {
              console.log(responseTwo.data);
               this.retrieveCoursesReviewsWRatings(this.$route.params.id);
            })
            .catch(e => {
              console.log(e);
            });
        });
    },
    retrieveAvgRatings(id) {
      RatingDataService.getAllCourseAvgRating(id)
        .then(response => {
          this.avgRatings = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrieveCoursesReviewsWRatings(id){
      ReviewDataService.getCourseReviewsWRatings(id)
      .then(response => {
        this.reviewsWRatings = response.data;
        this.reviewsWRatings.Date = this.reviewsWRatings.Date.slice(0,10);
        console.log(response.data);
      })
      .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getCourse(this.$route.params.id);
    this.retrieveAvgRatings(this.$route.params.id);
    this.retrieveCoursesReviewsWRatings(this.$route.params.id);
  }
};
</script>

<style>
hr.line {
  border-top: 4px solid #000000;
  margin-top: -50px;
  color: #000000;
  background-color: #000000;
}

hr.line2 {
  border-top: 0px solid #FFFFFF;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #FFFFFF;
  color: #FFFFFF;
}

.review-container {
    background-color: #e4e4e4;
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
.department {
  margin-top: -50px;
  font-weight: 200;
  font-size: 20px;
  color: #000000;
  }

.bold {
  font-weight: 700;
  color: #000000;
  }

.bold-md {
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  }

  .bold-md-prof {
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  }

.larger-text {
  font-size: 20px;
  color: #000000;
}
.bold-md-review-rating {
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  margin-bottom: 15px;
}

.course-description {
  font-weight: 100;
  font-size: 15px;
  color: #000000;
  margin-top: 100px;
  margin-left: 5px;
}
.review-header {
  margin-top: 20px;
  font-weight: 200;
  font-size: 20px;
  color: #000000;
  }

.review-date {
  font-weight: 200;
  font-size: 15px;
  color: #000000;
}

.quick-rating {
  font-weight: 100;
  font-size: 20px;
  color: #000000;
  margin-top: -40px;
}

.review-comment {
 margin-top: -250px;
 /* margin-left: -50px; */
 font-size: 25px;
 font-weight: 200;
 color: #000000;
}

input.helpful-box {
  width: 30px;
  height: 30px;
}

.avgRatings {
  font-weight: 200;
  font-size: 20px;
  color: #000000;
  /* line-height: 20px; */
  margin-top: -40px;
  margin-bottom: 20px;
}

.userRatings {
  line-height: 150%;
  margin-top: 25px; 
  margin-bottom: 50px; 
}

.Rating-badge {
  height: 25px;
  width: 40px;
  font-size: 15px;
  justify-items: center;
  align-items: center;
  /* margin-top: 20px;
  margin-bottom: 5px; */
}

.avgRating-badge {
  height: 25px;
  width: 75px;
  justify-items: center;
  align-items: center;
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
  height: 180px;
  width: 90%;
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
  line-height: 30px;
  color: #000000;
  margin-bottom: 16px;
  margin-top: 16px;
}

.quick-rating-form {
  font-weight: 200;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin-bottom: 8px;
  margin-top: 8px;
}
.rating-form-title {
  font-weight: 400;
  font-size: 32px;
  color: #000000;
  margin-top: -40;
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