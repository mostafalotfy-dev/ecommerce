@extends("layouts.app")
@section("card_title",lang("models/admins.singular"))
@section("title",lang("models/admins.create.admin"))

@section("content")
    {!! html()->modelForm($admin,"PUT",route("admins.update",$admin->id))->acceptsFiles()->open() !!}
    @include("admins.form")
    {!! html()->closeModelForm() !!}
@endsection
