<div class="row" x-data="address">
    <button type="button" @click="add()"
            class="btn btn-warning">{{lang("models/customers.buttons.add_address")}}</button>
    <table class="table table-responsive">
        <thead>
        <tr>

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

                    {{html()->text("street_address")->name("address[street_address][]")->class("form-control")}}
                </td>
                <td>

                    {{html()->select("country_id")->options(factory("country")->get()->pluck("country_".app()->getLocale()."Name","country_code"))->name("address[country_id]")->class("form-control")}}
                </td>
                <td>

                    {{html()->text("state_id")->name("address[state_id][]")->class("form-control")}}
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
                <td>

                    {{html()->checkbox("status")->name("address[status]")->class("form-control")}}
                </td>

                <td>
                    <template x-if="addresses.length > 1">
                        <button type="button" class="btn btn-danger" @click="delete(address.id)">{{lang("models/customers.buttons.delete")}}</button>
                    </template>
                </td>
            </tr>
        </template>

        </tbody>
    </table>
</div>
