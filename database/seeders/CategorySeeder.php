<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'name_en' => 'dresses',
            'name_ar' => 'فساتين',
            'category_id' => 0,

        ]);
    }
}
