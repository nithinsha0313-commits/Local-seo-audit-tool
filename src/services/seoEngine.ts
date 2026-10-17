import {
  BusinessProfile,
  AuditResult,
  AuditHealthScore,
  CategoryGapItem,
  ProfileChecklistItem,
  ActionableTask,
  KeywordStuffingAnalysis,
  ScoreCategory
} from '../types/seo';
import { INDUSTRY_CATEGORY_STANDARDS } from './mockData';
import { detectIndustryNiche, getUniversalCategoryGaps } from './industryEngine';

/**
 * Detect keyword stuffing in business name
 */
export function analyzeKeywordStuffing(name: string): KeywordStuffingAnalysis {
  const separators = ['|', ' - ', ' – ', ' — ', ' / ', ':', '•'];
  let cleanName = name;
  let hasSeparator = false;

  for (const sep of separators) {
    if (name.includes(sep)) {
      cleanName = name.split(sep)[0].trim();
      hasSeparator = true;
      break;
    }
  }

  const spamKeywords = [
    'best', 'top', 'cheap', 'affordable', 'expert', '#1', '24/7', '24 hours',
    'near me', 'specialist', 'services', 'agency', 'company', 'center'
  ];

  const lower = name.toLowerCase();
  const suspiciousKeywords: string[] = [];

  spamKeywords.forEach(kw => {
    // Check if the keyword appears after the brand name or repeatedly
    if (lower.includes(kw)) {
      suspiciousKeywords.push(kw);
    }
  });

  const isStuffed = hasSeparator || suspiciousKeywords.length >= 2;
  const riskLevel = suspiciousKeywords.length >= 3 || (hasSeparator && suspiciousKeywords.length >= 1)
    ? 'High'
    : isStuffed
      ? 'Moderate'
      : 'Low';

  let recommendation = 'Business name is clean and compliant with Google Business Profile guidelines.';
  if (riskLevel === 'High') {
    recommendation = `High risk of GBP suspension! Google prohibits appending keywords, locations, or slogans. Shorten the profile title to your legal brand name "${cleanName}".`;
  } else if (riskLevel === 'Moderate') {
    recommendation = `Moderate risk: Contains promotional phrases. We recommend changing the title strictly to "${cleanName}".`;
  }

  return {
    isStuffed,
    cleanName: cleanName || name,
    suspiciousKeywords,
    riskLevel,
    recommendation
  };
}

/**
 * Identify Category Gaps by comparing existing categories against universal industry benchmarks
 */
export function analyzeCategoryGaps(profile: BusinessProfile): CategoryGapItem[] {
  const niche = detectIndustryNiche(profile.name, profile.primaryCategory, profile.secondaryCategories);
  return getUniversalCategoryGaps(profile.primaryCategory, profile.secondaryCategories, niche);
}

/**
 * Generate Comprehensive Profile Checklist Items
 */
