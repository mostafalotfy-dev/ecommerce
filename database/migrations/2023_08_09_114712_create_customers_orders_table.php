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
        Schema::create('customers_orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("customer_id")->foriegn("id")->references("id")->on("users")->cascadeOnDelete();
            $table->unsignedBigInteger("order_id")->foriegn("id")->references("id")->on("orders")->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers_orders');
    }
};
