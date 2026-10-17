import { BusinessProfile } from '../types/seo';

export const MOCK_BUSINESSES: Record<string, BusinessProfile> = {
  'apex-dental-chennai': {
    id: 'apex-dental-chennai',
    placeId: 'ChIJX92bZ-lnUjoRA8sHwZkd1yA',
    name: 'Apex Dental Care & Implant Center',
    formattedAddress: '42, 2nd Avenue, Anna Nagar East, Chennai, Tamil Nadu 600102',
    city: 'Chennai',
    state: 'Tamil Nadu',
    phone: '+91 44 2621 8899',
    website: 'https://apexdentalcare.in',
    mapsUrl: 'https://maps.google.com/?cid=1284918237192841',
    claimed: true,
    verified: true,
    primaryCategory: 'Dentist',
    secondaryCategories: [
      'Dental Clinic',
      'Cosmetic Dentist',
      'Dental Implants Periodontist',
      'Teeth Whitening Service'
    ],
    openingHours: [
      { day: 'Monday', hours: '09:00 AM - 08:30 PM', isOpen: true },
      { day: 'Tuesday', hours: '09:00 AM - 08:30 PM', isOpen: true },
      { day: 'Wednesday', hours: '09:00 AM - 08:30 PM', isOpen: true },
      { day: 'Thursday', hours: '09:00 AM - 08:30 PM', isOpen: true },
      { day: 'Friday', hours: '09:00 AM - 08:30 PM', isOpen: true },
      { day: 'Saturday', hours: '09:00 AM - 07:00 PM', isOpen: true },
      { day: 'Sunday', hours: '10:00 AM - 02:00 PM', isOpen: true },
    ],
    holidayHoursUpdated: true,
    attributes: {
      wheelchairAccessible: true,
      appointmentRequired: true,
      onlineAppointments: true,
      freeParking: true,
      restroomAvailable: true,
    },
    totalReviews: 284,
    rating: 4.8,
    ratingBreakdown: {
      fiveStar: 236,
      fourStar: 34,
      threeStar: 8,
      twoStar: 4,
      oneStar: 2,
    },
    unansweredReviewsCount: 14,
    ownerResponseRate: 91,
    averageResponseTimeDays: 0.8,
    reviewVelocityPerMonth: 12,
    sentimentBreakdown: {
      positive: 86,
      neutral: 10,
      negative: 4,
    },
    topKeywords: [
      { keyword: 'painless root canal', count: 48, sentiment: 'positive' },
      { keyword: 'friendly staff', count: 39, sentiment: 'positive' },
      { keyword: 'clean clinic', count: 34, sentiment: 'positive' },
      { keyword: 'clear pricing', count: 22, sentiment: 'positive' },
      { keyword: 'waiting time', count: 7, sentiment: 'neutral' },
      { keyword: 'parking slot', count: 4, sentiment: 'negative' }
    ],
    reviews: [
      {
        id: 'rev-1',
        authorName: 'Suresh Karthik',
        rating: 5,
        relativeTime: '3 days ago',
        text: 'Dr. Ramesh did my ceramic crown and implant. Absolutely zero pain throughout the procedure and world-class sterilized hygiene. Highly recommend to everyone in Anna Nagar!',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Thank you Suresh for the kind words! Our entire team at Apex Dental is thrilled to see you smiling with confidence.',
        ownerResponseTime: 'within 4 hours'
      },
      {
        id: 'rev-2',
        authorName: 'Priya Meenakshi',
        rating: 5,
        relativeTime: '2 weeks ago',
        text: 'Extremely patient doctors who explain each step beforehand. The front desk was also very courteous and took me right on time without delays.',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Thank you Priya! We make it our priority to honor appointment timings and ensure patient comfort.',
        ownerResponseTime: 'within 1 day'
      },
      {
        id: 'rev-3',
        authorName: 'Arun Prasath',
        rating: 4,
        relativeTime: '1 month ago',
        text: 'Treatment was top tier, but finding parking on a busy Saturday evening took about 10 minutes. Valet would be a great addition.',
        sentiment: 'neutral',
        hasOwnerResponse: true,
        ownerResponseText: 'We appreciate the feedback Arun! We are currently coordinating extra dedicated parking spots next door on weekends.',
        ownerResponseTime: 'within 2 days'
      },
      {
        id: 'rev-4',
        authorName: 'Vikram Seth',
        rating: 5,
        relativeTime: '1 month ago',
        text: 'Professional teeth whitening with visible instant difference. Very fair consultation fee.',
        sentiment: 'positive',
        hasOwnerResponse: false
      }
    ]
  },

  'madurai-digital-studio': {
    id: 'madurai-digital-studio',
    placeId: 'ChIJZ-wZ3W16UjoRVtKx9sX3Y8m',
    name: 'Madurai Digital Growth Studio | Best Digital Marketing Agency & SEO Company Madurai',
    formattedAddress: '15, Mattuthavani Main Rd, KK Nagar, Madurai, Tamil Nadu 625020',
    city: 'Madurai',
    state: 'Tamil Nadu',
    phone: '+91 452 439 1234',
    website: 'https://maduraidigitalgrowth.com',
    mapsUrl: 'https://maps.google.com/?cid=892348719283741',
    claimed: true,
    verified: true,
    primaryCategory: 'Marketing Agency',
    secondaryCategories: [
      'Advertising Agency'
    ],
    openingHours: [
      { day: 'Monday', hours: '09:30 AM - 06:30 PM', isOpen: true },
      { day: 'Tuesday', hours: '09:30 AM - 06:30 PM', isOpen: true },
      { day: 'Wednesday', hours: '09:30 AM - 06:30 PM', isOpen: true },
      { day: 'Thursday', hours: '09:30 AM - 06:30 PM', isOpen: true },
      { day: 'Friday', hours: '09:30 AM - 06:30 PM', isOpen: true },
      { day: 'Saturday', hours: '10:00 AM - 02:00 PM', isOpen: true },
      { day: 'Sunday', hours: 'Closed', isOpen: false },
    ],
    holidayHoursUpdated: false,
    attributes: {
      wheelchairAccessible: false,
      appointmentRequired: true,
      onlineAppointments: true,
      freeParking: true,
      restroomAvailable: true,
    },
    totalReviews: 46,
    rating: 4.3,
    ratingBreakdown: {
      fiveStar: 28,
      fourStar: 9,
      threeStar: 4,
      twoStar: 3,
      oneStar: 2,
    },
    unansweredReviewsCount: 19,
    ownerResponseRate: 58,
    averageResponseTimeDays: 3.4,
    reviewVelocityPerMonth: 3,
    sentimentBreakdown: {
      positive: 68,
      neutral: 18,
      negative: 14,
    },
    topKeywords: [
      { keyword: 'lead generation', count: 18, sentiment: 'positive' },
      { keyword: 'google ads campaign', count: 14, sentiment: 'positive' },
      { keyword: 'social media design', count: 11, sentiment: 'positive' },
      { keyword: 'delayed reporting', count: 6, sentiment: 'negative' },
      { keyword: 'communication gap', count: 4, sentiment: 'negative' },
      { keyword: 'budget friendly', count: 8, sentiment: 'positive' }
    ],
    reviews: [
      {
        id: 'rev-m1',
        authorName: 'Balaji Textiles',
        rating: 5,
        relativeTime: '2 weeks ago',
        text: 'Helped our retail saree brand generate 3x footfall during Deepavali via local Google Ads & Meta Ads. Very responsive team.',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Thanks Balaji Textiles! Thrilled to partner with your prestigious brand in Madurai.',
        ownerResponseTime: 'after 4 days'
      },
      {
        id: 'rev-m2',
        authorName: 'Manojkumar',
        rating: 3,
        relativeTime: '1 month ago',
        text: 'The creatives were good quality, but monthly analytics reports were delayed by over a week each time. Need faster communication.',
        sentiment: 'neutral',
        hasOwnerResponse: false
      },
      {
        id: 'rev-m3',
        authorName: 'Kavitha S.',
        rating: 5,
        relativeTime: '2 months ago',
        text: 'Excellent website development and local SEO work. Our boutique now appears in the top 3 on Google Maps!',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Thank you Kavitha for trusting our local SEO team.',
        ownerResponseTime: 'after 2 days'
      },
      {
        id: 'rev-m4',
        authorName: 'Anand Kumar',
        rating: 2,
        relativeTime: '3 months ago',
        text: 'Signed up for 3 months package. Did not hit targeted ROI for our restaurant. Account manager changed twice.',
        sentiment: 'negative',
        hasOwnerResponse: false
      }
    ]
  },

  'artisan-roast-bangalore': {
    id: 'artisan-roast-bangalore',
    placeId: 'ChIJb6F1P_l9UjoR2XyNqT4v5A8',
    name: 'Artisan Roast Coffee Roasters - Best Cafe & Breakfast Bangalore 24 Hours',
    formattedAddress: '88, 100 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
    city: 'Bengaluru',
    state: 'Karnataka',
    phone: '',
    website: 'http://unsecured-artisanroast.info',
    mapsUrl: 'https://maps.google.com/?cid=3981293812948',
    claimed: false, // UNCLAIMED!
    verified: false,
    primaryCategory: 'Cafe',
    secondaryCategories: [], // NO SECONDARY CATEGORIES!
    openingHours: [
      { day: 'Monday', hours: '08:00 AM - 11:00 PM', isOpen: true },
      { day: 'Tuesday', hours: '08:00 AM - 11:00 PM', isOpen: true },
      { day: 'Wednesday', hours: '08:00 AM - 11:00 PM', isOpen: true },
      { day: 'Thursday', hours: '08:00 AM - 11:00 PM', isOpen: true },
      { day: 'Friday', hours: '08:00 AM - 11:00 PM', isOpen: true },
      { day: 'Saturday', hours: '08:00 AM - 11:30 PM', isOpen: true },
      { day: 'Sunday', hours: '08:00 AM - 11:30 PM', isOpen: true },
    ],
    holidayHoursUpdated: false,
    attributes: {
      wheelchairAccessible: false,
      appointmentRequired: false,
      onlineAppointments: false,
      freeParking: false,
      restroomAvailable: true,
    },
    totalReviews: 118,
    rating: 3.6,
    ratingBreakdown: {
      fiveStar: 44,
      fourStar: 20,
      threeStar: 18,
      twoStar: 16,
      oneStar: 20,
    },
    unansweredReviewsCount: 104,
    ownerResponseRate: 12,
    averageResponseTimeDays: 14.8,
    reviewVelocityPerMonth: 2,
    sentimentBreakdown: {
      positive: 46,
      neutral: 22,
      negative: 32,
    },
    topKeywords: [
      { keyword: 'specialty pour over', count: 19, sentiment: 'positive' },
      { keyword: 'sourdough toast', count: 14, sentiment: 'positive' },
      { keyword: 'rude cashier', count: 12, sentiment: 'negative' },
      { keyword: 'no wifi working', count: 11, sentiment: 'negative' },
      { keyword: 'overpriced coffee', count: 15, sentiment: 'negative' },
      { keyword: 'cozy ambience', count: 10, sentiment: 'positive' }
    ],
    reviews: [
      {
        id: 'rev-b1',
        authorName: 'Rohan Deshmukh',
        rating: 1,
        relativeTime: '1 week ago',
        text: 'The profile says open 24 hours in the title but when we visited at 11:30 PM the staff was rude and slammed the door shut. Phone number not even listed to check!',
        sentiment: 'negative',
        hasOwnerResponse: false
      },
      {
        id: 'rev-b2',
        authorName: 'Sneha Patel',
        rating: 4,
        relativeTime: '2 weeks ago',
        text: 'Lovely cold brew and pour over selection from Chikmagalur estates. But WiFi has been down for a month, hard to work from here.',
        sentiment: 'neutral',
        hasOwnerResponse: false
      },
      {
        id: 'rev-b3',
        authorName: 'Aditya Rao',
        rating: 1,
        relativeTime: '3 weeks ago',
        text: 'Charged 420 Rs for an iced latte and dry croissant. Overhyped Indiranagar spot with zero customer service.',
        sentiment: 'negative',
        hasOwnerResponse: false
      },
      {
        id: 'rev-b4',
        authorName: 'Divya Nair',
        rating: 5,
        relativeTime: '1 month ago',
        text: 'Best manual brews in Bangalore! The baristas know their origins thoroughly.',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Thanks Divya!',
        ownerResponseTime: 'after 21 days'
      }
    ]
  },

  'kovai-ortho-clinic': {
    id: 'kovai-ortho-clinic',
    placeId: 'ChIJ498b3W-mnToR8z3V2kK197A',
    name: 'Kovai Ortho & Advanced Joint Care Clinic',
    formattedAddress: '72, Cross Cut Rd, Gandhipuram, Coimbatore, Tamil Nadu 641012',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    phone: '+91 422 249 9888',
    website: 'https://kovaiorthocare.com',
    mapsUrl: 'https://maps.google.com/?cid=772834918237',
    claimed: true,
    verified: true,
    primaryCategory: 'Orthopedic Clinic',
    secondaryCategories: [
      'Physiotherapist',
      'Sports Medicine Clinic'
    ],
    openingHours: [
      { day: 'Monday', hours: '08:30 AM - 08:00 PM', isOpen: true },
      { day: 'Tuesday', hours: '08:30 AM - 08:00 PM', isOpen: true },
      { day: 'Wednesday', hours: '08:30 AM - 08:00 PM', isOpen: true },
      { day: 'Thursday', hours: '08:30 AM - 08:00 PM', isOpen: true },
      { day: 'Friday', hours: '08:30 AM - 08:00 PM', isOpen: true },
      { day: 'Saturday', hours: '08:30 AM - 06:00 PM', isOpen: true },
      { day: 'Sunday', hours: '09:00 AM - 01:00 PM', isOpen: true },
    ],
    holidayHoursUpdated: true,
    attributes: {
      wheelchairAccessible: true,
      appointmentRequired: true,
      onlineAppointments: true,
      freeParking: true,
      restroomAvailable: true,
    },
    totalReviews: 164,
    rating: 4.6,
    ratingBreakdown: {
      fiveStar: 122,
      fourStar: 26,
      threeStar: 8,
      twoStar: 5,
      oneStar: 3,
    },
    unansweredReviewsCount: 38,
    ownerResponseRate: 77,
    averageResponseTimeDays: 1.9,
    reviewVelocityPerMonth: 8,
    sentimentBreakdown: {
      positive: 81,
      neutral: 13,
      negative: 6,
    },
    topKeywords: [
      { keyword: 'knee replacement recovery', count: 32, sentiment: 'positive' },
      { keyword: 'expert orthopedic surgeon', count: 28, sentiment: 'positive' },
      { keyword: 'caring physiotherapy', count: 24, sentiment: 'positive' },
      { keyword: 'wait time at clinic', count: 9, sentiment: 'neutral' },
      { keyword: 'insurance cashless desk', count: 14, sentiment: 'positive' }
    ],
    reviews: [
      {
        id: 'rev-k1',
        authorName: 'Muruganandam G',
        rating: 5,
        relativeTime: '5 days ago',
        text: 'My mother underwent bilateral total knee replacement here under Dr. Senthil. She walked without support within 4 weeks. Invaluable care!',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Delighted to hear your mother has regained her active lifestyle Muruganandam! Wishing her continuous health.',
        ownerResponseTime: 'within 1 day'
      },
      {
        id: 'rev-k2',
        authorName: 'Deepa Krishnan',
        rating: 4,
        relativeTime: '3 weeks ago',
        text: 'Doctor diagnosis was 100% accurate. Physiotherapy unit on 1st floor is well equipped. Waiting time can be reduced slightly.',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Thank you Deepa! We are expanding our consultation slots to minimize wait times.',
        ownerResponseTime: 'within 2 days'
      }
    ]
  },
  'inymart-academy-madurai': {
    id: 'inymart-academy-madurai',
    placeId: 'ChIJinymartMaduraiPlaceId987',
    name: 'InymarT Academy',
    formattedAddress: 'Plot No. 18, 1st Floor, Melur Main Road, KK Nagar, Near Mattuthavani, Madurai, Tamil Nadu 625020',
    city: 'Madurai',
    state: 'Tamil Nadu',
    phone: '+91 98400 54321',
    website: 'https://inymartacademy.com',
    mapsUrl: 'https://maps.google.com/?cid=9841284719284192',
    claimed: true,
    verified: true,
    primaryCategory: 'Software Training Institute',
    secondaryCategories: [
      'Computer Training School',
      'Internet Marketing Service',
      'Technical School',
      'Certification Training Institute'
    ],
    openingHours: [
      { day: 'Monday', hours: '08:30 AM - 08:00 PM', isOpen: true },
      { day: 'Tuesday', hours: '08:30 AM - 08:00 PM', isOpen: true },
      { day: 'Wednesday', hours: '08:30 AM - 08:00 PM', isOpen: true },
      { day: 'Thursday', hours: '08:30 AM - 08:00 PM', isOpen: true },
      { day: 'Friday', hours: '08:30 AM - 08:00 PM', isOpen: true },
      { day: 'Saturday', hours: '08:30 AM - 07:00 PM', isOpen: true },
      { day: 'Sunday', hours: '09:30 AM - 02:00 PM', isOpen: true }
    ],
    holidayHoursUpdated: true,
    attributes: {
      wheelchairAccessible: true,
      appointmentRequired: false,
      onlineAppointments: true,
      freeParking: true,
      restroomAvailable: true
    },
    totalReviews: 148,
    rating: 4.9,
    ratingBreakdown: {
      fiveStar: 138,
      fourStar: 8,
      threeStar: 2,
      twoStar: 0,
      oneStar: 0
    },
    unansweredReviewsCount: 9,
    ownerResponseRate: 94,
    averageResponseTimeDays: 0.6,
    reviewVelocityPerMonth: 14,
    sentimentBreakdown: {
      positive: 94,
      neutral: 5,
      negative: 1
    },
    topKeywords: [
      { keyword: 'python full stack course', count: 38, sentiment: 'positive' },
      { keyword: 'placement support in Madurai', count: 34, sentiment: 'positive' },
      { keyword: 'practical coding projects', count: 29, sentiment: 'positive' },
      { keyword: 'friendly mentors', count: 26, sentiment: 'positive' },
      { keyword: 'digital marketing training', count: 22, sentiment: 'positive' }
    ],
    reviews: [
      {
        id: 'rev-inymart-1',
        authorName: 'Praveen Kumar',
        rating: 5,
        relativeTime: '4 days ago',
        text: 'Joined InymarT Academy for Full Stack Web Development course. The real-time project practice and 1-on-1 code reviews by faculty helped me crack my first tech job in Madurai! Excellent placement team.',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Congratulations on your placement Praveen! Wishing you a high-flying tech career from team InymarT Academy.',
        ownerResponseTime: 'within 5 hours'
      },
      {
        id: 'rev-inymart-2',
        authorName: 'Divya Bharathi',
        rating: 5,
        relativeTime: '2 weeks ago',
        text: 'The best software training institute in Madurai for non-IT background students. Mentors teach coding from scratch with complete patience. Loved the Python and React curriculum!',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Thank you Divya! We take pride in helping students from all backgrounds transition smoothly into software development.',
        ownerResponseTime: 'within 12 hours'
      },
      {
        id: 'rev-inymart-3',
        authorName: 'Senthil Nathan',
        rating: 5,
        relativeTime: '3 weeks ago',
        text: 'Completed Digital Marketing and SEO training here. Great practical exposure to Google Ads, Meta Ads, and Local SEO campaigns. Highly recommended near KK Nagar.',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Thank you Senthil! Keep applying the live campaign strategies you mastered during the batch.',
        ownerResponseTime: 'within 1 day'
      },
      {
        id: 'rev-inymart-4',
        authorName: 'Karthik V.',
        rating: 4,
        relativeTime: '1 month ago',
        text: 'Course content is up to date and lab facilities are good. Weekend parking near the main road can be crowded during rush hours, but classroom ambiance and mentors are top notch.',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Thank you for the review Karthik. We have arranged reserved basement parking spaces for weekend batches.',
        ownerResponseTime: 'within 1 day'
      }
    ],
    rankingPosition: 1,
    mapVisibilityScore: 98,
    websiteAudit: {
      url: 'https://inymartacademy.com',
      reachable: true,
      httpStatus: 200,
      protocol: 'https',
      isHttps: true,
      responseTimeMs: 142,
      overallScore: 94,
      title: 'Inymart Academy | Best Software & Digital Marketing Training Institute in Madurai',
      titleStatus: 'passed',
      titleLength: 72,
      metaDescription: 'Master Full Stack Web Development, Python, React, and Digital Marketing with 100% placement support at Inymart Academy Madurai.',
      metaDescriptionStatus: 'passed',
      metaDescriptionLength: 138,
      mobileFriendly: true,
      hasViewportTag: true,
      hasOpenGraph: true,
      ogTitle: 'Inymart Academy - Leading IT Training Institute',
      hasCanonical: true,
      canonicalUrl: 'https://inymartacademy.com/',
      server: 'Cloudflare Edge / nginx',
      metrics: {
        mobileFriendlinessScore: 98,
        securityScore: 100,
        metaHealthScore: 92,
        speedPerformanceScore: 95
      },
      recommendations: [
        'Maintain current metadata hygiene and submit updated XML sitemap regularly to Google Search Console.',
        'Leverage Schema.org LocalBusiness structured data on your homepage to amplify Google Knowledge Panel signals.'
      ]
    },
    competitors: [
      {
        id: 'comp-1',
        name: 'Fabevy Software Training & Placement',
        website: 'https://fabevy.com',
        rankingPosition: 2,
        mapVisibilityScore: 91,
        primaryCategory: 'Software Training Institute',
        rating: 4.8,
        totalReviews: 420,
        formattedAddress: 'Madurai, Tamil Nadu',
        isClient: false
      },
      {
        id: 'comp-2',
        name: 'Besant Technologies Madurai',
        website: 'https://besanttechnologies.com',
        rankingPosition: 3,
        mapVisibilityScore: 84,
        primaryCategory: 'Computer Training School',
        rating: 4.7,
        totalReviews: 310,
        formattedAddress: 'Madurai, Tamil Nadu',
        isClient: false
      },
      {
        id: 'comp-3',
        name: 'Livewire Tech Training Academy',
        website: 'https://livewireindia.com',
        rankingPosition: 4,
        mapVisibilityScore: 78,
        primaryCategory: 'Technical Training Center',
        rating: 4.6,
        totalReviews: 265,
        formattedAddress: 'Madurai, Tamil Nadu',
        isClient: false
      }
    ],
    suggestedGaps: [
      { name: 'Web Development Course', relevance: 'Essential', reason: 'High search demand in Madurai for full-stack and front-end developer classes.', estimatedImpressionBoost: '+28% Local Search Views' },
      { name: 'Data Science Training Institute', relevance: 'High', reason: 'Captures advanced college graduates and professionals seeking Python/AI upskilling.', estimatedImpressionBoost: '+20% Tech Queries' },
      { name: 'Corporate Training Center', relevance: 'Medium', reason: 'Unlocks B2B training contracts with regional IT parks in Madurai.', estimatedImpressionBoost: '+14% Corporate Enquiries' }
    ]
  }
};

