<template>
    <div id="terms">
        <div class = "terms text-center">
            Terms and Conditions
        </div>
        <div class = "terms-list ">
            <div class="row text-center">
                CourseCode: Four-letter code representing the faculty name in which a course is being offered
             </div>
            <div class="row text-center">
                CourseNo: Unique number identifying which class is being offered within the faculty outlined by CourseCode
            </div>
            <div class="row text-center">
                CourseID: Unique ID for each course offering
            </div>
        </div>
        <div class = "terms-conditions">
            <p> 
                These are the terms and conditions that govern the use of this service. All users must accept and comply with
                the regulations set out. 
                By using this application, you agree to be bound by the Terms and Conditions on this page.
                You may not use this service if you refuse to follow these terms and conditions.
                Contributors, Administrators, and other users of this application may not, under any circumstances, 
                use this program for commercial purposes. Course Critic is strictly a university course review site, 
                and using it for commercial purposes is a violation of the terms and conditions. 

                <br><br>
                The application allows contributors and administrators to post content regarding university courses they have taken.
                It is your responsibility to provide accurate, reliable, and fair information for other users to access. By posting a review,
                you understand that: 
                <ul>
                    <li> (a) You created the information with no plagiarism involved, and </li>
                    <li> (b) The review posted for a course does not reveal any personal details about a person, aside from their name and position within the faculty in which they teach. </li> 
                </ul>
                <br>
                Violation of any of these terms within your post is subject to removal by the Administrators. 
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "terms",
}
</script>

<style>
p {
    color: black;
}
.terms {
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    color: #000000;
    width: auto;
    margin: auto;
    margin-top: 30px;
}
.term-list {
    margin-left: 200px;
    margin-right: 200px;
    color: #000000;
}

.terms-conditions {
    margin-left: 200px;
    margin-right: 200px;
    color: black;
}
</style>