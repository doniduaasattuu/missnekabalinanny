<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'image',
    'title',
    'description',
    'image_alt',
    'sort_order',
    'is_active',
])]
class GalleryItem extends Model
{
    protected function casts(): array
    {
        return [
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
