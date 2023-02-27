import React from "react";
// firebase
import { db } from "../../firebase/config";
import { collection, doc, getDocs, addDoc, setDoc } from "firebase/firestore";

function createComment({ postId }) {
    return async (dispatch, setState) => {
        try {
            const postsRef = await doc(db, "posts", postId);

            await addDoc(collection(postsRef, "comments"), { comment });
            
        } catch (error) {
            
        }
    }

    
}

export {
    createComment,
}