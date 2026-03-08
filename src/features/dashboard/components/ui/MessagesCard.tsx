import React from 'react';
import { ListCard } from '@/components/ui/ListCard';

interface Message {
    id: number;
    author: string;
    avatar: string;
    text: string;
}

const messages: Message[] = [
    {
        id: 1,
        author: 'Elena Art',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANliyNWufQYu4vWLRMcmM7hW-TRh3yxQ2WoOymfAKx4p3ioOkLyyTOCFE6nPwfwTQv4HQ0zqWFmCx4nMyeZLKClOd99_M0S8S7ff9zFQtA_OeVbkcYFh-LTmTi4rCTMDiiL0r43Qmcil3lTUceHYF4iEWZgOfhxleJwCHqvHN_xm8tb8BUMRDW0Tztx6eWhvHV3Ha2biXgyVCKLvTGtK-GTyOsZJe3b3ptcA3PNGhcWbDq-BHi1T9AgezZihzWmUwnLk0-ReF5t6c',
        text: '¡Tu último boceto es increíble!',
    },
    {
        id: 2,
        author: 'Marco Brush',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3l0lhv1xxMXehoOEsWFFnO8aIyj3j1K05NVc0p2XgwZs_cw6w5b7ykd8eUmfFHhn0CGBSYHTG0FP_ufKEaN1pxGB4RaVxIqj6gijgCY-6C6UvGAeYmpBOm5LxPiWKqFCE_9lPMcYfeY43q6tWGQ2ACn5B0o3aXcFMVYIu9n81cGAKvK7PRHYPYxv-bAAthqcd7YChdgr4AxYiwNpxveLaSQLi2Ail68Af6f1D5pxyxUXRuj6oxS1qbI4TDQ1NZlHPA2j3XhjGOws',
        text: 'No olvides subir la tarea de hoy.',
    },
];

export const MessagesCard = () => {
    return (
        <ListCard
            title="Mensajes de Profesores"
            items={messages}
            renderItem={(message) => (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-pastel-pink/20 border border-white">
                    <div className="size-10 rounded-full bg-cover" title={`Avatar of ${message.author}`} style={{ backgroundImage: `url('${message.avatar}')` }}></div>
                    <div className="flex-1">
                        <p className="text-xs font-bold">{message.author}</p>
                        <p className="text-[10px] truncate text-slate-500">{message.text}</p>
                    </div>
                </div>
            )}
        />
    );
};
