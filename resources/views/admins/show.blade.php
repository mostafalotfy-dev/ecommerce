@extends("layouts.app")
@section("title",lang("models/admins.singular"))
@section("card_title",lang("models/admins.singular"))

@section("content")
    <table class="table table-responsive table-bordered">
        <thead>
            <tr>
                <th>{{lang("models/admins.fields.full_name")}}</th>
                <th>{{lang("models/admins.fields.email")}}</th>
                <th>{{lang("models/admins.fields.phone_number")}}</th>
                <th>{{lang("models/roles.fields.name_en")}}</th>
                <th>{{lang("models/roles.fields.name_ar")}}</th>
                <th>{{lang("models/admins.fields.profile_image")}}</th>
                <th>{{lang("models/admins.fields.status")}}</th>
            </tr>
        </thead>
        <tbody>
        @php($role = $admin->role)

            <tr>
                <td>{{$admin->first_name}} {{$admin->last_name}}</td>
                <td>{{$admin->email}} </td>
                <td>{{$admin->phone_number}} </td>

                <td>{{$role->name_en}} </td>
                <td>{{$role->name_ar}} </td>

               <td> @if(isset($admin->profile_image))<a href="/storage/{{$admin->profile_image}}" target="_blank"><img width="50" src="{{\Storage::url($admin->profile_image)}}"> </a>@else - @endif </td>
                <td> {{$admin->status ? lang("models/admins.fields.active") : lang("models/admins.fields.inactive")}}</td>
            </tr>
        </tbody>
    </table>
@endsection
