<div class="row">
    <div class="col-md-3">
        {{html()->label("name_en")->class("required")->class("required")->text(lang("brands.fields.name_en"))}}
        {{html()->text("name_en")->class("form-control")}}
        <template x-if="errors?.name_en">
            <span class="text text-danger" x-text="errors.name_en"></span>
        </template>
    </div>
    <div class="col-md-3">
        {{html()->label("name_ar")->class("required")->class("required")->text(lang("brands.fields.name_ar"))}}
        {{html()->text("name_ar")->class("form-control")}}
        <template x-if="errors?.name_ar">
            <span class="text text-danger" x-text="errors.name_ar"></span>
        </template>
    </div>

</div>
<hr>
