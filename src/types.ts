/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Program {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  source: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  category: 'ring' | 'training' | 'sparring' | 'kids' | 'women' | 'workouts' | 'equipment' | 'interior';
  title: string;
  image: string;
}
