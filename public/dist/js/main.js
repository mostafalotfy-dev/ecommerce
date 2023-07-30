
document.addEventListener("alpine:init", () => {

Alpine.data("ajax", function () {
        let that = null;

        return {
            value: "",
            langs:[],
            show_text:false,
            page_number:1,
            loading:false,
            send: function (key){
                const $this = this

                $.post(location.protocol+"/api/ajax/language",{"key":key,"value":$this.value},"json");
            },
            init(){
                that = this
                that.get();

            },
            get(){
                $.get(location.protocol + "/api/ajax/language?page=" +that.page_number,function ({data})
                {

                    that.langs = data.data
                    that.loading = false
                })
            },
            nextPage:()=>{

               that.page_number++;
                if(that.page_number > that.langs.length)
                    that.page_number = that.langs.length
                that.loading = true
                that.get()
            },
            prevPage:()=>{
                that.page_number--;
                if(that.page_number < 0)
                    that.page_number = 1;
                that.loading = true
                that.get();
            }

        }
    })
})
