<?php

use App\Models\OrderStatus;
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
        Schema::create('products_offers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("product_id")->foreignIdFor(OrderStatus::class)->refrences("id")->on("order_status")->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger("offer_id")->foreignIdFor(OrderStatus::class)->refrences("id")->on("order_status")->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products_offers');
    }
};
