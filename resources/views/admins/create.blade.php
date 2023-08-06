@extends("layouts.app")
@section("card_title",lang("models/admins.singular"))
@section("title",lang("models/admins.create.admin"))
@section("content")

{!! html()->form("post",route("admins.store"))->acceptsFiles()->attribute("autocomplete","off")->open() !!}
    @include("admins.form")

    <input type="submit" class="btn btn-danger" name="save_and_edit" value="{{lang("save_and_add_more")}}">

    {!! html()->form()->close() !!}
@include("admins.modal")
@endsection
