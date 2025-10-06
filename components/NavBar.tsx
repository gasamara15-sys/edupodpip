import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link href="/" className="brand">EduPod</Link>
      <Link href="/news">뉴스</Link>
      <Link href="/keywords">키워드</Link>
      <div style={{marginLeft:"auto"}} />
      <Link href="/account">마이페이지</Link>
    </nav>
  );
}

