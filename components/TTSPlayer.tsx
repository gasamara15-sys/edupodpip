"use client";
export default function TTSPlayer({ text }: { text: string }) {
  const speak = () => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; window.speechSynthesis.speak(u);
  };
  return <button className="btn" onClick={speak}>TTS 재생</button>;
}

