"use client";

import MessageForm from "@/app/components/MessageForm";

import MessageList from "@/app/components/MessageList";

import { useEffect, useState } from "react";
import { getMessages } from "../utils/api-chat";

export default function ChatPage(){
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("");

    async function fethMessages(){
        try{
            const response = await getMessages();
            setMessages(response);
        }catch (error){
            console.log("error obteniendo mensajes", error);
        }
    }

    useEffect(() => {
        setUsername(localStorage.getItem("chatUsername"));
        fethMessages();
        const interval = setInterval(fethMessages, 1000);
        return () => clearInterval(interval);
    }, [])
    return(
        <div>
            <div>Chat de ...... {username}</div>
            <MessageList messages = {messages}></MessageList>
            <MessageForm onMessagesSet = {fethMessages}></MessageForm>
        </div>
    );
}