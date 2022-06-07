import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { auth, db } from '../firebaseconfig';
import Image from 'next/image'
import { useCollection } from 'react-firebase-hooks/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from "next/router";
import getOtherEmail from '../utils/getOtherEmail';
import Preloader from './Preloader'
const Sidebar = () => {
    const [user] = useAuthState(auth);
    const [snapshot, loading, error] = useCollection(collection(db, "chats"));
    const chats = snapshot?.docs.map(doc=>({id: doc.id, ...doc.data()}))
    const router = useRouter();
    const redirect = (id) => {
        router.push(`/chat/${id}`);
    }
    const chatExists = email =>chats?.find(chat=> (chat.users.includes(user.email) && chat.users.includes(email)))
    const newChat = async () =>{
        const input = prompt('Enter email')
        if(!chatExists(input) && (input !=user.email) && (input!=null)){
            await addDoc(collection(db, 'chats'), {users: [user.email, input]})
        }
    }
    const signOutHandler = () =>{
        signOut(auth)
        router.push(`/`);
        // window.history.replaceState(null, '', '/')
    }
    return (
        <div className="sidebar">
            <div className="sidebar-head">
                <User src={user?.photoURL} name={user.displayName} email={user.email} />
                <div className="logout" onClick={() => {signOutHandler()}}>out</div>
            </div>
            <div className="sidebar-create">
                <button className="btn" onClick={newChat}>New Chat</button>
            </div>
            <div className="sidebar-body">
                {chats?.filter(chat =>chat.users.includes(user.email)).map(chat=>loading ? <Preloader/> :<User key={Math.random()} email={getOtherEmail(chat.users, user)} className={router.query.id == chat.id ? "is-active" : ""} redirect={() => redirect(chat.id)}/>)}
            </div>
        </div>
    );
};
const User = ({ src, name, email, redirect, className }) => {
    return (
        <div className={`user ${className}`} onClick={redirect}>
            <div className="user__icon">
                {/* <img src={user.photoURL} alt="" /> */}
                <Image src={src ?? 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="user icon" layout='fill' />
            </div>
            <div className="user__info">
                {name && <div className="user__name">{name}</div>}
                <div className="user__email">{email}</div>
            </div>
        </div>
    );
};
export default Sidebar;