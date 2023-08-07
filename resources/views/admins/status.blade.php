@if($status == 1)
    <button x-data="status" @click.prevent="update('{{$id}}',0,'{{$name}}')" class="btn btn-danger ">{{lang("active")}}    </button>
    @elseif($status == 0)
    <button x-data="status" @click.prevent="update('{{$id}}',1,'{{$name}}')"  class="btn btn-primary">{{lang("inactive")}}</button>
@endif
