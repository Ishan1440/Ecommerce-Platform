import { Product, Recommendation } from '../types';
import { products } from '../data/products';

export class RecommendationService {
  // Get trending products based on ratings and reviews
  static getTrendingProducts(limit: number = 6): Product[] {
    return products
      .sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews))
      .slice(0, limit);
  }

  // Get personalized recommendations based on user preferences
  static getPersonalizedRecommendations(userPreferences: string[], limit: number = 6): Product[] {
    const scoredProducts = products.map(product => {
      let score = 0;
      userPreferences.forEach(pref => {
        if (product.category.toLowerCase().includes(pref.toLowerCase())) score += 3;
        if (product.tags.some(tag => tag.toLowerCase().includes(pref.toLowerCase()))) score += 2;
        if (product.name.toLowerCase().includes(pref.toLowerCase())) score += 1;
      });
      return { product, score };
    });

    return scoredProducts
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.product);
  }

  // Get category-based recommendations
  static getCategoryRecommendations(category: string, limit: number = 6): Product[] {
    return products
      .filter(product => product.category === category)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }

  // Get similar products based on tags and category
  static getSimilarProducts(productId: number, limit: number = 4): Product[] {
    const product = products.find(p => p.id === productId);
    if (!product) return [];

    const scoredProducts = products
      .filter(p => p.id !== productId)
      .map(p => {
        let score = 0;
        if (p.category === product.category) score += 3;
        const commonTags = p.tags.filter(tag => product.tags.includes(tag));
        score += commonTags.length * 2;
        return { product: p, score };
      });

    return scoredProducts
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.product);
  }

  // Get products on sale
  static getSaleProducts(limit: number = 6): Product[] {
    return products
      .filter(product => product.originalPrice && product.originalPrice > product.price)
      .sort((a, b) => {
        const discountA = ((a.originalPrice! - a.price) / a.originalPrice!) * 100;
        const discountB = ((b.originalPrice! - b.price) / b.originalPrice!) * 100;
        return discountB - discountA;
      })
      .slice(0, limit);
  }

  // Get all recommendations for homepage
  static getAllRecommendations(userPreferences: string[] = []): Recommendation[] {
    return [
      {
        type: 'trending',
        title: 'Trending Now',
        products: this.getTrendingProducts(6)
      },
      {
        type: 'personalized',
        title: 'Recommended for You',
        products: userPreferences.length > 0 
          ? this.getPersonalizedRecommendations(userPreferences, 6)
          : this.getTrendingProducts(6)
      },
      {
        type: 'category',
        title: 'Best in Electronics',
        products: this.getCategoryRecommendations('Electronics', 6)
      },
      {
        type: 'category',
        title: 'Fashion Favorites',
        products: this.getCategoryRecommendations('Fashion', 6)
      }
    ];
  }

  // Get recommendations for product detail page
  static getProductPageRecommendations(productId: number): Recommendation[] {
    return [
      {
        type: 'similar',
        title: 'Similar Products',
        products: this.getSimilarProducts(productId, 4)
      },
      {
        type: 'trending',
        title: 'You Might Also Like',
        products: this.getTrendingProducts(4)
      }
    ];
  }
} 