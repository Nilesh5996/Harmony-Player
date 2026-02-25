export default function Profile() {
  return (
    <div className="font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <main className="flex-1 overflow-y-auto pb-32">
        <div className="relative h-48 bg-gradient-to-br from-primary/40 to-background-dark">
          <div className="absolute -bottom-16 left-6 flex items-end gap-4">
            <div className="size-32 rounded-full overflow-hidden border-4 border-background-dark shadow-xl">
              <img className="w-full h-full object-cover" alt="Professional male user profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcg2N8WPS2tMUb6X1Xc1tFTkUYgMmb0yBJLo2evKqmuptGNp6sPCuse8Ov6L_dAH2xJk6dcjCW7t_1TeHesuE9uR81pGENU-GkMd4eAyGqb21k_umeZjHQGpueyYBE09QQ1YgaALR7LTASX9Kq0ffsp5U8mogM-P_zUSQ8cIN9Brr0hjK2B6IC7RjG20dd9YilBwrlNKReHZVkEt6cVwPcdHL9WdFPpbGFAuKbAqm9u__2QO_Bn6mTqv1krIvMAytLb2ZpyYs1QQM" />
            </div>
          </div>
        </div>
        
        <div className="mt-20 px-6">
          <h1 className="text-3xl font-bold">User Name</h1>
          <p className="text-slate-500 dark:text-slate-400 font-sans mt-1">Premium Member</p>
          
          <div className="flex gap-6 mt-6 font-sans">
            <div>
              <p className="font-bold text-lg">142</p>
              <p className="text-xs text-slate-500">Playlists</p>
            </div>
            <div>
              <p className="font-bold text-lg">1.2k</p>
              <p className="text-xs text-slate-500">Followers</p>
            </div>
            <div>
              <p className="font-bold text-lg">348</p>
              <p className="text-xs text-slate-500">Following</p>
            </div>
          </div>

          <div className="mt-10 space-y-4 font-sans">
            <button className="w-full flex items-center justify-between p-4 glass-card rounded-xl">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">settings</span>
                <span className="font-medium">Settings</span>
              </div>
              <span className="material-symbols-outlined text-slate-500">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 glass-card rounded-xl">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">history</span>
                <span className="font-medium">Listening History</span>
              </div>
              <span className="material-symbols-outlined text-slate-500">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 glass-card rounded-xl">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">logout</span>
                <span className="font-medium text-red-500">Log Out</span>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
