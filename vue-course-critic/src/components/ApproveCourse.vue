<template>
  <div>
    <div class = "page-title">Approve Courses</div>
    
    <table class="unapproved-course">
        <tr>
            <td class="course-title">Course Title</td>
            <td class="faculty">Faculty</td>
            <td class="course-code">Course Code</td>
            <td class="course-num">Course Number</td>
            <td id="describe">Description</td>
            <td >Status</td>
        </tr>
        
        <tr> <!-- Place Holder -->
            <td>CPSC 441</td>
            <td>Comp Sci</td>
            <td>Code</td>
            <td>number</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum itaque sequi, ex mollitia nam reiciendis molestias accusantium officia harum a atque incidunt tempore quod sapiente nesciunt aut excepturi quae.</td>
            <td id="approve-status">Pending Approval</td>
            <td>
                <button @click="approveCourse" class="btn btn-success approve-btn text-center">Approve</button>
                <p></p>
                <button @click="denyCourse" class="btn btn-success deny-btn text-center">Deny</button>
            </td>
        </tr>
    </table>

  </div>    
</template>

<script>
export default {
    methods: {
        approveCourse() {
            //window.alert("Course approved!");
            //Place Holder
            const temp = document.getElementById("approve-status");
            temp.innerHTML = "Now Approved!";
        },
        denyCourse() {
            const temp = document.getElementById("approve-status");
            temp.innerHTML = "Not Approved!";
        }
    }
}
</script>

<style>
    .page-title{
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
        text-align: center;
    }

    table{
        font-size: 15px;
        color: black;
        text-align: center;
        margin-left: auto;
        margin-right: auto ;
        
    }

    table, th, td {
        border: 1px solid black;
        border-collapse: separate;
        border-collapse: collapse;
    }

    table, td.describe{
        max-width: 100ch;
        word-wrap:break-word;
    }

    
    
</style>