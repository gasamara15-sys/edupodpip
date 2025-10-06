import Link from 'next/link';
import { createClient } from '@/lib/supabaseClient';

export default async function Home() {
  const supabase = createClient();
  const { data: latest } = await supabase.from('articles').select('id, title, summary, date, slug').order('date', { ascending: false }).limit(3);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">오늘의 EduPod 뉴스</h1>
      <ul>
        {latest?.map(article => (
          <li key={article.id} className="mb-4">
            <Link href={`/news/${article.slug}`} className="text-blue-600 hover:underline">
              {article.title}
            </Link>
            <p className="text-gray-600 text-sm">{article.summary}</p>
          </li>
        ))}
      </ul>
      <Link href="/keywords" className="inline-block mt-6 text-blue-500 font-medium">키워드별 학습 보기 →</Link>
    </div>
  );
}
