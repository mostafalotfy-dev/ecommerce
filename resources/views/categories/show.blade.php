@extends("layouts.app")


@section("title",lang("models/category.plural"))
@section("card_title",lang("models/category.plural"))
@section("content")

<table class="table table-responsive table-bordered">
    <thead>
        <tr>
            <th>{{lang("models/category.fields.name_en")}}</th>
            <th>{{lang("models/category.fields.name_ar")}}</th>
            <th>{{lang("models/category.fields.parent_id.name_en")}}</th>
            <th>{{lang("models/category.fields.parent_id.name_ar")}}</th>
            <th>{{lang("models/category.fields.image")}}</th>
            <th>{{lang("models/category.fields.parent_id.category_image")}}</th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <td>{{$category->name_en}}</td>
            <td>{{$category->name_ar}}</td>
            @php($parent = $category->parents($category->id))
            <td>{{$parent?->name_en}}</td>
            <td>{{$parent?->name_ar}}</td>
            <td>@if($category->category_image) <img src="{{url("storage/".$category->category_image)}}" height="100"> @else - @endif</td>
            <td>@if(isset($parent->category_image)) <img src="{{url("storage/".$parent->category_image)}}" height="100"> @else - @endif</td>
        </tr>
    </tbody>
</table>
@endsection

