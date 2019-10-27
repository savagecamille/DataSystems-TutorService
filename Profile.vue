<template>
  <div id="profile">

    <textbox class="centered-container2"> 
      <div class="Tutoring-Box">  
      <column1t class="title">Tutoring Subjects: </column1t>
      <column2t>
        <li class="newlist">Mathematics</li>
        <li class="newlist">Science</li>
        </column2t>
             </div>
  </textbox>
  <textbox class="centered-container3">
 
       <div class="bio">
      <div class="name">
        TOMMY
      </div> 
       <div class="age">
         Age: 10 years old 
      </div> 
      </div>
    </textbox>
      <div class="note">
         Try Dragging The Stars!
      </div> 
    <v-stage
      ref="stage"
      :config="configKonva"
      @dragstart="handleDragstart"
      @dragend="handleDragend"
    >
      <v-layer ref="layer">
        <v-star
          v-for="item in list"
          :key="item.id"
          :config="{
            x: item.x,
            y: item.y,
            rotation: item.rotation,
            id: item.id,
            numPoints: 5,
            innerRadius: 30,
            outerRadius: 50, fill: '#89b717',
            opacity: 0.8,
            draggable: true,
            scaleX: dragItemId === item.id ? item.scale * 1.2 : item.scale,
            scaleY: dragItemId === item.id ? item.scale * 1.2 : item.scale,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffsetX: dragItemId === item.id ? 15 : 5,
            shadowOffsetY: dragItemId === item.id ? 15 : 5,
            shadowOpacity: 0.6
          }"
        ></v-star>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
const width = window.innerWidth;
const height = window.innerHeight;
export default {
  data() {
    return {
      list: [],
      dragItemId: null,
      configKonva: {
        width: width,
        height: height
      }
    };
  },
  methods: {
    handleDragstart(e) {
      // save drag element:
      this.dragItemId = e.target.id();
      // move current element to the top:
      const item = this.list.find(i => i.id === this.dragItemId);
      const index = this.list.indexOf(item);
      this.list.splice(index, 1);
      this.list.push(item);
    },
    handleDragend(e) {
      this.dragItemId = null;
    }
  },
  mounted() {
    for (let n = 0; n < 30; n++) {
      this.list.push({
        id: Math.round(Math.random() * 10000).toString(),
        x: Math.random() * width,
        y: Math.random() * height,
        rotation: Math.random() * 180,
        scale: Math.random()
      });
    }
  }
};
</script>

<style>
#profile{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
    color: rgb(0, 110, 255);
  font-size: 12pt;
  padding:20pt; 
  font-weight: bold;
}

  .centered-container2 {
  display: flex;
  align-items: left;
  justify-content: center;
  position: relative;
  background-color: #89b717;
  box-shadow: 20pt black;
  flex-direction: row;
  margin-left: 8%;
  width: 30%;
  border-radius: 20px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
  }


  .centered-container3{
  display: flex;
  align-items: right;
  justify-content: center;
  position: relative;
  background-color: #89b717;
  box-shadow: 20pt black;
  flex-direction: row;
  margin-left: 68%;
  width: 20%;
  border-radius: 20px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
  }

.bio{
  margin-left: 40pt;
}

.newlist{
  margin-left: 80pt;
}

.name{
  font-size: 20pt;
  text-align: right;
}

.age{
  text-align: center;
}
.title{
  font-size: 20pt;
  text-align: left;
}

.note{
  display: flex;
   align-items: left;
  justify-content: center;
  text-align: center;
  position: relative;
  background-color:  papayawhip;
  box-shadow: 20pt black;
  flex-direction: row;
  font-variant-caps: all-petite-caps;
  color: #89b717;
  width: 20%;
  border-radius: 20px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
}

</style>