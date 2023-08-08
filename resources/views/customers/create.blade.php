@extends("layouts.app")


@section("card_title",lang("models/customers.plural"))

@section("title",lang("models/customers.plural"))

@section("content")

    {{html()->form("post",route("customers.store"))
    ->attribute("x-data","crud")
    ->attribute("@submit.prevent","send('customer-form')")
    ->id("customer-form")
    ->open()}}
    @include("customers.form")
    <input class="btn btn-warning" type="submit" name="save" value="{{lang("save_and_add")}}">
    {{html()->form()->close()}}
@endsection
