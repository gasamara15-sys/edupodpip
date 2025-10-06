import { sbServer } from "@/lib/supabaseClient";

export async function getLatestArticles(limit = 6) {
  const { data, error } = await sbServer()
    .from("articles")
    .select("id, slug, title, summary, date, level")
    .order("date", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data ?? [];
}

export async function getArticleBySlug(slug: string) {
  const { data, error } = await sbServer()
    .from("articles").select("*").eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data;
}

export async function getKeywords(limit = 100) {
  const { data, error } = await sbServer()
    .from("keywords").select("id, slug, name, description, level").limit(limit);
  if (error) throw error;
  return data ?? [];
}

export async function getKeywordHub(slug: string) {
  const supabase = sbServer();
  const { data: kw } = await supabase.from("keywords")
    .select("id, slug, name, description, level").eq("slug", slug).maybeSingle();
  if (!kw) return null;
  const { data: links } = await supabase.from("article_keywords")
    .select("articles(id, slug, title, summary, date, level)")
    .eq("keyword_id", kw.id)
    .order("articles.date", { ascending: false })
    .limit(8);
  return { keyword: kw, articles: (links ?? []).map(l => (l as any).articles) };
}

