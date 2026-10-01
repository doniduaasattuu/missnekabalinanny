<?php

namespace App\Http\Controllers;

use App\Models\AboutFeature;
use App\Models\CoverageArea;
use App\Models\SiteSetting;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('about/index', [
            'whatsappUrl' => SiteSetting::where('key', 'whatsapp_url')
                ->value('value'),

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
