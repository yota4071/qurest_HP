'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Send, User, Trash2, Edit3 } from 'lucide-react';
import { addComment, getComments, deleteComment, updateComment, Comment } from '@/lib/comments';

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    let storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      storedUserId = 'user_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', storedUserId);
    }
    setUserId(storedUserId);

    const storedName = localStorage.getItem('authorName');
    if (storedName) {
      setAuthorName(storedName);
    }

    loadComments();
  }, [postId]);

  const loadComments = async () => {
    try {
      const commentsData = await getComments(postId);
      setComments(commentsData);
    } catch (error) {
      console.error('Error loading comments:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !authorName.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      localStorage.setItem('authorName', authorName);
      
      await addComment({
        postId,
        authorName: authorName.trim(),
        content: newComment.trim(),
        userId
      });
      
      setNewComment('');
      await loadComments();
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('コメントの投稿に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (commentId: string) => {
    if (!confirm('このコメントを削除しますか？')) return;

    try {
      await deleteComment(commentId);
      await loadComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('コメントの削除に失敗しました。');
    }
  };

  const handleEdit = async (commentId: string) => {
    if (!editContent.trim()) return;

    try {
      await updateComment(commentId, editContent.trim());
      setEditingId(null);
      setEditContent('');
      await loadComments();
    } catch (error) {
      console.error('Error updating comment:', error);
      alert('コメントの更新に失敗しました。');
    }
  };

  const startEdit = (comment: Comment) => {
    setEditingId(comment.id);
    setEditContent(comment.content);
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div id="comments-section" className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <MessageCircle className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-bold text-gray-800">
          コメント ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="お名前"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <textarea
          placeholder="コメントを入力してください..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          required
        />
        
        <button
          type="submit"
          disabled={isSubmitting || !newComment.trim() || !authorName.trim()}
          className="mt-4 inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-4 h-4 mr-2" />
          {isSubmitting ? '投稿中...' : 'コメントを投稿'}
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            まだコメントがありません。最初のコメントを投稿してみましょう！
          </p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{comment.authorName}</h4>
                      <p className="text-sm text-gray-500">{formatDate(comment.timestamp)}</p>
                    </div>
                    
                    {comment.userId === userId && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => startEdit(comment)}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          title="編集"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(comment.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                          title="削除"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {editingId === comment.id ? (
                    <div className="space-y-2">
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(comment.id)}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                        >
                          保存
                        </button>
                        <button
                          onClick={() => {
                            setEditingId(null);
                            setEditContent('');
                          }}
                          className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400"
                        >
                          キャンセル
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}