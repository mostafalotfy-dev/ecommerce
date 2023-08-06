
document.addEventListener("alpine:init", () => {
    Alpine.store("search",{
            searchInput: "",
            result:[],
            loading : false,
            page_number:1,
            value:"",

            controller : null,

            clear()
            {
                if(this.searchInput.length === 0)
                {
                    this.get()
                }
            },

            send(id){

                const formData = new FormData();
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


                fetch(location.protocol + "/api/ajax/language/"+encodeURIComponent(this.searchInput.replace(/\//g,"-"))+"?page=" +this.page_number,{ signal:this.controller?.signal})
                    .then((r)=>r.json())
                    .then(({data})=>{


                        this.result = data;

                        if(this.controller)
                        {
                            this.controller.abort()
                        }
                        this.controller = new AbortController

                    })
                    .catch((e)=>{
                        console.log(e.message)

                    })
                    .finally(()=>{this.loading = false})
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
    Alpine.data("sweetalert",function (){
        return {
            show(obj)
            {
                Swal.fire({
                    title: obj.title,
                    text: obj.text,
                    icon: obj.icon,
                    confirmButtonText: obj.confirmButtonText
                })
            }
        }
    })
    Alpine.store("permission",{
        permissions:[],
        searchInput: "",
        currentPage:1,
        errors:null,
        role_name_en:"",
        role_name_ar:"",
        paginate()
        {
            fetch(`http://${location.host}/api/ajax/permissions/${encodeURIComponent(this.searchInput)}?page=${this.currentPage}`,{

                headers:{
                    "Accept":"application/json",
                }})
                .then((r)=> r.json())
                .then(({permissions})=>{

                    this.permissions = permissions
                })
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

                }else if(r.hasOwnProperty("redirect_to")){

                    location = r.redirect_to
                }else{
                    console.log(r)
                }
            })


        },


        update(){
            const form = document.getElementById("role-form")
            fetch(form.getAttribute("action"),{
                method:"put",
                body:new FormData(form),
                headers:{
                    "Accept":"application/json"
                }
            }).then((r)=>r.json())
                .then((r)=>{
                    console.log(r)
                })
        }


    })
    Alpine.data("status",function (){
        return {
            update(id,status)
            {
                const formData = new FormData()
                formData.append("id",id)
                formData.append("status",status)
                formData.append("_method","put")
                fetch(`http://${location.host}/api/ajax/update/status`,{
                    method:"post",
                    body:formData,
                    headers:{
                        "Accept":"application/json"
                    }

                })
                    .then((r)=>location.reload())

            }
        }
    })
    Alpine.data("status",function (){
        return {
            update(id,status,name)
            {

                const formData = new FormData()
                formData.append("id",id)
                formData.append("status",status)
                formData.append("_method","put")
                fetch(`http://${location.host}/api/ajax/update/${name}/status`,{
                    method:"post",
                    body:formData,
                    headers:{
                        "Accept":"application/json"
                    }

                })
                    .then((r)=>location.reload())

            }
        }
    })
    Alpine.data("crud",function (){
        return {
            message:null,
            send(id){
                const form = document.getElementById(id)
                fetch(form.action,{
                    method:form.getAttribute("method"),
                    body:new FormData(form),
                    headers:{
                        "Accept":"application/json"
                    }
                }).then((r)=>r.json())
                    .then((r)=>{
                        if(r.hasOwnProperty("errors"))
                        {
                            this.message = r.message

                        }else{
                           location.reload()

                        }

                    })
            }
        }
    })
})

