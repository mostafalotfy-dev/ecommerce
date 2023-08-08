@extends("layouts.app")

@section("card_title",lang("models/customers.plural"))
@section("content")

    {{ $dataTable->table() }}
@endsection

@push("scripts")
    {{ $dataTable->scripts(attributes: ['type' => 'module']) }}
@endpush
