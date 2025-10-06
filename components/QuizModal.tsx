"use client";
import { useState } from "react";
export default function QuizModal({ openText="퀴즈 풀기" }: { openText?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setOpen(true)}>{openText}</button>
      {open && (
        <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,0.5)"}} onClick={()=>setOpen(false)}>
          <div className="card" style={{maxWidth:480, margin:"10% auto", background:"#fff"}} onClick={e=>e.stopPropagation()}>
            <h3>미니 퀴즈</h3>
            <p className="meta">예시 모달입니다.</p>
            <button className="btn" onClick={()=>setOpen(false)}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
}

