<template>
    <div id="contact">
        <div class = "contact text-center">
            Contact Us
        </div>
        <form class="contact-subs">
        <!-- 2 column grid layout with text inputs for the first and last names -->
        <div class="row mb-4">
            <div class="col">
                <div class="form-outline">
                 <label class="form-label" for="fname">First name</label>
                    <input type="text" id="fname" class="form-control" placeholder="John"/>
                </div>
            </div>
            <div class="col">
                <div class="form-outline">
                    <label class="form-label" for="lname">Last name</label>
                    <input type="text" id="lname" class="form-control" placeholder="Smith"/>
                </div>
            </div>
        </div>
        <!-- Email input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="eaddress">Email address</label>
            <input type="email" id="eaddress" class="form-control" placeholder="JohnSmith123@gmail.com"/>
        </div>
        <!-- Message input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="message">Message</label>
            <input type="message" id="message" class="form-control" placeholder="I would like to become an admin"/>
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4  text-center">Send Message</button>
    </form>
    </div>
</template>

<script>
export default {
  name: "contact",
}
</script>

<style>
p {
    color: black;
}
.contact {
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    color: #000000;
    width: auto;
    margin: auto;
    margin-top: 30px;
}
.contact-subs {
    font-weight: 300;
    font-size: 20px;
    color: #000000;
    width: auto;
    margin: auto;
    margin-top: 30px;
}
</style>