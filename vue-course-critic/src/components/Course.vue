<template>
  <div id="course">
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
              <div v-if="5.0 >= avgRatings.avgEnjoyment && avgRatings.avgEnjoyment >= 3.5">
                 <span class="badge bg-success avgRating-badge">{{(Math.round(avgRatings.avgEnjoyment*100)/100).toFixed(2)}}</span>
              </div>
              <div v-else-if="3.5 > avgRatings.avgEnjoyment && avgRatings.avgEnjoyment >= 2.0">
                 <span class="badge bg-warning avgRating-badge">{{(Math.round(avgRatings.avgEnjoyment*100)/100).toFixed(2)}}</span>
                 </div>
              <div v-else-if="2.0 > avgRatings.avgEnjoyment && avgRatings.avgEnjoyment >= 0.0" >
                 <span class="badge bg-danger avgRating-badge">{{(Math.round(avgRatings.avgEnjoyment*100)/100).toFixed(2)}}</span>
              </div>
            </div>
            <div class="row justify-content-center">
                <label for="title">Average Difficulty</label>
                <div v-if="5.0 >= avgRatings.avgDifficulty && avgRatings.avgDifficulty >= 3.5">
                     <span class="badge bg-success avgRating-badge">{{(Math.round(avgRatings.avgDifficulty*100)/100).toFixed(2)}}</span>
              </div>
              <div v-else-if="3.5 > avgRatings.avgDifficulty && avgRatings.avgDifficulty >= 2.0">
                 <span class="badge bg-warning avgRating-badge">{{(Math.round(avgRatings.avgDifficulty*100)/100).toFixed(2)}}</span>
                 </div>
              <div v-else-if="2.0 > avgRatings.avgDifficulty && avgRatings.avgDifficulty >= 0.0" >
                 <span class="badge bg-danger avgRating-badge">{{(Math.round(avgRatings.avgDifficulty*100)/100).toFixed(2)}}</span>
              </div>
            </div>
            <div class="row justify-content-center">
                <label for="title">Average Workload</label>
              <div v-if="5.0 >= avgRatings.avgWorkload && avgRatings.avgWorkload >= 3.5">
                     <span class="badge bg-success avgRating-badge">{{(Math.round(avgRatings.avgWorkload*100)/100).toFixed(2)}}</span>
              </div>
              <div v-else-if="3.5 > avgRatings.avgWorkload && avgRatings.avgWorkload >= 2.0">
                 <span class="badge bg-warning avgRating-badge">{{(Math.round(avgRatings.avgWorkload*100)/100).toFixed(2)}}</span>
                 </div>
              <div v-else-if="2.0 > avgRatings.avgWorkload && avgRatings.avgWorkload >= 0.0" >
                 <span class="badge bg-danger avgRating-badge">{{(Math.round(avgRatings.avgWorkload*100)/100).toFixed(2)}}</span>
              </div>
            </div>
           </div>
          <div class="col quick-rating text-center">
            <div v-if="!ratingSubmitted">
               <label> <span class="bold-md">Rate This Course</span></label>
              <div class="col">
              <div class="quick-rating-form">
                  <label for="title">Enjoyment</label>
                  <div id="inline">
                  <div class="rating children-center text-center">
                    <input type="radio" name="rating" value="5" id="16" class="sr-only" required v-model="newRating.Enjoyment">
                    <label for="16">☆</label>
                    <input type="radio" name="rating" value="4" id="17" class="sr-only" required v-model="newRating.Enjoyment">
                    <label for="17">☆</label>
                    <input type="radio" name="rating" value="3" id="18" class="sr-only" required v-model="newRating.Enjoyment">
                    <label for="18">☆</label>
                    <input type="radio" name="rating" value="2" id="19" class="sr-only" required v-model="newRating.Enjoyment">
                    <label for="19">☆</label>
                    <input type="radio" name="rating" value="1" id="20" class="sr-only" required v-model="newRating.Enjoyment">
                    <label for="20">☆</label>
                  </div>
                </div>
                  <label for="title">Difficulty</label>
                  <div id="inline">
                  <div class="rating1 children-center text-center">
                    <input type="radio" name="rating1" value="5" id="21" class="sr-only" v-model="newRating.Difficulty">
                    <label for="21">☆</label>
                    <input type="radio" name="rating1" value="4" id="22" class="sr-only" v-model="newRating.Difficulty">
                    <label for="22">☆</label>
                    <input type="radio" name="rating1" value="3" id="23" class="sr-only" v-model="newRating.Difficulty">
                    <label for="23">☆</label>
                    <input type="radio" name="rating1" value="2" id="24" class="sr-only" v-model="newRating.Difficulty">
                    <label for="24">☆</label>
                    <input type="radio" name="rating1" value="1" id="25" class="sr-only" v-model="newRating.Difficulty">
                    <label for="25">☆</label>
                  </div>

                </div>
                  <label for="title">Workload</label>
                  <div id="inline">
                  <div class="rating2 children-center text-center">
                    <input type="radio" name="rating2" value="5" id="26" class="sr-only" v-model="newRating.Workload">
                    <label for="26">☆</label>
                    <input type="radio" name="rating2" value="4" id="27" class="sr-only" v-model="newRating.Workload">
                    <label for="27">☆</label>
                    <input type="radio" name="rating2" value="3" id="28" class="sr-only" v-model="newRating.Workload">
                    <label for="28">☆</label>
                    <input type="radio" name="rating2" value="2" id="29" class="sr-only" v-model="newRating.Workload">
                    <label for="29">☆</label>
                    <input type="radio" name="rating2" value="1" id="30" class="sr-only" v-model="newRating.Workload">
                    <label for="30">☆</label>
                  </div>
                </div>
              </div>
            </div>
            <button @click="saveRating" type="button" class="btn btn-primary btn-block mb-4">Submit Rating</button>
          </div>
          <div v-else>
                <div class="col">
                  <h4 class ="bold-md text-center">Rating Submitted!</h4>
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
                              <label><span class="bold-md-review-rating">ENJOYMENT</span></label>
                              <div v-if="5.0 >= reviewsWRatings.Enjoyment && reviewsWRatings.Enjoyment >= 3.5">
                                <span class="badge bg-success Rating-badge">{{reviewsWRatings.Enjoyment}}</span>
                              </div>
                              <div v-else-if="3.5 > reviewsWRatings.Enjoyment && reviewsWRatings.Enjoyment >= 2.0">
                               <span class="badge bg-warning Rating-badge">{{reviewsWRatings.Enjoyment}}</span>
                               </div>
                              <div v-else-if="2.0 > reviewsWRatings.Enjoyment && reviewsWRatings.Enjoyment >= 0.0" >
                               <span class="badge bg-danger Rating-badge">{{reviewsWRatings.Enjoyment}}</span>
                              </div>
                            </div>
                            <br>
                            <div class="row userRatings justify-content-center text-center">
                                <label><span class="bold-md-review-rating">DIFFICULTY</span></label>
                                <div v-if="5.0 >= reviewsWRatings.Difficulty && reviewsWRatings.Difficulty >= 3.5">
                                <span class="badge bg-success Rating-badge">{{reviewsWRatings.Difficulty}}</span>
                                </div>
                                <div v-else-if="3.5 > reviewsWRatings.Difficulty && reviewsWRatings.Difficulty >= 2.0">
                                <span class="badge bg-warning Rating-badge">{{reviewsWRatings.Difficulty}}</span>
                                </div>
                                <div v-else-if="2.0 > reviewsWRatings.Difficulty && reviewsWRatings.Difficulty >= 0.0" >
                                <span class="badge bg-danger Rating-badge">{{reviewsWRatings.Difficulty}}</span>
                               </div>
                            </div>
                            <br>
                            <div class="row userRatings justify-content-center text-center">
                                <label><span class="bold-md-review-rating">WORKLOAD</span></label>
                                <div v-if="5.0 >= reviewsWRatings.Workload && reviewsWRatings.Workload >= 3.5">
                                <span class="badge bg-success Rating-badge">{{reviewsWRatings.Workload}}</span>
                                </div>
                                <div v-else-if="3.5 > reviewsWRatings.Workload && reviewsWRatings.Workload >= 2.0">
                                <span class="badge bg-warning Rating-badge">{{reviewsWRatings.Workload}}</span>
                                </div>
                                <div v-else-if="2.0 > reviewsWRatings.Workload && reviewsWRatings.Workload >= 0.0" >
                                <span class="badge bg-danger Rating-badge">{{reviewsWRatings.Workload}}</span>
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
                        <p class="review-comment" style="width:600px;">{{reviewsWRatings.Comment}}</p>
                  </div>
                  <div v-if="!helpful">
                  <div class="row">
                    <div class="col-8">
                      <label><span class="bold-md">{{reviewsWRatings.HelpfulCount}} Users found this Review Helpful!</span> </label>
                    </div>
                    <div class="col-4">
                      <label class="form-check-label larger-text" for="helpful-box"> Was this Review Helpful? </label>
                      <div class="form-check d-flex justify-content-center mb-4">
                        <input 
                        class="helpful-box" 
                        width
                        type="checkbox" 
                        value="" 
                        @click="plusHelpful(reviewsWRatings.ID, reviewsWRatings.HelpfulCount)"
                        id="helpful-box" 
                        unchecked />
                      </div>
                    </div>
                  </div>
                  </div>
                  <div v-else>
                      <div class="col">
                        <h4 class ="bold-md text-center">Thanks for Providing Feedback!</h4>
                      </div>
                    </div>
                </div>
                <br>
              <hr class="line2">
            </div>
      </div>
    </section>
    <section class="section-features children-center grid-cover-container">
      <div class="container p-5 my-5">
        <div class="row">
            <div class="col-sm-4 title-big">
              <label class="rating-form-title" for="title"><span class="bold">Leave a Review for this Course</span></label>
            </div>
            <br>
            <hr class="line">
      </div>
      <div v-if="!reviewSubmitted">
      <div class="container border">
        <div class="row">
          <div class="col">
              <div class="rating-form">
                  <label for="title"><span class="bold-md">Course Enjoyment</span></label>
                  <div id="inline">
                  <div class="rating children-center text-center">
                    <input 
                      type="radio" 
                      name="rating" 
                      value="5" 
                      v-model="newReview.Enjoyment"
                      id="5"
                    >
                    <label for="5">☆</label>
                    <input 
                      type="radio" 
                      name="rating" 
                      value="4" 
                      id="4"
                      v-model="newReview.Enjoyment"
                    >
                    <label for="4">☆</label>
                    <input 
                      type="radio" 
                      name="rating" 
                      value="3" 
                      id="3"
                      v-model="newReview.Enjoyment"
                    >
                    <label for="3">☆</label>
                    <input 
                      type="radio" 
                      name="rating" 
                      value="2" 
                      id="2"
                      v-model="newReview.Enjoyment"
                    >
                    <label for="2">☆</label>
                    <input 
                      type="radio" 
                      name="rating" 
                      value="1" 
                      id="1"
                      v-model="newReview.Enjoyment"
                    >
                    <label for="1">☆</label>
                  </div>
                </div>
                  <label for="title"><span class="bold-md">Course Difficulty</span></label>
                  <div id="inline">
                  <div class="rating1 children-center text-center">
                    <input 
                      type="radio" 
                      name="rating1" 
                      value="5" 
                      id="10"
                      v-model="newReview.Difficulty"
                    >
                    <label for="10">☆</label>
                    <input 
                      type="radio" 
                      name="rating1" 
                      value="4" 
                      id="9" 
                      v-model="newReview.Difficulty"
                    >
                    <label for="9">☆</label>
                    <input 
                      type="radio" 
                      name="rating1" 
                      value="3" 
                      id="8" 
                      v-model="newReview.Difficulty"
                    >
                    <label for="8">☆</label>
                    <input 
                      type="radio" 
                      name="rating1" 
                      value="2" 
                      id="7" 
                      v-model="newReview.Difficulty"
                    >
                    <label for="7">☆</label>
                    <input 
                      type="radio" 
                      name="rating1" 
                      value="1" 
                      id="6" 
                      v-model="newReview.Difficulty"
                    >
                    <label for="6">☆</label>
                  </div>
                </div>
                  <label for="title"><span class="bold-md">Course Workload</span></label>
                  <div id="inline">
                  <div class="rating2 children-center text-center">
                    <input 
                      type="radio" 
                      name="rating2" 
                      value="5" 
                      id="15" 
                      v-model="newReview.Workload"
                    >
                    <label for="15">☆</label>
                    <input 
                      type="radio" 
                      name="rating2" 
                      value="4" 
                      id="14" 
                      v-model="newReview.Workload"
                    >
                    <label for="14">☆</label>
                    <input 
                      type="radio" 
                      name="rating2" 
                      value="3" 
                      id="13" 
                      v-model="newReview.Workload"
                    >
                    <label for="13">☆</label>
                    <input 
                      type="radio" 
                      name="rating2" 
                      value="2" 
                      id="12" 
                      v-model="newReview.Workload"
                    >
                    <label for="12">☆</label>
                    <input 
                      type="radio" 
                      name="rating2" 
                      value="1" 
                      id="11" 
                      v-model="newReview.Workload"
                    >
                    <label for="11">☆</label>
                  </div>
                </div>
              </div>
            </div>
      <div class="col">
        <div class="row page">
          <form>
          <!-- 2 column grid layout with text inputs for the Instructor and Semester -->
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="Instructor"><span class="bold-md">Instructor</span></label>
                <input 
                  type="text" 
                  id="Instructor" 
                  class="form-control"
                  required
                  v-model="newReview.Instructor"
                  name="Instructor"
                  placeholder="ex: Joerg Denzinger"
                   />
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="Semester"><span class="bold-md">Semester</span></label>
                <input 
                  type="text" 
                  id="Semester" 
                  class="form-control" 
                  required
                  v-model="newReview.Semester"
                  name="Semester"
                  placeholder="ex: Fall 2001"
                  />
              </div>
            </div>
            </div>
            <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="Date"><span class="bold-md">Review Date</span></label>
                    <label class="form-label" for="DateReal"><span >{{this.Date}}</span></label>
              </div>
            </div>
          </div>

          <!-- Submit button -->
          <button @click="saveReview"  type ="button" class="btn btn-primary btn-block mb-4">Submit Review</button>
        </form>
      </div>
      </div>
      <div class="col">
            <!-- Comment input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="Comment"><span class="bold-md">Comment</span></label>
            <textarea 
              class="form-control" 
              id="Comment" 
              rows="8"
              type="Comment"
              required
              v-model="newReview.Comment"
              name="Comment"
              placeholder="What Should Future Students Know about this Course?"
              ></textarea>
          </div>
        </div>
      </div>
        </div>
      </div>
      <div v-else>
            <div class="col">
              <h4 class ="bold-md text-center">Review Submitted!</h4>
            </div>
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
  name: "course",
  data() {
    return {
      Date: new Date(),
      ratingSubmitted: false,
      reviewSubmitted: false,
      helpful: false,
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
      newReview: {
          Comment: null,
          Instructor: null,
          Semester: null,
          Date: null,
          HelpfulCount: null,
          CourseID: null,
          Enjoyment: null,
          Difficulty: null,
          Workload: null,
        },
      newRating: {
          Enjoyment: null,
          Difficulty: null,
          Workload: null,
          CourseID: null,
        },
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
    saveReview() {
      console.log("SAVING REVIEW...");
      var data = {
        Comment: this.newReview.Comment,
        Instructor: this.newReview.Instructor,
        Semester: this.newReview.Semester,
        Date: new Date(),
        HelpfulCount: 0,
        CourseID: this.data,
        Enjoyment: this.newReview.Enjoyment,
        Difficulty: this.newReview.Difficulty,
        Workload: this.newReview.Workload,
      };
      if(this.newReview.Comment == undefined || this.newReview.Instructor == undefined || this.newReview.Semester == undefined)
      {
        alert("All Review Fields Must be Filled.");
        this.postNewReview;
      }
      else if(this.newReview.Enjoyment == null || this.newReview.Enjoyment == null || this.newReview.Enjoyment == null)
      {
        alert("A Review Requires a Rating and Must be Between 1-5 Stars.");
        this.postNewRating;
      }
      else {
        ReviewDataService.create(data)
          .then(response => {
            console.log("here");
            //this.newReview.id = response.data.id;
            ReviewDataService.getLastReviewID()
              .then(response2 => {
                var temp = response2.data[0];
                this.lastRevID = temp["LAST_INSERT_ID()"];
                console.log(temp["LAST_INSERT_ID()"]);
                var data1 = {
                    Enjoyment: this.newReview.Enjoyment,
                    Difficulty: this.newReview.Enjoyment,
                    Workload: this.newReview.Enjoyment,
                    CourseID: this.data,
                    ReviewID: this.lastRevID,
                  };
                
                  RatingDataService.createRating(data1)
                  .then(responsethree => {
                    this.newRating.id = response.data.id;
                    // this.$router.go();
                    this.reviewSubmitted = true;
                     setTimeout(() => {  this.reviewSubmitted = false; }, 5000);
                     this.retrieveCoursesReviewsWRatings(this.$route.params.id);
                    // this.$router.push({name: "courses",
                    //  params: { id:this.data }});
                    console.log(responsethree);
                  })
                  .catch(e => {
                    console.log(e);
                  });
              })
              .catch(e => {
              console.log(e);
            });
          })
          .catch(e => {
            console.log(e);
          });
        }
    },
    postNewReview() {
      this.submitted = false;
      this.newReview = {};
    },
    saveRating() {
      console.log("SAVING RATING...");
      var data = {
        Enjoyment: this.newRating.Enjoyment,
        Difficulty: this.newRating.Difficulty,
        Workload: this.newRating.Workload,
        CourseID: this.data,
        ReviewID: null,
      };
      if(this.newRating.Enjoyment == null || this.newRating.Difficulty == null || this.newRating.Workload == null)
      {
        alert("A Rating Must be Between 1-5 Stars and is Required for all Fields.");
        this.postNewRating;
      }
      else {
          RatingDataService.createRating(data)
          .then(response => {
            this.newRating.id = response.data.id;
            console.log(response.data);
             this.ratingSubmitted = true;
             //this.$router.go(0);
             //this.$router.go(this.$router.currentRoute);
             setTimeout(() => {  this.ratingSubmitted = false; }, 5000);
             //this.$forceUpdate();
              this.retrieveAvgRatings(this.$route.params.id);
             //this.$router.back();
            //  this.$router.push({name: "courses",
            //   params: { id:this.data }});
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    plusHelpful(id, data) {
      var HelpfulCount = data + 1;
      console.log("HELPFUL REVIEW W/ ID: " + id + " ALREADY HAS " + data + "HELPFULS!");
       ReviewDataService.updateHelpful(id, HelpfulCount)
        .then(response => {
          console.log(response.data);
          this.helpful = true;
          // this.$router.go();
          setTimeout(() => {  this.helpful = false; }, 5000);
          this.retrieveCoursesReviewsWRatings(this.$route.params.id);
          // this.$router.push({name: "courses",
          //  params: { id:this.data }
          //  });
        })
        .catch(e => {
          console.log(e);
        });
    },
    postNewRating() {
      this.newRating = {};
    }
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
 margin-left: 225px;
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
  /* line-height: 20px; 
  margin-top: -40px;*/
  margin-bottom: 20px;
}

.userRatings {
  line-height: 150%;
  margin-top: 25px; 
  margin-bottom: 50px; 
}

.Rating-badge {
  height: 25px;
  width: 50px;
  font-size: 15px;
  justify-items: center;
  align-items: center;
}

.avgRating-badge {
  height: 25px;
  width: 50px;
  justify-items: center;
  align-items: center;
  font-weight: bold;
  color: #FFFFFF;
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