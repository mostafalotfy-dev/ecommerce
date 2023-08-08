<form method="post" action="{{route("customers.destroy",$id)}}">
@method("delete")
@csrf
<button class="btn btn-danger btn-xs">{{lang("buttons.delete")}}</button>
</form>

<a class="btn btn-warning btn-xs" href='{{route("customers.show",$id)}}'>
{{lang("buttons.show")}}
</a>
<a  class="btn btn-primary btn-xs" href="{{route("customers.edit",$id)}}">{{lang("buttons.edit")}}</a>
