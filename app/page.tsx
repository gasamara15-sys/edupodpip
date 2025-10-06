import { getLatestArticles } from "@/lib/fetchers";
import Link from "next/link";

export default async function Home() {
  const latest = await getLatestArticles(4).catch(()=>[]);
  return (
    <div className="grid">
      <div className="card">
        <h1 style={{marginTop:0}}>오늘의 EduPod</h1>
        <p className="meta">동적 구조로 전환된 홈 화면</p>
      </div>
      <div className="card">
        <h2 style={{marginTop:0}}>최신 뉴스</h2>
        <ul>
          {latest.map(a => (
            <li key={a.id}>
              <Link href={`/news/${a.slug}`}>{a.title}</Link>
              <span className="meta"> — {a.date}</span>
            </li>
          ))}
        </ul>
        <div style={{marginTop:12}}><Link href="/news">뉴스 더 보기 →</Link></div>
      </div>
    </div>
  );
}
