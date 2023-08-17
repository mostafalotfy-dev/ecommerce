<div class="row">
    <div class="col-md-3">
        {{html()->label("name_en")->text(lang("products.fields.name_en"))->class("required")}}
        {{html()->text("name_en")->class("form-control")}}
        <template x-if="errors?.name_en">
            <span x-text="errors.name_en" class="text text-danger"></span>
        </template>
    </div>
    <div class="col-md-3">
        {{html()->label("name_ar")->text(lang("products.fields.name_ar"))->class("required")}}
        {{html()->text("name_ar")->class("form-control")}}
        <template x-if="errors?.name_ar">
            <span x-text="errors.name_ar" class="text text-danger"></span>
        </template>
    </div>
    <div class="col-md-6">
        {{html()->label("meta_key")->text(lang("products.fields.meta_key"))}}
        {{html()->textarea("meta_key")->class("form-control tagify")}}
    </div>

</div>
<hr>
<div class="row">
    <div class="col-md-3">
        {{html()->label("brand_name")->text(lang("brands.name"))->class("required")}}
        <div class="input-group mb-3">

            <div class="input-group-prepend">
                <button data-toggle="modal" data-target="#brand" type="button" class="input-group-text"
                        id="basic-addon1"><i class="fa fa-plus"></i></button>
            </div>

            {{html()->select("brand_name")->attribute("data-ajax-url",route("brands.get",["lang"=>app()->getLocale()]))->class("form-control")}}
            <template x-if="errors?.brand_name">
                <span x-text="errors.brand_name" class="text text-danger"></span>
            </template>
        </div>

    </div>
    <div class="col-md-3">
        {{html()->label("branch_name")->text(lang("branches.name"))->class("required")}}
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button data-toggle="modal" data-target="#branches" type="button" class="input-group-text"
                        id="basic-addon1"><i class="fa fa-plus"></i></button>
            </div>
            {{html()->select("branch_name")->attribute("data-ajax-url",route("branches.get",["lang"=>app()->getLocale()]))->class("form-control")}}
            <template x-if="errors?.branch_name">
                <span x-text="errors.branch_name" class="text text-danger"></span>
            </template>
        </div>
    </div>
    <div class="col-md-3">
        <div class="form-check form-switch">
            {{html()->label("status")->text(lang("products.fields.status"))->attribute("for","flexSwitchCheckDefault")}}
            <div class="clearfix"></div>
            {{html()->checkbox("status")->class(" js-switch")}}
        </div>
    </div>
</div>
<hr>
<div class="row" x-data="{
    'totalPrice':0
        }">
    <div class="col-md-3">
        {{html()->label("quantity")

->text(lang("products.fields.quantity"))->class("required")}}
        <div class="clearfix"></div>
        {{html()->number("quantity")->class("slider")

    ->attribute("x-ref","quantity")
    ->attribute("data-slider-min","0")
    ->attribute("data-slider-max","999")
    }}


    </div>
    <div class="col-md-3">
        {{html()->label("price")->text(lang("products.fields.price"))->class("required")}}
        {{html()->number("price")
   ->attribute("@input",'totalPrice =   (1 - ($refs.discount.value / 100)).toFixed(2) * $refs.price.value ')
    ->attribute("x-ref","price")
->minlength(1)->class("form-control")}}
        <template x-if="errors?.price">
            <span x-text="errors.price" class="text text-danger"></span>
        </template>
    </div>
    <div class="col-md-3" >
        {{html()->label("discount")->text(lang("products.fields.discount"))}}
        <div class="input-group mb-3">

            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-percent"></i></span>
            </div>

            {{html()->number("discount")
                ->attribute("x-ref","discount")
                ->attribute("step",1)
                ->attribute("@input",'totalPrice =  (1 -  ($refs.discount.value / 100)).toFixed(2) * $refs.price.value')
                ->class("form-control")}}
            <template x-if="errors?.discount">
                <span x-text="errors.discount" class="text text-danger"></span>
            </template>

        </div>
        <div class="col-md-12">

            <span class="text-fuchsia text" x-text="'{{lang("discount amount ")}}' + ($refs.price.value - totalPrice).toFixed(2) + ' {{lang("EGP")}}'"></span>

        </div>
        <div class="col-md-12">

            <span class="text-danger text" x-text="'{{lang("totalPrice")}} ' +  parseFloat(totalPrice).toFixed(2)  + ' {{lang("EGP")}}'"></span>

        </div>
    </div>


</div>
<hr>
<div class="row">
    <div class="col-md-6">
        {{html()->label("description_en")->text(lang("products.fields.description_en"))->class("required")}}
        {{html()->textarea("description_en")->class("form-control tinymce")}}
        <template x-if="errors?.description_en">
            <span x-text="errors.description_en" class="text text-danger"></span>
        </template>
    </div>
    <div class="col-md-6">
        {{html()->label("description_ar")->text(lang("products.fields.description_ar"))->class("required")}}
        {{html()->textarea("description_ar")->class("form-control tinymce")}}
        <template x-if="errors?.description_ar">
            <span x-text="errors.description_ar" class="text text-danger"></span>
        </template>
    </div>

</div>

<hr>

