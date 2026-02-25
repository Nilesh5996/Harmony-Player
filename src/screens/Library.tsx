export default function Library() {
  return (
    <div className="font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <main className="flex-1 overflow-y-auto pb-32 p-6 pt-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Your Library</h1>
          <button className="text-primary"><span className="material-symbols-outlined">add</span></button>
        </div>
        
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
          <button className="px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium whitespace-nowrap">Playlists</button>
          <button className="px-4 py-1.5 rounded-full bg-primary/10 text-slate-300 text-sm font-medium whitespace-nowrap">Artists</button>
          <button className="px-4 py-1.5 rounded-full bg-primary/10 text-slate-300 text-sm font-medium whitespace-nowrap">Albums</button>
          <button className="px-4 py-1.5 rounded-full bg-primary/10 text-slate-300 text-sm font-medium whitespace-nowrap">Podcasts</button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors">
            <div className="size-16 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-2xl">favorite</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg">Liked Songs</p>
              <p className="text-sm text-slate-500 font-sans">Playlist • 156 songs</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors">
            <div className="size-16 rounded-lg bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-2xl">bolt</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg">Morning Energy</p>
              <p className="text-sm text-slate-500 font-sans">Playlist • 24 songs</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors">
            <div className="size-16 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-2xl">nightlight</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg">Deep Focus</p>
              <p className="text-sm text-slate-500 font-sans">Playlist • 12 songs</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
