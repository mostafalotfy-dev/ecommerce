@extends("layouts.app")


@section("card_title",lang("models/brands.plural"))
@section("title",lang("models/brands.plural"))
@section("content")

    {{html()->modelForm($brand,"put",route("brands.update",$brand->id))->attribute("id","brands-form")->attribute("x-data","crud")
 ->attribute("@submit.prevent","send('brands-form')")->acceptsFiles()->open()}}

    @include("brands.form")

    <input type="submit" name="save" class="btn btn-primary" value="{{lang("save")}}">

    {{html()->form()->close()}}
@endsection

