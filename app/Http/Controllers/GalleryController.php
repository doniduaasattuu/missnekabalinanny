<?php

namespace App\Http\Controllers;

use App\Services\GalleryService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    public function __construct(
        private readonly GalleryService $galleryService
    ) {}

    public function gallery(): Response
    {
        return Inertia::render(
            'gallery/index',
            $this->galleryService->getData()
        );
    }
}
