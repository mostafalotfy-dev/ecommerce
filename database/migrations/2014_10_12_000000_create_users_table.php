<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('mobile')->nullable()->unique();
            $table->string("mobile_code")->nullable()->comment("country_code for mobile");
            $table->string("email")->unique();
            $table->string("profile_image")->default("image.png");
            $table->string("dob")->nullable()->comment("date of birth");
            $table->string("password")->nullable();
            $table->boolean("is_active")->default(0);
            $table->string("ip_address");
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
