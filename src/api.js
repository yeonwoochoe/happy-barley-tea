import { db, storage } from "./firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

const getSinglePlus = () => {
  const dataArr = [];
  onSnapshot(collection(db, "lifestyle"), (snapshot) => {
    const textArr = snapshot.docs.map((doc) => doc.data());
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

  const storageRef = ref(storage, "lifestyle/thumb_000.png");
  getDownloadURL(storageRef).then((url) => console.log(url));

  return dataArr;
};

export default getSinglePlus;
