<?php

namespace App\Http\Controllers;

use App\Models\AboutFeature;
use App\Models\CoverageArea;
use App\Models\SiteSetting;
use App\Services\LandingPageService;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    public function __construct(
        private readonly LandingPageService $landingPageService
    ) {}

    public function index(): Response
    {
        return Inertia::render('about/index', [
            'whatsappUrl' => $this->landingPageService->getWhatsappUrl(),

            'aboutImage' => SiteSetting::where('key', 'about_image')
                ->value('value'),

            'aboutImageAlt' => SiteSetting::where('key', 'about_image_alt')
                ->value('value'),

            'aboutFeatures' => AboutFeature::query()
                ->where('is_active', true)
                ->orderBy('sort_order')
                ->get([
                    'id',
                    'title',
                    'description',
                    'icon',
                ]),

            'aboutQuote' => SiteSetting::where('key', 'about_quote')
                ->value('value'),

            'aboutQuoteAuthor' => SiteSetting::where('key', 'about_quote_author')
                ->value('value'),

            'coverageAreas' => CoverageArea::query()
                ->where('is_active', true)
                ->orderBy('sort_order')
                ->pluck('name'),
        ]);
    }
}
