<div class="row">
    <div class="col-md-3">
        {{html()->label("name_en")->class("required")->text(lang("models/branches.fields.name_en"))}}
        {{html()->text("name_en")->class("form-control")->attribute("max",255)}}
        <template x-if="errors?.name_en">
            <span class="text text-danger" x-text="errors.name_en"></span>
        </template>
    </div>

    <div class="col-md-3">
        {{html()->label("name_ar")->class("required")->text(lang("models/branches.fields.name_ar"))}}
        {{html()->text("name_ar")->class("form-control")->attribute("max",255)}}
        <template x-if="errors">
            <span class="text text-danger" x-text="errors.name_ar"></span>
        </template>
    </div>

</div>
<hr>
<div class="row">
    <div class="col-md-3">
        {{html()->label("description_en")->class("required")->text(lang("models/branches.fields.description_en"))}}
        {{html()->textarea("description_en")->class("form-control")}}
        <template x-if="errors">
            <span class="text text-danger" x-text='errors.description_en'></span>
        </template>
    </div>
    <div class="col-md-3">
        {{html()->label("description_ar")->class("required")->text(lang("models/branches.fields.description_ar"))}}
        {{html()->textarea("description_ar")->class("form-control")}}
        <template x-if="errors">
            <span class="text text-danger" x-text="errors.description_ar"></span>
        </template>
    </div>

</div>
<hr>
<div class="row">
    <div class="col-md-3">

        {{html()->label("open_time")->class("required")->text(lang("models/branches.fields.open_time"))}}
        {{html()->datetime("open_time")->class("form-control")}}
        <template x-if="errors?.open_time">
            <span class="text text-danger" x-text="errors.open_time"></span>

        </template>

    </div>
    <div class="col-md-3">
        {{html()->label("close_time")->class("required")->text(lang("models/branches.fields.close_time"))}}
        {{html()->datetime("close_time")->class("form-control")}}
        <template x-if="errors?.close_time">
            <span class="text text-danger" x-text="errors.close_time"></span>
        </template>
    </div>
    <div class="col-md-3">
        {{html()->label("status")->for("status")->text(lang("models/branches.fields.status"))}}
        <div class="clearfix"></div>
        {{html()->checkbox("status")}}
        <template x-if="errors?.status">
            <span class="text text-danger" x-text="errors.status"></span>
        </template>
    </div>
</div>
<hr>

