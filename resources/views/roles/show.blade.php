@extends("layouts.app")
@section("title",lang("models/roles.show"))
@section("card_title",lang("models/role.singular"))
@section("content")
    <div class="row">
        <div class="col-md-6">
            <strong>{{lang("models/roles.fields.name_en")}}</strong> : {{$role->name_en}}
        </div>
        <div class="col-md-6">
            <strong>{{lang("models/roles.fields.name_ar")}}</strong> : {{$role->name_ar}}
        </div>
    </div>
    <hr>
    <div class="row">

            <table class="table table-responsive table-bordered">
                <thead>
                <tr>
                    <th>{{lang("models/permission.fields.name_en")}}</th>
                    <th>{{lang("models/permission.fields.name_ar")}}</th>
                </tr>
                </thead>
                <tbody>
                @foreach($role->permissions as $pernmission)
                    <tr>
                        <td>{{$pernmission->name_en}}</td>
                        <td>{{$pernmission->name_ar}}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>

    </div>

@endsection
