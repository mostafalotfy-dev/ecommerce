
<div class="row">
    <div class="col-md-3">
        {!! html()->label()->for("first_name")->class("required")->text(lang("models/admins.fields.first_name")) !!}
        {!! html()->text("first_name")->attribute("autocomplete","nope")->class("form-control")->id("first_name") !!}
        <template x-if="errors?.first_name">
        <div class="text text-danger" x-text="errors.first_name[0]">


        </div>
        </template>
    </div>
    <div class="col-md-3">
        {!! html()->label()->for("last_name")->class("required")->text(lang("models/admins.fields.last_name")) !!}
        {!! html()->text("last_name")->class("form-control")->id("last_name") !!}
        <template x-if="errors?.last_name">
        <div class="text text-danger" x-text="errors.last_name[0]"></div>
        </template>
    </div>
    <div class="col-md-3">
        {!! html()->label()->for("email")->class("required")->text(lang("models/admins.fields.email")) !!}
        {!! html()->email("email")->attribute("autocomplete","email")->class("form-control")->id("email") !!}
        <template x-if="errors?.email">
            <div class="text text-danger" x-text="errors.email[0]"></div>
        </template>
    </div>

    <div class="col-md-3">
        {!! html()->label()->for("phone_number")->class("required")->text(lang("models/admins.fields.phone_number")) !!}
        {!! html()->text("phone_number")->attribute("autocomplete","nope")->class("form-control")->id("phone_number") !!}
        <template x-if="errors?.phone_number">
            <div class="text text-danger" x-text="errors.phone_number[0]"></div>
        </template>
    </div>

</div>
<hr>
<div class="row">

    <div class="col-md-3">
        {!! html()->label()->text(lang("models/admins.fields.password")) !!}
        {!! html()->password()->attribute("autocomplete","new-password")->class("form-control")->name("password")!!}
        <template x-if="errors?.password">
            <div class="text text-danger" x-text="errors.password[0]"></div>
        </template>
    </div>
    <div class="col-md-6">
        {{html()->label("role_id")->text(lang("models/roles.fields.role_id"))}}
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span  class=" input-group-text btn-xs d-inline-block" data-toggle="modal" data-target="#role-modal" id="basic-addon1">+</span>




            </div>

            <select class="form-control select2" x-ref="role_id" x-data="crud" data-ajax-url="{{route("roles.get",["lang"=>app()->getLocale()])}}"  id="role_id" name="role_id">
            </select>
            <template x-if="errors?.role_id">
                <div class="text text-danger" x-text="errors.role_id"></div>
            </template>
        </div>




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
<hr>