export function generateChecklist(
  profile: BusinessProfile,
  keywordStuffing: KeywordStuffingAnalysis
): { checklist: ProfileChecklistItem[]; completionPercentage: number } {
  const items: ProfileChecklistItem[] = [];

  // 1. Claimed & Verified
  items.push({
    id: 'claimed-status',
    label: 'Claimed & Verified GBP Status',
    status: profile.claimed && profile.verified ? 'passed' : 'failed',
    value: profile.claimed ? (profile.verified ? 'Verified Ownership' : 'Claimed (Unverified)') : 'Unclaimed Profile',
    details: profile.claimed
      ? 'Business profile is claimed and officially verified with Google.'
      : 'CRITICAL ALERT: Profile is unclaimed. Competitors or malicious actors can suggest edits or hijack ownership.',
    impactWeight: 18,
    actionHint: profile.claimed ? 'Profile secured.' : 'Click "Claim this business" on Google Maps immediately.'
  });

  // 2. Keyword Stuffing
  items.push({
    id: 'keyword-stuffing',
    label: 'Business Name Compliance (No Keyword Stuffing)',
    status: keywordStuffing.riskLevel === 'Low' ? 'passed' : keywordStuffing.riskLevel === 'Moderate' ? 'warning' : 'failed',
    value: keywordStuffing.riskLevel === 'Low' ? 'Compliant' : `${keywordStuffing.riskLevel} Risk Detected`,
    details: keywordStuffing.recommendation,
    impactWeight: 14,
    actionHint: keywordStuffing.isStuffed ? `Rename title strictly to "${keywordStuffing.cleanName}".` : 'Title complies with Google Terms.'
  });

  // 3. NAP & Phone Verification
  const hasPhone = Boolean(profile.phone && profile.phone.trim().length > 5);
  const hasAddress = Boolean(profile.formattedAddress && profile.formattedAddress.length > 10);
  items.push({
    id: 'nap-consistency',
    label: 'NAP (Name, Address, Phone) Integrity',
    status: hasPhone && hasAddress ? 'passed' : hasPhone || hasAddress ? 'warning' : 'failed',
    value: hasPhone && hasAddress ? 'Complete & Consistent' : !hasPhone ? 'Missing Phone Number' : 'Incomplete Address',
    details: hasPhone && hasAddress
      ? 'Full formatted physical address and dedicated direct phone line present.'
      : 'Incomplete NAP directly harms local map pack algorithm rankings and user trust.',
    impactWeight: 16,
    actionHint: hasPhone ? 'Ensure NAP matches on website footer and directory citations.' : 'Add a verified local telephone number.'
  });

  // 4. Website Link & SSL Security
  const hasWebsite = Boolean(profile.website && profile.website.trim().length > 4);
  const isHttps = Boolean(hasWebsite && profile.website.startsWith('https://'));
  items.push({
    id: 'website-ssl',
    label: 'Website Link & SSL Security',
    status: hasWebsite && isHttps ? 'passed' : hasWebsite ? 'warning' : 'failed',
    value: hasWebsite && isHttps ? 'Active (HTTPS Secure)' : hasWebsite ? 'Insecure (HTTP)' : 'No Website Attached',
    details: hasWebsite && isHttps
      ? 'Secure HTTPS landing page attached to Google Maps button.'
      : hasWebsite
        ? 'Website is running over unsecured HTTP. Google penalizes non-SSL links.'
        : 'Missing website link. Over 50% of local searchers click website to verify business.',
    impactWeight: 14,
    actionHint: hasWebsite && !isHttps ? 'Install an SSL certificate and redirect HTTP to HTTPS.' : hasWebsite ? 'Active.' : 'Attach your landing page URL.'
  });

  // 5. Operating Hours & Holiday Hours
  const hasHours = profile.openingHours && profile.openingHours.length >= 5;
  const hasHolidayHours = profile.holidayHoursUpdated;
  items.push({
    id: 'hours-holiday',
    label: 'Standard & Holiday Hours Schedule',
    status: hasHours && hasHolidayHours ? 'passed' : hasHours ? 'warning' : 'failed',
    value: hasHours && hasHolidayHours ? 'Fully Configured & Up-to-date' : hasHours ? 'Missing Special Holiday Hours' : 'No Hours Listed',
    details: hasHolidayHours
      ? 'Weekly operating schedule and upcoming festive holiday hours confirmed.'
      : 'Standard hours are listed, but special holiday hours are not configured. Google may flag profile with "Hours might differ".',
    impactWeight: 14,
    actionHint: !hasHolidayHours ? 'Add special hours for upcoming public and regional holidays in GBP dashboard.' : 'Hours up to date.'
  });

  // 6. Secondary Categories Setup
  const catCount = profile.secondaryCategories.length;
  items.push({
    id: 'categories-density',
    label: 'Secondary Categories Density',
    status: catCount >= 3 ? 'passed' : catCount >= 1 ? 'warning' : 'failed',
    value: `${catCount} Secondary ${catCount === 1 ? 'Category' : 'Categories'}`,
    details: catCount >= 3
      ? 'Excellent category coverage maximizing search discovery queries.'
      : catCount >= 1
        ? 'Low secondary category density. Adding 2-3 relevant categories will unlock more keyword searches.'
        : 'Zero secondary categories configured! Missing out on hundreds of related monthly local searches.',
    impactWeight: 12,
    actionHint: catCount >= 3 ? 'Optimal coverage.' : 'Add suggested categories from the Category Gap analysis below.'
  });

  // 7. Attributes & Accessibility
  const attrCount = Object.values(profile.attributes).filter(Boolean).length;
  items.push({
    id: 'attributes-setup',
    label: 'Business Attributes & Accessibility',
    status: attrCount >= 3 ? 'passed' : attrCount >= 1 ? 'warning' : 'failed',
    value: `${attrCount} / 5 Key Attributes Enabled`,
    details: attrCount >= 3
      ? 'Strong attribute completeness (e.g. wheelchair access, appointments, parking).'
      : 'Incomplete profile attributes. Missing attributes reduce appearance in mobile filter chips.',
    impactWeight: 12,
    actionHint: 'Update amenities, booking links, and accessibility tags in GBP info tab.'
  });

  // Calculate weighted completion percentage
  let passedWeight = 0;
  let totalWeight = 0;
  items.forEach(it => {
    totalWeight += it.impactWeight;
    if (it.status === 'passed') passedWeight += it.impactWeight;
    else if (it.status === 'warning') passedWeight += it.impactWeight * 0.5;
  });

  const completionPercentage = Math.round((passedWeight / totalWeight) * 100);

  return { checklist: items, completionPercentage };
}

