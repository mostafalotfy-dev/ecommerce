<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class MakeAdmin extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::create([
            'name' => 'developer',
            'mobile' => '010213456789',
            'password' => bcrypt(123456789),
        ]);
    }
}
