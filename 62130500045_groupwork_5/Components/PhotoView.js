app.component('photo-view', {
  props:['photo'],
    template: 
    /*html*/
    `
    
    <button @click="closePhoto">
      <span class="material-icons top-0 right-0 text-5xl text-white absolute">
        close
        </span>
    </button>
    <div class="md:py-40">
      <img v-bind:src="photo" class="item-center" width="400" height="600">
    </div>
    </div>
    `,

    data(){
      return{

      }
    },

    methods: {
      closePhoto(){
        this.$emit('close-photo')
      }
    }
})