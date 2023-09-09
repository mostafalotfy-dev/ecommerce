<?php

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
        Schema::create('product_metas', function (Blueprint $table) {
            $table->id();
            $table->string('key');
            $table->string('type');
            $table->unsignedBigInteger('product_id')->foreignIdFor(Product::class)->refrences('id')->on('products')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_metas');
    }
};
