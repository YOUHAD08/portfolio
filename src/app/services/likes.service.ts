import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, increment, onSnapshot, setDoc, type Unsubscribe } from 'firebase/firestore';
import { firebaseConfig } from '../firebase.config';

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

@Injectable({ providedIn: 'root' })
export class LikesService {
  private readonly db = getFirestore(initializeApp(firebaseConfig));

  watchLikes(title: string, callback: (count: number) => void): Unsubscribe {
    const ref = doc(this.db, 'projectLikes', slugify(title));
    return onSnapshot(ref, (snap) => callback(snap.exists() ? (snap.data()['likes'] as number) || 0 : 0));
  }

  hasLiked(title: string): boolean {
    return localStorage.getItem(`liked:${slugify(title)}`) === '1';
  }

  async toggleLike(title: string): Promise<void> {
    const key = `liked:${slugify(title)}`;
    const ref = doc(this.db, 'projectLikes', slugify(title));
    if (localStorage.getItem(key) === '1') {
      await setDoc(ref, { likes: increment(-1) }, { merge: true });
      localStorage.removeItem(key);
    } else {
      await setDoc(ref, { likes: increment(1) }, { merge: true });
      localStorage.setItem(key, '1');
    }
  }
}
