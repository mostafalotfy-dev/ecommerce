@extends("layouts.app")
@section("title",lang("models/products.create"))
@section("card_title",lang("models/products.create"))
@section("content")
    {{html()->form("post",route("products.store"))
->attribute("x-data","crud")
->attribute("@submit.prevent","send('products-form')")
->attribute("id","products-form")->open()}}
    @include("products.form")
    {{html()->form()->close()}}
  @include("products.modals")
@endsection
