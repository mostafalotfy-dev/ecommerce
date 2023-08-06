@extends("layouts.app")


@section("title",lang("models/roles.plural"))
@section("card_title")
    @lang("models/roles.plural")
@endsection
@section("content")
    {!! html()->modelForm($role,"put",route("roles.update",$role->id))->open() !!}
    @foreach($errors->all() as $error)
        <div class="alert alert-danger">
        {{$error}}
        </div>
    @endforeach
    <div class="row">
        <div class="col-md-3">
            <label for="name_en">{{lang("model/role.fields.name_en")}}</label>
            <input type="text"  class="form-control" value="{{ $role->name_en }}" name="name_en" id="name_en">

        </div>
        <div class="col-md-3">
            <label for="name_ar">{{lang("model/role.fields.name_ar")}}</label>
            <input type="text" class="form-control" name="name_ar" id="name_ar" value="{{ $role->name_ar }}">
        </div>
    </div>


    <hr>
    <table class="table table-responsive table-bordered">
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

        @foreach($permissions as $permission)
            <tr>
                <td><input type="checkbox" name="permissions[]" {{$role->permissions->where("id",$permission->id)->count() > 0 ? "checked": ""}}   ></td>
                <td >{{$permission->name_en}}</td>
                <td >{{$permission->name_ar}}</td>

            </tr>
        @endforeach
    </table>

    <input class="btn btn-primary"  type="submit" name="save" value="{{lang("save")}}">
    <hr>
    @foreach($errors->all() as $error)
        <div class="alert alert-danger">

                {{$error}}


        </div>
        @endforeach


    {!! html()->form()->close() !!}

@endsection
