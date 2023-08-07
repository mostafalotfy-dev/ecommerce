@if($branch->is_cod)
    <button class="btn btn-danger" x-data="cod" @click.once="update('{{$branch->id}}',0,'branch')">{{lang("models/branches.fields.status.active")}}  </button>
@elseif(!$branch->is_code)
    <button class="btn btn-primary" x-data="cod" @click.once="update('{{$branch->id}}',1,'branch')">{{lang("models/branches.fields.status.inactive")}}</button>
@endif
