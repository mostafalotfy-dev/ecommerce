@if($status == 1)
    <span  class="badge badge-primary">{{lang("active")}}    </span>
@elseif($status == 0)
    <span class="badge badge-warning">{{lang("inactive")}}</span>
@endif
