<template>
  <div class="submit-form title">
    <div class="title-big">
      Suggest A Course
    </div>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="course.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="course.description"
          name="description"
        />
      </div>
      <button @click="saveCourse" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCourse">Add</button>
    </div>
  </div>
</template>
<script>
import CourseDataService from "../services/CourseDataService";
export default {
  name: "add-course",
  data() {
    return {
      course: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveCourse() {
      var data = {
        title: this.course.title,
        description: this.course.description
      };
      CourseDataService.create(data)
        .then(response => {
          this.course.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.course = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}

.title {
  font-weight: 50;
  color: #000000;
}

.title-big {
  font-weight: 300;
  font-size: 32px;
  line-height: 60px;
  color: #000000;
  margin-bottom: 16px;
  margin-top: 56px;
}
</style>
<!-- This component calls 3 CourseDataService methods-->
