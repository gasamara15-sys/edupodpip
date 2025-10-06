import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "EduPod | 뉴스로 배우는 영어",
  description: "초중고 맞춤형 영어 뉴스 학습 플랫폼"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <NavBar />
        <main className="container" style={{minHeight:"70vh"}}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
