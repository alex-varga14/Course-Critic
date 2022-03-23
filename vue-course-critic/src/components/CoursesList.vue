
<template>
  <div class="page-container" id="courselist">
    <section class="section-app-face children-center grid-cover-container">
      <div class="grid-cover-content children-center">
        <div class="title">
          UCalgary Course List
        </div>
        <div class="list" >
          <div class="col-md-8" >
            
             
            
          </div>
      </div>
     </div>
    </section>

   <div id="inline1">
    <div class="info-box">
      <p> Course Critic offers an assortment functionsfor filtering through courses. 
        You can filter the course list by Course Code, Course Number, Faculty or with the name
          the course! </p>
    </div>

    <div class="filters-left">
      
        <label for="title filter">Course Title</label>
      <div class="title-filter">
        <input type="text" class="form-control" placeholder="Software Architecture" style="width:600px height:500p"
        id="title filter" v-on:input="filterCode" />
      </div>
     
        <label for="faculty filter">Faculty</label>
      <div class="faculty-filter">
        <input type="text" class="form-control" placeholder="Software Engineering" style="width:600px height:500p"
        id="faculty filter" v-on:input="filterCode" />
      </div>
    </div>

    <div class="filters-right">
      
        <label for="code filter">Course Code</label>
      <div class="code-filter">
        <input type="text" class="form-control" placeholder="SENG" style="width:600px height:500p"
          id="code filter" v-on:input="filterCode" />
      </div>
     
        <label for="number filter">Course Number</label>
      <div class="number-filter">
        <input type="text" class="form-control" placeholder="401" style="width:600px height:500p"
        id="number filter" v-on:input="filterCode" />
      </div>
    </div>
  </div>
      <table class="table" id="formtable">
      <thead>
        <tr id="header">
          <th scope="col">Course Code</th>
          <th scope="col">Course Number</th>
          <th scope="col">Title</th>
          <th scope="col">Faculty</th>
          <th scope="col">Average Difficulty</th>
          <th scope="col">Average Enjoyment</th>
          <th scope="col">Average Workload</th>
          <th scope="col">Reviews</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aggregatecourses in aggregatecourses" v-bind:key="aggregatecourses" id="rows">
          <td id="code">{{aggregatecourses.CourseCode}}</td>
          <td>{{aggregatecourses.CourseNo}}</td>
          <td>{{aggregatecourses.Title}}</td>
          <td>{{aggregatecourses.Faculty}}</td>
          <td class="text-center">{{aggregatecourses.Difficulty}}</td>
          <td>{{aggregatecourses.Enjoyment}}</td>
          <td>{{aggregatecourses.Workload}}</td>
          <td>{{aggregatecourses.NumReviews}}</td>
          <button type=" button "  class="btn view-btn" @click="update(aggregatecourses.ID)">
            View Reviews
          </button>
        </tr>
      </tbody>
    </table>
    
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
      this.$router.push({name: "courses",
      params: { data }
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
    filterCode: function(){
    var text, table, tableRows, td, i, txtValue,tdTwo,textTwo;
    var tdThree, textThree, tdFour, textFour;
    text = document.getElementById("code filter").value;
    textTwo = document.getElementById("number filter").value;
    textThree = document.getElementById("title filter").value;
    textFour = document.getElementById("faculty filter").value;
    table = document.getElementById("formtable");
    tableRows = table.getElementsByTagName("tr");
    for (i = 0; i < tableRows.length; i++) {
      td = tableRows[i].getElementsByTagName("td")[0];
      tdTwo =tableRows[i].getElementsByTagName("td")[1];
      tdThree =tableRows[i].getElementsByTagName("td")[2];
      tdFour =tableRows[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent;
          if (txtValue.indexOf(text) > -1) {
            tableRows[i].style.display = "";
          } else {
            tableRows[i].style.display = "none";
          }
        }
        if (tdTwo) {
          txtValue = tdTwo.textContent;
          if (txtValue.indexOf(textTwo) > -1) {
            if(tableRows[i].style.display!="none"){
              tableRows[i].style.display = "";
            }
          } else {
            tableRows[i].style.display = "none";
          }
        }
        if (tdThree) {
          txtValue = tdThree.textContent;
          if (txtValue.indexOf(textThree) > -1) {
            if(tableRows[i].style.display!="none"){
              tableRows[i].style.display = "";
            }
          } else {
            tableRows[i].style.display = "none";
          }
        }
        if (tdFour) {
          txtValue = tdFour.textContent;
          if (txtValue.indexOf(textFour) > -1) {
            if(tableRows[i].style.display!="none"){
              tableRows[i].style.display = "";
            }
          } else {
            tableRows[i].style.display = "none";
          }
        }
      }
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
  },
  },
  mounted() {
    this.retrieveCourses();
    this.retrieveAggregateCourses();
  }
};
</script>
<style>
.title{
  font-weight: 300;
  font-size: 40px;
}

.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

#inline1{
  border: 1px dotted grey;
  border-radius: 15px;
  width: 60%;
  background-color:white;
  display:flex;
  margin-left: 255px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 30px;
  color: black;
}

.info-box{
  width: 30%;
  margin-left: 30px;
  margin-right: 150px;
}

.filters-left{
  margin-left: -110px;
}

.filters-right{
  margin-left: 70px;
}

.title-filter{
  margin-bottom: 20px;
}

.code-filter{
  margin-bottom: 20px;
  width: 40%;
}

.number-filter{
  width: 40%;
}

tr:nth-child(even){
  background-color: #f2f2f2;
}

.view-btn{
  border: 1px solid grey;
  height: 70px;
  background: blue;
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
  margin-top: 10px;
  margin-bottom: 20px;
  height: 100px;
  position: relative;
}

.section-app-face .title {
  font-weight: 300;
  font-size: 40px;
  line-height: 60px;
  color: #000000;
  margin-bottom: 16px;
  margin-top: 0px;
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
