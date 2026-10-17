export type ScoreCategory = 'healthy' | 'needs_optimization' | 'critical';

export interface BusinessReview {
  id: string;
  authorName: string;
  rating: number;
  relativeTime: string;
  text: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  hasOwnerResponse: boolean;
  ownerResponseText?: string;
  ownerResponseTime?: string;
}

export interface KeywordMention {
  keyword: string;
  count: number;
  sentiment: 'positive' | 'neutral' | 'negative';
}

export interface CategoryGapItem {
  name: string;
  relevance: 'High' | 'Medium' | 'Essential';
  reason: string;
  estimatedImpressionBoost: string;
}

export interface WorkingDayHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface KeywordStuffingAnalysis {
  isStuffed: boolean;
  cleanName: string;
  suspiciousKeywords: string[];
  riskLevel: 'Low' | 'Moderate' | 'High';
  recommendation: string;
}

export interface ProfileChecklistItem {
  id: string;
  label: string;
  status: 'passed' | 'warning' | 'failed';
  value: string;
  details: string;
  impactWeight: number; // contribution to score
  actionHint: string;
}

export interface AuditHealthScore {
  overall: number; // 0 - 100
  grade: ScoreCategory;
  breakdown: {
    categorySetup: number; // out of 25
    profileCompletion: number; // out of 25
    reviewQuality: number; // out of 25
    ownerResponse: number; // out of 25
  };
}

export interface ActionableTask {
  id: string;
  title: string;
  description: string;
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  impact: string;
  category: 'Categories' | 'Checklist' | 'Reviews' | 'Optimization';
  completed: boolean;
}

export interface BusinessProfile {
  id: string;
  placeId: string;
  name: string;
  formattedAddress: string;
  city: string;
  state: string;
  phone: string;
  website: string;
  mapsUrl: string;
  latitude?: number;
  longitude?: number;
  claimed: boolean;
  verified: boolean;
  primaryCategory: string;
  secondaryCategories: string[];
  suggestedGaps?: CategoryGapItem[];
  openingHours: WorkingDayHours[];
  holidayHoursUpdated: boolean;
  attributes: {
    wheelchairAccessible: boolean;
    appointmentRequired: boolean;
    onlineAppointments: boolean;
    freeParking: boolean;
    restroomAvailable: boolean;
  };
  totalReviews: number;
  rating: number;
  ratingBreakdown: {
    fiveStar: number;
    fourStar: number;
    threeStar: number;
    twoStar: number;
    oneStar: number;
  };
  unansweredReviewsCount: number;
  ownerResponseRate: number; // e.g. 75%
  averageResponseTimeDays: number; // e.g. 1.5 days
  reviewVelocityPerMonth: number;
  sentimentBreakdown: {
    positive: number; // percentage e.g. 80
    neutral: number; // percentage e.g. 12
    negative: number; // percentage e.g. 8
  };
  topKeywords: KeywordMention[];
  reviews: BusinessReview[];
  rankingPosition?: number;
  mapVisibilityScore?: number;
  source?: 'serpapi' | 'google_places' | 'mock';
  websiteAudit?: WebsiteAuditData;
  competitors?: CompetitorComparisonItem[];
}

export interface WebsiteAuditData {
  url: string;
  reachable: boolean;
  httpStatus: number;
  protocol: 'https' | 'http';
  isHttps: boolean;
  responseTimeMs: number;
  overallScore: number;
  title: string;
  titleStatus: 'passed' | 'warning' | 'failed';
  titleLength: number;
  metaDescription: string;
  metaDescriptionStatus: 'passed' | 'warning' | 'failed';
  metaDescriptionLength: number;
  mobileFriendly: boolean;
  hasViewportTag: boolean;
  hasOpenGraph: boolean;
  ogTitle?: string;
  hasCanonical: boolean;
  canonicalUrl?: string;
  server?: string;
  metrics: {
    mobileFriendlinessScore: number;
    securityScore: number;
    metaHealthScore: number;
    speedPerformanceScore: number;
  };
  recommendations: string[];
}

export interface CompetitorComparisonItem {
  id: string;
  name: string;
  website?: string;
  rankingPosition: number;
  mapVisibilityScore: number;
  primaryCategory: string;
  rating: number;
  totalReviews: number;
  formattedAddress?: string;
  isClient?: boolean;
}

export interface AuditResult {
  business: BusinessProfile;
  healthScore: AuditHealthScore;
  completionPercentage: number;
  keywordStuffing: KeywordStuffingAnalysis;
  categoryGaps: CategoryGapItem[];
  checklist: ProfileChecklistItem[];
  actionableTasks: ActionableTask[];
  auditedAt: string;
}

export interface WhiteLabelConfig {
  agencyName: string;
  auditorName: string;
  clientName: string;
  agencyWebsite: string;
  agencyPhone: string;
  agencyEmail: string;
  brandColor: string;
  customNotes?: string;
}

export interface NapDirectoryItem {
  id: string;
  name: string;
  type: string;
  status: 'matched' | 'synced' | 'discrepancy' | 'unclaimed';
  matchScore: number;
  domainAuthority: number;
  url?: string;
  discrepancyNote?: string;
}

export interface TargetKeywordItem {
  id: string;
  keyword: string;
  monthlyVolume: number;
  intent: 'Transactional' | 'Commercial' | 'Informational' | 'Navigational';
  competition: 'Low' | 'Medium' | 'High';
  currentRank: number; // 1 = #1, 2 = #2, etc.
  rankChange: number; // e.g. +2, 0, -1
  serpFeature: 'Local 3-Pack' | 'Organic #1' | 'Knowledge Panel';
}

export interface LsiKeywordItem {
  id: string;
  keyword: string;
  monthlyVolume: number;
  type: 'LSI Long-Tail' | 'Voice Search Query';
  voiceEngine?: 'Google Assistant' | 'Siri / Apple' | 'Alexa';
}

export interface GeogridNode {
  id: string;
  x: number;
  y: number;
  rank: number;
  neighborhood: string;
  distanceKm: number;
  isCenter?: boolean;
}

export interface SearcherRadiusStat {
  radiusLabel: string;
  distanceRange: string;
  trafficPercentage: number;
  averageRank: number;
  conversionRate: string;
}