/**
 * Standard industry category mapping for gap analysis
 */
export const INDUSTRY_CATEGORY_STANDARDS: Record<string, {
  suggestedSecondary: { name: string; relevance: 'High' | 'Medium' | 'Essential'; reason: string; estimatedImpressionBoost: string }[];
}> = {
  'Dentist': {
    suggestedSecondary: [
      { name: 'Teeth Whitening Service', relevance: 'High', reason: 'Captures high-intent cosmetic search queries with 40%+ conversion rate in local search.', estimatedImpressionBoost: '+18% Local Pack Impressions' },
      { name: 'Emergency Dental Service', relevance: 'Essential', reason: 'Triggers Google Maps emergency carousel and "near me open now" priority filters.', estimatedImpressionBoost: '+25% Emergency Searches' },
      { name: 'Pediatric Dentist', relevance: 'Medium', reason: 'Attracts family and children dental checkup queries from neighborhood parents.', estimatedImpressionBoost: '+14% Family Bookings' },
      { name: 'Dental Implants Periodontist', relevance: 'High', reason: 'High-ticket surgical search intent keyword category.', estimatedImpressionBoost: '+22% High Ticket Leads' },
    ]
  },
  'Marketing Agency': {
    suggestedSecondary: [
      { name: 'Internet Marketing Service', relevance: 'Essential', reason: 'Primary search query for B2B local SEO and digital ads buyers in Google Maps.', estimatedImpressionBoost: '+32% B2B Discovery' },
      { name: 'Website Designer', relevance: 'High', reason: 'High-volume category frequently paired with local marketing inquiries.', estimatedImpressionBoost: '+20% Web Inquiries' },
      { name: 'Graphic Designer', relevance: 'Medium', reason: 'Captures branding, catalog, and packaging design searches.', estimatedImpressionBoost: '+12% Design Leads' },
      { name: 'Public Relations Firm', relevance: 'Medium', reason: 'Expands authority into brand reputation and PR searches.', estimatedImpressionBoost: '+10% Corporate Inquiries' },
    ]
  },
  'Cafe': {
    suggestedSecondary: [
      { name: 'Coffee Shop', relevance: 'Essential', reason: 'Most searched generic keyword in Google Maps for daytime beverage stops.', estimatedImpressionBoost: '+45% Map Footfall' },
      { name: 'Coffee Roasters', relevance: 'High', reason: 'Targets specialty coffee enthusiasts seeking bean purchases and artisan brews.', estimatedImpressionBoost: '+22% Specialty Searches' },
      { name: 'Bakery', relevance: 'High', reason: 'Appears in breakfast and brunch local category filters.', estimatedImpressionBoost: '+28% Morning Searches' },
      { name: 'Espresso Bar', relevance: 'Medium', reason: 'Elevates perceived quality for gourmet espresso searches.', estimatedImpressionBoost: '+15% Footfall' },
    ]
  },
  'Orthopedic Clinic': {
    suggestedSecondary: [
      { name: 'Physical Therapy Clinic', relevance: 'Essential', reason: 'Captures post-op and rehabilitation local search patients.', estimatedImpressionBoost: '+30% Patient Volume' },
      { name: 'Pain Management Physician', relevance: 'High', reason: 'Directly targets chronic back, knee, and joint pain search queries.', estimatedImpressionBoost: '+24% High Intent Inquiries' },
      { name: 'Sports Medicine Clinic', relevance: 'High', reason: 'Attracts active athletes and injury rehabilitation cases.', estimatedImpressionBoost: '+18% Sports Inquiries' },
    ]
  },
  'Software Training Institute': {
    suggestedSecondary: [
      { name: 'Computer Training School', relevance: 'Essential', reason: 'Captures foundational programming and college student queries.', estimatedImpressionBoost: '+35% Student Inquiries' },
      { name: 'Internet Marketing Service', relevance: 'High', reason: 'High search volume for digital marketing and SEO courses.', estimatedImpressionBoost: '+25% Local Pack Inquiries' },
      { name: 'Technical School', relevance: 'High', reason: 'Attracts engineering and diploma students seeking practical lab certifications.', estimatedImpressionBoost: '+20% Tech Searches' },
      { name: 'Certification Training Institute', relevance: 'Medium', reason: 'Indexes global IT certification keywords.', estimatedImpressionBoost: '+15% Professional Searches' },
    ]
  },
  'General': {
    suggestedSecondary: [
      { name: 'Consultant', relevance: 'Medium', reason: 'Broadens business categorization for general advice queries.', estimatedImpressionBoost: '+10% Visibility' },
      { name: 'Service Establishment', relevance: 'Medium', reason: 'Improves broad match indexing in neighborhood directories.', estimatedImpressionBoost: '+12% General Discovery' },
      { name: 'Corporate Office', relevance: 'Medium', reason: 'Provides verification signals for regional offices.', estimatedImpressionBoost: '+8% Brand Searches' },
    ]
  }
};

