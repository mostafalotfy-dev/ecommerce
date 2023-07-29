@extends("layouts.app")


@section("title",lang("models/roles.plural"))
@section("card_title")
    @lang("models/roles.plural")
@endsection
@section("content")
    {!! html()->form("POST",url("roles/{$role->id}"))->acceptsFiles()->open() !!}
         @include("roles.form",compact("role"))
    {!! html()->form()->close() !!}
@endsection
