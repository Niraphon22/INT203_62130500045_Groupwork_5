class Cat {
    constructor(title){
        this.title = title;
    }
}

const app = Vue.createApp( {
    data() {
        return {
            tasks: [{id: 0, title: 'siamese', image: './images/1.jpg', done: false},
                    {id: 1, title: 'exotic', image: './images/2.jpg', done: false},
                    {id: 2, title: 'persian', image: './images/3.jpg', done: false}
                ],
            
            search: false,
            boxsearch: '',
            notFound: false,
            photo: '',
            photoShow: false
        }
    },
    methods: {
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
        },

        box_search(){
            this.boxsearch = title
        }

        
    },
    computed: {
        countLike(){
            return this.tasks.filter( t => t.done).length
        },
        searchPhoto(){
            if(this.boxsearch){
                if(this.tasks.filter(tasks => tasks.title.includes(this.boxsearch.toLowerCase())) == ''){
                    this.notFound = true
                }else{
                    this.notFound = false
                    return this.tasks.filter(tasks => tasks.title.includes(this.boxsearch.toLowerCase()))
                }
            }else{
                this.notFound = false
                return this.tasks
            }
        }
    }
    
})
