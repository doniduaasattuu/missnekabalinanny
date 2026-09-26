<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'title',
    'description',
    'icon',
    'sort_order',
    'is_active',
])]
class AboutFeature extends Model
{
    protected function casts(): array
    {
        return [
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
