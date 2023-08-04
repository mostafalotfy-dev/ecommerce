@extends("layouts.app")

@section("title",lang("models/category.plural"))

@section("card_title",lang("models/category.plural"))

@section("content")

    {!! html()->form("post",route("category.store"))->acceptsFiles()->open() !!}
        @include("categories.form")
    {!! html()->form()->close() !!}
@endsection
