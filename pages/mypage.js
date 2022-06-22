import { useEffect, useState } from "react";
import Router from "next/router";

export default function MyPage() {
  const [text, setText] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("userid") == null) {
      alert("로그인이 필요한 서비스입니다.");
      Router.push("/login");
    } else {
      setText(sessionStorage.getItem("userid"));
    }
  });

  return (
    <div>
      <p>당신의 id는? {text}</p>
    </div>
  );
}
