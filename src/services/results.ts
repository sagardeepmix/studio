
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";

export interface Result {
  id?: string;
  prizeName: string;
  prizeAmount: string;
  winningNumber: string;
  drawDate: Date;
}

export const addResult = async (result: Omit<Result, 'id' | 'drawDate'>) => {
  try {
    const docRef = await addDoc(collection(db, "results"), {
      ...result,
      drawDate: new Date(),
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Could not add result");
  }
};

export const getLatestResults = async (): Promise<Result[]> => {
    const resultsCol = collection(db, "results");
    const q = query(resultsCol, orderBy("drawDate", "desc"), limit(10)); // Get latest 10 results
    const querySnapshot = await getDocs(q);
    const results: Result[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        results.push({
            id: doc.id,
            prizeName: data.prizeName,
            prizeAmount: data.prizeAmount,
            winningNumber: data.winningNumber,
            drawDate: data.drawDate.toDate(),
        });
    });
    return results;
};
