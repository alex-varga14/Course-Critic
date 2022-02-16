<template>
  <div class="list row">
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
<script>
import CourseDataService from "../services/CourseDataService";
export default {
name: "courses-list",
data() {
  return {
      courses: [],
      currentCourse: null,
      currentIndex: -1,
      title: ""
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
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
