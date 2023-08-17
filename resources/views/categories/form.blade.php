
<div class="row">
    <div class="col-md-3">
        {{html()->label()->for("name_en")->text(lang("models/category.fields.name_en"))}}
        {{html()->text("name_en")->class("form-control")}}
        <template x-if="errors?.name_en">
            <span class="text text-danger" x-text="errors.name_en"></span>
        </template>
    </div>
    <div class="col-md-3">
        {{html()->label()->for("name_ar")->text(lang("models/category.fields.name_ar"))}}
        {{html()->text("name_ar")->class("form-control")}}
        <template x-if="errors?.name_ar">
            <span class="text text-danger" x-text="errors.name_ar"></span>
        </template>
    </div>
    <div class="col-md-3">
        {{html()->label()->for("category_image")->text(lang("models/category.fields.category_image"))}}
        {{html()->file("category_image")->acceptImage()->class("form-control")}}
        <template x-if="errors?.category_image">
            <span class="text text-danger" x-text="errors.category_image"></span>
        </template>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-md-3">
        {{ html()->label()->for("category_id")->text(lang("models/category.fields.parent_id")) }}
        {{html()->select("category_id")->options($categories->pluck("name_".app()->getLocale(),"id"))
->class("form-control select2")->attribute("data-ajax-url",route("category.get"))}}
        <template x-if="errors?.category_id">
            <span class="text text-danger" x-text="errors.category_id"></span>
        </template>
    </div>
    <div class="col-md-3">
        {{html()->label()->for("status")->text(lang("models/category.fields.status"))}}
        <div class="clearfix"></div>
        <input type="checkbox" name="status" id="status" @isset($category)
                                                             @if($category->status == 1)
                                                                 checked
                                                                 @endif
        @endisset>
    </div>
</div>
<hr>

<input type="submit" name="save" value="{{lang("save")}}" class="btn btn-primary">
