<?php

use App\Models\Order;
use App\Models\Shipment;
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
        Schema::create('order_shipments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("shipment_id")->foreignIdFor(Shipment::class)->refrences("id")->on("shipments")->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger("order_id")->foreignIdFor(Order::class)->refrences("id")->on("orders")->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_shipments');
    }
};
