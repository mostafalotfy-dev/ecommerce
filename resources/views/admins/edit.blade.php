@extends("layouts.app")
@section("card_title",lang("models/admins.singular"))
@section("title",lang("models/admins.create.admin"))

@section("content")
    {!! html()->modelForm($admin,"PUT",route("admins.update",$admin->id))->attribute("autocomplete","off")->acceptsFiles()->open() !!}
    @include("admins.form")
    <img src="{{url("storage/".$admin->profile_image)}}" alt="">
    {!! html()->closeModelForm() !!}
@endsection
