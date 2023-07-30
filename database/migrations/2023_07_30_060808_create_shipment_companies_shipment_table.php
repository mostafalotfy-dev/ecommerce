<?php

use App\Models\ShipmentCompany;
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
        Schema::create('shipment_companies_shipment', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("shipment_id")->foreignIdFor(Shipment::class)->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger("shipment_company_id")->foreignIdFor(ShipmentCompany::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipment_companies_shipment');
    }
};
