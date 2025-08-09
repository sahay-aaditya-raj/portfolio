export default function Footer() {
  return (
  <footer className="border-t border-white/10">
      <div className="section py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="opacity-70">© <span>{new Date().getFullYear()}</span> Aaditya Raj</p>
        <div className="flex items-center gap-4 opacity-80">
          <a href="#top" className="hover:opacity-100">Back to top ↑</a>
          <a href="mailto:sahay.aaditya.raj@gmail.com" className="hover:opacity-100">Email</a>
          <a href="https://github.com/sahay-aaditya-raj" target="_blank" rel="noreferrer" className="hover:opacity-100">GitHub</a>
          <a href="https://www.linkedin.com/in/aaditya-raj-sahay" target="_blank" rel="noreferrer" className="hover:opacity-100">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
