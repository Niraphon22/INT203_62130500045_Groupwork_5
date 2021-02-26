app.component('photo-item',{
    props:['tasks'],
 
    template:
    /*html*/
    `
    <span class="mb-2 text-xl font-medium tracking-tighter text-gray-900 title-font inset-y-0 right-0 pl-4">
    {{ tasks.title }}
    </span>
      <img v-bind:src="tasks.image" :alt="tasks.title" @click="$emit('show-photo')" 
            class= "transform hover:scale-110 object-center w-72 h-80 rounded-md lg:h-auto px-4 pt-2">
  
      <button @click="toggleDone(tasks.id)">
        <i class="material-icons pl-4 " v-show="!tasks.done">
          favorite_border
        </i>
      </button>

      <button @click="toggleDone(tasks.id)">
        <i  class="material-icons pl-4" style=color:red v-show="tasks.done">
          favorite
        </i>
      </button>

    `,

    data(){
      return{
        photo: '',
        photoShow: false

      }
    },

    methods: {
        toggleDone(id){
            this.$emit('toggle-done', id)
        },
        showPhoto(id){
          let thePhoto = this.photo
          this.$emit('show-photo', id, thePhoto)
          thePhoto= ''
        }
    }
})