
document.addEventListener("alpine:init", () => {
        Alpine.store("search",{
                searchInput: "",
                result:[],
                loading : false,
                page_number:1,
                value:"",

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
                       }
                    });

                },
                search(){


                    if(!this.searchInput.length && this.searchInput.length <= 3  || this.searchInput.length === 0)
                    {
                        return;
                    }

                   fetch(location.protocol + "/api/ajax/language/"+encodeURIComponent(that.searchInput.replace(/\//g,"-")))
                       .then((r)=>r.json())
                       .then((r)=>this.result = r)
                },
                get()
                {

                    fetch(location.protocol + "/api/ajax/language?page=" +this.page_number)
                        .then((r)=>r.json())
                        .then(({data})=>{
                            this.result = data.data;
                            this.length = data.data.length

                        })
                        .catch((e)=>{
                            console.log(e.message)
                            this.loading = false
                        })
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
        Alpine.data("status",function(){
            return {
                update(id,tableId){
                    // $.post(`http://${location.host}/api/ajax/update/status`,{
                    //     id:id,
                    //     _method:"put"
                    // },function(){
                    //    location.reload()
                    // })

                }
            }
        })
    })


