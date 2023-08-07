@if($branch->status)
    <button class="btn btn-danger" x-data="status" @click.once="update('{{$branch->id}}',0,'branch')">{{lang("models/branches.fields.status.active")}}  </button>
    @elseif(!$branch->status)
    <button class="btn btn-primary" x-data="status" @click.once="update('{{$branch->id}}',1,'branch')">{{lang("models/branches.fields.status.inactive")}}</button>
@endif
