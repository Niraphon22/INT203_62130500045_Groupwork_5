app.component('photo-search', {

    template: 
    /*html*/
    `
    <div class="flex justify-center mt-4 ">
    <div>
    <input type="text" @input="box_search" v-model="boxsearch" placeholder="Enter cat breed!"
            class="p-2 bg-white rounded border-2 border-gray-600">
    </div>
    <div>
      <button class="ml-1 p-2 rounded focus:outline-none bg-blue-300" @click="statusSearch">
        Cancel
      </button>
    </div>
  </div>

    `,
    data(){
      return{
        search: false,
        boxsearch: '',
        notFound: false
      }
    },

    methods: {
      statusSearch(){
        this.search = !this.search
        if(this.search){
          this.boxsearch= ''
        }
        this.$emit('status-search', this.search)
      },
      box_search(){
        let theText = this.boxsearch
        this.$emit('box-search', theText)
        theText = ''
      }
    }

})