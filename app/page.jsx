"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [username, setUsername] = useState("");
  const router = useRouter();

  async function haddleSubmit(e){
    e.preventDefault();

    if(username.trim()){
      localStorage.setItem("chatUsername", username);
      router.push("/chat");
    }
  }
  return (
    <div>
      <h1>Chat</h1>
      <form onSubmit={haddleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="ingrese el nombre"></input>
        <button>Enviar</button>
      </form>
    </div>
  );
}
