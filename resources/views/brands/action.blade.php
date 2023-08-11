<div class="row">

<form action="{{route("brands.destroy",$id)}}" method="post">
    @csrf
    @method("delete")
    <button type="submit" class="btn btn-danger">{{lang("crud.delete")}}</button>
</form>

<div class="clearfix"></div>

<div class="clearfix"></div>
<a class="btn btn-primary" href="{{route("brands.edit",["brand"=>$id])}}">{{lang("edit")}}</a>
</div>
