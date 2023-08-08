@extends("layouts.app")
@section("create_button")
    <a class="btn btn-primary m-1" href="{{route("customers.create")}}">{{lang("crud.actions.create")}}</a>

@endsection
@section("card_title",lang("models/customers.plural"))
@section("content")

    {{ $dataTable->table() }}
@endsection

@push("scripts")
    {{ $dataTable->scripts(attributes: ['type' => 'module']) }}
@endpush
