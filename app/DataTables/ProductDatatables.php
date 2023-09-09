<?php

namespace App\DataTables;

use App\Models\Product;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\QueryDataTable;
use Yajra\DataTables\Services\DataTable;

class ProductDatatables extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param  QueryBuilder  $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): QueryDataTable
    {
        return (new QueryDataTable($query))
            ->addColumn('action', 'products.action')
            ->addColumn('in_stock', function (Product $product) {
                return view('products.in_stock', compact('product'));
            })
            ->setRowId('id');
    }

    /**
     * Get the query source of dataTable.
     */
    public function query(): QueryBuilder
    {
        return \DB::table('products');
    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
            ->setTableId('productdatatables-table')
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
                'title' => '#',
                'name' => 'id',
                'data' => 'id',
            ]),
            Column::make([
                'title' => lang('product.fields.name_en'),
                'name' => 'name_en',
                'data' => 'name_en',
            ]),
            Column::make([
                'title' => lang('product.fields.name_ar'),
                'name' => 'name_ar',
                'data' => 'name_ar',
            ]),
            Column::make([
                'title' => lang('products.fields.price'),
                'name' => 'price',
                'data' => 'price',

            ]),
            Column::make([
                'title' => lang('products.fields.discount'),
                'name' => 'discount',
                'data' => 'discount',

            ]),
            Column::computed('in_stock', lang('products.fields.in_stock'))
                ->printable()
                ->exportable(),
            Column::computed('action', lang('action'))
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
        return 'ProductDatatables_'.date('YmdHis');
    }
}
