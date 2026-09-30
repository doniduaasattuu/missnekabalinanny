<?php

namespace App\Services;

use App\Models\NavigationLink;

class NavigationService
{
    public function getLinks()
    {
        return NavigationLink::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'label',
                'href',
                'url',
                'is_direct'
            ]);
    }
}