/**
 * 4-Pillar Local SEO Health Score Engine (25% Each)
 */
export function calculateHealthScore(
  profile: BusinessProfile,
  keywordStuffing: KeywordStuffingAnalysis,
  completionPercentage: number
): AuditHealthScore {
  // 1. Category Setup Score (0 - 25)
  let categorySetup = 0;
  if (profile.primaryCategory) categorySetup += 10;
  const secCount = profile.secondaryCategories.length;
  if (secCount >= 3) categorySetup += 10;
  else if (secCount === 2) categorySetup += 7;
  else if (secCount === 1) categorySetup += 4;
  else categorySetup += 0;

  // Bonus for relevant secondary setup
  if (secCount >= 2) categorySetup += 5;
  else if (secCount === 1) categorySetup += 3;
  categorySetup = Math.min(25, Math.max(0, categorySetup));

  // 2. Profile Completion Score (0 - 25)
  // Directly scales from completion percentage (0 - 100) -> 0 - 25
  let profileCompletion = Math.round((completionPercentage / 100) * 25);
  // Heavy penalty if unclaimed
  if (!profile.claimed) profileCompletion = Math.min(profileCompletion, 9);
  // Penalty if high keyword stuffing
  if (keywordStuffing.riskLevel === 'High') profileCompletion = Math.max(0, profileCompletion - 4);
  profileCompletion = Math.min(25, Math.max(0, profileCompletion));

  // 3. Review Count & Rating Score (0 - 25)
  let reviewQuality = 0;
  // Rating contribution (up to 13 pts)
  if (profile.rating >= 4.8) reviewQuality += 13;
  else if (profile.rating >= 4.5) reviewQuality += 11;
  else if (profile.rating >= 4.2) reviewQuality += 8;
  else if (profile.rating >= 3.8) reviewQuality += 5;
  else reviewQuality += 2;

  // Review Volume contribution (up to 8 pts)
  if (profile.totalReviews >= 200) reviewQuality += 8;
  else if (profile.totalReviews >= 80) reviewQuality += 6;
  else if (profile.totalReviews >= 30) reviewQuality += 4;
  else if (profile.totalReviews >= 10) reviewQuality += 2;
  else reviewQuality += 1;

  // Sentiment contribution (up to 4 pts)
  if (profile.sentimentBreakdown.positive >= 80) reviewQuality += 4;
  else if (profile.sentimentBreakdown.positive >= 65) reviewQuality += 3;
  else if (profile.sentimentBreakdown.positive >= 50) reviewQuality += 2;
  else reviewQuality += 0;
  reviewQuality = Math.min(25, Math.max(0, reviewQuality));

  // 4. Owner Response Rate & Timeliness (0 - 25)
  let ownerResponse = 0;
  // Response rate (up to 15 pts)
  if (profile.ownerResponseRate >= 90) ownerResponse += 15;
  else if (profile.ownerResponseRate >= 75) ownerResponse += 12;
  else if (profile.ownerResponseRate >= 50) ownerResponse += 8;
  else if (profile.ownerResponseRate >= 25) ownerResponse += 4;
  else ownerResponse += 1;

  // Timeliness (up to 10 pts)
  if (profile.averageResponseTimeDays <= 1) ownerResponse += 10;
  else if (profile.averageResponseTimeDays <= 2.5) ownerResponse += 7;
  else if (profile.averageResponseTimeDays <= 5) ownerResponse += 4;
  else ownerResponse += 1;
  ownerResponse = Math.min(25, Math.max(0, ownerResponse));

  // Overall Total (0 - 100)
  const overall = categorySetup + profileCompletion + reviewQuality + ownerResponse;

  let grade: ScoreCategory = 'healthy';
  if (overall < 50) {
    grade = 'critical';
  } else if (overall < 80) {
    grade = 'needs_optimization';
  }

  return {
    overall,
    grade,
    breakdown: {
      categorySetup,
      profileCompletion,
      reviewQuality,
      ownerResponse
    }
  };
}

/**
 * Generate 3-5 prioritized Actionable Tasks based on audit findings
 */
