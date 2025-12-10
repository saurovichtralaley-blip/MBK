import { LucideIcon } from 'lucide-react';

export interface Asset {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  value?: string;
  category: 'physical' | 'digital' | 'legal' | 'network';
}

export interface Metric {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  rating?: number;
  count?: number;
}

export interface GrowthPoint {
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  estimatedValueAdd: string;
}
