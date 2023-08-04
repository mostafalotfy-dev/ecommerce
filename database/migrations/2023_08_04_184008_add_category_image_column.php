<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table("categories",function (Blueprint $table){
            $table->text("category_image")->nullable()->after("name_ar");
            $table->boolean("status")->default(1)->after("name_ar");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropColumns("categories",["category_image","status"]);
    }
};
