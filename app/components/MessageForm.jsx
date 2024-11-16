"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createMessages } from "../utils/api-chat";

export default function MessageForm({ onMessagesSet }){
    const [content, setContent] = useState("");
    const router = useRouter()

    async function handleSubmit(e){
        e.preventDefault();
        const username = localStorage.getItem("chatUsername");

        if (!username){
            router.push("/");
        }

        if (content.trim()){
            try{
                await createMessages(username, content);
                setContent(""); 
                onMessagesSet();
            }catch(error){
                console.log("error enviando mensaje", error)
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea value={content} className="form-control mb-2" onChange = {(e) => setContent(e.target.value)} rows={3} placeholder="Escribe un mensaje"></textarea>
                <button className="btn btn-dark w-100" >Enviar</button>
            </form>
        </div>
    )

}