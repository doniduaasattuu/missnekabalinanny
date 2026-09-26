<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LandingPageController extends Controller
{
    public function index(Request $request): Response
    {
        $whatsappUrl = 'https://wa.me/6285856459247';

        return Inertia::render('landing-page', [
            'whatsappUrl' => $whatsappUrl,

            /*
            |--------------------------------------------------------------------------
            | Navigation
            |--------------------------------------------------------------------------
            */
            'navigationLinks' => [
                [
                    'id' => 'home',
                    'label' => 'Home',
                    'href' => '#home',
                ],
                [
                    'id' => 'about',
                    'label' => 'About Us',
                    'href' => '#about',
                ],
                [
                    'id' => 'services',
                    'label' => 'Services',
                    'href' => '#services',
                ],
                [
                    'id' => 'gallery',
                    'label' => 'Gallery',
                    'href' => '#gallery',
                ],
                [
                    'id' => 'testimonials',
                    'label' => 'Testimonials',
                    'href' => '#testimonials',
                ],
                [
                    'id' => 'faq',
                    'label' => 'FAQ',
                    'href' => '#faq',
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | Hero
            |--------------------------------------------------------------------------
            */
            'heroSlides' => [
                [
                    "id" => 1,
                    "image" => "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2200&q=90",
                    "eyebrow" => "CARING • PROFESSIONAL • TRUSTED",
                    "title" => "More Than a Nanny.",
                    "accent" => "A Peace of Mind.",
                    "description" => "Premium childcare support for families who want to experience Bali with confidence, comfort, and complete peace of mind.",
                    "imageAlt" => "Happy children enjoying a family moment",
                ],
                [
                    "id" => 2,
                    "image" => "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=2200&q=90",
                    "eyebrow" => "YOUR FAMILY, OUR CARE",
                    "title" => "Exceptional Care,",
                    "accent" => "Wherever Bali Takes You.",
                    "description" => "From your private villa to a beach club, resort, wedding, or family adventure — your little ones are always in caring hands.",
                    "imageAlt" => "Family enjoying quality time together",
                ],
                [
                    "id" => 3,
                    "image" => "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=2200&q=90",
                    "eyebrow" => "BALI FAMILY EXPERIENCES",
                    "title" => "Explore Bali.",
                    "accent" => "We'll Care for the Little Ones.",
                    "description" => "Enjoy your holiday, your dinner, or your special occasion while our professional nanny gives your children attentive, loving care.",
                    "imageAlt" => "Children enjoying an outdoor activity",
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | Trust Badges
            |--------------------------------------------------------------------------
            |
            | `icon` menggunakan string karena data dari backend harus berupa
            | JSON-friendly value. Mapping icon dilakukan di React.
            |
            */
            'trustBadges' => [
                [
                    'id' => 1,
                    'value' => '5+',
                    'label' => 'Years Experience',
                    'icon' => 'shield-check',
                ],
                [
                    'id' => 2,
                    'value' => 'CPR',
                    'label' => '& First Aid Certified',
                    'icon' => 'check',
                ],
                [
                    'id' => 3,
                    'value' => '150+',
                    'label' => 'Happy Families',
                    'icon' => 'users',
                ],
                [
                    'id' => 4,
                    'value' => '100%',
                    'label' => 'Background Checked',
                    'icon' => 'clock',
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | Services
            |--------------------------------------------------------------------------
            */
            'services' => [
                [
                    'id' => 1,
                    'title' => 'Daytime Nanny',
                    'description' => 'Reliable childcare during the day so parents can relax, work, or explore Bali with peace of mind.',
                    'features' => [
                        'Villa & hotel childcare',
                        'Playtime & activities',
                        'Meal & nap assistance',
                        'Flexible booking hours',
                    ],
                    'icon' => 'sun',
                ],
                [
                    'id' => 2,
                    'title' => 'Evening & Night Nanny',
                    'description' => 'Enjoy your evenings while your children are safely cared for by an experienced and attentive nanny.',
                    'features' => [
                        'Dinner & bedtime routine',
                        'Children’s entertainment',
                        'Bedtime supervision',
                        'Late-night childcare',
                    ],
                    'icon' => 'moon',
                ],
                [
                    'id' => 3,
                    'title' => 'Event & Wedding Nanny',
                    'description' => 'Professional childcare support for weddings, private events, dinners, and special occasions in Bali.',
                    'features' => [
                        'Wedding childcare',
                        'Private events',
                        'Restaurant assistance',
                        'Dedicated child supervision',
                    ],
                    'icon' => 'heart',
                ],
                [
                    'id' => 4,
                    'title' => 'Travel & Excursion Nanny',
                    'description' => 'A trusted companion for families exploring Bali, helping parents enjoy excursions while children remain comfortable and cared for.',
                    'features' => [
                        'Day trips',
                        'Family excursions',
                        'Beach & pool supervision',
                        'Flexible travel arrangements',
                    ],
                    'icon' => 'map-pin',
                ],
            ],

            'servicesBanner' => [
                'title' => 'Not sure which service is right for your family?',
                'description' => 'Tell us about your plans and we will help you find the childcare arrangement that fits your Bali holiday.',
            ],

            /*
            |--------------------------------------------------------------------------
            | Gallery
            |--------------------------------------------------------------------------
            */
            'galleryItems' => [
                [
                    'id' => 1,
                    'image' => 'https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1200&q=85',
                    'title' => 'Little Explorers',
                    'description' => 'Outdoor discovery & meaningful play',
                    'imageAlt' => 'Children exploring outdoors',
                ],
                [
                    'id' => 2,
                    'image' => 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=85',
                    'title' => 'Creative Moments',
                    'description' => 'Arts, crafts & imagination',
                    'imageAlt' => 'Child enjoying a creative activity',
                ],
                [
                    'id' => 3,
                    'image' => 'https://images.unsplash.com/photo-1651614158095-b98b6c1da74b?auto=format&fit=crop&w=1200&q=85',
                    'title' => 'Poolside Fun',
                    'description' => 'Safe & supervised water play',
                    'imageAlt' => 'Children enjoying poolside activities',
                ],
                [
                    'id' => 4,
                    'image' => 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=85',
                    'title' => 'Curious Minds',
                    'description' => 'Learning through everyday experiences',
                    'imageAlt' => 'Child learning through outdoor activities',
                ],
                [
                    'id' => 5,
                    'image' => 'https://plus.unsplash.com/premium_photo-1663088809392-ef409ddf5940?auto=format&fit=crop&w=1200&q=85',
                    'title' => 'Family Adventures',
                    'description' => 'Making beautiful Bali memories',
                    'imageAlt' => 'Family enjoying an outdoor adventure',
                ],
                [
                    'id' => 6,
                    'image' => 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1200&q=85',
                    'title' => 'Happy Little Hearts',
                    'description' => 'Warm, attentive & joyful care',
                    'imageAlt' => 'Happy children playing together',
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | Testimonials
            |--------------------------------------------------------------------------
            */
            'testimonials' => [
                [
                    'id' => 1,
                    'name' => 'Sarah Mitchell',
                    'country' => 'Australia',
                    'quote' => 'Miss Neka made our Bali holiday so much easier. Our daughter absolutely loved spending time with her, and we felt completely comfortable leaving her in such caring hands.',
                    'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Sarah Mitchell',
                    'rating' => 5,
                ],
                [
                    'id' => 2,
                    'name' => 'Emily Thompson',
                    'country' => 'United Kingdom',
                    'quote' => 'Professional, warm, and incredibly attentive. We booked a nanny for several evenings and it gave us the chance to enjoy Bali while knowing our children were safe and happy.',
                    'avatar' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Emily Thompson',
                    'rating' => 5,
                ],
                [
                    'id' => 3,
                    'name' => 'Michael Anderson',
                    'country' => 'United States',
                    'quote' => 'The communication was excellent from the first WhatsApp message. Everything was clear, professional, and our kids had a wonderful time.',
                    'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Michael Anderson',
                    'rating' => 5,
                ],
                [
                    'id' => 4,
                    'name' => 'Rachel Tan',
                    'country' => 'Singapore',
                    'quote' => 'We were looking for someone trustworthy for our two children and were very happy with the experience. The nanny was caring, punctual, and wonderful with the kids.',
                    'avatar' => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Rachel Tan',
                    'rating' => 5,
                ],
                [
                    'id' => 5,
                    'name' => 'Olivia Williams',
                    'country' => 'Australia',
                    'quote' => 'Our nanny was wonderful with our three-year-old. She was patient, playful, and quickly understood his routine. We would absolutely book again.',
                    'avatar' => 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Olivia Williams',
                    'rating' => 5,
                ],
                [
                    'id' => 6,
                    'name' => 'James Carter',
                    'country' => 'United Kingdom',
                    'quote' => 'Having a nanny during our family trip made such a difference. We could enjoy dinner and explore Bali while knowing our children were in safe hands.',
                    'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'James Carter',
                    'rating' => 5,
                ],
                [
                    'id' => 7,
                    'name' => 'Sophia Miller',
                    'country' => 'United States',
                    'quote' => 'Everything was smooth from booking to the final day. Our children connected with the nanny immediately and had so much fun.',
                    'avatar' => 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Sophia Miller',
                    'rating' => 5,
                ],
                [
                    'id' => 8,
                    'name' => 'Daniel Lee',
                    'country' => 'Singapore',
                    'quote' => 'Excellent service and very easy communication. The nanny was punctual, friendly, and genuinely caring toward our children.',
                    'avatar' => 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Daniel Lee',
                    'rating' => 5,
                ],
                [
                    'id' => 9,
                    'name' => 'Charlotte Brown',
                    'country' => 'Australia',
                    'quote' => 'We were nervous about arranging childcare overseas, but the whole experience was incredibly reassuring. Our daughter had a fantastic time.',
                    'avatar' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Charlotte Brown',
                    'rating' => 5,
                ],
                [
                    'id' => 10,
                    'name' => 'Thomas Wilson',
                    'country' => 'United Kingdom',
                    'quote' => 'A lovely childcare experience during our stay in Seminyak. The nanny was attentive and our children felt comfortable from the beginning.',
                    'avatar' => 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Thomas Wilson',
                    'rating' => 5,
                ],
                [
                    'id' => 11,
                    'name' => 'Jessica Davis',
                    'country' => 'United States',
                    'quote' => 'We booked childcare for our wedding day and could not have been happier. It allowed us to enjoy the celebration without worrying about the kids.',
                    'avatar' => 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Jessica Davis',
                    'rating' => 5,
                ],
                [
                    'id' => 12,
                    'name' => 'William Taylor',
                    'country' => 'Australia',
                    'quote' => 'The nanny was kind, professional, and very attentive. Our two children enjoyed every moment and kept asking when she would come back.',
                    'avatar' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'William Taylor',
                    'rating' => 5,
                ],
                [
                    'id' => 13,
                    'name' => 'Amelia Clark',
                    'country' => 'Singapore',
                    'quote' => 'Fantastic experience. Communication was clear, the booking was easy, and our nanny was wonderful with both of our children.',
                    'avatar' => 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Amelia Clark',
                    'rating' => 5,
                ],
                [
                    'id' => 14,
                    'name' => 'George Martin',
                    'country' => 'United Kingdom',
                    'quote' => 'We used the service during a day trip around Bali. Having someone experienced with the children made the whole day much more relaxing.',
                    'avatar' => 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'George Martin',
                    'rating' => 5,
                ],
                [
                    'id' => 15,
                    'name' => 'Mia Robinson',
                    'country' => 'United States',
                    'quote' => 'Our nanny was incredibly sweet with our baby and respected our routine. We felt comfortable and supported throughout our stay.',
                    'avatar' => 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Mia Robinson',
                    'rating' => 5,
                ],
                [
                    'id' => 16,
                    'name' => 'Henry Walker',
                    'country' => 'Australia',
                    'quote' => 'Very professional service. The nanny arrived on time, was well prepared, and kept our children entertained throughout the evening.',
                    'avatar' => 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Henry Walker',
                    'rating' => 5,
                ],
                [
                    'id' => 17,
                    'name' => 'Grace Harris',
                    'country' => 'Singapore',
                    'quote' => 'We appreciated how flexible the service was. Everything was arranged around our family schedule and the children loved their nanny.',
                    'avatar' => 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Grace Harris',
                    'rating' => 5,
                ],
                [
                    'id' => 18,
                    'name' => 'Jack Evans',
                    'country' => 'United Kingdom',
                    'quote' => 'Our experience was excellent from start to finish. Friendly communication, professional childcare, and genuinely lovely service.',
                    'avatar' => 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Jack Evans',
                    'rating' => 5,
                ],
                [
                    'id' => 19,
                    'name' => 'Ella Moore',
                    'country' => 'Australia',
                    'quote' => 'The perfect childcare solution for our Bali holiday. We had peace of mind while our children enjoyed a fun and caring environment.',
                    'avatar' => 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Ella Moore',
                    'rating' => 5,
                ],
                [
                    'id' => 20,
                    'name' => 'Lucas Thompson',
                    'country' => 'United States',
                    'quote' => 'We would definitely recommend Miss Neka Nanny Bali to other families visiting Bali. Reliable, caring, and incredibly easy to work with.',
                    'avatar' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
                    'avatarAlt' => 'Lucas Thompson',
                    'rating' => 5,
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | About
            |--------------------------------------------------------------------------
            */
            'aboutImage' => 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=85',

            'aboutImageAlt' => 'Nanny spending quality time with a child',

            'aboutParagraphs' => [
                'At Miss Neka Nanny Bali, we believe childcare should feel warm, personal, and completely trustworthy. Our goal is to give visiting families the confidence to enjoy their Bali experience while their children receive attentive and loving care.',
                'Our nannies are experienced, CPR and First Aid certified, and background checked. We take the time to understand each family’s routines, preferences, and children’s individual needs.',
            ],

            'aboutFeatures' => [
                [
                    'id' => 1,
                    'title' => 'Safety First',
                    'description' => 'CPR & First Aid certified care with your child’s safety always our priority.',
                    'icon' => 'shield-check',
                ],
                [
                    'id' => 2,
                    'title' => 'Trusted Professionals',
                    'description' => 'Experienced and background-checked nannies you can feel comfortable welcoming into your holiday.',
                    'icon' => 'check',
                ],
                [
                    'id' => 3,
                    'title' => 'Genuine Care',
                    'description' => 'We treat every child with patience, kindness, attention, and respect.',
                    'icon' => 'heart',
                ],
                [
                    'id' => 4,
                    'title' => 'Family Focused',
                    'description' => 'Flexible childcare designed around your family’s schedule and Bali itinerary.',
                    'icon' => 'users',
                ],
            ],

            'aboutSocialLinks' => [
                [
                    'id' => 1,
                    'platform' => 'instagram',
                    'label' => 'Instagram',
                    'url' => 'https://instagram.com/missnekanannybali',
                ],
                [
                    'id' => 2,
                    'platform' => 'facebook',
                    'label' => 'Facebook',
                    'url' => 'https://facebook.com/missnekanannybali',
                ],
                [
                    'id' => 3,
                    'platform' => 'tiktok',
                    'label' => 'TikTok',
                    'url' => 'https://tiktok.com/@missnekanannybali',
                ],
                [
                    'id' => 4,
                    'platform' => 'x',
                    'label' => 'X',
                    'url' => 'https://x.com/missnekananny',
                ],
            ],

            'aboutQuote' => 'Caring for your children like family, so you can experience Bali with peace of mind.',

            'aboutQuoteAuthor' => 'Miss Neka Nanny Bali',

            /*
            |--------------------------------------------------------------------------
            | FAQ
            |--------------------------------------------------------------------------
            */
            'faqItems' => [
                [
                    'id' => 1,
                    'question' => 'Which areas in Bali do you cover?',
                    'answer' => 'We currently provide nanny services in Canggu, Seminyak, Ubud, Nusa Dua, Sanur, Uluwatu, and Jimbaran. If you are staying outside these areas, please contact us on WhatsApp and we can confirm availability.',
                ],
                [
                    'id' => 2,
                    'question' => 'How far in advance should I book a nanny?',
                    'answer' => 'We recommend booking as early as possible, especially during weekends, school holidays, and peak travel periods. However, last-minute bookings may also be available depending on our nanny schedule.',
                ],
                [
                    'id' => 3,
                    'question' => 'What payment methods do you accept?',
                    'answer' => 'Payment arrangements can be discussed when you make your booking. Please contact us on WhatsApp and we will provide the available payment options for your reservation.',
                ],
                [
                    'id' => 4,
                    'question' => 'Are your nannies CPR and First Aid certified?',
                    'answer' => 'Yes. Our nannies are CPR and First Aid certified, helping ensure that your children are cared for by professionals who understand how to respond to emergency situations.',
                ],
                [
                    'id' => 5,
                    'question' => 'Are the nannies background checked?',
                    'answer' => 'Yes. We conduct background checks as part of our commitment to providing families with trusted and professional childcare.',
                ],
                [
                    'id' => 6,
                    'question' => 'Can the nanny accompany us to a restaurant, wedding, or excursion?',
                    'answer' => 'Yes. Depending on availability, our nannies can provide childcare support during restaurants, weddings, private events, and family excursions. Please share your itinerary with us so we can discuss the arrangement.',
                ],
                [
                    'id' => 7,
                    'question' => 'Can I request a nanny who speaks English?',
                    'answer' => 'Yes. English-speaking childcare can be requested. Please mention your language preference when contacting us so we can match your family with a suitable nanny.',
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | Footer
            |--------------------------------------------------------------------------
            */
            'footerServices' => [
                [
                    'id' => 1,
                    'label' => 'Daytime Nanny',
                    'href' => '#services',
                ],
                [
                    'id' => 2,
                    'label' => 'Evening & Night Nanny',
                    'href' => '#services',
                ],
                [
                    'id' => 3,
                    'label' => 'Event & Wedding Nanny',
                    'href' => '#services',
                ],
                [
                    'id' => 4,
                    'label' => 'Travel & Excursion Nanny',
                    'href' => '#services',
                ],
            ],

            'footerSocialLinks' => [
                [
                    'id' => 1,
                    'platform' => 'instagram',
                    'label' => 'Instagram',
                    'url' => 'https://instagram.com/missnekanannybali',
                ],
                [
                    'id' => 2,
                    'platform' => 'facebook',
                    'label' => 'Facebook',
                    'url' => 'https://facebook.com/missnekanannybali',
                ],
                [
                    'id' => 3,
                    'platform' => 'tiktok',
                    'label' => 'TikTok',
                    'url' => 'https://tiktok.com/@missnekanannybali',
                ],
                [
                    'id' => 4,
                    'platform' => 'x',
                    'label' => 'X',
                    'url' => 'https://x.com/missnekananny',
                ],
            ],

            'footerContact' => [
                'whatsapp' => '+62 858-5645-9247',
                'whatsappUrl' => $whatsappUrl,
                'email' => 'hello@missnekanannybali.com',
                'location' => 'Bali, Indonesia',
            ],

            'coverageAreas' => [
                'Canggu',
                'Seminyak',
                'Ubud',
                'Nusa Dua',
                'Sanur',
                'Uluwatu',
                'Jimbaran',
            ],
        ]);
    }
}
