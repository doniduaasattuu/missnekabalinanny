<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use App\Services\LandingPageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class TestimonyController extends Controller
{
    public function __construct(
        private readonly LandingPageService $landingPageService
    ) {}

    public function testimonials(): Response
    {
        return Inertia::render('testimonials/index', [
            'testimonials' => Testimonial::query()->get([
                'id',
                'image',
                'image_alt',
                'sort_order',
                'is_active',
            ])
                ->map(fn(Testimonial $item) => [
                    'id' => $item->id,
                    'image' => Storage::url($item->image),
                    'image_alt' => $item->image_alt,
                    'sort_order' => $item->sort_order,
                    'is_active' => $item->is_active,
                ])
                ->values(),
            'whatsappUrl' => $this->landingPageService->getWhatsappUrl(),
            // footerServices: FooterService[];
            // footerContact: FooterContact;
            // coverageAreas: string[];
        ]);
    }
}
