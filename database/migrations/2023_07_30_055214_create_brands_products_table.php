<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Product;
use App\Models\Brand;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('brands_products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("brand_id")->foreignIdFor(Brand::class)->refrences("id")->on("brands")->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger("product_id")->foreignIdFor(Product::class)->refrences("id")->on("products")->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('brands_products');
    }
};
