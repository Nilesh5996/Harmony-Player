export default function Search() {
  return (
    <div className="font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <main className="flex-1 overflow-y-auto pb-32 p-6 pt-8">
        <h1 className="text-3xl font-bold mb-6">Search</h1>
        <div className="relative mb-8">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl">search</span>
          <input 
            className="w-full bg-primary/5 border border-primary/20 rounded-xl py-4 pl-12 pr-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans" 
            placeholder="Artists, songs, or podcasts" 
            type="text" 
          />
        </div>

        <h2 className="text-xl font-bold mb-4">Browse All</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-4 relative overflow-hidden">
            <h3 className="font-bold text-white text-lg relative z-10">Pop</h3>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/20 text-8xl rotate-12">music_note</span>
          </div>
          <div className="aspect-square rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-4 relative overflow-hidden">
            <h3 className="font-bold text-white text-lg relative z-10">Hip-Hop</h3>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/20 text-8xl rotate-12">mic</span>
          </div>
          <div className="aspect-square rounded-xl bg-gradient-to-br from-orange-500 to-red-600 p-4 relative overflow-hidden">
            <h3 className="font-bold text-white text-lg relative z-10">Rock</h3>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/20 text-8xl rotate-12">electric_bolt</span>
          </div>
          <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-4 relative overflow-hidden">
            <h3 className="font-bold text-white text-lg relative z-10">Electronic</h3>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/20 text-8xl rotate-12">headphones</span>
          </div>
        </div>
      </main>
    </div>
  );
}
