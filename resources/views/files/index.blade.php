@extends("layouts.app")
@section("title",lang("models/images.plural"))
@section("card_title",lang("models/images.plural"))
@section("content")
    {{html()->form("post",route("files.store"))->acceptsFiles()->class("dropzone")->id("files")->open()}}
    <div class="fallback">
        <input name="file" type="file" accept="image/*" multiple/>
    </div>
    {{html()->form()->close()}}
    <hr>
    <div class="container-fluid" x-data="gallery">
        <div class="row">
            <div class="col-md-3">
                <button type="button" @click="get()" class="btn btn-primary"><i
                        class="fas fa-sync-alt"></i> {{lang("Refresh")}}</button>

            </div>
        </div>
        <hr>
        <div class="row">
            <template x-for="image in images">
                <div class="col-md-3">
                    <div class="card">

                        <img :src="image.file_name" :alt="image.alternative_text"/>
                        <div class="card-body">
                            <template x-if="image.alternative_text">
                                <div>
                                    <div class="card-title" x-text="image.alternative_text">

                                    </div>
                                    <div class="clearfix"></div>
                                    <button type="button" @click="image.alternative_text = ''"
                                            class="btn btn-primary">{{lang("Edit")}}</button>

                                    {{html()->form("delete",route("files.destroy"))->attribute("@submit.prevent",'update($event.target)')->open()}}
                                    {{html()->hidden("id")->attribute(":value",'image.id')}}
                                    {{html()->submit("delete")->class("btn btn-danger")}}
                                    {{html()->form()->close()}}
                                </div>
                            </template>
                            <template x-if="!image.alternative_text">
                                <div class="row">

                                    {{html()->form("post",route("files.update_alt"))->attribute("@submit.prevent",'update($event.target)')->class("update_alt")->open()}}
                                    <input type="hidden" name="id" :value="image.id">
                                    {{html()->text("alt")->attribute("x-modal","image.alternative_text")->placeholder(lang("files.alternative_text"))->class("form-control")}}
                                    <hr>
                                    {{html()->submit(lang("submit"))->class("btn btn-warning")}}
                                    {{html()->form()->close()}}

                                    {{html()->form("delete",route("files.destroy"))->attribute("@submit.prevent",'update($event.target)')->open()}}
                                    {{html()->hidden("id")->attribute(":value",'image.id')}}
                                    {{html()->submit("delete")->class("btn btn-danger")}}
                                    <hr>
                                    {{html()->form()->close()}}

                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
@endsection
