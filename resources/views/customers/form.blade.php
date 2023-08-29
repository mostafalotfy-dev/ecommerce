<div class="row">
    <div class="col-md-2">
        {{html()->label("first_name")->text(lang("models/customers.fields.first_name"))}}
        {{html()->text("first_name")->class("form-control")->placeholder(lang("models/customers.fields.first_name"))}}
        <template x-if="errors?.first_name">

            <span class="text text-danger" x-text="errors.first_name"></span>
        </template>
    </div>
    <div class="col-md-3">
        {{html()->label("last_name")->text(lang("models/customers.fields.last_name"))}}
        {{html()->text("last_name")->class("form-control")->placeholder(lang("models/customers.fields.last_name"))}}
        <template x-if="errors?.last_name">

            <span class="text text-danger" x-text="errors.last_name"></span>
        </template>
    </div>
    <div class=" col-md-3">
        {{html()->label("mobile")->text(lang("models/customers.fields.mobile"))}}
        <div class="input-group">
            <div class="input-group-prepend">

                <div class="input-group-text">
                    {{html()->text("mobile_code")->class("form-control")->placeholder(lang("models/customers.fields.mobile_code"))}}

                </div>


            </div>

            {{html()->text("mobile")->placeholder(lang("models/customers.fields.phone_number"))->class("form-control")}}

        </div>
        <template x-if="errors?.mobile_code">
            <span class="text-danger text" x-text="errors.mobile_code"></span>
        </template>
        <template x-if="errors?.mobile">

<span class="text text-danger" x-text="errors.mobile">
</span>
        </template>

    </div>
    <div class="col-md-3">
        {{html()->label("email")->text(lang("models/customers.fields.email"))}}
        {{html()->text("email")->class("form-control")->placeholder(lang("models/customer.fields.email"))}}
        <template x-if="errors?.email">
            <span class="text text-danger" x-text="errors.email"></span>
        </template>
    </div>
</div>
<hr>
<div class="row">

    <div class="col-md-3">
        {{html()->label("profile_image")->text(lang("models/customers.fields.profile_image"))}}
        {{html()->file("profile_image")->acceptImage()->class("form-control")}}
        <template x-if="errors?.profile_image">
            <span class="text text-danger" x-text="errors.profile_image"></span>
        </template>
    </div>

    <div class="col-md-3">
        {{html()->label("dob")->text(lang("models/customers.fields.dob"))}}
        {{html()->date("dob")->class("form-control")}}
        <template x-if="errors?.dob">
            <span class="text text-danger" x-text="errors.dob"></span>
        </template>
    </div>
    <div class="col-md-3">
        {{html()->label("password")->text(lang("models/customers.fields.password"))}}
        {{html()->password("password")->class("form-control")->attribute("autocomplete","nope")}}
        <template x-if="errors?.password">
            <span class="text text-danger" x-text="errors.password"></span>
        </template>
    </div>
    <div class="col-md-3">
        {{html()->label("is_active")->text(lang("models/customers.fields.is_active"))}}
        <div class="clearfix"></div>
        {{html()->checkbox("is_active")}}
        <template x-if="errors?.is_active">
            <span class="text text-danger" x-text="errors.is_active"></span>
        </template>
    </div>
</div>
<hr>


<hr>
<input class="btn btn-primary" type="submit" name="save" value="{{lang("save")}}">

