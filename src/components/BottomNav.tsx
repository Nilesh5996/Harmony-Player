import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
        onEnded={() => setIsPlaying(false)}
      />

      {/* Now Playing Mini Player */}
      <div className="fixed bottom-[72px] left-4 right-4 glass-nav rounded-xl p-3 flex items-center gap-3 border border-primary/20 shadow-xl font-sans z-40">
        <div className="size-10 rounded-lg overflow-hidden shrink-0 shadow-lg">
          <img className="w-full h-full object-cover" alt="Mini player album art" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrPZsvWlGKUWVmuUH1CMnmr4m_ieXX0BzsKBZKBic51xkthtGQ810FJ_BhZ44i1Y0Lp2xCkQCYOFv5sNj_m47yHwjx-GvFMhKsxuPj9YYNC7t-PB0Mp-LErYezv3qbw7suf6cjFC508Qm2d9yaN1hujO1KmofsthPjHVaJ9Wkwlcc5ivJ5kOIsW4g8ejvixEP48GceKO5C_iRXbdWW6bdcegOCna5RLbwqkZke0oWH-FQidH4DTcXaMIUkl_Je0qrlxAzV2PB14pc" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold truncate text-slate-100">Midnight City</p>
          <p className="text-[10px] text-primary">M83</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-primary"><span className="material-symbols-outlined">skip_previous</span></button>
          <button 
            onClick={togglePlay}
            className="bg-primary text-white size-8 rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined !text-lg">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>
          <button className="text-primary"><span className="material-symbols-outlined">skip_next</span></button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 w-full glass-nav border-t border-primary/10 px-6 py-3 pb-6 flex items-center justify-between z-50 font-sans">
        <Link to="/home" className={`flex flex-col items-center gap-1 ${currentPath === '/home' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>
          <span className="material-symbols-outlined !text-2xl" style={currentPath === '/home' ? { fontVariationSettings: "'FILL' 1" } : {}}>home</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link to="/search" className={`flex flex-col items-center gap-1 ${currentPath === '/search' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>
          <span className="material-symbols-outlined !text-2xl" style={currentPath === '/search' ? { fontVariationSettings: "'FILL' 1" } : {}}>search</span>
          <span className="text-[10px] font-medium">Search</span>
        </Link>
        <Link to="/library" className={`flex flex-col items-center gap-1 ${currentPath === '/library' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>
          <span className="material-symbols-outlined !text-2xl" style={currentPath === '/library' ? { fontVariationSettings: "'FILL' 1" } : {}}>library_music</span>
          <span className="text-[10px] font-medium">Library</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center gap-1 ${currentPath === '/profile' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>
          <span className="material-symbols-outlined !text-2xl" style={currentPath === '/profile' ? { fontVariationSettings: "'FILL' 1" } : {}}>person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </nav>
    </>
  );
}
