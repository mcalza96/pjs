import React from 'react';

export interface CourseCard {
    id: string;
    titulo: string;
    descripcion?: string;
    estudiantes_count?: number;
    imagen_url?: string;
}

export interface TeacherCoursesViewProps {
    courses: CourseCard[];
    onCreateCourse: () => void;
    onCourseClick: (id: string) => void;
}

export const TeacherCoursesView: React.FC<TeacherCoursesViewProps> = ({
    courses,
    onCreateCourse,
    onCourseClick
}) => {
    return (
        <div className="min-h-screen bg-[#faf9fe] p-6 md:p-10">
            {/* Soft Background Accents */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-pink-200/20 blur-[100px] rounded-full -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <header className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-2">Mis Cursos 🎨</h1>
                    <p className="text-slate-500 text-lg font-medium">Gestiona tus clases y acompaña el progreso de tus alumnos.</p>
                </header>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            onClick={() => onCourseClick(course.id)}
                            className="group relative bg-white rounded-[2.5rem] border-4 border-transparent hover:border-primary/20 overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer flex flex-col"
                        >
                            {/* Course Image Holder */}
                            <div className="h-48 bg-gradient-to-br from-primary/10 to-pink-100 flex items-center justify-center relative">
                                {course.imagen_url ? (
                                    <img src={course.imagen_url} alt={course.titulo} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="material-symbols-outlined text-6xl text-primary/30 group-hover:scale-110 transition-transform">palette</span>
                                )}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-2xl text-xs font-black text-primary shadow-sm">
                                    {course.estudiantes_count || 0} ALUMNOS
                                </div>
                            </div>

                            {/* Course Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-black text-slate-800 mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {course.titulo}
                                </h3>
                                <p className="text-slate-500 text-sm line-clamp-2 font-medium mb-6">
                                    {course.descripcion || 'Sin descripción disponible para este curso creativo.'}
                                </p>

                                <div className="mt-auto flex items-center justify-between text-primary font-black text-sm tracking-wider">
                                    <span>GESTIONAR</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Empty State / Quick Add Card */}
                    <div
                        onClick={onCreateCourse}
                        className="group border-4 border-dashed border-slate-200 hover:border-primary/40 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:bg-primary/5 transition-all"
                    >
                        <div className="w-20 h-20 rounded-full bg-slate-50 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all">
                            <span className="material-symbols-outlined text-4xl">auto_fix_high</span>
                        </div>
                        <div>
                            <p className="font-black text-slate-400 group-hover:text-primary transition-colors">CREAR OTRO</p>
                            <p className="text-xs text-slate-400 font-medium">Expande tu academia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
