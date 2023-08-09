@extends("layouts.app")


@section("card_title",lang("models/branches.plural"))
@section("title",lang("models/branches.plural"))
@section("content")

    <form action="{{route("branches.store")}}" x-data="crud" @submit.prevent="send('branch-form')" id="branch-form" method="post">
        @csrf
        @include("branches.form")


    </form>
@endsection

