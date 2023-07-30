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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name_en")->unique();
            $table->string("name_ar")->unique();
            $table->integer("price")->default(0);
            $table->text("description")->default("");
            $table->integer("discount")->default(0);
            $table->boolean("in_stock")->default(1);
            $table->integer("quantity")->default(0);
            $table->text("keywords");
            
            $table->integer("views")->default(0);
            
            $table->timestamps();
            $table->engine = "myisam";
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
