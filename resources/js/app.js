

import Alpine from 'alpinejs'
import "../plugins/select2/js/select2.full.min.js"
window.Alpine = Alpine

Alpine.start()


$(document).ready(function ()
{
    $("[data-ajax-url]").select2({
        ajax:{
            url:$("[data-ajax-url]").attr("data-ajax-url"),
            headers:{
                "Accept":"application/json"
            }
        }
    })
})

$(".select2").select2()
