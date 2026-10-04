<?php

namespace App\Http\Controllers;

use App\Services\LandingPageService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FAQsController extends Controller
{
    public function __construct(
        private readonly LandingPageService $landingPageService
    ) {}

    public function faqs(): Response
    {
        return Inertia::render(
            'faqs/index',
            [
                'faqItems' => $this->landingPageService->getFaqItems(),
                'whatsappUrl' => $this->landingPageService->getWhatsappUrl(),
            ]
        );
    }
}
