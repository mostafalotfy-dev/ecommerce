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
        Schema::create('attributes', function (Blueprint $table) {
            $table->id();
            $table->string("name_ar");
            $table->string("name_en");
            $table->unsignedBigInteger("product_id")->foreign("id")->references("id")->on("products")->cascadeOnDelete();
            $table->unsignedBigInteger("category_id")->foreign("id")->references("id")->on("categories")->cascadeOnDelete();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attributes');
    }
};
