<div class="row">
    <div class="col-md-3">
        {{html()->label("name")->text(lang("models/customers.fields.name"))}}
        {{html()->text("name")->class("form-control")->placeholder(lang("models/customers.fields.name"))}}
        <template x-if="errors?.name">

            <span class="text text-danger" x-text="errors.name"></span>
        </template>
    </div>
    <div class=" col-md-5">
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
        {{html()->password("password")->class("form-control")->attribute("autocomplete","new-password")}}
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

<div class="row" x-data="address">
    <button type="button" @click="add()"
            class="btn btn-warning">{{lang("models/customers.buttons.add_address")}}</button>
    <table class="table table-responsive">
        <thead>
        <tr>
            <th>{{lang("models/customers.fields.full_name")}}</th>
            <th>{{lang("models/customers.fields.street_address")}}</th>
            <th>{{lang("models/customers.fields.country_id")}}</th>
            <th>{{lang("models/customers.fields.state_id")}}</th>
            <th>{{lang("models/customers.fields.town")}}</th>
            <th>{{lang("models/customers.fields.zip_code")}}</th>
            <th>{{lang("models/customers.fields.phone_number")}}</th>
            <th>{{lang("models/customers.fields.status")}}</th>
            <th>{{lang("models/customers.buttons.delete")}}</th>
        </tr>
        </thead>
        <tbody>

        <template x-for="address in addresses" :key="address.id">
            <tr>
                <td>

                    {{html()->text("full_name")->name("address[full_name]")->class("form-control")}}

                </td>
                <td>

                    {{html()->text("street_address")->name("address[street_address]")->class("form-control")}}
                </td>
                <td>

                    {{html()->select("country_id")->name("address[country_id]")->class("form-control")}}
                </td>
                <td>

                    {{html()->select("state_id")->name("address[state_id]")->class("form-control")}}
                </td>
                <td>

                    {{html()->text("town")->name("address[town]")->class("form-control")}}
                </td>
                <td>

                    {{html()->text("zip_code")->name("address[zip_code]")->class("form-control")}}
                </td>
                <td>

                    {{html()->text("phone_number")->name("address[phone_number]")->class("form-control")}}
                </td>
                <td >

                    {{html()->checkbox("status")->name("address[status]")->class("form-control")}}
                </td>
                <td>
                    <button type="button" class="btn btn-danger" @click="delete(address.id)">{{lang("models/customers.buttons.delete")}}</button>
                </td>
            </tr>
        </template>

        </tbody>
    </table>
</div>
<hr>
<input class="btn btn-primary" type="submit" name="save" value="{{lang("save")}}">

