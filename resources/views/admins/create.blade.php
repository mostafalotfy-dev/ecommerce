@extends("layouts.app")
@section("card_title",lang("models/admins.singular"))
@section("title",lang("models/admins.create.admin"))
@section("content")

    <form action="{{route("admins.store")}}" method="post" id="admin-form" x-data="crud"  @submit.prevent="send('admin-form')">
        @csrf

    @include("admins.form")
        <template x-if="message">
            <span class="text text-danger" x-text="message"></span>
            <hr>
        </template>

    <input type="submit" class="btn btn-danger" name="save_and_add" value="{{lang("save_and_add_more")}}">

    </form>
@include("admins.modal")
@endsection
