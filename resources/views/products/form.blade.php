<div class="row">
    <div class="col-md-3">
        {{html()->label("name_en")->text(lang("products.fields.name_en"))->class("required")}}
        {{html()->text("name_en")->class("form-control")}}
    </div>
    <div class="col-md-3">
        {{html()->label("name_ar")->text(lang("products.fields.name_ar"))->class("required")}}
        {{html()->text("name_ar")->class("form-control")}}
    </div>
    <div class="col-md-3">
        {{html()->label("price")->text(lang("products.fields.price"))->class("required")}}
        {{html()->number("price")->minlength(1)->class("form-control")}}
    </div>
    <div class="col-md-3">
        {{html()->label("quantity")->text(lang("products.fields.quantity"))->class("required")}}
        {{html()->number("quantity")->minlength(0)->class("form-control")}}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-md-3">
        {{html()->label("description_en")->text(lang("products.fields.description_en"))->class("required")}}
        {{html()->textarea("description_en")->class("form-control tinymce")}}
    </div>
    <div class="col-md-3">
        {{html()->label("description_ar")->text(lang("products.fields.description_ar"))->class("required")}}
        {{html()->textarea("description_ar")->class("form-control tinymce")}}
    </div>

</div>
