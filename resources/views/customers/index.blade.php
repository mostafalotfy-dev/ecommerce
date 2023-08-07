@extends("layouts.app")


@section("card_title",lang("models/customers.plural")

@section("title",lang("models/customers.plural")

@section("content")

{{html()->form("post",route("customers.store"))
->attribute("x-data","status")
->attribute("@submit.prevent","update('customer-form')")
->id("customer-form")
->open()}}
	@include("customers.form")
{{html()->form()->close()
@endsection
