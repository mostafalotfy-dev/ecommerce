@extends("layouts.app")
@section("title",lang("brands.plural"))
@section("card_title",lang("brands.plural"))
@section("create_button")
    <a class="btn btn-primary m-1" href="{{route("brands.create")}}">{{lang("crud.brands.create")}}</a>
@endsection
@section("content")

    {{ $dataTable->table() }}
@endsection

@push("scripts")
    {{ $dataTable->scripts(attributes: ['type' => 'module']) }}
@endpush
