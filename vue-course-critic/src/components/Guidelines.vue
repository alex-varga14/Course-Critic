<template>
    <div>
        <div class="guidelines text-center">
            Cource Critic Guidelines
        </div>

        <div class="guidelines-info text-center">
            <ul class = "guideline-text">
                <li> <span class = "textspan"> Remember to respect everyone at all times. </span> </li>
                <li> <span class = "textspan"> Kindly refrain from using profanities when writing reviews. </span> </li>
                <li> <span class = "textspan"> Honesty goes a long way. Be as truthful as you can when telling your experiences! </span> </li>
                <li> <span class = "textspan"> Professors are people too. Remember this when writing about them. </span> </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Guidelines'
}
</script>

<style>
p {
    color: black;
}

.guideline-text {
    color: black;
}

ul {
    display: inline-block;
}

.guidelines {
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    color: #000000;
    width: auto;
    margin: auto;
    margin-top: 30px;
}
.guidelines-info {
    margin-left: 20px;
    margin-right: 20px;
}
</style>
