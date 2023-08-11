@foreach($errors->all() as $error)
    <div class="alert alert-danger">
        {{$error}}
    </div>
@endforeach
<div class="row">
    <div class="col-md-3">
        {{html()->label()->for("name_en")->text(lang("models/category.fields.name_en"))}}
        {{html()->text("name_en")->class("form-control")}}
    </div>
    <div class="col-md-3">
        {{html()->label()->for("name_ar")->text(lang("models/category.fields.name_ar"))}}
        {{html()->text("name_ar")->class("form-control")}}
    </div>
    <div class="col-md-3">
        {{html()->label()->for("category_image")->text(lang("models/category.fields.category_image"))}}
        {{html()->file("category_image")->acceptImage()->class("form-control")}}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-md-3">
        {{ html()->label()->for("category_id")->text(lang("models/category.fields.parent_id")) }}
        {{html()->select("category_id")->options($categories->pluck("name_".app()->getLocale(),"id"))
->class("form-control select2")->attribute("data-ajax-url",route("category.get"))}}
    </div>
    <div class="col-md-3">
        {{html()->label()->for("status")->text(lang("models/category.fields.status"))}}
        <div class="clearfix"></div>
        {{html()->checkbox("status")}}
    </div>
</div>
<hr>

<input type="submit" name="save" value="{{lang("save")}}" class="btn btn-primary">
