@extends("layouts.app")

@section("title",lang("models/category.plural"))

@section("card_title",lang("models/category.plural"))

@section("content")

    {!! html()->form("post",route("category.store"))->attribute("x-data","crud")->attribute("id","categories-form")
->attribute("@submit.prevent","send('categories-form')")->acceptsFiles()->open() !!}
        @include("categories.form")
    {!! html()->form()->close() !!}
    <hr>

@endsection
