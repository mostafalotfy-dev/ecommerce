<div class="row">
    <div class="col-md-3">
        {{html()->label("name_en")->text(lang("brands.fields.name_en"))}}
        {{html()->text("name_en")->class("form-control")}}
        <template x-if="errors?.name_en">
            <span class="text text-danger" x-text="errors.name_en[0]"></span>
        </template>
    </div>
    <div class="col-md-3">
        {{html()->label("name_ar")->text(lang("brands.fields.name_ar"))}}
        {{html()->text("name_ar")->class("form-control")}}
        <template x-if="errors?.name_ar">
            <span class="text text-danger" x-text="errors.name_ar[0]"></span>
        </template>
    </div>

</div>
<hr>
<input type="submit" name="save" class="btn btn-primary" value="{{lang("save")}}">
