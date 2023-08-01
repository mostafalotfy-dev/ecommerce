@extends("layouts.app")
@section("card_title",lang("models/admins.singular"))
@section("title",lang("models/admins.create.admin"))

@section("content")
    {!! html()->modelForm($admin,["method"=>"post","action"=>route("admins.update",$admin->id)]) !!}
    @include("admins.form")
    {!! html()->closeModelForm() !!}
@endsection
