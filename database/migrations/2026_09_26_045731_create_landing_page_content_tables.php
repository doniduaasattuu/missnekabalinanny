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
        /*
        |--------------------------------------------------------------------------
        | Site Settings
        |--------------------------------------------------------------------------
        */

        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();

            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->string('type')->default('string');

            $table->timestamps();
        });

        /*
        |--------------------------------------------------------------------------
        | Navigation Links
        |--------------------------------------------------------------------------
        */

        Schema::create('navigation_links', function (Blueprint $table) {
            $table->id();

            $table->string('label');
            $table->string('href');

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });

        /*
        |--------------------------------------------------------------------------
        | Hero Slides
        |--------------------------------------------------------------------------
        */

        Schema::create('hero_slides', function (Blueprint $table) {
            $table->id();

            $table->string('eyebrow')->nullable();
            $table->string('title');
            $table->string('accent')->nullable();
            $table->text('description')->nullable();

            $table->string('image');
            $table->string('image_alt')->nullable();

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });

        /*
        |--------------------------------------------------------------------------
        | Trust Badges
        |--------------------------------------------------------------------------
        */

        Schema::create('trust_badges', function (Blueprint $table) {
            $table->id();

            $table->string('value');
            $table->string('label');
            $table->string('icon');

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });

        /*
        |--------------------------------------------------------------------------
        | Services
        |--------------------------------------------------------------------------
        */

        Schema::create('services', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->text('description')->nullable();

            $table->string('label');
            $table->text('href')->nullable();

            /*
             * Example:
             * [
             *     "Villa & hotel childcare",
             *     "Playtime & activities",
             *     "Meal & nap assistance"
             * ]
             */
            $table->json('features')->nullable();

            /*
             * Example:
             * sun
             * moon
             * heart
             * map-pin
             */
            $table->string('icon');

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });

        /*
        |--------------------------------------------------------------------------
        | Gallery Items
        |--------------------------------------------------------------------------
        */

        Schema::create('gallery_items', function (Blueprint $table) {
            $table->id();

            $table->string('image');
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('image_alt')->nullable();

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });

        /*
        |--------------------------------------------------------------------------
        | Testimonials
        |--------------------------------------------------------------------------
        */

        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('country');
            $table->text('quote');

            $table->string('avatar')->nullable();
            $table->string('avatar_alt')->nullable();

            $table->unsignedTinyInteger('rating')->default(5);

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });

        /*
        |--------------------------------------------------------------------------
        | About Features
        |--------------------------------------------------------------------------
        */

        Schema::create('about_features', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->text('description')->nullable();
            $table->string('icon');

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });

        /*
        |--------------------------------------------------------------------------
        | Social Links
        |--------------------------------------------------------------------------
        */

        Schema::create('social_links', function (Blueprint $table) {
            $table->id();

            /*
             * instagram
             * facebook
             * tiktok
             * x
             */
            $table->string('platform');
            $table->string('label');
            $table->string('url');

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });

        /*
        |--------------------------------------------------------------------------
        | FAQ
        |--------------------------------------------------------------------------
        */

        Schema::create('faq_items', function (Blueprint $table) {
            $table->id();

            $table->string('question');
            $table->text('answer');

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });

        /*
        |--------------------------------------------------------------------------
        | Coverage Areas
        |--------------------------------------------------------------------------
        */

        Schema::create('coverage_areas', function (Blueprint $table) {
            $table->id();

            $table->string('name');

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coverage_areas');
        Schema::dropIfExists('faq_items');
        Schema::dropIfExists('social_links');
        Schema::dropIfExists('about_features');
        Schema::dropIfExists('testimonials');
        Schema::dropIfExists('gallery_items');
        Schema::dropIfExists('services');
        Schema::dropIfExists('trust_badges');
        Schema::dropIfExists('hero_slides');
        Schema::dropIfExists('navigation_links');
        Schema::dropIfExists('site_settings');
    }
};
