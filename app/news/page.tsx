import { getLatestArticles } from "@/lib/fetchers";
import Link from "next/link";

export const revalidate = 900; // 15분

export default async function NewsListPage() {
  const items = await getLatestArticles(20).catch(()=>[]);
  return (
    <div className="grid">
      <h1>뉴스 목록</h1>
      {items.length === 0 && <div className="card">아직 기사가 없습니다.</div>}
      {items.map(a => (
        <div key={a.id} className="card">
          <h3 style={{marginTop:0}}><Link href={`/news/${a.slug}`}>{a.title}</Link></h3>
          <div className="meta">{a.date} · L{a.level}</div>
          <p>{a.summary}</p>
        </div>
      ))}
    </div>
  );
}

