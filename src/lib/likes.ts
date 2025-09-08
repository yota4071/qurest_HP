import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment, 
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc
} from 'firebase/firestore';
import { db } from './firebase';

export interface LikeData {
  postId: string;
  count: number;
  lastUpdated: string;
}

export interface UserLike {
  postId: string;
  userId: string;
  timestamp: string;
}

export async function getLikeCount(postId: string): Promise<number> {
  try {
    const docRef = doc(db, 'likes', postId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data().count || 0;
    } else {
      return 0;
    }
  } catch (error) {
    console.error('Error getting like count:', error);
    return 0;
  }
}

export async function checkUserLike(postId: string, userId: string): Promise<boolean> {
  try {
    const likesRef = collection(db, 'userLikes');
    const q = query(
      likesRef, 
      where('postId', '==', postId), 
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking user like:', error);
    return false;
  }
}

export async function toggleLike(postId: string, userId: string): Promise<{ liked: boolean; count: number }> {
  try {
    const userLiked = await checkUserLike(postId, userId);
    
    if (userLiked) {
      await removeLike(postId, userId);
      const newCount = await getLikeCount(postId);
      return { liked: false, count: newCount };
    } else {
      await addLike(postId, userId);
      const newCount = await getLikeCount(postId);
      return { liked: true, count: newCount };
    }
  } catch (error) {
    console.error('Error toggling like:', error);
    throw error;
  }
}

async function addLike(postId: string, userId: string): Promise<void> {
  const likesRef = doc(db, 'likes', postId);
  const userLikesRef = collection(db, 'userLikes');
  
  await setDoc(likesRef, {
    postId,
    count: increment(1),
    lastUpdated: new Date().toISOString()
  }, { merge: true });
  
  await addDoc(userLikesRef, {
    postId,
    userId,
    timestamp: new Date().toISOString()
  });
}

async function removeLike(postId: string, userId: string): Promise<void> {
  const likesRef = doc(db, 'likes', postId);
  const userLikesRef = collection(db, 'userLikes');
  const q = query(
    userLikesRef, 
    where('postId', '==', postId), 
    where('userId', '==', userId)
  );
  
  await updateDoc(likesRef, {
    count: increment(-1),
    lastUpdated: new Date().toISOString()
  });
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (docSnapshot) => {
    await deleteDoc(docSnapshot.ref);
  });
}