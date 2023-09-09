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
        Schema::create('address', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->text('street_address');
            $table->string('country_id')->foriegn('id')->references('id')->on('countries')->cascadeOnDelete();
            $table->string('state_id')->foriegn('id')->references('id')->on('cities')->cascadeOnDelete();
            $table->string('town');
            $table->string('zip_code')->comment('Postal Code');
            $table->string('phone_number');
            $table->tinyInteger('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('address');
    }
};
