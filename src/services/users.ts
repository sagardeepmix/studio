
import { db } from "@/lib/firebase";
import { collection, doc, setDoc, getDoc, getDocs, query, where } from "firebase/firestore";

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  role: 'user' | 'vip' | 'admin';
}

export const addUserProfile = async (userId: string, email: string, name?: string) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, {
      id: userId,
      email: email,
      name: name || '',
      role: 'user', // Default role
    });
  } catch (e) {
    console.error("Error adding user profile: ", e);
    throw new Error("Could not create user profile");
  }
};

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    const userRef = doc(db, "users", userId);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data() as UserProfile;
    } else {
      return null;
    }
  } catch (e) {
    console.error("Error getting user profile: ", e);
    throw new Error("Could not get user profile");
  }
};

export const getAllUsers = async (): Promise<UserProfile[]> => {
    const usersCol = collection(db, "users");
    const q = query(usersCol);
    const querySnapshot = await getDocs(q);
    const users: UserProfile[] = [];
    querySnapshot.forEach((doc) => {
        users.push(doc.data() as UserProfile);
    });
    return users;
};
