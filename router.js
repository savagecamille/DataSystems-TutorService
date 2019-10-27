import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Book from './components/Book.vue'
import Complaint from './components/Complaint.vue'
import Profile from './components/Profile.vue'
import SeeQuiz from './components/SeeQuiz.vue'
import Upload from './components/Upload.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
   {
        path: '/complaint',
        name: 'complaint',
        component: Complaint
    },
  {
    path: '/upload',
    name: 'upload',
    component: Upload
},
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },

    {
        path: '/seeQuiz',
        name: 'seeQuiz',
        component: SeeQuiz
    }    
  ]
})
