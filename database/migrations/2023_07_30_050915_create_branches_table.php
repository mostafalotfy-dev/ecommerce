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
        Schema::create('branches', function (Blueprint $table) {
            $table->id();
            $table->string('name_en');
            $table->string('name_ar');

            $table->boolean('status')->default(0);
            $table->text('description_en');
            $table->text('description_ar');
            $table->datetime('open_time');
            $table->datetime('close_time');
            $table->tinyInteger('is_open')->default(0);
            $table->tinyInteger('is_cod')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('branches');
    }
};
