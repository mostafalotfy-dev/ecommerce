
document.addEventListener("alpine:init", () => {
        Alpine.store("search",{
                searchInput: "",
                result:[],
                loading : false,
                page_number:1,
                value:"",

                controller : new AbortController(),

                length:0,

                send(id){

                    formData = new FormData();
                    formData.append("key",id)
                    formData.append("value",this.value)
                   fetch("http://"+location.host + "/api/ajax/language",{
                       method:"post",
                        body:formData,
                       headers:{
                           "Accept":"application/json"
                       },

                    });

                },

                get()
                {

                    fetch(location.protocol + "/api/ajax/language/"+encodeURIComponent(this.searchInput.replace(/\//g,"-"))+"?page=" +this.page_number,{ signal:this.controller.signal})
                        .then((r)=>r.json())
                        .then(({data})=>{
                            this.result = data;
                            this.length = data.length

                        })
                        .catch((e)=>{
                            console.log(e.message)
                            this.loading = false
                        })
                },
            delete(id){
                    fetch(location.protocol+"/api/ajax/language/"+id,{
                        method:"delete",

                    }).then((r)=> r.json())
                        .then((r)=>this.result = r.data.data)
            },
                nextPage(){

                    this.page_number++;


                    if(this.page_number > this.length)
                        this.page_number = this.length
                    this.loading = true
                    this.get()
                },
                prevPage(){
                    this.page_number--;
                    if(this.page_number < 1)
                        this.page_number = 1;
                    this.loading = true
                    this.get();
                },

            }
        )
        Alpine.store("permission",{
            permissions:[],
            searchInput: "",
            currentPage:1,
            errors:null,
            paginate()
            {
                fetch(`http://${location.host}/api/ajax/permissions/${encodeURIComponent(this.searchInput)}?page=${this.currentPage}`)
                    .then((r)=> r.json())
                    .then(({permissions})=>this.permissions = permissions)
            },
            add(){
                let formData = new FormData(document.getElementById("role-form"))
              fetch(`http://${location.host}/api/ajax/permissions`,{
                  method:"post",
                  body:formData,
                  headers:{
                      "Accept":"application/json"
                  }
              }).then((r)=> {

                return r.json();
              }).then((r)=>{
                   if(r.hasOwnProperty("errors"))
                   {
                       this.errors = r.message

                   }else{
                       location = r.redirect_to
                   }
              })


            },
            next()
            {

                this.currentPage++;
                if(this.currentPage > this.permissions.length)
                {
                    this.currentPage = this.permissions.length - 1;

                }
                this.paginate()
            },
            previous()
            {

                this.currentPage--;
                if(this.currentPage < 1)
                {
                    this.currentPage = 1;

                }
                this.paginate()
            }
        })
    })


