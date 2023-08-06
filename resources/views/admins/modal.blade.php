<!-- Modal -->
<form method="post" action="{{route("roles.store")}}" x-data="crud" @submit.prevent="send('role-form')" id="role-form">
    @csrf
    <div class="modal fade" id="role-modal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-xl modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{lang("models/roles.plural")}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <template x-if="message">
                        <span class="alert alert-danger" x-text="message"></span>
                    </template>
                    <hr>
                    <div class="row">
                        <div class="col-md-3">
                            <label for="name_en">{{lang("model/role.fields.name_en")}}</label>
                            <input type="text"  class="form-control"  name="name_en" id="name_en">

                        </div>
                        <div class="col-md-3">
                            <label for="name_ar">{{lang("model/role.fields.name_ar")}}</label>
                            <input type="text" class="form-control" name="name_ar" id="name_ar" >
                        </div>
                    </div>


                    <hr>
                    <table x-data x-init="$store.permission.paginate()" class="table table-responsive table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>
                                {{lang("models/permissions.name_en")}}
                            </th>

                            <th>
                                {{lang("models/permissions.name_ar")}}
                            </th>

                        </tr>
                        </thead>

                        <template x-data x-for="permission in $store.permission.permissions">
                            <tr>
                                <td><input type="checkbox" name="permissions[]" :value="permission.id"></td>
                                <td x-text="permission.name_en"></td>
                                <td x-text="permission.name_ar"></td>

                            </tr>
                        </template>
                    </table>


                    <hr>
                    <template x-if="message">
                        <span class="alert alert-danger" x-text="message"></span>
                    </template>

                </div>
    <div class="modal-footer" >
        <input class="btn btn-primary"  type="submit" name="save" value="{{lang("save")}}">

    </div>
            </div>
        </div>
    </div>
</form>
