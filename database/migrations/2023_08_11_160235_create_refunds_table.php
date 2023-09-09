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
        Schema::create('refunds', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id')->foreign('id')->references('id')->on('orders')->cascadeOnDelete();
            $table->unsignedDecimal('refunded')->comment('the amount of money refunded');
            $table->unsignedBigInteger('customer_id')->foreign('id')->references('id')->on('customers')->cascadeOnDelete();
            $table->timestamp('refunded_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('refunds');
    }
};
