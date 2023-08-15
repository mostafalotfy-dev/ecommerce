@extends("layouts.app")


@section("card_title",lang("models/branches.plural"))
@section("title",lang("models/branches.plural"))
@section("content")

    {{html()->modelForm($branch,"put",route("branches.update",$branch->id))
->attribute("id","branch-form")
->attribute("x-data","crud")
->attribute("@submit.prevent","send('branch-form')")
->open()}}

        @include("branches.form")
    <input type="submit" name="save" class="btn btn-primary" value="{{lang("save")}}">

    {{html()->form()->close()}}
@endsection

