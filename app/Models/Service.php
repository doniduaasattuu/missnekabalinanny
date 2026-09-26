<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'title',
    'description',
    'label',
    'href',
    'features',
    'icon',
    'sort_order',
    'is_active',
])]
class Service extends Model
{
    protected function casts(): array
    {
        return [
            'features' => 'array',
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
