@extends("layouts.app")
@section("title",lang("models/images.plural"))
@section("card_title",lang("models/images.plural"))
@section("content")
    {{html()->form("post",route("files.store"))->acceptsFiles()->class("dropzone")->id("files")->open()}}
    <div class="fallback">
        <input name="file" type="file" accept="image/*" multiple/>
    </div>
    {{html()->form()->close()}}
    <div class="container-fluid" x-data="gallery">
        <div class="row">
        <template x-for="image in images">
            <div class="col-md-3">
                <div class="card ">
                    <img :src="image.file_name" :alt="image.alternative_text"/>
                    <div class="card-body">
                        <template x-if="image.alternative_text">
                        <div class="card-title"  x-text="image.alternative_text">

                        </div>
                        </template>
                        <template x-if="!image.alternative_text">
                            {{html()->form("post",route("files.update_alt"))->attribute("@submit.prevent",'update_alt($event.target)')->class("update_alt")->open()}}
                            <input type="hidden" name="id" :value="image.id">
                            {{html()->text("alt")->attribute("x-modal","image.alternative_text")->placeholder(lang("files.alternative_text"))->class("form-control")}}
                            {{html()->submit(lang("submit"))}}
                            {{html()->form()->close()}}
                        </template>
                        <template x-if="image.description">
                        <div class="card-text" x-text="image.description" >

                        </div>
                        </template>
                    </div>
                </div>
            </div>
        </template>
        </div>
    </div>
@endsection
