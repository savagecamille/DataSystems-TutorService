<template>
<div id="Home">
    <quizAlert class ="quizAlert" :pose="isVisible ? 'visible' : 'hidden'">
     <pt1 class="part1"> New Quiz Ready! </pt1>
     <pt2 class="part2" @click=download() >
      <!-- good not get this method to download the correct file either
     <a href="./assets/test.png" download=Quiz-20/10/19> -->
        <img src="./assets/paperA.png" style="height:20pt">
        Download Here 
       <img src="./assets/paperA.png" style="height:20pt">
    </pt2>
    </quizAlert>
  <div class="flex-container" style="height=200pt">
    <div>
      <img src="./assets/book-pile2.png"  style="width: 250pt; height 650pt">
    </div>
    <div>
    <star1 class= "Star1" :pose="isVisible ? 'visible' : 'hidden'" >
     <star2> 
       <router-link to="/book" class="link-test">
      <textbox> 
        <ul>
          <li></li>
          <li>BOOK </li>
          <li>A</li> 
          <li>LESSON</li>
         </ul> 
        </textbox>
        </router-link>
      </star2>
    </star1>
    </div>
        <div>
   <img src="./assets/book-pile.png" align= "right" style="width: 250pt; height 650pt">
    </div>
  </div>
  </div>
</template>


<script>

import posed from "vue-pose";
import download from "downloadjs";
import { pathToFileURL } from 'url';
export default {
  data: () => ({ isVisible: false }),
  mounted() {
    setInterval(() => {
      this.isVisible = !this.isVisible;
    }, 800);
  },

  components: {
    star1: posed.div({
      visible: { opacity: 1 },
      hidden: { opacity: 0.8 }
    }),
      quizAlert: posed.div({
      visible: { opacity: 0.8},
      hidden: { opacity: 1}
    }),
  },
 
  methods: {
   download() {
   download( "example quiz","Quiz-20/10/2019");
    }
  } 
}

</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.Star1{ 
  position: relative;
  left: 0pt;
  width: 650px;
  height: 650px;
  background-color: #EE7500;
  shape-outside:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  float: left;
  shape-margin: 50pt; 
  margin-right: 15px;
  align-items: center;
}
star2{ 
  position: relative;
  top: 40pt;
  left: 40pt;
  width: 550px;
  height: 550px;
  background-color: #FCE900;
  shape-outside:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  float: left;
  text-align: center;
  shape-margin: 50pt; 
  border-radius: 3px;
  color: #EE7500;
  font-weight: bold;
  margin-right: 15px;
  overflow-wrap: normal;
  justify-content: space-around;
  flex-flow: row wrap;
  grid-row-gap: 3in;
  font-size: 32pt;
  align-items: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-emphasis-position:initial;
  text-shadow: 4px 4px 4px rgb(88, 49, 0), 0 0 50px #EE7500, 0 0 50px yellow;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

textbox{
  position: relative;
  right: 15pt;
  top: 80pt;
}

.link-test{
  color: #EE7500;
}

.flex-container{
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: center;
}

.quizAlert{
  color:#FCE900;
  background-color: #EE7500;
  font-size: 20pt;
  display: block;
  width: 100%;
  font-weight:400;
  margin-top: 1%;
  margin-bottom: 1%;
}
  .part2{
    text-align: right;
    margin-left: 25%;
  }

  .part1{
    margin-left: 20%;
  }
 




</style>