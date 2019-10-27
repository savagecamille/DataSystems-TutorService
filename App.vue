<template>
  <div id="app">
    <header class="toolbar">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/book">Book a Tutor</router-link>
        <router-link to="/seeQuiz">See Quiz Results</router-link>
        <router-link to="/upload">Upload Your Quiz</router-link>
        <router-link id= "parentTab" to="/complaint">Make a Complaint</router-link>
        <router-link to="/profile">Profile</router-link>
        <b>I Want a TUTOR!  </b>
      </nav>
    </header>
    <div>
    <router-view/>
   </div> 
  </div>
</template>

<script>

export default {
  //sample change to try and push to github change
  name: 'app',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background: repeating-radial-gradient(
  circle,
  #068BC8,
  #068BC8 10px,
  rgb(37, 166, 226) 10px, 
  rgb(37, 166, 226) 20px
);
  font-family: 'Montserrat', sans-serif;
  /*display: grid | inline-grid;
  grid-template-rows: flex; */
}

.toolbar {
  background-color: #068BC8;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
}

nav {
  padding: 20px 20px 20px 20px;
  overflow-wrap: normal;  
  display:inline-flexbox;
  width: 100%;
  height: 100%;
}

nav a {
  padding: 10px ;
  text-decoration: none;
  background:white;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
  overflow-wrap: normal;
  justify-content: space-around;
  flex-flow: row wrap;
  grid-row-gap: 3in;
}

#parentTab{
  background-color:#76B617;
  color:papayawhip;
}


nav b {
  color: #FCE900;
  text-align: right;
  float: right;
  margin-right: 100pt;
  font-size: 20pt;


}
body, html {
  margin: 0;
  height: 100%;
}

#app {
    width: 100%;
}
</style>

