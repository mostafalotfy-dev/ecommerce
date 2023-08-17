
<div class="row">
    <div class="col-md-3">
        <label class="required" for="name_en">{{lang("model/role.fields.name_en")}}</label>
        <input type="text"  class="form-control" value="{{isset($role ) ? $role->name_en : ""}}" name="name_en" id="name_en">
        <template x-if="errors?.name_en">
            <span class="text text-danger" x-text="errors.name_en"></span>
        </template>
    </div>
    <div class="col-md-3">
        <label class="required" for="name_ar">{{lang("model/role.fields.name_ar")}}</label>
        <input type="text" class="form-control" name="name_ar" id="name_ar" value="{{isset($role) ? $role->name_ar : ""}}">
        <template x-if="errors?.name_ar">
            <span class="text text-danger" x-text="errors.name_ar"></span>
        </template>
    </div>
</div>

<hr>
<table x-data x-init="$store.permission.paginate()" class="table table-responsive table-bordered">
    <thead>
    <tr>
        <th class="required">#</th>
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
            <td><input type="checkbox" name="permissions[]"  x-key="permission.id" :value="permission.id"></td>
            <td x-text="permission.name_en"></td>
            <td x-text="permission.name_ar"></td>

        </tr>

    </template>
    <tr>
        <template x-if="errors?.permissions">
            <td class="text text-danger" x-text="errors.permissions"></td>
        </template>
    </tr>
</table>

<input class="btn btn-primary"  type="submit" name="save" value="{{lang("save")}}">
<hr>
