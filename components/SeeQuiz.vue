<template>
 <div id="quizResults"> 
<div class="containerQuiz"> 
  <div class="chart"> 
<trend
  :data="[0, 75, 10, 95, 60]"
  :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
  auto-draw
  smooth
>
</trend>
</div>
<div class="contentContainer">
  <div class="column1q">
<div class="title">Due Date</div>
<ul style="list-style-type:none">
         <li class="QuizList">25/10/19</li>
         <li class="QuizList">18/10/19</li>
         <li class="QuizList">11/10/19</li>
         <li class="QuizList">09/10/19</li>         
      </ul>
  </div>     
<div class="column2q">
<div class="title">Topic</div>
<ul style="list-style-type:none">
         <li class="QuizList">Fractions pt. 1</li>
         <li class="QuizList">Multiplication Post Task</li>
         <li class="QuizList">Multiplication Pre Task</li>
         <li class="QuizList">Addition and Subtraction</li>         
      </ul>
</div>
<div class="column3q">
<div class="title">Grade</div>
<ul style="list-style-type:none; text-align:center">
         <li class="QuizList">60%</li>
         <li class="QuizList">95%</li>
         <li class="QuizList">10%</li>
         <li class="QuizList">75%</li>         
      </ul>
</div>
<div class="column3q">
<div class="titleDownload">Download Graded Paper</div>
<ul class="downloadList" style="list-style-type:none">
         <li  class="QuizList" @click=download1()>download</li>
         <li class="QuizList" @click=download2()>download</li>
         <li class="QuizList" @click=download3()>download</li>
         <li class="QuizList" @click=download4()>download</li>
      </ul>
</div>
</div>
</div>
</div>
<!-- other method 
  <svg viewBox="0 0 500 100" class="chart">
  <polyline
     fill="none"
     stroke="#0074d9"
     stroke-width="2"
     points="
       00,120
       20,60
       40,80
       60,20
       80,80
       100,80
       120,60
       140,100
       160,90
       180,80
       200, 110
       220, 10
       240, 70
       260, 100
       280, 100
       300, 40
       320, 0
       340, 100
       360, 100
       380, 120
       400, 60
       420, 70
       440, 80
     "
   />
   </svg> -->
  
</template>

<script>
import download from "downloadjs";
export default {

  methods: {
   download1() {
   download( "example quiz","Fractions pt. 1");
    },
    download2() {
   download( "example quiz","Multiplication Post Task");
    },
    download3() {
   download( "example quiz","Multiplication Pre Task");
    },
    download4() {
   download( "example quiz","Addition and Subtraction");
    }
  } 
}

</script>


<style>

.chart{

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80%;
  padding-bottom: 20pt; 

  
}

.containerQuiz{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 20pt black;
  flex-direction: column;
  width: 80%;
  padding: 20pt;
  border-radius: 0px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  background-color: rgb(200, 236, 253) ;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 30px;
  font-size: 16pt;
  margin-left: 7%;
}

.QuizList{
  padding-bottom: 15pt;
}

.contentContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color:#42b983  ;
  box-shadow: 20pt black;
  flex-direction: row;
  width: 90%;
  padding-top: 50pt;
}


.downloadList{ 
font-variant-caps: all-petite-caps;
text-align: center;
text-decoration: underline;
}

.title{
  padding-left: 25pt; 
   padding-bottom: 5pt; 
  font-weight: bold;
  color: #2c3e50;
}

.titleDownload{
  padding-left: 55pt; 
  padding-bottom: 5pt; 
  font-weight: bold;
  color: #2c3e50;
  text-align: right;
}
</style>
