@extends("layouts.app")

@section("create_button")
    <a class="btn btn-primary m-1" href="{{url("roles/create")}}">{{lang("crud.actions.create",defaults: "Create")}}</a>
@endsection
@yield("title",lang("models/roles.plural"))
@section("card_title",__("models/roles.plural"))
@section("content")

    {{ $dataTable->table() }}

@endsection

@push("scripts")
{{ $dataTable->scripts(attributes: ['type' => 'module']) }}
@endpush
