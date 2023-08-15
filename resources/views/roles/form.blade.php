<template x-data x-if="$store.permission.errors" >
    <div class="text text-danger" x-text="$store.permission.errors">

    </div>
</template>
<div class="row">
    <div class="col-md-3">
        <label class="required" for="name_en">{{lang("model/role.fields.name_en")}}</label>
        <input type="text"  class="form-control" value="{{isset($role ) ? $role->name_en : ""}}" name="name_en" id="name_en">

    </div>
    <div class="col-md-3">
        <label class="required" for="name_ar">{{lang("model/role.fields.name_ar")}}</label>
        <input type="text" class="form-control" name="name_ar" id="name_ar" value="{{isset($role) ? $role->name_ar : ""}}">
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
            <td><input type="checkbox" name="permissions[]" :value="permission.id"></td>
            <td x-text="permission.name_en"></td>
            <td x-text="permission.name_ar"></td>

        </tr>
    </template>
</table>

<input class="btn btn-primary"  type="submit" name="save" value="{{lang("save")}}">
<hr>
<template x-data x-if="$store.permission.errors" >
    <div class="text-danger text" x-text="$store.permission.errors">


    </div>
</template>
