<?php

namespace App\Services;

use App\Models\GalleryItem;
use Illuminate\Support\Facades\Storage;

class GalleryService
{
    public function getData(): array
    {
        return [
            'galleryItems' => $this->getGalleryItems(),
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
                'image' => $this->resolveImageUrl($item->image),
                'title' => $item->title,
                'description' => $item->description,
                'imageAlt' => $item->image_alt,
            ])
            ->values();
    }

    private function resolveImageUrl(string $image): string
    {
        if (filter_var($image, FILTER_VALIDATE_URL)) {
            return $image;
        }

        return Storage::url($image);
    }
}
