<?php

use App\Models\Branch;
use App\Models\Brand;
use App\Models\User;
use App\Models\Product;
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
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("product_id")->foreignIdFor(Product::class)->refrences("id")->on("products")->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger("user_id")->foreignIdFor(User::class)->refrences("id")->on("users")->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger("branch_id")->foreignIdFor(Branch::class)->refrences("id")->on("branches")->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger("brand_id")->foreignIdFor(Brand::class)->refrences("id")->on("brands")->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
