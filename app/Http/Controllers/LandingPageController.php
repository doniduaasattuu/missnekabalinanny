<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Services\LandingPageService;

class LandingPageController extends Controller
{
    public function __construct(
        private readonly LandingPageService $landingPageService
    ) {}

    public function index(): Response
    {
        return Inertia::render(
            'landing-page',
            $this->landingPageService->getData(),
        );
    }
}
