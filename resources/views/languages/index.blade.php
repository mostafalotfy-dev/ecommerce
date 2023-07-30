@extends("layouts.app")

@section("card_title",lang("models/lang.plural"))
@section("content")

    <table id="language-table" class="table table-responsive">
        <thead>
            <tr >
                <th>{{lang("models/language.fields.id")}}</th>
                <th>{{lang("models/language.fields.key")}}</th>
                <th>{{lang("models/language.fields.value")}}</th>
            </tr>
        </thead>
        <tbody x-data="ajax" >
        <template x-for="lang in langs" :key="lang.id">
            <tr>

                <td x-text="lang.id"></td>
                <td x-text="lang.key"></td>
                <td><input name="value" @change="send(lang.id)" :value="value = lang.value" x-model="value = lang.value">

                </td>

            </tr>

        </template>

        <tr >
            <template x-if="!loading">
            <td><button @click="nextPage"  class="btn btn-primary" type="button">{{lang("next")}}</button></td>

            </template>
            <template x-if="!loading">
            <td><button @click="prevPage"   class="btn btn-primary" type="button">{{lang("prev")}}</button></td>
            </template>
        </tr>
        </tbody>
    </table>
@endsection
