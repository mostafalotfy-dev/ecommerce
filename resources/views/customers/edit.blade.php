@extends("layouts.app")


@section("card_title",lang("models/customers.plural"))

@section("title",lang("models/customers.plural"))

@section("content")

    {{html()->modelForm($user,"put",route("customers.update",$user->id))
    ->attribute("x-data","status")
    ->attribute("@submit.prevent","update('customer-form')")
    ->id("customer-form")
    ->open()}}
    @include("customers.form")
    {{html()->form()->close()}}
@endsection
