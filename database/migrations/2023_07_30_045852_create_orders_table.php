<?php

use App\Models\OrderStatus;
use App\Models\Product;
use App\Models\User;
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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("product_id")->foreignIdFor(Product::class)->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger("order_status_id")->foreignIdFor(OrderStatus::class)->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger("customer_id")->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
            $table->bigInteger("quantity")->default(0);
            
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
