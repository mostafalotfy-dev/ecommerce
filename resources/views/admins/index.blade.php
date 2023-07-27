@extends("layouts.app")


@section("content")
<div class="container">
    <div class="card card-success">
        <div class="card-header">@lang('models/roles.fields.title')</div>
        <div class="card-body">
            {{ $dataTable->table() }}
        </div>
    </div>
</div>
@endsection

@push("scripts")
{{ $dataTable->scripts(attributes: ['type' => 'module']) }}
@endpush