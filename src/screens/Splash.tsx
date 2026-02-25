import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-primary/30 via-transparent to-primary/10 blur-[120px]"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6">
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"></div>
          <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary to-[#b85a1a] shadow-2xl">
            <span className="material-symbols-outlined text-white text-6xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}>
              music_note
            </span>
          </div>
        </div>
        <div className="text-center space-y-4">
          <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Harmony <span className="text-primary">Player</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">
            Your music, in perfect harmony
          </p>
        </div>
        <div className="mt-20 w-full max-w-xs flex flex-col items-center gap-6">
          <div className="flex items-end justify-center gap-1 h-8 w-full">
            <div className="w-1 bg-primary/40 rounded-full h-3"></div>
            <div className="w-1 bg-primary/60 rounded-full h-5"></div>
            <div className="w-1 bg-primary rounded-full h-8"></div>
            <div className="w-1 bg-primary/80 rounded-full h-6"></div>
            <div className="w-1 bg-primary/50 rounded-full h-4"></div>
            <div className="w-1 bg-primary/70 rounded-full h-7"></div>
            <div className="w-1 bg-primary rounded-full h-4"></div>
            <div className="w-1 bg-primary/60 rounded-full h-6"></div>
            <div className="w-1 bg-primary/40 rounded-full h-3"></div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between items-center px-1">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Syncing library</span>
              <span className="text-primary text-sm font-bold">78%</span>
            </div>
            <div className="w-full h-1.5 bg-primary/10 dark:bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(244,123,37,0.5)]" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 text-slate-400 dark:text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">
        Premium Audio Experience
      </div>
    </div>
  );
}
