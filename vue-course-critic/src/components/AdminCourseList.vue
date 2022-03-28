
<template>
  <div id="adminCourseList" class="page-container">
          <router-link to="/admin">
            <div id="AdminHome" class="admin-home-btn card button-like card-1 text-center">Admin Home
            </div>
          </router-link>
        <div class="title text-center">
          UCalgary Course List
        </div>
        <div class="list" >
          <div class="col-md-8" >
          </div>
      </div>

   <div id="inline">
    <div class="info-box">
      <p> Administrators are allowed to delete courses that have been added to the Course Critic database. The filtering options are still available 
          for administrator use. </p>
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
          <td class="text-center">{{(Math.round(aggregatecourses.Difficulty*100)/100).toFixed(2)}}</td>
          <td class="text-center">{{(Math.round(aggregatecourses.Enjoyment*100)/100).toFixed(2)}}</td>
          <td class="text-center">{{(Math.round(aggregatecourses.Workload*100)/100).toFixed(2)}}</td>
          <td class="text-center">{{aggregatecourses.NumReviews}}</td>
          <button type=" button "  class="btn view-btn" @click="update(aggregatecourses.ID)">
            View Reviews
          </button>
          <td>
              <button @click="remove(aggregatecourses.ID)" type="submit" class="btn remove-btn">
                Remove Course
              </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CourseDataService from "../services/CourseDataService";
import RatingDataService from "../services/RatingDataService";
import ReviewDataService from "../services/ReviewDataService"
export default {
name: "adminCourseList",
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
      remove(id){
          window.alert("Course Removed!");
          RatingDataService.delete(id)
          .then(response => {
          console.log(response.data);
          ReviewDataService.delete(id)
          .then(responseTwo => {
            console.log(responseTwo.data);
            CourseDataService.delete(id)
            .then(responseThree =>{
              console.log(responseThree.data);
              // this.$router.go();
              this.$router.push({name: "coursesAdmin"});
            })
            .catch(e => {
            console.log(e);
            });
          })
          .catch(e => {
            console.log(e);
            CourseDataService.delete(id)
            .then(responseThree =>{
              console.log(responseThree.data);
              // this.$router.go();
              this.$router.push({name: "coursesAdmin"});
            })
            .catch(e => {
            console.log(e);
            });
          });
        })
        .catch(e => {
            console.log(e);
            ReviewDataService.delete(id)
            .then(responseTwo => {
              console.log(responseTwo.data);
              CourseDataService.delete(id)
              .then(responseThree =>{
                console.log(responseThree.data);
                // this.$router.go();
                this.$router.push({name: "coursesAdmin"});
              })
              .catch(e => {
              console.log(e);
              });
            })
            .catch(e => {
              console.log(e);
              CourseDataService.delete(id)
              .then(responseThree =>{
                console.log(responseThree.data);
                // this.$router.go();
                this.$router.push({name: "coursesAdmin"});
              })
              .catch(e => {
              console.log(e);
              });
            });
        });
      },
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
      this.$router.push({name: "reviewsAdmin",
        params: { id:data }
      });
    },
    refreshList() {
      this.retrieveCourses();
      this.currentCourse = null;
      this.currentIndex = -1;
    },
    removeAllCourses() {
      CourseDataService.deleteAll()
      .then(response => {
          console.log(response.data);

          this.refreshList();
        })
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
  line-height: 60px;
  color: #000000;
  width: auto;
  margin: auto;
  margin-bottom: 40px;
  margin-top: 30px;
  margin-right: -30px;
  margin-left: -30px;
}

#AdminHome{
  width: 50%;
}

#AdminHome:hover{
  border-radius: 5px;
  color: white;
  background: #0e6e58;
  transition: 500ms;
}

.admin-home-btn{
  width: 10%;
  text-decoration: none;
  margin-left: 325px;
}

.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

#inline{
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
  margin-top:5px;
  margin-bottom: -5px;
}

.remove-btn{
  border: 1px solid grey;
  height: 70px;
  margin-top: -5px;
  margin-bottom: -5px;
}

.remove{
  border-radius: 5px;
  color: white;
  background: #009B77;
  transition: 500ms;
  width: 200px;
}

.ant-popover-arrow {
  border-color: #0c0926 !important;
}
.ant-popover-inner-content {
  background-color: #0c0926 !important;
}
</style>