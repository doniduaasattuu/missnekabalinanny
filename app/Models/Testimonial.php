<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'name',
    'country',
    'quote',
    'avatar',
    'avatar_alt',
    'rating',
    'sort_order',
    'is_active',
])]
class Testimonial extends Model
{
    protected function casts(): array
    {
        return [
            'rating' => 'integer',
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
