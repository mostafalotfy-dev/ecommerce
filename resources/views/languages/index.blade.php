@extends("layouts.app")


@section("content")

    <table id="language-table" class="table table-responsive">
        <thead>
            <tr>
                <th>{{lang("models/language.fields.id")}}</th>
                <th>{{lang("models/language.fields.key")}}</th>
                <th>{{lang("models/language.fields.value")}}</th>
            </tr>

        </thead>
        <tbody >
        @foreach($language as $l)
            <tr x-data="ajax">
                <td>{{$l->id}}</td>
                <td>{{$l->key}}</td>

                <td><input x-if="!value"  name="value" @change="send('{{$l->id}}')" value="{{$l->value}}" x-model="value"></td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
