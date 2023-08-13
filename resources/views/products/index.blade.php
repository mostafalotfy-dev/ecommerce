@extends("layouts.app")

@section("create_button")
    <a class="btn btn-primary m-1" href="{{route("products.create")}}">{{lang("crud.actions.create")}}</a>

@endsection
@section("card_title",lang("models/products.plural"))
@section("content")

            {{ $dataTable->table() }}
@endsection

@push("scripts")
{{ $dataTable->scripts(attributes: ['type' => 'module']) }}
@endpush
