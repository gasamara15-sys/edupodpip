import { requireUser } from "@/lib/auth";

export default async function AccountPage() {
  const { supabase, user } = await requireUser();
  if (!user) return <div className="card">로그인이 필요합니다.</div>;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle();

  return (
    <div className="card">
      <h2 style={{marginTop:0}}>마이페이지</h2>
      <p>이메일: <b>{user.email}</b></p>
      <p>표시 이름: {profile?.display_name ?? "-"}</p>
      <p>레벨: {profile?.level ?? 1}</p>
    </div>
  );
}

