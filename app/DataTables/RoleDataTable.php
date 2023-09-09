<?php

namespace App\DataTables;

use App\Repositories\RoleRepository;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\QueryDataTable;
use Yajra\DataTables\Services\DataTable;

class RoleDataTable extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param  QueryBuilder  $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): QueryDataTable
    {
        return (new QueryDataTable($query))
            ->setRowId('id')
            ->addColumn('action', 'roles.action');

    }

    /**
     * Get the query source of dataTable.
     */
    public function query(): QueryBuilder
    {
        $repo = app(RoleRepository::class);

        return \DB::table($repo->tableName())
            ->select('id', 'name_en', 'name_ar', 'display_name', 'created_at', 'updated_at')
            ->where('id', '!=', 1);

    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
            ->setTableId('role-table')
            ->columns($this->getColumns())
            ->minifiedAjax()
                    //->dom('Bfrtip')
            ->orderBy(0)
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
                'name' => 'id',
                'data' => 'id',
                'title' => lang('models/roles.fields.id'),
            ]),
            Column::make([
                'name' => 'name_en',
                'data' => 'name_en',
                'title' => lang('models/roles.fields.name_en'),
            ]),
            Column::make([
                'name' => 'name_ar',
                'data' => 'name_ar',
                'title' => lang('models/roles.fields.name_ar'),
            ]),
            Column::make([
                'name' => 'display_name',
                'data' => 'display_name',
                'title' => lang('models/roles.fields.display_name'),
            ]),
            Column::make([
                'name' => 'created_at',
                'data' => 'created_at',
                'title' => lang('models/roles.fields.created_at'),
            ]),
            Column::make([
                'name' => 'updated_at',
                'data' => 'updated_at',
                'title' => lang('models/roles.fields.updated_at'),
            ]),
            Column::computed('action', lang('crud.action.name'))
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
        return 'Role_'.date('YmdHis');
    }
}
