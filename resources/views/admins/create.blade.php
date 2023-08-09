@extends("layouts.app")
@section("card_title",lang("models/admins.singular"))
@section("title",lang("models/admins.create.admin"))
@section("content")

    <form action="{{route("admins.store")}}" method="post" id="admin-form" x-data="crud"  @submit.prevent="send('admin-form')">
        @csrf

    @include("admins.form")



    </form>
@include("admins.modal")
@endsection
