<template class="complaintPage">
<div id="complaint">
  <titleAlert class ="titleAlert" :pose="isVisible ? 'visible' : 'hidden'">
   --------------- Parent Tab ---------------
    </titleAlert>
  <div class = "centered-containerComplaint">
    <row1 class="row1">
      <div class="title1">Choose a Past Class</div>
      <vue-dropdown
      :config="config"
      @setSelectedOption="setNewSelectedOption($event);"
      ></vue-dropdown>
    </row1>
  <row2 class= "row2">
  <input
    type="text"
    class="input"
    :value="value"
    v-on="listeners"
    placeholder="We're sorry you're unsatisfied with your experience please give use details so we can improve!"
  >
  </row2>
  <div class="approve">
    <button class="button2" @click="auth2()" >Submit Complaint</button>
  </div>
    <div>
       
<p class="authorise2" id="alert2" ></p>
      </div>
      </div>


    </div>  
</template>

<script>





</script>

<script>
import posed from "vue-pose";
import vueDropdown from "./vue-dropdown/vue-dropdown.vue"
import { color } from 'style-value-types'

export default {
  name: "Complaint",

    data: () => ({ isVisible: false }),
  mounted() {
    setInterval(() => {
      this.isVisible = !this.isVisible;
    }, 800);
  },
  components: {
    titleAlert: posed.div({
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    })
  },
  components: {
    vueDropdown
  },
  data: function() {
    return {
      config: {
        options: [
          {
            value: "BEAU - tues 5pm "
          },
          {
            value: "TABOKA - tues 4pm "
          },
          {
            value: "RADIKA - Mon 4pm "
          }
        ],
        placeholder: "Select", 
        backgroundColor: "#cde4f5",
        textColor: "#666",
        borderRadius: "1.5em",
        border: "1px solid gray",
        width: 180
      }
    };
  } ,
  methods: {
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
    },
        auth2() {

      document.getElementById("alert2").innerHTML = "Thankyou! Your Complaint Will Be Assessed and the Tutor Notified";
  }
  }
};
</script>

<style>
#complaint{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#FCE900;
  font-size: 20pt;
}
  .centered-containerComplaint {
  margin-top: 30pt;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 20pt black;
  flex-direction: column;
  margin-left: 320px;
  width: 50%;
  padding: 20pt;
  border-radius: 20px;
  background-color: #EE7500;
  
  }


    .title1 {
    text-align: center;
    font-weight:bold;
    margin-right: 60pt;
    }

.input{
  display: flex;
  align-items: left;
  justify-content: left;
  background-color: rgb(213, 230, 255);
  width: 400pt;
  height: 100pt;
  float: left;
  padding-bottom: 90pt;
  
}
    input::placeholder{
      color: #666;
    }
.button2 {
  padding: 0.5rem 1rem;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  border-radius: 10px;
  background-color: #FCE900;
  border-bottom: 2px solid #2e9106;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
box-shadow: 0 8px 16px 0 rgba(255, 0, 0, 0.2), 0 6px 20px 0 rgba(255, 0, 157, 0.39);
}


.button2:hover {
  background-color: #2e9106; 
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.button2:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.authorise2{
  background-color:#76B617;
  color:papayawhip;
  font-size: 14pt;
  font-variant-caps: all-petite-caps;
  font-style: italic;
  font-weight: bold;
  font-variant-position:right;
  padding-left:  10pt;
  padding-right:  10pt;
}

.titleAlert{
  background-color:#FCE900;
  color: #EE7500;
  padding-inline: 20pt;
  font-size: 40pt;
  text-align: center;
  display: block;
  width: 100%;
  font-weight: bold;
  margin-top: 10pt;
}

    </style>
