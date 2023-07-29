@extends("layouts.app")

@section("title",lang("models/roles.plural"))
@section("card_title")
    {{lang("models/roles.plural")}}
@endsection
@section("content")
    {!! html()->form("POST",url("roles"))->acceptsFiles()->open() !!}
        @include("roles.form")
    {!! html()->form()->close() !!}
@endsection