/**
 * Generate a dynamic business profile for any user-entered business name & city
 */
export function generateDynamicBusiness(query: string): BusinessProfile {
  const parts = query.split(/,|\s+in\s+|\s+-\s+/i).map(s => s.trim()).filter(Boolean);
  const rawName = parts[0] || 'Local Business';
  const city = parts[1] || 'Chennai';

  // Detect industry heuristics
  const lowerName = rawName.toLowerCase();
  let primaryCategory = 'Business Center';
  let secondaryCategories = ['Corporate Office'];

  if (lowerName.includes('dental') || lowerName.includes('dentist') || lowerName.includes('smile') || lowerName.includes('teeth')) {
    primaryCategory = 'Dentist';
    secondaryCategories = ['Dental Clinic', 'Teeth Whitening Service'];
  } else if (lowerName.includes('digital') || lowerName.includes('marketing') || lowerName.includes('seo') || lowerName.includes('agency') || lowerName.includes('media')) {
    primaryCategory = 'Marketing Agency';
    secondaryCategories = ['Internet Marketing Service'];
  } else if (lowerName.includes('cafe') || lowerName.includes('coffee') || lowerName.includes('roast') || lowerName.includes('bakery') || lowerName.includes('restaurant')) {
    primaryCategory = 'Cafe';
    secondaryCategories = ['Coffee Shop'];
  } else if (lowerName.includes('ortho') || lowerName.includes('clinic') || lowerName.includes('hospital') || lowerName.includes('health') || lowerName.includes('care')) {
    primaryCategory = 'Medical Clinic';
    secondaryCategories = ['Doctor', 'Health Consultant'];
  } else if (lowerName.includes('law') || lowerName.includes('legal') || lowerName.includes('advocate')) {
    primaryCategory = 'Law Firm';
    secondaryCategories = ['Legal Services'];
  }

  // Detect spam/keyword stuffing in rawName
  const isStuffed = /best|top|cheap|near me|24\/7|#1|expert/i.test(rawName) || rawName.includes('|') || rawName.includes(' - ');

  const totalReviews = 68;
  const rating = 4.4;

  return {
    id: `dyn-${Date.now()}`,
    placeId: `ChIJ_${Math.random().toString(36).substring(2, 12)}`,
    name: rawName,
    formattedAddress: `Plot 14, Commercial Complex, Sector 4, ${city}`,
    city: city,
    state: 'State',
    phone: '+91 98400 12345',
    website: `https://${rawName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
    mapsUrl: `https://maps.google.com/?q=${encodeURIComponent(rawName + ' ' + city)}`,
    claimed: true,
    verified: true,
    primaryCategory,
    secondaryCategories,
    openingHours: [
      { day: 'Monday', hours: '09:00 AM - 07:00 PM', isOpen: true },
      { day: 'Tuesday', hours: '09:00 AM - 07:00 PM', isOpen: true },
      { day: 'Wednesday', hours: '09:00 AM - 07:00 PM', isOpen: true },
      { day: 'Thursday', hours: '09:00 AM - 07:00 PM', isOpen: true },
      { day: 'Friday', hours: '09:00 AM - 07:00 PM', isOpen: true },
      { day: 'Saturday', hours: '09:00 AM - 05:00 PM', isOpen: true },
      { day: 'Sunday', hours: 'Closed', isOpen: false },
    ],
    holidayHoursUpdated: !isStuffed,
    attributes: {
      wheelchairAccessible: true,
      appointmentRequired: true,
      onlineAppointments: true,
      freeParking: false,
      restroomAvailable: true,
    },
    totalReviews,
    rating,
    ratingBreakdown: {
      fiveStar: 42,
      fourStar: 16,
      threeStar: 5,
      twoStar: 3,
      oneStar: 2,
    },
    unansweredReviewsCount: 18,
    ownerResponseRate: 73,
    averageResponseTimeDays: 2.1,
    reviewVelocityPerMonth: 5,
    sentimentBreakdown: {
      positive: 75,
      neutral: 15,
      negative: 10,
    },
    topKeywords: [
      { keyword: 'prompt service', count: 18, sentiment: 'positive' },
      { keyword: 'experienced team', count: 14, sentiment: 'positive' },
      { keyword: 'reasonable pricing', count: 11, sentiment: 'positive' },
      { keyword: 'appointment delay', count: 4, sentiment: 'neutral' },
      { keyword: 'easy location', count: 8, sentiment: 'positive' }
    ],
    reviews: [
      {
        id: 'rev-dyn-1',
        authorName: 'Ramesh Sundaram',
        rating: 5,
        relativeTime: '1 week ago',
        text: `Very professional service at ${rawName}. The team went above and beyond to ensure our requirements were addressed smoothly.`,
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Thank you for your valuable feedback and trust!',
        ownerResponseTime: 'within 1 day'
      },
      {
        id: 'rev-dyn-2',
        authorName: 'Karthik Raja',
        rating: 4,
        relativeTime: '3 weeks ago',
        text: 'Good service and courteous staff. Had to wait slightly during peak rush hour, but overall great experience.',
        sentiment: 'positive',
        hasOwnerResponse: false
      },
      {
        id: 'rev-dyn-3',
        authorName: 'Anitha S.',
        rating: 4,
        relativeTime: '1 month ago',
        text: 'Clear communication and transparent quotes. Highly recommended in this area.',
        sentiment: 'positive',
        hasOwnerResponse: true,
        ownerResponseText: 'Thank you Anitha!',
        ownerResponseTime: 'within 2 days'
      }
    ],
    rankingPosition: 1,
    mapVisibilityScore: 95,
    websiteAudit: {
      url: `https://${rawName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
      reachable: true,
      httpStatus: 200,
      protocol: 'https',
      isHttps: true,
      responseTimeMs: 185,
      overallScore: 91,
      title: `${rawName} | Official Website & Verified Services`,
      titleStatus: 'passed',
      titleLength: 48,
      metaDescription: `Discover premier services, verified customer ratings, and responsive support at ${rawName} in ${city}.`,
      metaDescriptionStatus: 'passed',
      metaDescriptionLength: 122,
      mobileFriendly: true,
      hasViewportTag: true,
      hasOpenGraph: true,
      ogTitle: `${rawName} - Local Services`,
      hasCanonical: true,
      canonicalUrl: `https://${rawName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
      server: 'Cloudflare / nginx',
      metrics: {
        mobileFriendlinessScore: 98,
        securityScore: 100,
        metaHealthScore: 88,
        speedPerformanceScore: 92
      },
      recommendations: [
        'Maintain current metadata hygiene and submit updated XML sitemap regularly to Google Search Console.',
        'Leverage Schema.org LocalBusiness structured data on your homepage to amplify Google Knowledge Panel signals.'
      ]
    },
    competitors: [
      {
        id: 'dyn-comp-1',
        name: `Premier ${primaryCategory} Specialists`,
        website: `https://premier${primaryCategory.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
        rankingPosition: 2,
        mapVisibilityScore: 88,
        primaryCategory,
        rating: 4.7,
        totalReviews: 185,
        formattedAddress: `${city}, Tamil Nadu`,
        isClient: false
      },
      {
        id: 'dyn-comp-2',
        name: `City ${primaryCategory} Hub`,
        website: `https://city${primaryCategory.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
        rankingPosition: 3,
        mapVisibilityScore: 82,
        primaryCategory,
        rating: 4.6,
        totalReviews: 140,
        formattedAddress: `${city}, Tamil Nadu`,
        isClient: false
      },
      {
        id: 'dyn-comp-3',
        name: `Apex ${primaryCategory} Group`,
        website: `https://apex${primaryCategory.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
        rankingPosition: 4,
        mapVisibilityScore: 76,
        primaryCategory,
        rating: 4.5,
        totalReviews: 95,
        formattedAddress: `${city}, Tamil Nadu`,
        isClient: false
      }
    ]
  };
}
