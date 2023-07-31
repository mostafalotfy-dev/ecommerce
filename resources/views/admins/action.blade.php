<form action="{{route("admins.destroy",$id)}}" class="d-inline" method="POST">
    @method("delete")
    @csrf
    <button class="btn btn-danger btn-xs">{{lang("crud.actions.delete")}}</button>
</form>

<a class="btn btn-primary btn-xs" href="{{route("admins.edit",$id)}}">{{lang("crud.actions.edit")}}</a>
<a class="btn btn-primary btn-xs" href="{{route("admins.show",$id)}}">{{lang("crud.actions.show")}}</a>
