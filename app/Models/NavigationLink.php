<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'label',
    'href',
    'sort_order',
    'is_active',
])]
class NavigationLink extends Model
{
    protected function casts(): array
    {
        return [
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
