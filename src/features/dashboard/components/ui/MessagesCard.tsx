import React from 'react';

export const MessagesCard = () => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-pastel-pink/50 flex flex-col">
            <h3 className="font-bold text-lg mb-4">Mensajes de Profesores</h3>
            <div className="space-y-3 flex-1 overflow-y-auto pr-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-pastel-pink/20 border border-white">
                    <div className="size-10 rounded-full bg-cover" title="Avatar of Professor Elena" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANliyNWufQYu4vWLRMcmM7hW-TRh3yxQ2WoOymfAKx4p3ioOkLyyTOCFE6nPwfwTQv4HQ0zqWFmCx4nMyeZLKClOd99_M0S8S7ff9zFQtA_OeVbkcYFh-LTmTi4rCTMDiiL0r43Qmcil3lTUceHYF4iEWZgOfhxleJwCHqvHN_xm8tb8BUMRDW0Tztx6eWhvHV3Ha2biXgyVCKLvTGtK-GTyOsZJe3b3ptcA3PNGhcWbDq-BHi1T9AgezZihzWmUwnLk0-ReF5t6c')" }}></div>
                    <div className="flex-1">
                        <p className="text-xs font-bold">Elena Art</p>
                        <p className="text-[10px] truncate text-slate-500">¡Tu último boceto es increíble!</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background-light dark:bg-slate-700/50 border border-white">
                    <div className="size-10 rounded-full bg-cover" title="Avatar of Professor Marco" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3l0lhv1xxMXehoOEsWFFnO8aIyj3j1K05NVc0p2XgwZs_cw6w5b7ykd8eUmfFHhn0CGBSYHTG0FP_ufKEaN1pxGB4RaVxIqj6gijgCY-6C6UvGAeYmpBOm5LxPiWKqFCE_9lPMcYfeY43q6tWGQ2ACn5B0o3aXcFMVYIu9n81cGAKvK7PRHYPYxv-bAAthqcd7YChdgr4AxYiwNpxveLaSQLi2Ail68Af6f1D5pxyxUXRuj6oxS1qbI4TDQ1NZlHPA2j3XhjGOws')" }}></div>
                    <div className="flex-1">
                        <p className="text-xs font-bold">Marco Brush</p>
                        <p className="text-[10px] truncate text-slate-500">No olvides subir la tarea de hoy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
