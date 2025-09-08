'use client';

import { useState, useEffect } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { getLikeCount, checkUserLike, toggleLike } from '@/lib/likes';

interface FloatingActionButtonsProps {
  postId: string;
}

export default function FloatingActionButtons({ postId }: FloatingActionButtonsProps) {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    let storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      storedUserId = 'user_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', storedUserId);
    }
    setUserId(storedUserId);

    const loadLikeData = async () => {
      try {
        const count = await getLikeCount(postId);
        const liked = await checkUserLike(postId, storedUserId);
        setLikeCount(count);
        setIsLiked(liked);
      } catch (error) {
        console.error('Error loading like data:', error);
      }
    };

    loadLikeData();
  }, [postId]);

  const handleLike = async () => {
    if (isLoading || !userId) return;

    setIsLoading(true);
    try {
      const result = await toggleLike(postId, userId);
      setIsLiked(result.liked);
      setLikeCount(result.count);
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToComments = () => {
    const commentsSection = document.getElementById('comments-section');
    if (commentsSection) {
      commentsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      {/* Like Button */}
      <button
        onClick={handleLike}
        disabled={isLoading}
        className={`
          group relative w-14 h-14 rounded-full shadow-lg 
          transition-all duration-300 ease-in-out transform hover:scale-110
          ${isLiked 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-white hover:bg-red-50 border border-gray-200'
          }
          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        aria-label={`この記事を${isLiked ? '取り消し' : 'いいね'}`}
      >
        <Heart 
          size={24} 
          className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            transition-all duration-200 ${
              isLiked ? 'fill-white text-white' : 'text-gray-600 group-hover:text-red-500'
            }
          `}
        />
        
        {/* Like Count Badge */}
        {likeCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1">
            {likeCount > 99 ? '99+' : likeCount}
          </div>
        )}
        
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {isLiked ? 'いいねを取り消す' : 'いいね'}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
        </div>
      </button>

      {/* Comment Button */}
      <button
        onClick={scrollToComments}
        className="
          group relative w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg 
          transition-all duration-300 ease-in-out transform hover:scale-110
        "
        aria-label="コメント欄に移動"
      >
        <MessageCircle 
          size={24} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
        />
        
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          コメント欄へ
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
        </div>
      </button>
    </div>
  );
}