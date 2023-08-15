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
        {{html()->label("brand_name")->text(lang("brands.name"))->class("required")}}
        <div class="input-group mb-3">

            <div class="input-group-prepend">
                <button data-toggle="modal" data-target="#brand" type="button" class="input-group-text" id="basic-addon1"><i class="fa fa-plus"></i></button>
            </div>

            {{html()->select("brand_name")->attribute("data-ajax-url",route("brands.get",["lang"=>app()->getLocale()]))->class("form-control")}}
        </div>

    </div>
    <div class="col-md-3">
        {{html()->label("branch_name")->text(lang("branches.name"))->class("required")}}
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button data-toggle="modal" data-target="#branches" type="button" class="input-group-text" id="basic-addon1"><i class="fa fa-plus"></i></button>
            </div>
        {{html()->select("branch_name")->attribute("data-ajax-url",route("branches.get",["lang"=>app()->getLocale()]))->class("form-control")}}
        </div>
    </div>
    <div class="col-md-6">
        {{html()->label("meta_key")->text(lang("products.fields.meta_key"))}}
        {{html()->multiselect("meta_key")->class("form-control select2")}}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-md-6">
        {{html()->label("description_en")->text(lang("products.fields.description_en"))->class("required")}}
        {{html()->textarea("description_en")->class("form-control tinymce")}}
    </div>
    <div class="col-md-6">
        {{html()->label("description_ar")->text(lang("products.fields.description_ar"))->class("required")}}
        {{html()->textarea("description_ar")->class("form-control tinymce")}}
    </div>

</div>

<hr>

