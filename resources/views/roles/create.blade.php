@extends("layouts.app")

@section("title",lang("models/roles.plural"))
@section("card_title")
    {{lang("models/roles.plural")}}
@endsection
@section("content")
    <form method="post" action="{{route("roles.store")}}" id="roles-form" x-data="crud" @submit.prevent="send('roles-form')">
@csrf

        @include("roles.form")
    {!! html()->form()->close() !!}
@endsection
