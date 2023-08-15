<div class="modal fade bd-example-modal-lg" id="brand" tabindex="-1" role="dialog"
     aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                {{html()->form("post",route("brands.store"))
            ->attribute("x-data","crud")
            ->attribute("@submit.prevent","send('brands-form',true)")
            ->attribute("id","brands-form")->open()}}
                @include("brands.form")
                <input type="submit" name="save" class="btn btn-primary" value="{{lang("save")}}">
                {{html()->form()->close()}}
            </div>
        </div>
    </div>
</div>
<div class="modal fade bd-example-modal-lg" id="branches" tabindex="-1" role="dialog"
     aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                {{html()->form("post",route("branches.store"))
->attribute("x-data","crud")
->attribute("@submit.prevent","send('branches-form',true)")
->attribute("id","branches-form")->open()}}
                @include("branches.form")
                <input type="submit" name="save" class="btn btn-primary" value="{{lang("save")}}">

                {{html()->form()->close()}}
            </div>
        </div>
    </div>
</div>
