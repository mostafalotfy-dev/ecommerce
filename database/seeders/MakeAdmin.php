<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
class MakeAdmin extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::create([
            "name"=>"developer",
            "mobile"=>"010213456789",
            "password"=>bcrypt(123456789)
        ]);
    }
}
