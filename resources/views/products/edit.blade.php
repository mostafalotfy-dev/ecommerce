@extends("layouts.app")
@section("title",lang("models/products.edit"))
@section("card_title",lang("models/products.edit"))
@section("content")
    {{html()->modelForm($product,"put",route("products.store"))
->attribute("x-data","crud")
->attribute("@submit.prevent","send('products-form')")
->attribute("id","products-form")->open()}}
    @include("products.form")
    <input type="submit" class="btn btn-primary" name="save" value="{{lang("save")}}}">
    {{html()->form()->close()}}
    @include("products.modals")
@endsection
