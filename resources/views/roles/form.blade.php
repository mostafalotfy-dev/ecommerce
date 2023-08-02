<div class="row">
    <div class="col-md-3">
        {!! html()->label()->for("name_en")->class("required")->text(lang("models/admins.fields.name_en")) !!}
        {!! html()->text("name_en")->attribute("autocomplete","nope")->class("form-control")->id("name_en") !!}
        @error("name_en")
        <div class="alert alert-danger">
            {{$errors->first("name_en")}}

        </div>
        @enderror
    </div>
    <div class="col-md-3">
        {!! html()->label()->for("name_ar")->class("required")->text(lang("models/admins.fields.name_ar")) !!}
        {!! html()->text("name_ar")->class("form-control")->id("name_ar") !!}
        @error("name_ar")
        <div class="alert alert-danger">{{$errors->first("name_ar")}}</div>
        @enderror
    </div>
</div>
    <hr>
<table x-data x-init="$store.permission.paginate()" class="table table-responsive table-bordered">
    <thead>
    <tr>
        <th>#</th>
        <th>
            {{lang("models/permissions.name_en")}}
        </th>

        <th>
            {{lang("models/permissions.name_ar")}}
        </th>
    </tr>
    </thead>
    <template x-data x-for="permission in $store.permission.permissions">
        <tr>
            <td><input type="checkbox" :value="permission.id"></td>
            <td x-text="permission.name_en"></td>
            <td x-text="permission.name_ar"></td>
        </tr>
    </template>
</table>
<input class="btn btn-primary" type="submit" name="save" value="{{lang("save")}}">

