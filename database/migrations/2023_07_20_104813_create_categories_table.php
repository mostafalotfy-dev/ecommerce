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
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name_en')->unique();

            $table->string('name_ar')->unique();
            $table->integer('oldIndex')->default(0);
            $table->integer('newIndex')->default(0);
            $table->string('draggable_class_name')->default('.item');

            $table->unsignedBigInteger('category_id')->foreign('id')->references('id')->on('categories')->cascadeOnDelete()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
