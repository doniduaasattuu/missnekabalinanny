<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LandingPageSeeder extends Seeder
{
    public function run(): void
    {
        /*
        |--------------------------------------------------------------------------
        | Site Settings
        |--------------------------------------------------------------------------
        */

        $siteSettings = [
            [
                'key' => 'brand_first_name',
                'value' => 'Miss Neka',
                'type' => 'string',
            ],
            [
                'key' => 'brand_last_name',
                'value' => 'Bali Nanny',
                'type' => 'string',
            ],
            [
                'key' => 'brand_subtitle',
                'value' => 'Premium Childcare in Bali',
                'type' => 'string',
            ],
            [
                'key' => 'brand_description',
                'value' => 'Professional, caring childcare for families visiting Bali. Creating safe and memorable experiences for your little ones while you enjoy everything the Island of the Gods has to offer.',
                'type' => 'text',
            ],
            [
                'key' => 'whatsapp_number',
                'value' => '+6282323132574',
                'type' => 'string',
            ],
            [
                'key' => 'whatsapp_message',
                'value' => 'Hello%20Miss%20Neka%2C%0A%0AI%20would%20like%20to%20enquire%20about%20booking%20a%20nanny.%0A%0ADate%3A%20%5BDate%5D%0ALocation%3A%20%5BVilla%20%2F%20Hotel%20%2F%20Area%20in%20Bali%5D%0ANumber%20of%20children%3A%20%5BNumber%5D%0AChildren%27s%20ages%3A%20%5BAges%5D%0AService%20needed%3A%20%5BService%5D%0A%0ACould%20you%20please%20share%20your%20availability%20and%20rates%3F%0A%0AThank%20you!',
                'type' => 'string',
            ],
            [
                'key' => 'email',
                'value' => 'missnekabalinanny@gmail.com',
                'type' => 'string',
            ],
            [
                'key' => 'location',
                'value' => 'Bali, Indonesia',
                'type' => 'string',
            ],
            [
                'key' => 'about_image',
                'value' => 'images/about-image.jpg',
                'type' => 'string',
            ],
            [
                'key' => 'about_image_alt',
                'value' => 'Nanny caring children like family',
                'type' => 'string',
            ],
            [
                'key' => 'about_quote',
                'value' => 'Caring for little ones. Supporting families. Creating happy memories in Bali.',
                'type' => 'text',
            ],
            [
                'key' => 'about_quote_author',
                'value' => 'Miss Neka',
                'type' => 'string',
            ],
            [
                'key' => 'services_banner_title',
                'value' => 'Not sure which service is right for your family?',
                'type' => 'string',
            ],
            [
                'key' => 'services_banner_description',
                'value' => 'Tell us about your plans and we will help you find the childcare arrangement that fits your Bali holiday.',
                'type' => 'text',
            ],
            [
                'key' => 'copyright_name',
                'value' => 'Miss Neka Nanny Bali',
                'type' => 'string',
            ],
            [
                'key' => 'privacy_url',
                'value' => '#',
                'type' => 'string',
            ],
            [
                'key' => 'terms_url',
                'value' => '#',
                'type' => 'string',
            ],
            [
                'key' => 'about_paragraph_1',
                'value' => "Miss Neka Bali Nanny is a professional childcare service with more than 10 years of experience caring for children.",
                'type' => 'string',
            ],
            [
                'key' => 'about_paragraph_2',
                'value' => "With 8 years of overseas experience and 1 years as a Kids Club professional in Bali, Miss Neka brings experience, patience, energy, and genuine care to every child she looks after.",
                'type' => 'string',
            ],

            // VIDEO
            [
                'key' => 'about_video_id',
                'value' => 'q2RXuFm6xBA',
                'type' => 'string',
            ],
            [
                'key' => 'about_video_url',
                'value' => 'https://www.youtube.com/watch?v=q2RXuFm6xBA',
                'type' => 'string',
            ],
            [
                'key' => 'about_video_thumbnail_url',
                'value' => 'https://img.youtube.com/vi/q2RXuFm6xBA/maxresdefault.jpg',
                'type' => 'string',
            ],
            [
                'key' => 'about_video_title',
                'value' => 'Meet Your Nanny',
                'type' => 'string',
            ],
            [
                'key' => 'about_video_label',
                'value' => 'English Communication',
                'type' => 'string',
            ],
            [
                'key' => 'about_video_is_active',
                'value' => '1',
                'type' => 'boolean',
            ],
            [
                'key' => 'testimonials_eyebrow',
                'value' => 'Testimonials',
                'type' => 'string',
            ],
            [
                'key' => 'testimonials_title',
                'value' => 'Because Every Family Deserves',
                'type' => 'string',
            ],
            [
                'key' => 'testimonials_highlighted_word',
                'value' => 'Peace of Mind',
                'type' => 'string',
            ],
            [
                'key' => 'testimonials_label',
                'value' => 'Nothing makes us happier than knowing families feel comfortable, confident, and cared for. Read the experiences and heartfelt words from the families we have been honoured to serve.',
                'type' => 'string',
            ],

            // Gallery
            [
                'key' => 'gallery_video_url',
                'value' => 'https://www.youtube.com/shorts/68nkn5rxST4', // Masukkan URL YouTube Shorts
                'type' => 'string',
            ],
            [
                'key' => 'gallery_video_thumbnail_url',
                'value' => null, // Opsional: URL thumbnail khusus
                'type' => 'string',
            ],
            [
                'key' => 'gallery_video_title',
                'value' => 'A Glimpse of Life with Miss Neka',
                'type' => 'string',
            ],
        ];

        foreach ($siteSettings as $setting) {
            DB::table('site_settings')->updateOrInsert(
                ['key' => $setting['key']],
                [
                    'value' => $setting['value'],
                    'type' => $setting['type'],
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Navigation Links
        |--------------------------------------------------------------------------
        */

        $navigationLinks = [
            [
                'label' => 'Home',
                'href' => '#home',
                'url' => '/',
                'is_direct' => true,
                'sort_order' => 1,
            ],
            [
                'label' => 'About Us',
                'href' => '#about',
                'url' => '/about',
                'is_direct' => true,
                'sort_order' => 2,
            ],
            [
                'label' => 'Services',
                'href' => '#services',
                'url' => '/services',
                'is_direct' => true,
                'sort_order' => 3,
            ],
            [
                'label' => 'Gallery',
                'href' => '#gallery',
                'url' => '/gallery',
                'is_direct' => true,
                'sort_order' => 4,
            ],
            [
                'label' => 'Testimonials',
                'href' => '#testimonials',
                'url' => '/testimonials',
                'is_direct' => true,
                'sort_order' => 5,
            ],
            [
                'label' => 'FAQ',
                'href' => '#faq',
                'url' => '/faqs',
                'is_direct' => true,
                'sort_order' => 6,
            ],
        ];

        foreach ($navigationLinks as $link) {
            DB::table('navigation_links')->updateOrInsert(
                ['href' => $link['href']],
                [
                    'label' => $link['label'],
                    'url' => $link['url'],
                    'sort_order' => $link['sort_order'],
                    'is_direct' => $link['is_direct'],
                    'is_active' => true,
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Hero Slides
        |--------------------------------------------------------------------------
        */

        $heroSlides = [
            [
                'eyebrow' => 'CARING • PROFESSIONAL • TRUSTED',
                'title' => 'More Than a Nanny.',
                'accent' => 'A Peace of Mind.',
                'description' => 'Premium childcare support for families who want to experience Bali with confidence, comfort, and complete peace of mind.',
                'image' => '/images/landing-page/hero-1.jpg',
                'image_alt' => 'Happy children enjoying a family moment',
                'sort_order' => 1,
            ],
            [
                'eyebrow' => 'YOUR FAMILY, OUR CARE',
                'title' => 'Exceptional Care,',
                'accent' => 'Wherever Bali Takes You.',
                'description' => 'From your private villa to a beach club, resort, wedding, or family adventure — your little ones are always in caring hands.',
                'image' => '/images/landing-page/hero-2.jpg',
                'image_alt' => 'Family enjoying quality time together',
                'sort_order' => 2,
            ],
            [
                'eyebrow' => 'BALI FAMILY EXPERIENCES',
                'title' => 'Explore Bali.',
                'accent' => "We'll Care for the Little Ones.",
                'description' => "Enjoy your holiday, your dinner, or your special occasion while our professional nanny gives your children attentive, loving care.",
                'image' => '/images/landing-page/hero-3.jpg',
                'image_alt' => 'Children enjoying an outdoor activity',
                'sort_order' => 3,
            ],
        ];

        foreach ($heroSlides as $slide) {
            DB::table('hero_slides')->updateOrInsert(
                ['sort_order' => $slide['sort_order']],
                [
                    ...$slide,
                    'is_active' => true,
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Trust Badges
        |--------------------------------------------------------------------------
        */

        $trustBadges = [
            [
                'value' => '10+',
                'label' => 'Years Experience',
                'icon' => 'shield-check',
                'sort_order' => 1,
            ],
            [
                'value' => 'Flexible',
                'label' => 'Day, Evening & Special Events',
                'icon' => 'heart-handshake',
                'sort_order' => 2,
            ],
            [
                'value' => '150+',
                'label' => 'Happy Families',
                'icon' => 'users',
                'sort_order' => 3,
            ],
            [
                'value' => '100%',
                'label' => 'Background Checked',
                'icon' => 'clock',
                'sort_order' => 4,
            ],
        ];

        foreach ($trustBadges as $badge) {
            DB::table('trust_badges')->updateOrInsert(
                ['sort_order' => $badge['sort_order']],
                [
                    ...$badge,
                    'is_active' => true,
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Services
        |--------------------------------------------------------------------------
        */

        $services = [
            [
                'title' => 'Hotel & Villa Babysitting',
                'description' => 'Professional childcare at your hotel or villa, giving parents peace of mind while enjoying their holiday.',
                'label' => 'Hotel & Villa Babysitting',
                'href' => '#services',
                'features' => [
                    'Specially trained babysitters',
                    'Flexible scheduling to fit your plans',
                    'Age-appropriate activities & play',
                    'Meal & nap assistance',
                ],
                'icon' => 'hotel',
                'sort_order' => 1,
            ],
            [
                'title' => 'Wedding & Event Babysitting',
                'description' => 'Dedicated childcare during weddings, celebrations, and special events, so parents can enjoy every moment.',
                'label' => 'Wedding & Event Babysitting',
                'href' => '#services',
                'features' => [
                    'Flexible hours to match your event',
                    'Experienced in event childcare',
                    'Supervised play & entertainment',
                    'Meal & bedtime routines',
                ],
                'icon' => 'gem',
                'sort_order' => 2,
            ],
            [
                'title' => 'Evening & Night Babysitting',
                'description' => 'Flexible evening and night childcare for parents who would like some private time or a relaxing night out.',
                'label' => 'Evening & Night Babysitting',
                'href' => '#services',
                'features' => [
                    'Dinner & bedtime routine',
                    'Children’s entertainment',
                    'Bedtime supervision',
                    'Late-night childcare',
                ],
                'icon' => 'moon',
                'sort_order' => 3,
            ],
            [
                'title' => 'Kids Entertainment & Activities',
                'description' => 'Flexible evening and night childcare for parents who would like some private time or a relaxing night out.',
                'label' => 'Kids Entertainment & Activities',
                'href' => '#services',
                'features' => [
                    'Creative arts & crafts activities',
                    'Imaginative play & games',
                    'Outdoor exploration & discovery',
                    'Music, dance & movement activities',
                ],
                'icon' => 'drama',
                'sort_order' => 4,
            ],
            [
                'title' => 'Poolside Childcare',
                'description' => 'Attentive supervision and fun companionship while children enjoy swimming and pool activities.',
                'label' => 'Poolside Childcare',
                'href' => '#services',
                'features' => [
                    'Supervised pool play & safety',
                    'Age-appropriate water activities',
                    'Fun games & entertainment',
                    'Meal & hydration support',
                ],
                'icon' => 'wavesladder',
                'sort_order' => 5,
            ],
            [
                'title' => 'Arts & Crafts',
                'description' => 'Attentive supervision and fun companionship while children enjoy swimming and pool activities.',
                'label' => 'Arts & Crafts',
                'href' => '#services',
                'features' => [
                    'Creative arts & crafts activities',
                    'Imagination & expression',
                    'Fine motor skill development',
                    'Collaborative projects',
                ],
                'icon' => 'paintbrush',
                'sort_order' => 6,
            ]
        ];


        foreach ($services as $service) {
            DB::table('services')->updateOrInsert(
                ['title' => $service['title']],
                [
                    'label' => $service['label'],
                    'href' => $service['href'],
                    'description' => $service['description'],
                    'features' => json_encode($service['features']),
                    'icon' => $service['icon'],
                    'sort_order' => $service['sort_order'],
                    'is_active' => true,
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Gallery
        |--------------------------------------------------------------------------
        */

        $galleryItems = [
            [
                'image' => 'images/gallery/gallery-klkzL6LZ.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Child enjoying a creative activity',
                'sort_order' => 1,
            ],
            [
                'image' => 'images/gallery/gallery-A94Xkc2Z.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Child enjoying a creative activity',
                'sort_order' => 2,
            ],
            [
                'image' => 'images/gallery/gallery-3rmRs3fU.jpg',
                'title' => 'Story Telling Time',
                'description' => 'Imaginative play & learning through stories',
                'image_alt' => 'Child enjoying a story time activity',
                'sort_order' => 3,
            ],
            [
                'image' => 'images/gallery/gallery-KtjVfv3P.jpg',
                'title' => 'Curious Minds',
                'description' => 'Learning through everyday experiences',
                'image_alt' => 'Child learning through outdoor activities',
                'sort_order' => 4,
            ],
            [
                'image' => 'images/gallery/gallery-RzF739LH.jpg',
                'title' => 'Little Explorers',
                'description' => 'Outdoor discovery & meaningful play',
                'image_alt' => 'Children exploring outdoors',
                'sort_order' => 5,
            ],
            [
                'image' => 'images/gallery/gallery-XrjV6wGZ.jpg',
                'title' => 'Yoga & Mindfulness',
                'description' => 'Calm, focused & mindful moments',
                'image_alt' => 'Children practicing yoga and mindfulness',
                'sort_order' => 6,
            ],
            [
                'image' => 'images/gallery/gallery-XkGzIi4E.jpg',
                'title' => 'Crative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 7,
            ],
            [
                'image' => 'images/gallery/gallery-EMydNsVu.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 8,
            ],
            [
                'image' => 'images/gallery/gallery-0DNb9ufw.jpg',
                'title' => 'Music Concert',
                'description' => 'Making beautiful Bali memories',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 9,
            ],
            [
                'image' => 'images/gallery/gallery-aoLR5LU3.jpg',
                'title' => 'Traditional Dance',
                'description' => 'Happy to learn new dance',
                'image_alt' => 'Learning traditional Balinese dance',
                'sort_order' => 10,
            ],
            [
                'image' => 'images/gallery/gallery-iZXw0XK3.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 11,
            ],
            [
                'image' => 'images/gallery/gallery-LX3qOJTC.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 12,
            ],
            [
                'image' => 'images/gallery/gallery-NjUNW2hQ.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 13,
            ],
            [
                'image' => 'images/gallery/gallery-P5by6ljK.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 14,
            ],
            [
                'image' => 'images/gallery/gallery-IxG2iDub.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 15,
            ],
            [
                'image' => 'images/gallery/gallery-Wt1O3zVc.jpg',
                'title' => 'Lovely Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 16,
            ],
            [
                'image' => 'images/gallery/gallery-qaNJQuJc.jpg',
                'title' => 'Fun & Friendship',
                'description' => 'Happy, safe & memorable experiences',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 17,
            ],
            [
                'image' => 'images/gallery/gallery-YOaXRc3H.jpg',
                'title' => 'Coloring & Creativity',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 18,
            ],
            [
                'image' => 'images/gallery/gallery-PmydzECW.jpg',
                'title' => 'Coloring & Creativity',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 19,
            ],
            [
                'image' => 'images/gallery/gallery-xIfStIDz.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 20,
            ],
            [
                'image' => 'images/gallery/gallery-pSXYBv5y.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 21,
            ],
            [
                'image' => 'images/gallery/gallery-ume0BXlI.jpg',
                'title' => 'Balinese customs and traditions',
                'description' => 'Learning about Balinese culture and traditions',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 22,
            ],
            [
                'image' => 'images/gallery/gallery-vRKibt9p.jpg',
                'title' => 'Happy Family',
                'description' => 'Happy family enjoying Bali holiday together',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 23,
            ],
            [
                'image' => 'images/gallery/gallery-pjdtDJxT.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 24,
            ],
            [
                'image' => 'images/gallery/gallery-sGQafrOF.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 25,
            ],
            [
                'image' => 'images/gallery/gallery-A6cGotzo.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 26,
            ],
            [
                'image' => 'images/gallery/gallery-yBwgpm3M.jpg',
                'title' => 'Cooking & Creativity',
                'description' => 'Fun, safe & educational cooking activities',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 27,
            ],
            [
                'image' => 'images/gallery/gallery-IxpIRumM.jpg',
                'title' => 'Chilling & Relaxing',
                'description' => 'Chilling, relaxing & enjoying the moment',
                'image_alt' => 'Happy children chilling together',
                'sort_order' => 28,
            ],
            [
                'image' => 'images/gallery/gallery-Km0LWTvt.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 29,
            ],
            [
                'image' => 'images/gallery/gallery-rA4hgPVx.jpg',
                'title' => 'Balinese customs and traditions',
                'description' => 'Learning about Balinese culture and traditions',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 30,
            ],
            [
                'image' => 'images/gallery/gallery-FicBzOLV.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 31,
            ],
            [
                'image' => 'images/gallery/gallery-BgmhiacT.jpg',
                'title' => 'Chilling & Relaxing',
                'description' => 'Chilling, relaxing & enjoying the moment',
                'image_alt' => 'Happy children chilling together',
                'sort_order' => 32,
            ],
            [
                'image' => 'images/gallery/gallery-dcFtWx0K.jpg',
                'title' => 'Playing Cards & Games',
                'description' => 'Fun, safe & educational card games',
                'image_alt' => 'Happy children chilling together',
                'sort_order' => 33,
            ],
            [
                'image' => 'images/gallery/gallery-UsoOZlui.jpg',
                'title' => 'Curious Minds',
                'description' => 'Learning through everyday experiences',
                'image_alt' => 'Child learning through outdoor activities',
                'sort_order' => 34,
            ],
            [
                'image' => 'images/gallery/gallery-m3GiRTfA.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 35,
            ],
            [
                'image' => 'images/gallery/gallery-MFnwW2Xe.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 36,
            ],
            [
                'image' => 'images/gallery/gallery-7tSAupsU.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 37,
            ],
            [
                'image' => 'images/gallery/gallery-JoQHGszx.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 38,
            ],
            [
                'image' => 'images/gallery/gallery-Ycn1wR7e.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 39,
            ],
            [
                'image' => 'images/gallery/gallery-aDEvFz5x.jpg',
                'title' => 'Teaching & Learning',
                'description' => 'Learning through everyday experiences',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 40,
            ],
            [
                'image' => 'images/gallery/gallery-yYu5EKMC.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 41,
            ],
            [
                'image' => 'images/gallery/gallery-Cl636vuo.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 42,
            ],
            [
                'image' => 'images/gallery/gallery-gr2KzbPV.jpg',
                'title' => 'Lovely Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 43,
            ],
            [
                'image' => 'images/gallery/gallery-HFi1ETep.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 44,
            ],
            [
                'image' => 'images/gallery/gallery-Hysiy46G.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 45,
            ],
            [
                'image' => 'images/gallery/gallery-YvVsbxPk.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 46,
            ],
            [
                'image' => 'images/gallery/gallery-NZe6i42M.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 47,
            ],
            [
                'image' => 'images/gallery/gallery-vrSogNnd.jpg',
                'title' => 'Yoga & Mindfulness',
                'description' => 'Calm, focused & mindful moments',
                'image_alt' => 'Children practicing yoga and mindfulness',
                'sort_order' => 48,
            ],
            [
                'image' => 'images/gallery/gallery-lmbVdiF8.jpg',
                'title' => 'Traditional Dance',
                'description' => 'Happy to learn new dance',
                'image_alt' => 'Learning traditional Balinese dance',
                'sort_order' => 49,
            ],
            [
                'image' => 'images/gallery/gallery-sIt0S5JC.jpg',
                'title' => 'Creative Moments',
                'description' => 'Arts, crafts & imagination',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 50,
            ],
            [
                'image' => 'images/gallery/gallery-6IP3DKQU.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 51,
            ],
            [
                'image' => 'images/gallery/gallery-Y5JGvM7w.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 52,
            ],
            [
                'image' => 'images/gallery/gallery-xwRocGjl.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 53,
            ],
            [
                'image' => 'images/gallery/gallery-IgwYE4oh.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 54,
            ],
            [
                'image' => 'images/gallery/gallery-zEUefPNu.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 55,
            ],
            [
                'image' => 'images/gallery/gallery-i2vreV6h.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 56,
            ],
            [
                'image' => 'images/gallery/gallery-WuoI57sD.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 57,
            ],
            [
                'image' => 'images/gallery/gallery-A70K5ySF.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 58,
            ],
            [
                'image' => 'images/gallery/gallery-IMCHUHYs.jpg',
                'title' => 'Campfire & Storytelling',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 59,
            ],
            [
                'image' => 'images/gallery/gallery-Bm3VTwfN.jpg',
                'title' => 'Enjoying the Beach',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 60,
            ],
            [
                'image' => 'images/gallery/gallery-hWxI1hcS.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 61,
            ],
            [
                'image' => 'images/gallery/gallery-HMjoipUt.jpg',
                'title' => 'Enjoying Outdoor',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 62,
            ],
            [
                'image' => 'images/gallery/gallery-M2okgYgb.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 63,
            ],
            [
                'image' => 'images/gallery/gallery-rbNEG6XE.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 64,
            ],
            [
                'image' => 'images/gallery/gallery-zgxfetur.jpg',
                'title' => 'Curious Minds',
                'description' => 'Learning through everyday experiences',
                'image_alt' => 'Child learning through outdoor activities',
                'sort_order' => 65,
            ],
            [
                'image' => 'images/gallery/gallery-DON3dJg8.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 66,
            ],
            [
                'image' => 'images/gallery/gallery-oWZjkr6S.jpg',
                'title' => 'Happy Moms & Happy Kids',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 67,
            ],
        ];

        foreach ($galleryItems as $item) {
            DB::table('gallery_items')->updateOrInsert(
                ['sort_order' => $item['sort_order']],
                [
                    ...$item,
                    'is_active' => true,
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Testimonials
        |--------------------------------------------------------------------------
        */

        $now = now();

        $testimonials = [
            'uQ6nfUkM',
            'aK9pLm2X',
            'bR4tYw7N',
            'cF8hJq3V',
            'dM5xZk1P',
            'eT2nWv6B',
            'fG7yHc4R',
            'gL3qXp9A',
            'hV6mNb2K',
            'jC1wRt8D',
            'kY4pFs7M',
            'mN9xQa3L',
            'nB2vJk5T',
            'pR8hWc1Y',
            'qX3mLf6G',
            'rD7tZa4N',
            'sK5vHp2C',
            'tM1qYw9B',
            'vF6nRx3J',
            'wA4kPc8L',
            'xH2mTq7V',
            'yJ9bNg5D',
            'AB7cXm4P',
            'CD2vQn8R',
            'EF5hYk1M',
            'GH9pLs3T',
            'LM1xRc7N',
            'NP8qVf2D',
        ];

        $rows = [];

        foreach ($testimonials as $index => $filename) {
            $rows[] = [
                'image' => "images/testimonials/testimony-{$filename}.jpg",
                'image_alt' => 'Customer testimonial shared with Miss Neka Nanny Bali',
                'sort_order' => $index + 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        DB::table('testimonials')->insert($rows);

        /*
        |--------------------------------------------------------------------------
        | About Features
        |--------------------------------------------------------------------------
        */

        $aboutFeatures = [
            [
                'title' => 'Child Safety & Well-being',
                'description' => 'We prioritize your child’s safety and well-being through attentive supervision, thoughtful care, and respect for their individual needs.',
                'icon' => 'shield-check',
                'sort_order' => 1,
            ],
            [
                'title' => 'Trusted Professionals',
                'description' => 'Experienced and background-checked nannies you can feel comfortable welcoming into your holiday.',
                'icon' => 'check',
                'sort_order' => 2,
            ],
            [
                'title' => 'Genuine Care',
                'description' => 'We treat every child with patience, kindness, attention, and respect.',
                'icon' => 'heart',
                'sort_order' => 3,
            ],
            [
                'title' => 'Family Focused',
                'description' => 'Flexible childcare designed around your family’s schedule and Bali itinerary.',
                'icon' => 'users',
                'sort_order' => 4,
            ],
        ];

        foreach ($aboutFeatures as $feature) {
            DB::table('about_features')->updateOrInsert(
                ['sort_order' => $feature['sort_order']],
                [
                    ...$feature,
                    'is_active' => true,
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Social Links
        |--------------------------------------------------------------------------
        */

        $socialLinks = [
            [
                'platform' => 'facebook',
                'label' => 'Facebook',
                'url' => 'https://facebook.com/menel.kharismaa',
                'sort_order' => 1,
            ],
            [
                'platform' => 'youtube',
                'label' => 'YouTube',
                'url' => 'https://www.youtube.com/@nekakharisma',
                'sort_order' => 2,
            ],
            // [
            //     'platform' => 'instagram',
            //     'label' => 'Instagram',
            //     'url' => 'https://www.instagram.com/neka_kharisma',
            //     'sort_order' => 3,
            // ],
            // [
            //     'platform' => 'threads',
            //     'label' => 'Threads',
            //     'url' => 'https://www.threads.com/@neka_kharisma',
            //     'sort_order' => 4,
            // ],
        ];

        foreach ($socialLinks as $social) {
            DB::table('social_links')->updateOrInsert(
                ['platform' => $social['platform']],
                [
                    'label' => $social['label'],
                    'url' => $social['url'],
                    'sort_order' => $social['sort_order'],
                    'is_active' => true,
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }

        /*
        |--------------------------------------------------------------------------
        | FAQ
        |--------------------------------------------------------------------------
        */

        $faqItems = [
            [
                'question' => 'Which areas in Bali do you cover?',
                'answer' => 'We currently provide nanny services in Nusa Dua. If you are staying outside these areas, please contact us on WhatsApp and we can confirm availability.',
                'sort_order' => 1,
            ],
            [
                'question' => 'What are your nanny rates per hour?',
                'answer' => 'Our hourly rates depend on your childcare needs and booking details. Please contact us on WhatsApp for our current rates and a personalized quote. We’ll be happy to help you find the right care for your family.',
                'sort_order' => 2,
            ],
            [
                'question' => 'Is there a minimum number of hours per booking?',
                'answer' => 'Minimum booking hours may vary depending on the type of service and availability. Please reach out to us on WhatsApp to confirm the minimum duration for your preferred booking.',
                'sort_order' => 3,
            ],
            [
                'question' => 'How far in advance should I book a nanny?',
                'answer' => 'We recommend booking as early as possible, especially during weekends, school holidays, and peak travel periods. However, last-minute bookings may also be available depending on our nanny schedule.',
                'sort_order' => 4,
            ],
            [
                'question' => 'What payment methods do you accept?',
                'answer' => 'Payment arrangements can be discussed when you make your booking. Please contact us on WhatsApp and we will provide the available payment options for your reservation.',
                'sort_order' => 5,
            ],
            [
                'question' => 'Are the nannies background checked?',
                'answer' => 'Yes. We conduct background checks as part of our commitment to providing families with trusted and professional childcare.',
                'sort_order' => 6,

            ],
            [
                'question' => 'Can the nanny accompany us to a restaurant, wedding, or excursion?',
                'answer' => 'Yes. Depending on availability, our nannies can provide childcare support during restaurants, weddings, private events, and family excursions. Please share your itinerary with us so we can discuss the arrangement.',
                'sort_order' => 7,
            ],
        ];

        foreach ($faqItems as $faq) {
            DB::table('faq_items')->updateOrInsert(
                ['sort_order' => $faq['sort_order']],
                [
                    ...$faq,
                    'is_active' => true,
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Coverage Areas
        |--------------------------------------------------------------------------
        */

        $coverageAreas = [
            'Nusa Dua',
            'Canggu',
            'Seminyak',
            'Ubud',
            'Sanur',
            'Uluwatu',
            'Jimbaran',
        ];

        foreach ($coverageAreas as $index => $area) {
            DB::table('coverage_areas')->updateOrInsert(
                ['name' => $area],
                [
                    'sort_order' => $index + 1,
                    'is_active' => true,
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }
    }
}
