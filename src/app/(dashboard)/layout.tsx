import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            {/* Left Sidebar */}
            <aside className="w-24 m-4 mr-0 bg-pastel-lavender dark:bg-primary/20 rounded-xl flex flex-col items-center py-8 gap-8 border border-white/50 dark:border-primary/10">
                <div className="flex flex-col items-center gap-2">
                    <div className="size-14 rounded-full bg-white p-1 border-2 border-primary/30">
                        <div className="size-full rounded-full bg-cover bg-center" title="Circular avatar of a student named Leo" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBI8gi8KKesGo3NwLabXS6fLHCldOclTw1DlLSLRfM88S0izYh86f4rfWPEIN6K7FudYJgk-jRIY5mgwJHEVhLnDrFRuBktuvrkAFd_f4jUF3IbbYqfj0FeTo_VvQSTiMs_3LpwhNcBUkbdvFeLE_MSXGiHXJxMj0c619uF0k00lTG3MwZKWn3vipSltAmOr3P_SBkpSKj6UIxSnp0rKMSr37mlSbbDueRltEmEg4uQ-oPh6omvdD8iAx2L9KTVvP-smR2mbXBNJRE')" }}></div>
                    </div>
                    <span className="text-xs font-bold text-primary">Leo</span>
                </div>

                <nav className="flex-1 flex flex-col gap-6">
                    <Link className="text-primary hover:scale-110 transition-transform" href="/estudiante">
                        <span className="material-symbols-outlined text-3xl">grid_view</span>
                    </Link>
                    <Link className="text-primary/60 hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined text-3xl">brush</span>
                    </Link>
                    <Link className="text-primary/60 hover:text-primary transition-colors" href="/estudiante/tareas">
                        <span className="material-symbols-outlined text-3xl">auto_stories</span>
                    </Link>
                    <Link className="text-primary/60 hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined text-3xl">forum</span>
                    </Link>
                </nav>

                <Link className="text-primary/60 hover:text-primary mt-auto" href="#">
                    <span className="material-symbols-outlined text-3xl">settings</span>
                </Link>
            </aside>

            {/* Main Content Area */}
            {children}
        </div>
    );
}
