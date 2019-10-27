<template>
   <div id="book">
  <div class = "centered-container">
    <row1 class="row1">
      <div class="title1">Choose Subject</div>
      <vue-dropdown
      :config="config"
      @setSelectedOption="setNewSelectedOption($event);"
      ></vue-dropdown>
    </row1>
    <row1 class="row1">
      <div class="title2"> Choose Lesson Type</div>
    <vue-dropdown
      :config="config1"
      @setSelectedOption="setNewSelectedOption1($event);"
    ></vue-dropdown>
    </row1>
    <row1 class="row1">
        <div class="title3"> Choose Tutor</div>
    <vue-dropdown
      :config="config2"
      @setSelectedOption="setNewSelectedOption2($event);"
    ></vue-dropdown>
  </row1>
      <row1 class="row1">
        <div class="title4"> Choose TimeSlot</div>
    <vue-dropdown
      :config="config3"
      @setSelectedOption="setNewSelectedOption3($event);"
    ></vue-dropdown>
  </row1>
        <row1 class="row1">
        <div class="title5"> Choose Day</div>
    <vue-dropdown
      :config="config4"
      @setSelectedOption="setNewSelectedOption4($event);"
    ></vue-dropdown>
  </row1>
  <div class="approve">
    <button class="button" @click="auth()" >Book Class</button>
  </div>
    <div>
       
<p class="authorise" id="alert" ></p>
      </div>
      </div>


    </div>
</template>

<script>
import vueDropdown from "./vue-dropdown/vue-dropdown.vue"
import { color } from 'style-value-types'

export default {
  name: "Book",
  components: {
    vueDropdown
  },
  data: function() {
    return {
      config: {
        options: [
          {
            value: "Mathematics"
          },
          {
            value: "Science"
          },
          {
            value: "English"
          }
        ],
        placeholder: "Select", 
        backgroundColor: "#cde4f5",
        textColor: "#666",
        borderRadius: "1.5em",
        border: "1px solid gray",
        width: 180
      },
    config1: {
        options: [
          {
            value: "Group"
          },
          {
            value: "Induvidual"
          },
        ],
        placeholder: "Select", 
        backgroundColor: "#cde4f5",
        textColor: "#666",
        borderRadius: "1.5em",
        border: "1px solid gray",
        width: 180
          },
    config2: {
        options: [
          {
            value: "Camille"
          },
          {
            value: "Beau"
          },
           {
            value: "Taboka"
          },
         {
            value: "Radika"
          },
        ],
        placeholder: "Select", 
        backgroundColor: "#cde4f5",
        textColor: "#666",
        borderRadius: "1.5em",
        border: "1px solid gray",
        width: 180    
        },
    config3: {
        options: [
          {
            value: "4pm"
          },
          {
            value: "5pm"
          },
        ],
        placeholder: "Select", 
        backgroundColor: "#cde4f5",
        textColor: "#666",
        borderRadius: "1.5em",
        border: "1px solid gray",
        width: 180
     },
    config4: {
        options: [
          {
            value: "Monday"
          },
          {
            value: "Tuesday"
          },
           {
            value: "Wednesday"
          },
          {
            value: "Thursday"
          },
        ],
        placeholder: "Select", 
        backgroundColor: "#cde4f5",
        textColor: "#666",
        borderRadius: "1.5em",
        border: "1px solid gray",
        width: 180
    }
    };
  },
  methods: {
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
    },
        setNewSelectedOption1(selectedOption1) {
      this.config1.placeholder = selectedOption1.value;
    },
        setNewSelectedOption2(selectedOption2) {
      this.config2.placeholder = selectedOption2.value;
        },
        setNewSelectedOption3(selectedOption3) {
      this.config3.placeholder = selectedOption3.value;
    },
      setNewSelectedOption4(selectedOption4) {
      this.config4.placeholder = selectedOption4.value;
    }, 
    auth() {

      document.getElementById("alert").innerHTML = "Thankyou! The tutor will be notified of your booking";
  }
  }
};
</script>

<style>
#book{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    color: rgb(0, 110, 255);
  margin-top: 60px;
  font-size: 20pt;
  padding:20pt; 
}
  .centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgb(132, 211, 95);
  box-shadow: 20pt black;
  flex-direction: column;
  margin-left: 320px;
  width: 50%;
  padding: 20pt;
  border-radius: 20px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
  
  }
    .title1 {
    text-align: center;
    font-weight:bold;
    margin-right: 60pt;
    }
    .title2 {
    text-align: center;
    font-weight:bold;
    margin-right: 20pt;
    }

    .title3 {
    text-align: center;
    font-weight:bold;
    margin-right: 90pt;
    }

    .title4 {
    text-align: center;
    font-weight:bold;
    margin-right: 50pt;
    }
    .title5 {
    text-align: center;
    font-weight:bold;
    margin-right: 90pt;
    }


    .row1{
      display: flex;
      flex-direction: row;
      margin-bottom: 20pt;
      text-align: left;
    }

.button {
  background: #2e9106; ;
  padding: 0.5rem 1rem;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  border-radius: 10px;
  border-bottom: 2px solid #2e9106;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
box-shadow: 0 8px 16px 0 rgba(255, 0, 0, 0.2), 0 6px 20px 0 rgba(255, 0, 157, 0.39);
}


.button:hover {
  background-color: blueviolet; 
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.authorise{
  color: rgb(162, 0, 255);
  font-size: 14pt;
  font-variant-caps: all-petite-caps;
  font-style: italic;
  font-weight: bold;
  font-variant-position:right;
}

placeholder{
  color: #666;
}

</style>
