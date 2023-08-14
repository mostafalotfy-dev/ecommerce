

import Alpine from 'alpinejs'
import "../plugins/select2/js/select2.full.min.js"
import "../plugins/tinymce/tinymce.min.js"
tinymce.init({
    selector: 'textarea.tinymce', // Replace this CSS selector to match the placeholder element for TinyMCE
    plugins: 'code table lists',
    toolbar: 'undo redo | formatselect| bold italic | alignleft aligncenter alignright | indent outdent | bullist numlist | code | table',
    promotion:false
});
window.Alpine = Alpine

Alpine.start()



$(document).on("ready",function ()
{
    $("[data-ajax-url]").select2({
        ajax:{
            url:$("[data-ajax-url]").attr("data-ajax-url"),
            processResults :function({results,pagination})
            {
                let lang = document.querySelector("html").getAttribute("lang")

                return {
                    results:results.map((d)=>{



                        return {
                            text: d.text,
                            id:d.id
                        }

                    }),
                    pagination:pagination
                }
            }

        },

    })
})

$(".select2").select2()
