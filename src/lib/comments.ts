import { 
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

export interface Comment {
  id: string;
  postId: string;
  authorName: string;
  content: string;
  timestamp: string;
  userId: string;
}

export interface CommentInput {
  postId: string;
  authorName: string;
  content: string;
  userId: string;
}

export async function addComment(comment: CommentInput): Promise<void> {
  try {
    const commentsRef = collection(db, 'comments');
    await addDoc(commentsRef, {
      ...comment,
      timestamp: new Date().toISOString(),
      createdAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
}

export async function getComments(postId: string): Promise<Comment[]> {
  try {
    const commentsRef = collection(db, 'comments');
    const q = query(
      commentsRef,
      where('postId', '==', postId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Comment[];
  } catch (error) {
    console.error('Error getting comments:', error);
    return [];
  }
}

export async function deleteComment(commentId: string): Promise<void> {
  try {
    const commentRef = doc(db, 'comments', commentId);
    await deleteDoc(commentRef);
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw error;
  }
}

export async function updateComment(commentId: string, content: string): Promise<void> {
  try {
    const commentRef = doc(db, 'comments', commentId);
    await updateDoc(commentRef, {
      content,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating comment:', error);
    throw error;
  }
}