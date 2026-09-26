<?php

namespace App\Services;

use App\Models\AboutFeature;
use App\Models\CoverageArea;
use App\Models\FaqItem;
use App\Models\GalleryItem;
use App\Models\HeroSlide;
use App\Models\NavigationLink;
use App\Models\Service;
use App\Models\SiteSetting;
use App\Models\SocialLink;
use App\Models\Testimonial;
use App\Models\TrustBadge;

class LandingPageService
{
    public function getData(): array
    {
        return [
            'whatsappUrl' => $this->setting('whatsapp_url'),
            'navigationLinks' => $this->getNavigationLinks(),
            'heroSlides' => $this->getHeroSlides(),
            'trustBadges' => $this->getTrustBadges(),
            'services' => $this->getServices(),
            'servicesBanner' => $this->getServicesBanner(),
            'galleryItems' => $this->getGalleryItems(),
            'testimonials' => $this->getTestimonials(),
            'about' => [
                'image' => $this->setting('about_image'),
                'imageAlt' => $this->setting('about_image_alt'),
                'video' => null,
                'videoAlt' => null,
                'paragraphs' => $this->getAboutParagraphs(),
                'features' => $this->getAboutFeatures(),
                'socialLinks' => $this->getSocialLinks(),
                'quote' => $this->setting('about_quote'),
                'quoteAuthor' => $this->setting('about_quote_author'),
            ],

            'aboutVideo' => $this->getAboutVideo(),

            'faqItems' => $this->getFaqItems(),
            'footerContact' => $this->getFooterContact(),
            'coverageAreas' => $this->getCoverageAreas(),
        ];
    }

    private function settings()
    {
        return SiteSetting::query()
            ->pluck('value', 'key');
    }

    private function setting(string $key, mixed $default = null): mixed
    {
        return $this->settings()->get($key, $default);
    }

    private function getNavigationLinks()
    {
        return NavigationLink::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'label',
                'href',
            ]);
    }

    private function getHeroSlides()
    {
        return HeroSlide::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'image',
                'eyebrow',
                'title',
                'accent',
                'description',
                'image_alt',
            ])
            ->map(fn(HeroSlide $slide) => [
                'id' => $slide->id,
                'image' => $slide->image,
                'eyebrow' => $slide->eyebrow,
                'title' => $slide->title,
                'accent' => $slide->accent,
                'description' => $slide->description,
                'imageAlt' => $slide->image_alt,
            ])
            ->values();
    }

    private function getTrustBadges()
    {
        return TrustBadge::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'value',
                'label',
                'icon',
            ]);
    }

    private function getServices()
    {
        return Service::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'title',
                'label',
                'href',
                'description',
                'features',
                'icon',
            ]);
    }

    private function getServicesBanner(): array
    {
        return [
            'title' => $this->setting('services_banner_title'),
            'description' => $this->setting('services_banner_description'),
        ];
    }

    private function getGalleryItems()
    {
        return GalleryItem::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'image',
                'title',
                'description',
                'image_alt',
            ])
            ->map(fn(GalleryItem $item) => [
                'id' => $item->id,
                'image' => $item->image,
                'title' => $item->title,
                'description' => $item->description,
                'imageAlt' => $item->image_alt,
            ])
            ->values();
    }

    private function getTestimonials()
    {
        return Testimonial::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'name',
                'country',
                'quote',
                'avatar',
                'avatar_alt',
                'rating',
            ])
            ->map(fn(Testimonial $testimonial) => [
                'id' => $testimonial->id,
                'name' => $testimonial->name,
                'country' => $testimonial->country,
                'quote' => $testimonial->quote,
                'avatar' => $testimonial->avatar,
                'avatarAlt' => $testimonial->avatar_alt,
                'rating' => $testimonial->rating,
            ])
            ->values();
    }

    private function getAboutParagraphs(): array
    {
        return [
            $this->setting('about_paragraph_1'),
            $this->setting('about_paragraph_2'),
        ];
    }

    private function getAboutFeatures()
    {
        return AboutFeature::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'title',
                'description',
                'icon',
            ]);
    }

    private function getSocialLinks()
    {
        return SocialLink::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'platform',
                'label',
                'url',
            ]);
    }

    private function getFaqItems()
    {
        return FaqItem::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'question',
                'answer',
            ]);
    }

    private function getFooterServices()
    {
        return Service::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'title',
            ])
            ->map(fn(Service $service) => [
                'id' => $service->id,
                'label' => $service->title,
                'href' => '#services',
            ])
            ->values();
    }

    private function getFooterContact(): array
    {
        return [
            'whatsapp' => $this->setting('whatsapp'),
            'whatsappUrl' => $this->setting('whatsapp_url'),
            'email' => $this->setting('email'),
            'location' => $this->setting('location'),
        ];
    }

    private function getCoverageAreas(): array
    {
        return CoverageArea::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->pluck('name')
            ->values()
            ->all();
    }

    private function getAboutVideo()
    {
        return [
            'id' => $this->setting('about_video_id'),
            'url' => $this->setting('about_video_url'),
            'thumbnail_url' => $this->setting('about_video_thumbnail_url'),
            'title' => $this->setting('about_video_title'),
            'label' => $this->setting('about_video_label'),
            'is_active' => $this->setting('about_video_is_active'),
        ];
    }
}
