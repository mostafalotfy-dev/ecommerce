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
        {{html()->file("category_image")->class("form-control")}}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-md-3">
        {{ html()->label()->for("category_id")->text(lang("models/category.fields.parent_id")) }}
       <select name="category_id" class="form-control">
           <option value="0">{{lang("models/category.fields.parent_id")}}</option>
           @foreach($categories as $category)
               <option  value="{{$category->id}}" >{{$category->{"name_".app()->getLocale()} }}</option>
           @endforeach
       </select>
    </div>
</div>
<hr>
<input type="submit" name="save_and_add" value="{{lang("save_and_more")}}" class="btn btn-primary">
<input type="submit" name="save" value="{{lang("save")}}" class="btn btn-warning">
