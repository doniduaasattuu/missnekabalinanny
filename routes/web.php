<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\FAQsController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TestimonyController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LandingPageController::class, 'index'])->name('home');

Route::get('/gallery', [GalleryController::class, 'gallery'])->name('gallery');
Route::get('/about', [AboutController::class, 'about'])->name('about');
Route::get('/testimonials', [TestimonyController::class, 'testimonials'])->name('testimonials');
Route::get('/services', [ServiceController::class, 'services'])->name('services');
Route::get('/faqs', [FAQsController::class, 'faqs'])->name('faqs');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';
