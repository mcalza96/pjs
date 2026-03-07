export type NavItem = {
    title: string;
    href: string;
    icon: string;
};

export const studentNav: NavItem[] = [
    { title: 'Inicio', href: '/estudiante', icon: 'grid_view' },
    { title: 'Curso', href: '/estudiante/curso', icon: 'brush' },
    { title: 'Notas', href: '/estudiante/notas', icon: 'sticky_note_2' },
    { title: 'Mensajes', href: '#', icon: 'forum' }
];

export const teacherNav: NavItem[] = [
    { title: 'Inicio', href: '/profesor', icon: 'grid_view' },
    { title: 'Estudiantes', href: '/profesor/estudiantes', icon: 'group' },
    { title: 'Clases', href: '/profesor/clases', icon: 'videocam' },
    { title: 'Editar Curso', href: '/profesor/curso', icon: 'edit_square' },
    { title: 'Mensajes', href: '#', icon: 'forum' }
];

export const parentNav: NavItem[] = [
    { title: 'Inicio', href: '/padre', icon: 'grid_view' },
    { title: 'Seguimiento', href: '/padre/seguimiento', icon: 'monitoring' },
    { title: 'Mensajes', href: '#', icon: 'forum' }
];
