@extends("layouts.app")

@section("create_button")
    <a class="btn btn-primary m-1" href="{{route("roles.create")}}">{{lang("crud.actions.create")}}</a>
@endsection
@section("title",lang("models/roles.plural"))
@section("card_title",lang("models/roles.plural"))
@section("content")

    {{ $dataTable->table() }}

@endsection

@push("scripts")
{{ $dataTable->scripts(attributes: ['type' => 'module']) }}
@endpush
