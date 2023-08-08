<div class="row">
    <div class="col-md-3">
        {{html()->label("name")->text(lang("models/customers.fields.name"))}}
        {{html()->text("name")->class("form-control")->placeholder(lang("models/customers.fields.name"))}}

    </div>
    <div class=" col-md-5">
        {{html()->label("mobile")->text(lang("models/customers.fields.mobile"))}}
        <div class="input-group">
            <div class="input-group-prepend ">

                <div class="input-group-text">
                    {{html()->select("mobile_code")->options([])->class("select2")->placeholder(lang("models/customers.fields.mobile_code"))}}
                </div>


            </div>
            {{html()->text("mobile")->placeholder(lang("models/customers.fields.mobile"))->class("form-control d-inline-block")}}

        </div>

    </div>
    <div class="col-md-3">
        {{html()->label("email")->text(lang("models/customers.fields.email"))}}
        {{html()->text("email")->class("form-control")->placeholder(lang("models/customer.fields.email"))}}
        <template x-if="errors?.email">
            <span class="text text-danger" x-text="errors.email[0]"></span>
        </template>
    </div>
</div>
<hr>
<div class="row">

    <div class="col-md-3">
        {{html()->label("profile_image")->text(lang("models/customers.fields.profile_image"))}}
        {{html()->file("profile_image")->class("form-control")}}
        <template x-if="errors?.profile_image">
            <span class="text text-danger" x-text="errors.profile_image[0]"></span>
        </template>
    </div>

    <div class="col-md-3">
        {{html()->label("dob")->text(lang("models/customers.fields.dob"))}}
        {{html()->date("dob")->class("form-control")}}
        <template x-if="errors?.dob">
            <span class="text text-danger" x-text="errors.dob[0]"></span>
        </template>
    </div>

    <div class="col-md-3">
        {{html()->label("is_active")->text(lang("models/customers.fields.is_active"))}}
        <div class="clearfix"></div>
        {{html()->checkbox("is_active")}}
        <template x-if="errors?.is_active">
            <span class="text text-danger" x-text="errors.is_active[0]"></span>
        </template>
    </div>
</div>
<hr>
<input class="btn btn-primary" type="submit" name="save" value="{{lang("save")}}">

