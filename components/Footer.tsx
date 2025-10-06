export default function Footer() {
  return (
    <footer style={{borderTop:"1px solid #e5e7eb", marginTop:24}}>
      <div className="container meta">© {new Date().getFullYear()} EduPod</div>
    </footer>
  );
}

