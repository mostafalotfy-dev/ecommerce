{{--<form action="{{route("roles.destroy",$id)}}" class="d-inline" method="POST">--}}
{{--    @method("delete")--}}
{{--    @csrf--}}
{{--    <button class="btn btn-danger btn-xs">{{lang("crud.actions.delete")}}</button>--}}
{{--</form>--}}

<a class="btn btn-primary btn-xs" href="{{route("roles.edit",$id)}}">{{lang("crud.actions.edit")}}</a>
<a class="btn btn-primary btn-xs" href="{{route("roles.show",$id)}}">{{lang("crud.actions.show")}}</a>
