@extends("layouts.app")

@section("card_title",lang("models/lang.plural"))
@section("content")
    <div  class="input-group">
        <div class="input-group-prepend">
            <div class="input-group-text"><i class="fas fa-search"></i></div>
        </div>
        <input x-data type="text"
               x-model="$store.search.searchInput" name="search"
               class="form-control" placeholder="{{lang("search by id,key or value")}}"
               @input="$store.search.get()">


    </div>
    <table id="language-table" class="table table-responsive">
        <thead>
            <tr >
                <th>{{lang("models/language.fields.id")}}</th>
                <th>{{lang("models/language.fields.key")}}</th>
                <th>{{lang("models/language.fields.value")}}</th>

            </tr>
        </thead>
        <tbody x-data x-init="$store.search.get()">
        <template  x-for="lang in $store.search.result" :key="lang.id">
            <tr>

                <td x-text="lang.id"></td>
                <td x-text="lang.key"></td>
                <td><input x-data name="value" @change="$store.search.send(lang.id)" @keyup.enter="$store.search.send(lang.id)" :value="$store.search.value = lang.value" x-model="$store.search.value = lang.value">

                </td>


            </tr>

        </template>

        <tr >
            <template x-data x-if="!$store.search.loading">
            <td><button x-data @click="$store.search.nextPage()"  class="btn btn-primary" type="button">{{lang("next")}}</button></td>

            </template>
            <template  x-if="!$store.search.loading">
            <td><button x-data @click="$store.search.prevPage()"   class="btn btn-primary" type="button">{{lang("prev")}}</button></td>
            </template>
        </tr>
        </tbody>
    </table>
@endsection
