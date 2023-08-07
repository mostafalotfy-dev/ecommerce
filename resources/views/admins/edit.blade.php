@extends("layouts.app")
@section("card_title",lang("models/admins.singular"))
@section("title",lang("models/admins.create.admin"))

@section("content")
    {!! html()->modelForm($admin,"PUT",route("admins.update",$admin->id))->id("admin-form")->attribute("autocomplete","off")
->attribute("@submit.prevent","send('admin-form')")
->attribute("x-data","crud")
->acceptsFiles()->open() !!}
    <template  x-if="message">
        <span class="text-danger text" x-text="message"></span>
        <hr>
    </template>

    @include("admins.form")
    @if($admin->profile_image)
    <div class="row">
    <strong>{{lang("models/admins.fields.profile_image")}}</strong>
        <hr>
        <a href="{{url("storage/".$admin->profile_image)}}" target="_blank">  <img height="150"  src="{{url("storage/".$admin->profile_image)}}" alt=""></a>
    </div>

    @endif
    {!! html()->closeModelForm() !!}
    @include("admins.modal")
@endsection
