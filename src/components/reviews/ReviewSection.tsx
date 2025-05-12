import React, { useState } from 'react';
import { Star, ThumbsUp, Flag } from 'lucide-react';
import { Review } from '../../types';

interface ReviewSectionProps {
  itemId: string;
  itemType: 'destination' | 'accommodation' | 'transportation' | 'attraction';
  reviews?: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ itemId, itemType, reviews = [] }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewContent, setReviewContent] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit the review to your backend
    console.log('Review submitted:', {
      itemId,
      itemType,
      rating,
      title: reviewTitle,
      content: reviewContent
    });
    
    // Reset form
    setRating(5);
    setReviewTitle('');
    setReviewContent('');
    setShowReviewForm(false);
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
        >
          Write a Review
        </button>
      </div>

      {showReviewForm && (
        <form onSubmit={handleSubmitReview} className="mb-8 border-b pb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  <Star size={24} fill={star <= rating ? 'currentColor' : 'none'} />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="reviewTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="reviewTitle"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Summarize your experience"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="reviewContent" className="block text-sm font-medium text-gray-700 mb-1">
              Review
            </label>
            <textarea
              id="reviewContent"
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 h-32"
              placeholder="Share your experience..."
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => setShowReviewForm(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">{review.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < review.rating ? '#FBBF24' : 'none'}
                        stroke={i < review.rating ? '#FBBF24' : 'currentColor'}
                      />
                    ))}
                  </div>
                  <span>•</span>
                  <span>{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </div>
              <button 
                className="text-gray-400 hover:text-gray-600"
                aria-label="Report review"
              >
                <Flag size={16} />
              </button>
            </div>
            
            <p className="text-gray-700 mb-4">{review.content}</p>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-gray-600 hover:text-primary-600">
                <ThumbsUp size={16} />
                <span>{review.helpfulCount}</span>
              </button>
            </div>
          </div>
        ))}

        {reviews.length === 0 && (
          <p className="text-gray-600 text-center py-4">
            No reviews yet. Be the first to share your experience!
          </p>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;