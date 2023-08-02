<div class="row">
    <div class="col-md-3">
        {!! html()->label()->for("first_name")->class("required")->text(lang("models/admins.fields.first_name")) !!}
        {!! html()->text("first_name")->attribute("autocomplete","nope")->class("form-control")->id("first_name") !!}
        @error("first_name")
        <div class="alert alert-danger">
            {{$errors->first("first_name")}}

        </div>
        @enderror
    </div>
    <div class="col-md-3">
        {!! html()->label()->for("last_name")->class("required")->text(lang("models/admins.fields.last_name")) !!}
        {!! html()->text("last_name")->class("form-control")->id("last_name") !!}
        @error("last_name")
        <div class="alert alert-danger">{{$errors->first("last_name")}}</div>
        @enderror
    </div>
    <div class="col-md-3">
        {!! html()->label()->for("email")->class("required")->text(lang("models/admins.fields.email")) !!}
        {!! html()->email("email")->attribute("autocomplete","email")->class("form-control")->id("email") !!}
        @error("email")
            <div class="alert alert-danger">{{$errors->first("email")}}</div>
        @enderror
    </div>

    <div class="col-md-3">
        {!! html()->label()->for("phone_number")->class("required")->text(lang("models/admins.fields.phone_number")) !!}
        {!! html()->text("phone_number")->attribute("autocomplete","nope")->class("form-control")->id("phone_number") !!}
        @error("phone_number")
        <div class="alert alert-danger">{{$errors->first("phone_number")}}</div>
        @enderror
    </div>

</div>
<hr>
<div class="row">

    <div class="col-md-3">
        {!! html()->label()->text(lang("models/admins.fields.password")) !!}
        {!! html()->password()->attribute("autocomplete","new-password")->class("form-control")->name("password")!!}
        @error("password")
        <span class="alert alert-danger">{{$errors->first("password")}}</span>
        @enderror
    </div>
    <div class="col-md-3">
        {!! html()->label()->text(lang("models/admins.fields.role_name")) !!}
        {!! html()->select("role_id")->options($roles )->class("form-control")!!}
        @error("role_id")
        <span class="alert alert-danger">{{$errors->first("role_id")}}</span>
        @enderror
    </div>
</div>

<hr>
<div class="row">
    <div class="col-md-3">
        {!! html()->label()->text(lang("models/admins.fields.profile_image")) !!}
        {!! html()->file()->class("form-control")->acceptImage()->name("profile_image")!!}
        @error("profile_image")
        <span class="alert alert-danger"></span>
        @enderror
    </div>

    <div class="col-md-3">
        <div class="icheck-primary">
            {!! html()->checkbox("status")->class("status") !!}
            <label for="status"  class="required">{{lang("models/admins.fields.status")}}</label>
            @error("status")
            <div class="alert alert-danger">{{$errors->first("status")}}</div>
            @enderror
        </div>
    </div>
</div>
<hr>
<input class="btn btn-primary" type="submit" name="save" value="{{lang("save")}}">

