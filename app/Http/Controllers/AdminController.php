<?php

namespace App\Http\Controllers;

use App\DataTables\AdminDataTable;
use Illuminate\Http\Request;

class AdminController extends Controller
{
        public function index()
        {
            return app(AdminDataTable::class)->render("admins.index");
        }
        public function create()
        {
            return view("admins.create");
        }
}
