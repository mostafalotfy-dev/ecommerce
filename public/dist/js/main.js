
document.addEventListener("alpine:init", () => {
        Alpine.store("search",{
                searchInput: "",
                result:[],
                loading : false,
                page_number:1,
                value:"",

                length:0,
                send(id){
                   const that = this

                    $.post("http://"+location.host + "/api/ajax/language",{
                        "key":id,
                        value: that.value
                    });

                },
                search(){
                    const  that = this

                    if(!this.searchInput.length && this.searchInput.length <= 3  || this.searchInput.length === 0)
                    {
                        return;
                    }

                   $.get(location.protocol + "/api/ajax/language/"+encodeURIComponent(that.searchInput.replace(/\//g,"-")),function (result){
                        that.result = result;


                    })
                },
                get()
                {
                   const that = this
                    return $.get(location.protocol + "/api/ajax/language?page=" +this.page_number,function ({data})
                    {


                        that.result = data.data
                        that.length = data.data.length


                    }).fail(()=>{

                        alert("something went wrong");
                    }).always(function (){
                        that.loading = false
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

    })


