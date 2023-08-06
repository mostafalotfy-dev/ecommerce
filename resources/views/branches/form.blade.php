<div class="row">
    <div class="col-md-3">
        {{html()->label("name_en")->text(lang("models/branches.fields.name_en"))}}
        {{html()->text("name_en")->class("form-control")->attribute("max",255)}}
    </div>
    <div class="col-md-3">
        {{html()->label("name_ar")->text(lang("models/branches.fields.name_ar"))}}
        {{html()->text("name_ar")->class("form-control")->attribute("max",255)}}
    </div>

</div>
<hr>
<div class="row">
    <div class="col-md-3">
        {{html()->label("description_en")->text(lang("models/branches.fields.description_en"))}}
        {{html()->textarea("description_en")->class("form-control")}}
    </div>
    <div class="col-md-3">
        {{html()->label("description_ar")->text(lang("models/branches.fields.description_ar"))}}
        {{html()->textarea("description_ar")->class("form-control")}}
    </div>

</div>
<hr>
<div class="row">
    <div class="col-md-3">

        {{html()->label("open_time")->text(lang("models/branches.fields.open_time"))}}
        {{html()->datetime("open_time")->class("form-control")}}


    </div>
    <div class="col-md-3">
        {{html()->label("open_time")->text(lang("models/branches.fields.open_time"))}}
        {{html()->datetime("close_time")->class("form-control")}}
    </div>

</div>
<hr>
<input class="btn btn-primary" name="save"  value="{{lang("save")}}" type="submit">
<hr>
<input class="btn btn-warning" name="save_and_add" value="{{lang("save_and_add_more")}}" type="submit" >
