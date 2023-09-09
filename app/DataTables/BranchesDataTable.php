<?php

namespace App\DataTables;

use Illuminate\Database\Query\Builder as QueryBuilder;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\QueryDataTable;
use Yajra\DataTables\Services\DataTable;

class BranchesDataTable extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param  QueryBuilder  $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): QueryDataTable
    {
        return (new QueryDataTable($query))
            ->addColumn('action', 'branches.action')
            ->editColumn('status', function ($branch) {
                return view('branches.status', compact('branch'));
            })->editColumn('is_cod', function ($branch) {
                return view('branches.cod', compact('branch'));
            })
            ->setRowId('id');
    }

    /**
     * Get the query source of dataTable.
     */
    public function query(): QueryBuilder
    {
        return \DB::table('branches');
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
                Button::make('reload'),
            ]);
    }

    /**
     * Get the dataTable columns definition.
     */
    public function getColumns(): array
    {
        return [

            Column::make([
                'data' => 'id',
                'name' => 'id',
                'title' => '#',
            ]),
            Column::make([
                'name' => 'name_en',
                'data' => 'name_en',
                'title' => lang('models/branches.fields.name_en'),
            ]),
            Column::make([
                'name' => 'name_ar',
                'data' => 'name_ar',
                'title' => lang('models/branches.fields.name_ar'),
            ]),
            Column::make([
                'name' => 'status',
                'data' => 'status',
                'title' => lang('models/branches.fields.status'),
            ]),
            Column::make([
                'name' => 'is_open',
                'data' => 'is_open',
                'title' => lang('models/branches.fields.is_open'),
            ]),
            Column::make([
                'name' => 'is_cod',
                'data' => 'is_cod',
                'title' => lang('models/branches.fields.is_cod'),
            ]),
            Column::make([
                'data' => 'created_at',
                'name' => 'created_at',
                'title' => lang('models/branches.fields.created_at'),
            ]),
            Column::make([
                'data' => 'updated_at',
                'name' => 'updated_at',
                'title' => lang('models/branches.fields.updated_at'),
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
        return 'Branches_'.date('YmdHis');
    }
}
