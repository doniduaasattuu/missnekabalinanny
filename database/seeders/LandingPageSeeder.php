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
                'value' => 'dQw4w9WgXcQ',
                'type' => 'string',
            ],
            [
                'key' => 'about_video_url',
                'value' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                'type' => 'string',
            ],
            [
                'key' => 'about_video_thumbnail_url',
                'value' => 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
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
                'is_direct' => false,
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
                'is_direct' => false,
                'sort_order' => 5,
            ],
            [
                'label' => 'FAQ',
                'href' => '#faq',
                'url' => '/faq',
                'is_direct' => false,
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
                'value' => 'CPR',
                'label' => '& First Aid Certified',
                'icon' => 'check',
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
                'title' => 'Little Explorers',
                'description' => 'Outdoor discovery & meaningful play',
                'image_alt' => 'Children exploring outdoors',
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
                'title' => 'Poolside Fun',
                'description' => 'Safe & supervised water play',
                'image_alt' => 'Children enjoying poolside activities',
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
                'title' => 'Family Adventures',
                'description' => 'Making beautiful Bali memories',
                'image_alt' => 'Family enjoying an outdoor adventure',
                'sort_order' => 5,
            ],
            [
                'image' => 'images/gallery/gallery-XrjV6wGZ.jpg',
                'title' => 'Happy Little Hearts',
                'description' => 'Warm, attentive & joyful care',
                'image_alt' => 'Happy children playing together',
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
                'title' => 'Music',
                'description' => 'Making beautiful Bali memories',
                'image_alt' => 'Happy children playing together',
                'sort_order' => 9,
            ],
            [
                'image' => 'images/gallery/gallery-aoLR5LU3.jpg',
                'title' => 'Dance',
                'description' => 'Happy to learn new dance',
                'image_alt' => 'Learning traditional Balinese dance',
                'sort_order' => 10,
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

        $testimonials = [
            [
                'name' => 'Sarah Mitchell',
                'country' => 'Australia',
                'quote' => 'Miss Neka made our Bali holiday so much easier. Our daughter absolutely loved spending time with her, and we felt completely comfortable leaving her in such caring hands.',
                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Sarah Mitchell',
                'rating' => 5,
                'sort_order' => 1,
            ],
            [
                'name' => 'Emily Thompson',
                'country' => 'United Kingdom',
                'quote' => 'Professional, warm, and incredibly attentive. We booked a nanny for several evenings and it gave us the chance to enjoy Bali while knowing our children were safe and happy.',
                'avatar' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Emily Thompson',
                'rating' => 5,
                'sort_order' => 2,
            ],
            [
                'name' => 'Michael Anderson',
                'country' => 'United States',
                'quote' => 'The communication was excellent from the first WhatsApp message. Everything was clear, professional, and our kids had a wonderful time.',
                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Michael Anderson',
                'rating' => 5,
                'sort_order' => 3,
            ],
            [
                'name' => 'Rachel Tan',
                'country' => 'Singapore',
                'quote' => 'We were looking for someone trustworthy for our two children and were very happy with the experience. The nanny was caring, punctual, and wonderful with the kids.',
                'avatar' => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Rachel Tan',
                'rating' => 5,
                'sort_order' => 4,
            ],
            [
                'name' => 'Olivia Williams',
                'country' => 'Australia',
                'quote' => 'Our nanny was wonderful with our three-year-old. She was patient, playful, and quickly understood his routine. We would absolutely book again.',
                'avatar' => 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Olivia Williams',
                'rating' => 5,
                'sort_order' => 5,
            ],
            [
                'name' => 'James Carter',
                'country' => 'United Kingdom',
                'quote' => 'Having a nanny during our family trip made such a difference. We could enjoy dinner and explore Bali while knowing our children were in safe hands.',
                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'James Carter',
                'rating' => 5,
                'sort_order' => 6,
            ],
            [
                'name' => 'Sophia Miller',
                'country' => 'United States',
                'quote' => 'Everything was smooth from booking to the final day. Our children connected with the nanny immediately and had so much fun.',
                'avatar' => 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Sophia Miller',
                'rating' => 5,
                'sort_order' => 7,
            ],
            [
                'name' => 'Daniel Lee',
                'country' => 'Singapore',
                'quote' => 'Excellent service and very easy communication. The nanny was punctual, friendly, and genuinely caring toward our children.',
                'avatar' => 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Daniel Lee',
                'rating' => 5,
                'sort_order' => 8,
            ],
            [
                'name' => 'Charlotte Brown',
                'country' => 'Australia',
                'quote' => 'We were nervous about arranging childcare overseas, but the whole experience was incredibly reassuring. Our daughter had a fantastic time.',
                'avatar' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Charlotte Brown',
                'rating' => 5,
                'sort_order' => 9,
            ],
            [
                'name' => 'Thomas Wilson',
                'country' => 'United Kingdom',
                'quote' => 'A lovely childcare experience during our stay in Seminyak. The nanny was attentive and our children felt comfortable from the beginning.',
                'avatar' => 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Thomas Wilson',
                'rating' => 5,
                'sort_order' => 10,
            ],
            [
                'name' => 'Jessica Davis',
                'country' => 'United States',
                'quote' => 'We booked childcare for our wedding day and could not have been happier. It allowed us to enjoy the celebration without worrying about the kids.',
                'avatar' => 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Jessica Davis',
                'rating' => 5,
                'sort_order' => 11,
            ],
            [
                'name' => 'William Taylor',
                'country' => 'Australia',
                'quote' => 'The nanny was kind, professional, and very attentive. Our two children enjoyed every moment and kept asking when she would come back.',
                'avatar' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'William Taylor',
                'rating' => 5,
                'sort_order' => 12,
            ],
            [
                'name' => 'Amelia Clark',
                'country' => 'Singapore',
                'quote' => 'Fantastic experience. Communication was clear, the booking was easy, and our nanny was wonderful with both of our children.',
                'avatar' => 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Amelia Clark',
                'rating' => 5,
                'sort_order' => 13,
            ],
            [
                'name' => 'George Martin',
                'country' => 'United Kingdom',
                'quote' => 'We used the service during a day trip around Bali. Having someone experienced with the children made the whole day much more relaxing.',
                'avatar' => 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'George Martin',
                'rating' => 5,
                'sort_order' => 14,
            ],
            [
                'name' => 'Mia Robinson',
                'country' => 'United States',
                'quote' => 'Our nanny was incredibly sweet with our baby and respected our routine. We felt comfortable and supported throughout our stay.',
                'avatar' => 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Mia Robinson',
                'rating' => 5,
                'sort_order' => 15,
            ],
            [
                'name' => 'Henry Walker',
                'country' => 'Australia',
                'quote' => 'Very professional service. The nanny arrived on time, was well prepared, and kept our children entertained throughout the evening.',
                'avatar' => 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Henry Walker',
                'rating' => 5,
                'sort_order' => 16,
            ],
            [
                'name' => 'Grace Harris',
                'country' => 'Singapore',
                'quote' => 'We appreciated how flexible the service was. Everything was arranged around our family schedule and the children loved their nanny.',
                'avatar' => 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Grace Harris',
                'rating' => 5,
                'sort_order' => 17,
            ],
            [
                'name' => 'Jack Evans',
                'country' => 'United Kingdom',
                'quote' => 'Our experience was excellent from start to finish. Friendly communication, professional childcare, and genuinely lovely service.',
                'avatar' => 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Jack Evans',
                'rating' => 5,
                'sort_order' => 18,
            ],
            [
                'name' => 'Ella Moore',
                'country' => 'Australia',
                'quote' => 'The perfect childcare solution for our Bali holiday. We had peace of mind while our children enjoyed a fun and caring environment.',
                'avatar' => 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Ella Moore',
                'rating' => 5,
                'sort_order' => 19,
            ],
            [
                'name' => 'Lucas Thompson',
                'country' => 'United States',
                'quote' => 'We would definitely recommend Miss Neka Nanny Bali to other families visiting Bali. Reliable, caring, and incredibly easy to work with.',
                'avatar' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
                'avatar_alt' => 'Lucas Thompson',
                'rating' => 5,
                'sort_order' => 20,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            DB::table('testimonials')->updateOrInsert(
                ['sort_order' => $testimonial['sort_order']],
                [
                    ...$testimonial,
                    'is_active' => true,
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }

        /*
        |--------------------------------------------------------------------------
        | About Features
        |--------------------------------------------------------------------------
        */

        $aboutFeatures = [
            [
                'title' => 'Safety First',
                'description' => 'CPR & First Aid certified care with your child’s safety always our priority.',
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
                'platform' => 'instagram',
                'label' => 'Instagram',
                'url' => 'https://www.instagram.com/neka_kharisma',
                'sort_order' => 1,
            ],
            [
                'platform' => 'threads',
                'label' => 'Threads',
                'url' => 'https://www.threads.com/@neka_kharisma',
                'sort_order' => 2,
            ],
            [
                'platform' => 'facebook',
                'label' => 'Facebook',
                'url' => 'https://facebook.com/menel.kharismaa',
                'sort_order' => 3,
            ],
            [
                'platform' => 'youtube',
                'label' => 'YouTube',
                'url' => 'https://www.youtube.com/@nekakharisma',
                'sort_order' => 4,
            ],
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
                'question' => 'How far in advance should I book a nanny?',
                'answer' => 'We recommend booking as early as possible, especially during weekends, school holidays, and peak travel periods. However, last-minute bookings may also be available depending on our nanny schedule.',
                'sort_order' => 2,
            ],
            [
                'question' => 'What payment methods do you accept?',
                'answer' => 'Payment arrangements can be discussed when you make your booking. Please contact us on WhatsApp and we will provide the available payment options for your reservation.',
                'sort_order' => 3,
            ],
            [
                'question' => 'Are your nannies CPR and First Aid certified?',
                'answer' => 'Yes. Our nannies are CPR and First Aid certified, helping ensure that your children are cared for by professionals who understand how to respond to emergency situations.',
                'sort_order' => 4,
            ],
            [
                'question' => 'Are the nannies background checked?',
                'answer' => 'Yes. We conduct background checks as part of our commitment to providing families with trusted and professional childcare.',
                'sort_order' => 5,
            ],
            [
                'question' => 'Can the nanny accompany us to a restaurant, wedding, or excursion?',
                'answer' => 'Yes. Depending on availability, our nannies can provide childcare support during restaurants, weddings, private events, and family excursions. Please share your itinerary with us so we can discuss the arrangement.',
                'sort_order' => 6,
            ],
            [
                'question' => 'Can I request a nanny who speaks English?',
                'answer' => 'Yes. English-speaking childcare can be requested. Please mention your language preference when contacting us so we can match your family with a suitable nanny.',
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
            // 'Canggu',
            // 'Seminyak',
            // 'Ubud',
            // 'Sanur',
            // 'Uluwatu',
            // 'Jimbaran',
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
