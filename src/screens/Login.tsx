import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gradient-to-br from-background-dark via-[#2d1e15] to-background-dark">
      <header className="flex items-center p-6 justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 p-2 rounded-lg border border-primary/30">
            <span className="material-symbols-outlined text-primary">music_note</span>
          </div>
          <h2 className="text-slate-100 text-xl font-display font-bold leading-tight tracking-tight">Harmony Player</h2>
        </div>
        <button className="text-slate-100 p-2 hover:bg-white/10 rounded-full transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 @container">
        <div className="glass-panel w-full max-w-md rounded-xl overflow-hidden shadow-2xl p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-slate-100 font-display text-4xl font-bold tracking-tight">Welcome Back</h1>
            <p className="text-slate-400 text-base">Your symphony awaits. Sign in to continue.</p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-slate-300 text-sm font-medium ml-1">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl">mail</span>
                <input className="w-full bg-primary/5 border border-primary/20 rounded-lg py-3.5 pl-12 pr-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="name@example.com" type="email" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-300 text-sm font-medium ml-1">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl">lock</span>
                <input className="w-full bg-primary/5 border border-primary/20 rounded-lg py-3.5 pl-12 pr-12 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="••••••••" type="password" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
              <div className="flex justify-end">
                <a className="text-primary text-xs font-medium hover:underline" href="#">Forgot password?</a>
              </div>
            </div>
            <button 
              onClick={() => navigate('/home')}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]"
            >
              Sign In
            </button>
          </div>
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-slate-700"></div>
            <span className="flex-shrink mx-4 text-slate-500 text-xs font-medium uppercase tracking-widest">or continue with</span>
            <div className="flex-grow border-t border-slate-700"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 bg-white/5 border border-slate-700 hover:bg-white/10 text-slate-200 py-3 rounded-lg transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="currentColor"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="currentColor"></path>
              </svg>
              <span className="text-sm font-semibold">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 bg-white/5 border border-slate-700 hover:bg-white/10 text-slate-200 py-3 rounded-lg transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.96.95-2.18 1.78-3.41 1.72-1.18-.06-1.59-.72-2.98-.72-1.39 0-1.89.7-2.98.74-1.23.04-2.43-.8-3.4-1.76-1.98-1.94-3.01-5.55-1.04-8.19.98-1.32 2.4-2.12 3.73-2.12 1.03 0 2 .71 2.63.71.63 0 1.7-.82 2.9-.82 1.25 0 2.37.5 3.12 1.39-2.52 1.41-2.11 4.93.42 6.05-.56 1.43-1.43 3.04-2.49 4.05M12.03 7.25c-.02-2.23 1.94-4.14 4.08-4.25.2.22.42.48.51.78 1.06 1.23.93 3.44-.51 4.25-.26.15-.56.23-.88.23-1.21 0-2.34-.84-3.2-1.01z" fill="currentColor"></path>
              </svg>
              <span className="text-sm font-semibold">Apple</span>
            </button>
          </div>
          <div className="text-center pt-4">
            <p className="text-slate-400 text-sm">Don't have an account? <a className="text-primary font-bold hover:underline" href="#">Create Account</a></p>
          </div>
        </div>
      </main>
      <footer className="p-8 flex flex-col items-center gap-4 text-center">
        <div className="flex gap-6 text-slate-500 text-sm font-medium">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">Help Center</a>
        </div>
        <p className="text-slate-600 text-xs">© 2024 Harmony Player Inc. All rights reserved.</p>
      </footer>
      {/* Decorative Blurs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    </div>
  );
}
