import { getKeywords } from "@/lib/fetchers";
import Link from "next/link";

export const revalidate = 900;

export default async function KeywordsPage() {
  const kws = await getKeywords().catch(()=>[]);
  return (
    <div className="grid">
      <h1>키워드 탐색</h1>
      <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))"}}>
        {kws.map(k => (
          <div key={k.id} className="card">
            <h3 style={{marginTop:0}}><Link href={`/keywords/${k.slug}`}>{k.name}</Link></h3>
            <div className="meta">L{k.level}</div>
            <p>{k.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

