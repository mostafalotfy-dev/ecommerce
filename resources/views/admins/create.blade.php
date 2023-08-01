@extends("layouts.app")
@section("card_title",lang("models/admins.singular"))
@section("title",lang("models/admins.create.admin"))
@section("content")

{!! html()->form("post",route("admins.store"))->acceptsFiles()->open() !!}
    @include("admins.form")

    {!! html()->form()->close() !!}
@endsection
