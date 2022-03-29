import { db } from "./firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

export const singleEdit = () => {
  const dataArr = [];
  onSnapshot(collection(db, "lifestyle"), snapshot => {
    const textArr = snapshot.docs.map(doc => doc.data());
    for (const key in textArr) {
      const rel = {
        image: `https://firebasestorage.googleapis.com/v0/b/the-single-plus.appspot.com/o/lifestyle%2Fthumb_${key.padStart(
          3,
          "0"
        )}.png?alt=media&token=8e94089b-651c-4904-95d8-103ae92d681b`,
        ...textArr[key],
      };
      dataArr.push(rel);
    }
  });
  return dataArr;
};
