<?php

namespace App\Providers;

use App\Services\LandingPageService;
use App\Services\NavigationService;
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'brand' =>  app(LandingPageService::class)->getBrand(),
            'navigationLinks' => fn() => app(NavigationService::class)->getLinks(),
            'whatsappUrl' => fn() => app(LandingPageService::class)->getWhatsappUrl(),
            'socialLinks' => fn() => app(LandingPageService::class)->getSocialLinks(),
            'services' => fn() => app(LandingPageService::class)->getServices(),
            'footerContact' => fn() => app(LandingPageService::class)->getFooterContact(),
            'coverageAreas' => fn() => app(LandingPageService::class)->getCoverageAreas(),
        ]);
        $this->configureDefaults();
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(
            fn(): ?Password => app()->isProduction()
                ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
                : null,
        );
    }
}
