
<template>
  <div class="page-container" id="courselist">
    <section class="section-app-face children-center grid-cover-container">
      <div class="grid-cover-content children-center">
        <div class="title">
          UCalgary Course List
        </div>
        <div class="list" >
          <div class="col-md-8">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Search by Course"
                v-model="title"/>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button"
                  @click="searchTitle"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h4>Course List</h4>
            <ul class="list-group">
              <li class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(course, index) in courses"
                :key="index"
                @click="setActiveCourse(course, index)"
              >
                {{ course.title }}
              </li>
            </ul>
            <button class="m-3 btn btn-sm btn-danger" @click="removeAllCourses">
              Remove All
            </button>
        </div>
        <div class="col-md-6">
          <div v-if="currentCourse">
            <h4>Course</h4>
            <div>
              <label><strong>Title:</strong></label> {{ currentCourse.title }}
            </div>
            <div>
              <label><strong>Description:</strong></label> {{ currentCourse.description }}
            </div>
            <div>
              <label><strong>Status:</strong></label> {{ currentCourse.published ? "Published" : "Pending" }}
            </div>
            <router-link :to="'/courses/' + currentCourse.id" class="badge badge-warning">Edit</router-link>
          </div>
        </div>
      </div>
     </div>
    </section>

    <section class="section-features -2 children-center grid-cover-container">
      <table class="table">
      <thead>
        <tr>
          <th scope="col">Course Code</th>
          <th scope="col">Title</th>
          <th scope="col">Average Difficulty</th>
          <th scope="col">Average Enjoyment</th>
          <th scope="col">Average Workload</th>
          <th scope="col">Reviews</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aggregatecourses in aggregatecourses" v-bind:key="aggregatecourses">
          <td>{{aggregatecourses.CourseCode+" "+aggregatecourses.CourseNo}}
          </td>
          <td>{{aggregatecourses.Title}}</td>
          <td>{{aggregatecourses.Difficulty}}</td>
          <td>{{aggregatecourses.Enjoyment}}</td>
          <td>{{aggregatecourses.Workload}}</td>
          <td>{{aggregatecourses.NumReviews}}</td>
          <button type="button" class="btn btn-primary" @click="update(aggregatecourses.ID)">
            View Reviews
          </button>
        </tr>
      </tbody>
    </table>
    </section>
  </div>
</template>


<!--
<template>
  <div class="list" >
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Course List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(course, index) in courses"
          :key="index"
          @click="setActiveCourse(course, index)"
        >
          {{ course.title }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllCourses">
        Remove All
      </button>
  </div>
  <div class="col-md-6">
    <div v-if="currentCourse">
      <h4>Course</h4>
      <div>
        <label><strong>Title:</strong></label> {{ currentCourse.title }}
      </div>
      <div>
        <label><strong>Description:</strong></label> {{ currentCourse.description }}
      </div>
      <div>
        <label><strong>Status:</strong></label> {{ currentCourse.published ? "Published" : "Pending" }}
      </div>
      <router-link :to="'/courses/' + currentCourse.id" class="badge badge-warning">Edit</router-link>
    </div>
    <div v-else>
      <br />
      <p>Please click on a Course...</p>
    </div>
  </div>
</div>
</template>
-->

<script>
import CourseDataService from "../services/CourseDataService";
export default {
name: "courses-list",
data() {
  return {
      courses: [],
      aggregatecourses:[],
      currentCourse: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveCourses() {
      CourseDataService.getAll()
        .then(response => {
          this.courses = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrieveAggregateCourses(){
      CourseDataService.getCourseAggregateInfo()
      .then(response => {
        this.aggregatecourses= response.data;
        console.log(response.data);
      })
      .catch(e => {
          console.log(e);
        });
    },
    update(data){
      console.log(data);
    },
    refreshList() {
      this.retrieveCourses();
      this.currentCourse = null;
      this.currentIndex = -1;
    },
    setActiveCourse(course, index) {
      this.currentCourse = course;
      this.currentIndex = course ? index : -1;
    },
    removeAllCourses() {
      CourseDataService.deleteAll()
      .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchTitle() {
      CourseDataService.findByTitle(this.title)
        .then(response => {
          this.courses = response.data;
          this.setActiveCourse(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveCourses();
    this.retrieveAggregateCourses();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
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
  height: 100px;
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
