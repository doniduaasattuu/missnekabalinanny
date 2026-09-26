<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'eyebrow',
    'title',
    'accent',
    'description',
    'image',
    'image_alt',
    'sort_order',
    'is_active',
])]
class HeroSlide extends Model
{
    protected function casts(): array
    {
        return [
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
