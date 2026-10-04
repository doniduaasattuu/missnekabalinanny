<?php

namespace App\Http\Controllers;

use App\Services\LandingPageService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    public function __construct(
        private readonly LandingPageService $landingPageService
    ) {}

    public function services(): Response
    {
        return Inertia::render('services/index', [
            'services' => $this->landingPageService->getServices(),
            'whatsappUrl' => $this->landingPageService->getWhatsappUrl(),
        ]);
    }
}
