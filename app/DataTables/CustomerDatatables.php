<?php

namespace App\DataTables;


use App\Models\User;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\QueryDataTable;
use Yajra\DataTables\Services\DataTable;

class CustomerDatatables extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): QueryDataTable
    {
        return (new QueryDataTable($query))
            ->addColumn('action', 'customerdatatables.action')
            ->setRowId('id');
    }

    /**
     * Get the query source of dataTable.
     */
    public function query(): QueryBuilder
    {
        return \DB::table("users");
    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
                    ->setTableId('customerdatatables-table')
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
                "data"=>"id",
                "name"=>"id",
                "title"=>"#"
            ]),
            Column::make([
                "data"=>"name",
                 "name"=>"name",
                "title"=>lang("models/customers.fields.full_name")
            ]),

            Column::make([
                "data"=>"phone_number",
                "name"=>"phone_number",
                "title"=>lang("models/customers.fields.phone_number")
            ]),
            Column::make([
                "data"=>"email",
                "name"=>"email",
                "title"=>lang("models/customers.fields.email")
            ]),
            Column::make([
                "data"=>"dob",
                "name"=>"dob",
                "title"=>lang("models/customers.fields.date_of_birth")
            ]),
            Column::make([
                "data"=>"is_active",
                "name"=>"is_active",
                "title"=>lang("models/customers.fields.is_active")
            ]),
            Column::make([
                "data"=>"created_at",
                "name"=>"created_at",
                "title"=>lang("models/customers.fields.created_at")
            ]),
            Column::make([
                "data"=>"updated_at",
                "name"=>"updated_at",
                "title"=>lang("models/customers.fields.updated_at")
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
        return 'CustomerDatatables_' . date('YmdHis');
    }
}
