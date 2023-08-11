@if($status == 1)
    <span class="badge-primary badge ">{{lang("active")}}    </span>
    @elseif($status == 0)
    <span   class="badge badge-warning">{{lang("inactive")}}</span>
@endif
