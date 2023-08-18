import Alpine from 'alpinejs'
import "../plugins/select2/js/select2.full.min.js"
import "../plugins/bootstrap-slider/bootstrap-slider.min.js"
import Tagify from '@yaireo/tagify'
import Dropzone from "dropzone";

// tinymce

tinymce.init({
    selector: 'textarea.tinymce', // Replace this CSS selector to match the placeholder element for TinyMCE
    plugins: 'table lists',
    toolbar: 'undo redo | formatselect| bold italic | alignleft aligncenter alignright | indent outdent | bullist numlist |  table',
    promotion: false
});

// alpine
window.Alpine = Alpine
Alpine.start()

// boot up
const tagifyElement = document.querySelector("textarea.tagify")
if(tagifyElement)
    new Tagify(tagifyElement)
 document.querySelectorAll("input[type='checkbox']").forEach((html)=>  new Switchery(html))
// bootstrap slider
 $("input.slider").slider();
// select 2
$("select[data-ajax-url]").select2({
    ajax: {
        url: $(this).attr("data-ajax-url"),


    },

});


function select2(id) {
    $("#" + id).select2({
        ajax: {
            url: $("#" + id).attr("data-ajax-url"),
            processResults: (data) => data,
            method: "GET"

        },

    })
}

select2("brand_name");
select2("branch_name");



new Dropzone("#image",{

    acceptedFiles:"image/*"
})


