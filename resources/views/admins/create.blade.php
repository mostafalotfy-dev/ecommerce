@extends("layouts.app")
@section("card_title",lang("models/admins.singular"))
@section("title",lang("models/admins.create.admin"))
@section("content")

{!! html()->form("GET",route("admins.store"))->open() !!}
    @include("admins.form")

    {!! html()->form()->close() !!}
@endsection
