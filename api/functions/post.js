"use client";

import {
  addDoc,
  collection,
  doc,
  getFirestore,
  deleteDoc,
  updateDoc as firestoreUpdateDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../FirebaseConfig";
import getCurrentDateTime from "../getCurrentDateTime";
// import toast from "react-hot-toast";

const db = getFirestore(app);
const storage = getStorage(app);

const notify = (msg, error) => {
  console.log(msg);
  if (error) {
    console.error(error);
  }
};

async function postDoc(data, collectionName) {
  try {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, data);

    const dateTime = getCurrentDateTime();

    // Example usage:
    console.log(dateTime);

    const updatedData = {
      id: docRef.id,
      date: dateTime?.date,
      time: dateTime?.time,
    };
    await updateDoc(collectionName, docRef.id, updatedData);
    notify(`Posted Successfully`);
    return true;
  } catch (error) {
    notify(error.message, error);
    return false;
  }
}

async function updateDoc(collectionName, docId, data) {
  try {
    const docRef = doc(db, collectionName, docId);
    await firestoreUpdateDoc(docRef, data);
    notify(`Updated Successfully`);
    return true;
  } catch (error) {
    notify(`Error updating document: ${error.message}`);
    return false;
  }
}

async function deleteDocument(collectionName, docId) {
  try {
    const collectionRef = doc(db, collectionName, docId);
    await deleteDoc(collectionRef);
    notify("Document deleted successfully");
    return true;
  } catch (error) {
    notify("Error deleting document", error);
    return false;
  }
}

async function storeImageInFirestore(imageUrl) {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const imageName = `images/${Date.now()}`;
    const storageRef = ref(storage, imageName); // Initialize the storage reference correctly

    // Upload the blob to Firebase Storage
    await uploadBytes(storageRef, blob); // Use uploadBytes() to upload the blob

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(storageRef);

    // Ensure the imageUrl is defined
    if (downloadURL) {
      // Store the download URL in Firestore
      const success = await postDoc({ imageUrl: downloadURL }, "images");

      if (success) {
        return downloadURL; // Return the download URL
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export { updateDoc, postDoc, deleteDocument };
