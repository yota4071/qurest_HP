'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { getLikeCount, checkUserLike, toggleLike } from '@/lib/likes';

interface LikeButtonProps {
  postId: string;
  className?: string;
}

export default function LikeButton({ postId, className = '' }: LikeButtonProps) {
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

  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className={`
        inline-flex items-center space-x-2 px-4 py-2 rounded-full
        transition-all duration-200 ease-in-out
        ${isLiked 
          ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' 
          : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
        }
        ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
        ${className}
      `}
      aria-label={`この記事を${isLiked ? '取り消し' : 'いいね'}`}
    >
      <Heart 
        size={20} 
        className={`transition-all duration-200 ${
          isLiked ? 'fill-red-500 text-red-500' : 'text-current'
        }`}
      />
      <span className="font-medium">{likeCount}</span>
    </button>
  );
}