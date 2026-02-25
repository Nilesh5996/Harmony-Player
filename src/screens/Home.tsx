export default function Home() {
  return (
    <div className="font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-32">
        {/* Header Section */}
        <header className="flex items-center justify-between p-6 pt-8">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full overflow-hidden border-2 border-primary/30">
              <img className="w-full h-full object-cover" alt="Professional male user profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcg2N8WPS2tMUb6X1Xc1tFTkUYgMmb0yBJLo2evKqmuptGNp6sPCuse8Ov6L_dAH2xJk6dcjCW7t_1TeHesuE9uR81pGENU-GkMd4eAyGqb21k_umeZjHQGpueyYBE09QQ1YgaALR7LTASX9Kq0ffsp5U8mogM-P_zUSQ8cIN9Brr0hjK2B6IC7RjG20dd9YilBwrlNKReHZVkEt6cVwPcdHL9WdFPpbGFAuKbAqm9u__2QO_Bn6mTqv1krIvMAytLb2ZpyYs1QQM" />
            </div>
            <div>
              <p className="text-sm text-primary font-medium font-sans">Welcome back</p>
              <h1 className="text-2xl font-bold tracking-tight">Good Morning, User</h1>
            </div>
          </div>
          <button className="size-10 rounded-full glass-card flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </header>

        {/* Recently Played Section */}
        <section className="mt-4">
          <div className="px-6 flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recently Played</h2>
            <button className="text-primary text-sm font-semibold font-sans">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide">
            {/* Item 1 */}
            <div className="min-w-[140px] group">
              <div className="aspect-square rounded-xl overflow-hidden mb-3 relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Abstract vibrant orange music album cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmsNKQ1ChicIkJ7UXDIo166sOzJATEvUKI-yuQ_D7Qb9LdQxaKk0Z3cP4Fagd1zpyNFVHY32IvPTKZLhlKox_PXa68RCkGXq46wcRn9mFFaUPZxrTUaNJkRL6EiB7fSxTtXs6Hwk0bbZbUHF3_mmV89lOHuv4j7gIlhrrg8Rl_MyA2gBdupnwFxhTo3Jg8CreIhknxl8maAxNAaQa3_9ufcAnCr-yR8bNlQHGIzvHJIJpzpJbWeqS8synbY4pCh65CRg_laUfCtcY" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
                </div>
              </div>
              <p className="font-bold text-sm truncate">Midnight City</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">M83</p>
            </div>
            {/* Item 2 */}
            <div className="min-w-[140px] group">
              <div className="aspect-square rounded-xl overflow-hidden mb-3 relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Modern synthwave aesthetic music album art" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkDUe3zWUm-iMzW46k6n_yDDrNgjnQ4falGEwUUEuHmDTSkTwtzPTiWlJ85sAMhtvxQ-6dSHVk3NSsnaRO8oOdrCqQq5AoXuQIFg0EQCivghPLORuE9JJRD3JWDOvY2fdk_jj6n3HJuZkHqe4bfKA8wd_Jp-XVbvqTQ7aJHWTnNhY7Z4U3k8Saaa7ibdBPxPFFV8K12U3_DKWtn3bf1Ot2b_2MvmXAFfceS0H1xZ6iCMXyWEspdzJ14zqiP3Pi7SJvG-SL3tVYwGo" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
                </div>
              </div>
              <p className="font-bold text-sm truncate">Starboy</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">The Weeknd</p>
            </div>
            {/* Item 3 */}
            <div className="min-w-[140px] group">
              <div className="aspect-square rounded-xl overflow-hidden mb-3 relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Cinematic neon lights music album cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeiee7GNrkpm-Vu4KWuyR0NgT72yGpjqxLycZL1azgeHfh7qljkmlwvhOW31lkuA2MWG4smaJsfkAoYXvRdVDPCF9P4rujqLymp8BjHosujhFZbZc7jW25Vr6ZNSqw65rtK1qr4-0YKycjjTHF7GqvCUswAURqhYEN6V45UF4NZyyouEAM7pWbswiJAC8iGNWHbwEMQhM4xmrSDGvw8UIysGj8dNcyJFRZTygWvYM798y6ne09Cd6LbDUyARvO_iKkvHU0NoWP4fs" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
                </div>
              </div>
              <p className="font-bold text-sm truncate">Blinding Lights</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">The Weeknd</p>
            </div>
          </div>
        </section>

        {/* Trending Songs Section */}
        <section className="mt-8">
          <div className="px-6 flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Trending Songs</h2>
            <button className="text-primary text-sm font-semibold font-sans">Charts</button>
          </div>
          <div className="px-6 space-y-4">
            {/* Song 1 */}
            <div className="flex items-center gap-4 glass-card p-3 rounded-xl border-l-4 border-l-primary">
              <div className="size-12 rounded-lg overflow-hidden shrink-0">
                <img className="w-full h-full object-cover" alt="Acoustic guitar close up music art" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClA_BhjsxM-gG00JNl60xj_oaNt1r3Msm79i6WK1mYj3eoyyx5Jlyc4DmyWG0DS3w2mX35xM6QvYZagWJZhapb6PkXpRhUlffRhS2rvTmpqtmHCAZSZhpsnFafoxfJ_YSZ7qStfoaJ3qO36-7GLuuvRhv-44EqDEfTUgCe3K8kxaPUqMrRprrJc-u16OmHv4GnBOSfkPgbkLTw2XBSVunkqrZdYWupXaRJVyYSyjhPfcKc-Y4vXSuU2G5TT_eUeRtvR-aWKdnPATo" />
              </div>
              <div className="flex-1">
                <p className="font-bold">Daylight</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">David Kushner</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">favorite</span>
                <span className="material-symbols-outlined">more_vert</span>
              </div>
            </div>
            {/* Song 2 */}
            <div className="flex items-center gap-4 glass-card p-3 rounded-xl">
              <div className="size-12 rounded-lg overflow-hidden shrink-0">
                <img className="w-full h-full object-cover" alt="Retro microphone studio music art" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdWrdtHRsf80xeSQNsszYdlji6f3CUzfAZflIGzg69qYGKVt31audEyJssmHdCtzF44gLHr5tKUHYJKmh-gxZXl81vUQ-I4Gg1OZGiIKI69aUAvtFKxH1ogRXdH6t0EuKgA5AtznHhtcZkhBw37WW0cR9KLsyNJrGapZtB1cF6uxrYGWHJoJSBfXDeQnNARdfchqXQvqOnBoA7Nseo1yvQuA7yKJYhCJN6QcHVVBVoEwlKRUPPkrilU5GJjGKkmLTLEutUMRqX1V0" />
              </div>
              <div className="flex-1">
                <p className="font-bold">As It Was</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">Harry Styles</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-slate-400">favorite</span>
                <span className="material-symbols-outlined">more_vert</span>
              </div>
            </div>
          </div>
        </section>

        {/* Playlists Section */}
        <section className="mt-8">
          <div className="px-6 flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Your Playlists</h2>
            <button className="text-primary text-sm font-semibold font-sans">Create New</button>
          </div>
          <div className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide">
            {/* Playlist 1 */}
            <div className="min-w-[200px] glass-card p-4 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/10 to-transparent">
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary">bolt</span>
              </div>
              <h3 className="font-bold text-lg leading-tight mb-1">Morning Energy</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-sans">24 Tracks • 1h 15m</p>
              <div className="flex -space-x-2">
                <div className="size-6 rounded-full border border-background-dark overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Avatar 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBROK8-AqbX4BC7s6nqabfaO_X_2FIofPNWR8_BD9iWlc0dsCdqdpOPBVtsjnCjFSQMY7oubSI2JsVLvc4jg9Stg0HyKKRPWbtdMuUKNJbh_F02e-vvCn55uRAQRxVDnyuQLwIKaFMjMGk3oNzVkxKKPZVXYdMJXXANwj1c18DQ7rgC1Oclt3ex7s4aoXgt2QA6icvnuO6b1eJZWENp2UbvDRPrd7s8_-KtBxsRc3z8YgOgjshiYneTmrLt9badoJ6gQkYQxJ-LKi4" />
                </div>
                <div className="size-6 rounded-full border border-background-dark overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Avatar 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcHBzKAcfhv3X15TXssGyeMBggu5OK40nggq4FuLAXcam7CXT4s8xI_mdbBDziO1jbJGZphoYmqLB7Dr95qvulUroIX7kohD7nXIN650VIm70afNmvn9siTlxe-D_WXI7GS8Y65PTOEC1OPu3ngFnR8gr6qTkimBImjFtXH8ENjlhMBBejrqQNWqktS8S-BNpGm5atKyaJsXWA-taP8cYbJ3OE5ZqkIDE89WSkPct_580zCxNFPDL-_ayGDidqIHt3uHTtCVS9RT8" />
                </div>
              </div>
            </div>
            {/* Playlist 2 */}
            <div className="min-w-[200px] glass-card p-4 rounded-2xl border border-primary/10">
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary">nightlight</span>
              </div>
              <h3 className="font-bold text-lg leading-tight mb-1">Deep Focus</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-sans">12 Tracks • 45m</p>
              <div className="flex -space-x-2">
                <div className="size-6 rounded-full border border-background-dark overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Avatar 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9ugHR15it9iYT7H5f0hwDbSrh3bZHeRgjYSx6XXvtl09gnwSI0zVHuQ-pOX4zkSqGMkhNOfQQrb3cgQ1cLig74rJ8_mOrij_c-9_Pi48wFZL6ltHgmQ_3OnB9zMv006f-zsG25fxhragqvD1vrZ_lsrCki664By8szvlU16AfLlsjF-_Cu0TT2sWqa90rMVaW3rIrTm1-lCPP-m_imB3HTmWzdyfn4RQeOP1J6NM6T72kUtSiDHgUUkSHqC4rWDMVfTQi4reg5EQ" />
                </div>
              </div>
            </div>
            {/* Playlist 3 */}
            <div className="min-w-[200px] glass-card p-4 rounded-2xl border border-primary/10">
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary">favorite</span>
              </div>
              <h3 className="font-bold text-lg leading-tight mb-1">Liked Songs</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-sans">156 Tracks</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
