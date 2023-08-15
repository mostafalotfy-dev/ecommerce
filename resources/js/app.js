import Alpine from 'alpinejs'
import "../plugins/select2/js/select2.full.min.js"
import "../plugins/tinymce/tinymce.min.js"

tinymce.init({
    selector: 'textarea.tinymce', // Replace this CSS selector to match the placeholder element for TinyMCE
    plugins: 'code table lists',
    toolbar: 'undo redo | formatselect| bold italic | alignleft aligncenter alignright | indent outdent | bullist numlist | code | table',
    promotion: false
});
window.Alpine = Alpine

Alpine.start()


$("select[data-ajax-url]").select2({
    ajax: {
        url: $(this).attr("data-ajax-url"),


    },

});



function select2(id)
{
    $("#" + id).select2({
        ajax: {
            url: $("#" + id).attr("data-ajax-url"),
            processResults:(data)=> data,
            method:"GET"

        },

    })
}
select2("brand_name");
select2("branch_name");

