import {
  collection,
  addDoc,
  updateDoc,
  doc,
 // getDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Generic helper to get a collection reference
const getCollectionRef = (collectionName) => collection(db, collectionName);

// ------------------------
// PROJECTS
// ------------------------
export const addProject = async (project) => {
  const docRef = await addDoc(getCollectionRef("projects"), project);
  return docRef.id;
};

export const updateProject = async (id, updatedProject) => {
  const projectRef = doc(db, "projects", id);
  await updateDoc(projectRef, updatedProject);
};

export const deleteProject = async (id) => {
  const projectRef = doc(db, "projects", id);
  await deleteDoc(projectRef);
};

export const getAllProjects = async () => {
  const snapshot = await getDocs(getCollectionRef("projects"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// ------------------------
// ITEMS
// ------------------------
export const addItem = async (item) => {
  const docRef = await addDoc(getCollectionRef("items"), item);
  return docRef.id;
};

export const updateItem = async (id, updatedItem) => {
  const itemRef = doc(db, "items", id);
  await updateDoc(itemRef, updatedItem);
};

export const deleteItem = async (id) => {
  const itemRef = doc(db, "items", id);
  await deleteDoc(itemRef);
};

export const getAllItems = async () => {
  const snapshot = await getDocs(getCollectionRef("items"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// ------------------------
// OTHER COSTS
// ------------------------
export const addOtherCost = async (cost) => {
  const docRef = await addDoc(getCollectionRef("otherCosts"), cost);
  return docRef.id;
};

export const updateOtherCost = async (id, updatedCost) => {
  const costRef = doc(db, "otherCosts", id);
  await updateDoc(costRef, updatedCost);
};

export const deleteOtherCost = async (id) => {
  const costRef = doc(db, "otherCosts", id);
  await deleteDoc(costRef);
};

export const getAllOtherCosts = async () => {
  const snapshot = await getDocs(getCollectionRef("otherCosts"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
