@extends("layouts.app")

@section("title",lang("models/images.plural"))

@section("card_title",lang("models/images.plural"))
@section("content")
    <div class="container" x-data="gallery" x-init="get()">
        <div class="col-md-3"></div>
    </div>
@endsection
