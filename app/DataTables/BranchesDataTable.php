<?php

namespace App\DataTables;

use App\Models\Branch;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\QueryDataTable;
use Yajra\DataTables\Services\DataTable;

class BranchesDataTable extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): QueryDataTable
    {
        return (new QueryDataTable($query))
            ->addColumn('action', 'branches.action')
            ->setRowId('id');
    }

    /**
     * Get the query source of dataTable.
     */
    public function query(): QueryBuilder
    {
        return \DB::table("branches");
    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
                    ->setTableId('branches-table')
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
            Column::computed('action')
                  ->exportable(false)
                  ->printable(false)
                  ->width(60)
                  ->addClass('text-center'),
            Column::make('id'),
            Column::make([
                "name"=>"name_en",
                "id"=>"name_en",
                "title"=> lang("models/branches.fields.name_en")
            ]),
            Column::make([
                "name"=>"name_ar",
                "id"=>"name_ar",
                "title"=> lang("models/branches.fields.name_ar")
            ]),
            Column::make([
                "name"=>"status",
                "id"=>"status",
                "title"=> lang("models/branches.fields.status")
            ]),
            Column::make([
                "name"=>"is_open",
                "id"=>"is_open",
                "title"=> lang("models/branches.fields.is_open")
            ]),
            Column::make([
                "name"=>"is_cod",
                "id"=>"is_cod",
                "title"=> lang("models/branches.fields.is_cod")
            ]),
            Column::make('created_at'),
            Column::make('updated_at'),
        ];
    }

    /**
     * Get the filename for export.
     */
    protected function filename(): string
    {
        return 'Branches_' . date('YmdHis');
    }
}
