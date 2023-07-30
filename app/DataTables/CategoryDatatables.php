<?php

namespace App\DataTables;


use Illuminate\Database\Query\Builder as QueryBuilder;
use Yajra\DataTables\QueryDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;

use Yajra\DataTables\Services\DataTable;

class CategoryDatatables extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): QueryDataTable
    {
        $category = factory("category");

        return (new QueryDataTable($query))
            ->addColumn('action', 'categories.action')
            ->editColumn("category_id",function($model) use($category){
                $data =  $category
                ->where("category_id",$model->category_id)
                ->where("category_id","!=",0)->first();
                return $data->{"name_".app()->getLocale()} ?? "-";
            })
            ->setRowId('id');
    }

    /**
     * Get the query source of dataTable.
     */
    public function query(): QueryBuilder
    {
        $repo = factory("category");
       
        return \DB::table($repo->tableName());
       
        
    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
                    ->setTableId('categorydatatables-table')
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    //->dom('Bfrtip')
                    ->orderBy(1)
                    ->selectStyleSingle()
                    ->buttons([
                        Button::make('excel'),
                        Button::make('csv'),
                        Button::make('pdf'),
                        Button::make('print'),
                        Button::make('reset'),
                        Button::make('reload')
                    ]);
    }

    /**
     * Get the dataTable columns definition.
     */
    public function getColumns(): array
    {
        return [
          
            Column::make([
                "name"=>"id",
                "data"=>"id",
                "title"=>lang("models/category.fields.id"),
            ]),
            Column::make([
                "name"=>"name_en",
                "data"=>"name_en",
                "title"=>lang("models/category.fields.name_en"),
            ]),
            Column::make([
                "name"=>"name_ar",
                "data"=>"name_ar",
                "title"=>lang("models/category.fields.name_ar"),
            ]),
            Column::make([
                "name"=>"category_id",
                "data"=>"category_id",
                "title"=>lang("models/category.fields.category_id"),
            ]),
            Column::make([
                "name"=>"created_at",
                "data"=>"created_at",
                "title"=>lang("models/category.fields.created_at"),
            ]),
            Column::make([
                "name"=>"updated_at",
                "data"=>"updated_at",
                "title"=>lang("models/category.fields.updated_at"),
            ]),
        
            Column::computed('action')
            ->exportable(false)
            ->printable(false)
            ->width(60)
            ->addClass('text-center'),
        ];
    }

    /**
     * Get the filename for export.
     */
    protected function filename(): string
    {
        return 'CategoryDatatables_' . date('YmdHis');
    }
}
