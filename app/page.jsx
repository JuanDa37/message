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
      <form className="container flex mt-5" onSubmit={haddleSubmit}>
      <h1 className="text-center">Chat</h1>
        <input value={username} className="form-control" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="ingrese el nombre"></input>
        <button className="btn btn-success mt-2 w-100" >Enviar</button>
      </form>
    </div>
  );
}
