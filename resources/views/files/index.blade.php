@extends("layouts.app")

@section("title",lang("models/images.plural"))

@section("card_title",lang("models/images.plural"))
@section("content")
    {{html()->form("post",route("files.store"))->acceptsFiles()->class("dropzone")->id("files")->open()}}
    <div class="fallback">
        <input name="file" type="file" accept="image/*" multiple />
    </div>
    {{html()->form()->close()}}

@endsection
