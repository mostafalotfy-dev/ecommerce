@if($status == 1)
    <button x-data="status" @click="update('{{$id}}}','role-table')" class="btn btn-danger ">{{lang("active")}}    </button>
    @elseif($status == 0)
    <button x-data="status" @click="update('{{$id}}}')"  class="btn btn-primary">{{lang("inactive")}}</button>
@endif
