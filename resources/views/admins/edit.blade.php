@extends("layouts.app")
@section("card_title",lang("models/admins.singular"))
@section("title",lang("models/admins.create.admin"))

@section("content")
    {!! html()->modelForm($admin,"PUT",route("admins.update",$admin->id))->attribute("autocomplete","off")->acceptsFiles()->open() !!}
    @include("admins.form")
    <div class="row">
    <strong>{{lang("models/admins.fields.profile_image")}}</strong>
        <hr>

    </div>
    <a href="{{url("storage/".$admin->profile_image)}}" target="_blank">  <img height="150"  src="{{url("storage/".$admin->profile_image)}}" alt=""></a>
    {!! html()->closeModelForm() !!}
@endsection
