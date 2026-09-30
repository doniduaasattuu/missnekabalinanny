<?php

namespace App\Http\Controllers;

use App\Models\AboutFeature;
use App\Models\CoverageArea;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('about/index', [
            'aboutFeatures' => AboutFeature::all(),
            'coverageAreas' => CoverageArea::all(),
        ]);
    }
}
