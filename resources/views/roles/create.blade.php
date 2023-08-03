@extends("layouts.app")

@section("title",lang("models/roles.plural"))
@section("card_title")
    {{lang("models/roles.plural")}}
@endsection
@section("content")
    <form method="post" id="role-form" x-data @submit.prevent="$store.permission.add()">

        @include("roles.form")
    {!! html()->form()->close() !!}
@endsection
