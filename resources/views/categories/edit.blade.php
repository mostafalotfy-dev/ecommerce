@extends("layouts.app")


@section("title",lang("models/category.plural"))
@section("card_title",lang("models/category.plural"))
@section("content")

   {!! html()->modelForm($category,"put",route("category.update",$category->id))->attribute("x-data","crud")->attribute("id","categories-form")
->attribute("@submit.prevent","send('categories-form')")->acceptsFiles()->open() !!}
   @include("categories.form")

    {!! html()->closeModelForm() !!}
@endsection

