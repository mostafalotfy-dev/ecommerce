@if($status == 1)
    <button x-data="status" @click.prevent="update('{{$id}}',0)" class="btn btn-danger ">{{lang("active")}}    </button>
    @elseif($status == 0)
    <button x-data="status" @click.prevent="update('{{$id}}',1)"  class="btn btn-primary">{{lang("inactive")}}</button>
@endif