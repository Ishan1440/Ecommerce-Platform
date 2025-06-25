import React from 'react';
import { Recommendation } from '../types';
import ProductCard from './ProductCard';

interface RecommendationSectionProps {
  recommendation: Recommendation;
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({ recommendation }) => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">{recommendation.title}</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {recommendation.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="min-w-0"
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendationSection; 