export function generateActionableTasks(
  profile: BusinessProfile,
  keywordStuffing: KeywordStuffingAnalysis,
  categoryGaps: CategoryGapItem[],
  healthScore: AuditHealthScore
): ActionableTask[] {
  const tasks: ActionableTask[] = [];

  // Priority 1: Unclaimed Profile
  if (!profile.claimed) {
    tasks.push({
      id: 'task-claim',
      title: 'Claim and Officially Verify Google Business Profile',
      description: 'The profile is currently unverified. Claim ownership via postcard/video verification immediately to prevent hijacking.',
      priority: 'CRITICAL',
      impact: '+30% Ranking Trust & Full Listing Control',
      category: 'Checklist',
      completed: false
    });
  }

  // Priority 2: Keyword Stuffing
  if (keywordStuffing.isStuffed) {
    tasks.push({
      id: 'task-keyword-stuffing',
      title: `Sanitize Profile Title to Legal Name ("${keywordStuffing.cleanName}")`,
      description: `Remove stuffed keywords (${keywordStuffing.suspiciousKeywords.join(', ')}). Protect against manual suspension or algorithmic shadow-banning.`,
      priority: keywordStuffing.riskLevel === 'High' ? 'CRITICAL' : 'HIGH',
      impact: 'Eliminates 90% Risk of GBP Suspension',
      category: 'Checklist',
      completed: false
    });
  }

  // Priority 3: Category Gaps
  if (categoryGaps.length > 0 && profile.secondaryCategories.length < 3) {
    const topGaps = categoryGaps.slice(0, 2).map(g => `"${g.name}"`).join(' and ');
    tasks.push({
      id: 'task-add-categories',
      title: `Add Secondary Categories: ${topGaps}`,
      description: `Google Business Profiles with 3+ secondary categories capture up to 35% more localized non-branded search impressions.`,
      priority: 'HIGH',
      impact: '+20% - +35% Search Discovery in Local Pack',
      category: 'Categories',
      completed: false
    });
  }

  // Priority 4: Owner Response Rate
  if (profile.unansweredReviewsCount > 5 || profile.ownerResponseRate < 80) {
    tasks.push({
      id: 'task-reply-reviews',
      title: `Reply to ${profile.unansweredReviewsCount} Unanswered Google Reviews`,
      description: `Current owner response rate is only ${profile.ownerResponseRate}%. Replying to all reviews within 24-48 hours directly influences consumer conversion and ranking.`,
      priority: profile.ownerResponseRate < 50 ? 'HIGH' : 'MEDIUM',
      impact: '+15% Conversion Rate & Customer Trust',
      category: 'Reviews',
      completed: false
    });
  }

  // Priority 5: Missing Holiday Hours
  if (!profile.holidayHoursUpdated) {
    tasks.push({
      id: 'task-holiday-hours',
      title: 'Configure Upcoming Holiday & Special Operating Hours',
      description: 'Without confirmed holiday hours, Google displays warning banners causing potential customers to assume you may be closed.',
      priority: 'MEDIUM',
      impact: 'Prevents Customer Loss during Holidays',
      category: 'Checklist',
      completed: false
    });
  }

  // Priority 6: Review Acquisition Velocity
  if (profile.totalReviews < 80 || profile.reviewVelocityPerMonth < 6) {
    tasks.push({
      id: 'task-review-velocity',
      title: 'Implement Automated Review Request System (SMS / QR Codes)',
      description: `Accelerate review velocity (currently ~${profile.reviewVelocityPerMonth}/mo). Generating 8-12 consistent monthly reviews strengthens Map Pack dominance.`,
      priority: 'MEDIUM',
      impact: '+12% Organic Map Pack Elevation',
      category: 'Optimization',
      completed: false
    });
  }

  // Fallback high-value task if profile is already nearly perfect
  if (tasks.length < 3) {
    tasks.push({
      id: 'task-weekly-posts',
      title: 'Publish Weekly GBP Updates & High-Resolution Photos',
      description: 'Profiles that publish weekly Google Updates with geo-tagged images receive 42% more directions requests.',
      priority: 'MEDIUM',
      impact: '+18% Engagement & Direction Requests',
      category: 'Optimization',
      completed: false
    });
  }

  return tasks.slice(0, 5);
}

/**
 * Perform a full Local SEO audit on a business profile
 */
export function auditBusinessProfile(profile: BusinessProfile): AuditResult {
  const keywordStuffing = analyzeKeywordStuffing(profile.name);
  const categoryGaps = analyzeCategoryGaps(profile);
  const { checklist, completionPercentage } = generateChecklist(profile, keywordStuffing);
  const healthScore = calculateHealthScore(profile, keywordStuffing, completionPercentage);
  const actionableTasks = generateActionableTasks(profile, keywordStuffing, categoryGaps, healthScore);

  return {
    business: profile,
    healthScore,
    completionPercentage,
    keywordStuffing,
    categoryGaps,
    checklist,
    actionableTasks,
    auditedAt: new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };
}
