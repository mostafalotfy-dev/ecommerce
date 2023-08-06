@extends("layouts.app")

@section("title",lang("models/category.plural"))

@section("card_title",lang("models/category.plural"))

@section("content")

    {!! html()->form("post",route("category.store"))->acceptsFiles()->open() !!}
        @include("categories.form")
    <hr>
    <input type="submit" name="save_and_add" value="{{lang("save_and_add_more")}}" class='btn btn-danger'>
    {!! html()->form()->close() !!}
    <hr>

@endsection
