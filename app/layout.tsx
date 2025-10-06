//** 공통 레이아웃 (메타/헤더/푸터) **//
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'EduPod | 초중고 영어뉴스 학습 플랫폼',
  description: '뉴스로 배우는 영어, 단어장·문법·퀴즈·레벨테스트까지 한 번에',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900">
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
