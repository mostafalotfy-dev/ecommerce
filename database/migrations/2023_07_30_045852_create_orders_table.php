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

            $table->unsignedBigInteger("customer_id")->nullable()->foreignIdFor(User::class)->refrences("id")->on("users")->constrained()->cascadeOnDelete();
            $table->bigInteger("quantity")->default(0);
            $table->unsignedBigInteger("status_id")->foreignIdFor(OrderStatus::class)->refrences("id")->on("order_status")->constrained()->cascadeOnDelete();

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
