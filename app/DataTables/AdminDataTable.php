<?php

namespace App\DataTables;

use App\Models\Admin;
use Illuminate\Database\Query\Builder as QueryBuilder;

use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;

use Yajra\DataTables\QueryDataTable;
use Yajra\DataTables\Services\DataTable;

class AdminDataTable extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): QueryDataTable
    {
        return (new QueryDataTable($query))
            ->addColumn('action', 'admins.action')
            ->editColumn("status",function ($db){

                return view("shared.status",[
                    "status"=>$db->status,
                    "id"=>$db->id
                ]);
            })

            ->setRowId('id');
    }

    /**
     * Get the query source of dataTable.
     */
    public function query(): QueryBuilder
    {
        return \DB::table(factory("admin")->tableName())->where("id","!=",1);
    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
                    ->setTableId('admin-table')
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

            Column::make(
                [
                    "id"=>"id",
                    "data"=>"id",
                    "title"=>lang("models/admins.fields.id")
                ]
            ),
            Column::make([
                "id"=>"first_name",
                "data"=>"first_name",
                "title"=>lang("models/admins.fields.first_name")
            ]),
            Column::make([
                "id"=>"last_name",
                "data"=>"last_name",
                "title"=>lang("models/admins.fields.last_name")
            ]),
            Column::make([
                "id"=>"email",
                "data"=>"email",
                "title"=>lang("models/admins.fields.email")
            ]),
            Column::make([
                "id"=>"phone_number",
                "data"=>"phone_number",
                "title"=>lang("models/admins.fields.phone_number")
            ]),
            Column::make([
                "id"=>"status",
                "data"=>"status",
                "title"=>lang("models/admins.fields.status")
            ]),
            Column::make('created_at'),
            Column::make('updated_at'),
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
        return 'Admin_' . date('YmdHis');
    }
}
