{{html()->form("delete",route("branches.destroy",$id))->open()}}

<button class="btn btn-danger btn-xs">{{lang("buttons.delete")}}</button>

{{html()->form()->close()}}

<a href="{{route("branches.edit",$id)}}" class="btn btn-primary btn-xs">{{lang("buttons.edit")}}</a>
<a href="{{route("branches.show",$id)}}"  class="btn btn-primary btn-xs">{{lang("buttons.show")}}</a>
