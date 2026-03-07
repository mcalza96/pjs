'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { studentNav, teacherNav, parentNav, NavItem } from '@/config/navigation';

export const Sidebar = () => {
    const pathname = usePathname();

    let navLinks: NavItem[] = studentNav;
    let userLabel = 'Estudiante';
    let avatarUrl = "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBI8gi8KKesGo3NwLabXS6fLHCldOclTw1DlLSLRfM88S0izYh86f4rfWPEIN6K7FudYJgk-jRIY5mgwJHEVhLnDrFRuBktuvrkAFd_f4jUF3IbbYqfj0FeTo_VvQSTiMs_3LpwhNcBUkbdvFeLE_MSXGiHXJxMj0c619uF0k00lTG3MwZKWn3vipSltAmOr3P_SBkpSKj6UIxSnp0rKMSr37mlSbbDueRltEmEg4uQ-oPh6omvdD8iAx2L9KTVvP-smR2mbXBNJRE')";

    if (pathname.startsWith('/profesor')) {
        navLinks = teacherNav;
        userLabel = 'Profesor';
    } else if (pathname.startsWith('/padre')) {
        navLinks = parentNav;
        userLabel = 'Padre';
    }

    return (
        <aside className="w-24 m-4 mr-0 bg-pastel-lavender dark:bg-primary/20 rounded-xl flex flex-col items-center py-8 gap-8 border border-white/50 dark:border-primary/10 transition-all">
            <div className="flex flex-col items-center gap-2">
                <div className="size-14 rounded-full bg-white p-1 border-2 border-primary/30">
                    <div
                        className="size-full rounded-full bg-cover bg-center"
                        title={`Avatar de ${userLabel}`}
                        style={{ backgroundImage: avatarUrl }}
                    ></div>
                </div>
                <span className="text-xs font-bold text-primary">{userLabel}</span>
            </div>

            <nav className="flex-1 flex flex-col gap-6 w-full items-center">
                {navLinks.map((link) => {
                    const isRoot = link.href === '/estudiante' || link.href === '/profesor' || link.href === '/padre';
                    const isActive = isRoot
                        ? pathname === link.href
                        : (link.href !== '#' && pathname.startsWith(link.href));

                    return (
                        <Link
                            key={link.title}
                            className={`transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-primary/60 hover:text-primary'} p-2`}
                            href={link.href}
                            title={link.title}
                        >
                            <span className="material-symbols-outlined text-3xl">{link.icon}</span>
                        </Link>
                    );
                })}
            </nav>

            <Link className="text-primary/60 hover:text-primary mt-auto p-2 transition-colors" href="#">
                <span className="material-symbols-outlined text-3xl">settings</span>
            </Link>
        </aside>
    );
};
