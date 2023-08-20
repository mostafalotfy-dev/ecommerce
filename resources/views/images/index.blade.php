@extends("layouts.app")




@section("content")
    <div class="filter-container" x-data="gallery" x-init="get()">
        <div class="filter-item"></div>
    </div>
@endsection
