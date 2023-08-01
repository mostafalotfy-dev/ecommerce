<div class="row">
    <div class="col-md-3">
        {!! html()->label()->for("first_name")->class("required")->text(lang("models/admins.fields.first_name")) !!}
        {!! html()->input()->name("first_name")->class("form-control")->id("first_name") !!}
        @error("first_name")
        <div class="alert alert-danger">
            {{$errors->first("first_name")}}

        </div>
        @enderror
    </div>
    <div class="col-md-3">
        {!! html()->label()->for("last_name")->class("required")->text(lang("models/admins.fields.last_name")) !!}
        {!! html()->input()->name("last_name")->class("form-control")->id("last_name") !!}
        @error("last_name")
        <div class="alert alert-danger">{{$errors->first("last_name")}}</div>
        @enderror("last_name")
    </div>
    <div class="col-md-3">
        {!! html()->label()->for("email")->class("required")->text(lang("models/admins.fields.email")) !!}
        {!! html()->email()->name("email")->class("form-control")->id("email") !!}
        @error("email")
            <div class="alert alert-danger">{{$errors->first("email")}}</div>
        @enderror
    </div>

    <div class="col-md-3">
        {!! html()->label()->for("phone_number")->class("required")->text(lang("models/admins.fields.phone_number")) !!}
        {!! html()->input()->name("phone_number")->class("form-control")->id("phone_number") !!}
        @error("phone_number")
        <div class="alert alert-danger">{{$errors->first("phone_number")}}</div>
        @enderror
    </div>

</div>
<hr>
<div class="row">

    <div class="col-md-3">
        {!! html()->label()->text(lang("models/admins.fields.password")) !!}
        {!! html()->password()->class("form-control")->name("password")!!}
        @error("password")
        <span class="alert alert-danger"></span>
        @enderror
    </div>
    <div class="col-md-3">
        {!! html()->label()->text(lang("models/admins.fields.role_name")) !!}
        {!! html()->select()->options($roles )->class("form-control")->name("role_id")!!}
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

        <input type="checkbox" id="status" name="status" value="1">
            <label for="status" class="required">{{lang("models/admins.fields.status")}}</label>
            @error("status")
            <div class="alert alert-danger">{{$errors->first("status")}}</div>
            @enderror
        </div>
    </div>
</div>
<hr>
{!! html()->submit(lang("submit"))->class("btn btn-primary") !!}
