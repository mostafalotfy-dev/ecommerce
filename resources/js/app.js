import  Swal from 'sweetalert2'
import moment from 'moment'

import Alpine from 'alpinejs'
import "../plugins/select2/js/select2.full.min.js"
window.Alpine = Alpine

Alpine.start()

const $ajax_url = $("[data-ajax-url]")
$(".select2").select2({
    ajax:{
      url:$ajax_url.attr("data-ajax-url"),
        processResults:function (r){
          return {
                results:  r
          }
}
    }
})
