
const app = Vue.createApp( {
    data() {
        return {
            tasks: [{id: 0, title: 'Siamese', image: './images/1.jpg', done: false},
                    {id: 1, title: 'Exotic', image: './images/2.jpg', done: false},
                    {id: 2, title: 'Persian', image: './images/3.jpg', done: false}
                ],
            
            search: false,
            boxsearch: '',
            notFound: false,
            photo: '',
            photoShow: false
        }
    },
    methods: {
        box_search(title){
            this.boxsearch = title
        },

        toggleDone(id){
            this.tasks[id].done = !this.tasks[id].done
        },

        statusSearch(){
            this.search = !this.search
            this.boxsearch=''

        },

        showPhoto(id){
            this.photo = this.tasks[id].image
            this.photoShow = true
        },

        closePhoto(){
            this.photoShow = false
        }

        
    },
    computed: {
        countLike(){
            return this.tasks.filter( t => t.done).length
        },
        searchPhoto(){
            if(this.boxsearch){
                if(this.tasks.filter(tasks => tasks.title.toLowerCase().includes(this.boxsearch.toLowerCase())) == ''){
                    this.notFound = true
                }else{
                    this.notFound = false
                    return this.tasks.filter(tasks => tasks.title.toLowerCase().includes(this.boxsearch.toLowerCase()))
                }
            }else{
                this.notFound = false
                return this.tasks
            }
        }
    }
    
})
