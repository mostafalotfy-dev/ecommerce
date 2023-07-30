
document.addEventListener("alpine:init", () => {

Alpine.data("ajax", function () {
        const $this = this

        return {
            value: "",

            send: function (key){
                const $this = this
                $.post(location.protocol+"/api/ajax/language",{"key":key,"value":$this.value},function (data){
                    $this.value = data.value
                },"application/json");
            },

        }
    })
})
