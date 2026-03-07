import React from 'react';

export interface CreateCourseViewProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    titulo: string;
    onTituloChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    descripcion: string;
    onDescripcionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    fechaInicio: string;
    onFechaInicioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | null;
    onBack: () => void;
}

export const CreateCourseView: React.FC<CreateCourseViewProps> = ({
    onSubmit,
    isLoading,
    titulo,
    onTituloChange,
    descripcion,
    onDescripcionChange,
    fechaInicio,
    onFechaInicioChange,
    error,
    onBack
}) => {
    return (
        <div className="min-h-screen bg-[#faf9fe] flex items-center justify-center p-4 md:p-10 relative overflow-hidden w-full">
            {/* Background Gradients */}
            <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
            <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-200/20 blur-[100px] rounded-full -z-10"></div>

            <main className="w-full max-w-2xl bg-white/90 backdrop-blur-xl border-4 border-white/50 rounded-[3rem] shadow-2xl p-8 md:p-12 relative z-10 mx-auto">
                <div className="flex items-center gap-6 mb-10">
                    {/* Back Button */}
                    <button
                        onClick={onBack}
                        className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-primary hover:text-white transition-all active:scale-95 group border-2 border-primary/5"
                    >
                        <span className="material-symbols-outlined font-black group-hover:-translate-x-1 transition-transform text-2xl">arrow_back</span>
                    </button>

                    <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight leading-tight">
                        Nuevo camino creativo ✨
                    </h1>
                </div>

                <div className="text-center mb-10">
                    <p className="text-slate-500 font-medium text-lg max-w-md mx-auto">
                        Define el corazón de tu próximo curso. Inspira a tus alumnos con una gran idea.
                    </p>
                </div>

                <form className="space-y-6" onSubmit={onSubmit}>
                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-center font-black border-2 border-red-100 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">error</span>
                            {error}
                        </div>
                    )}

                    {/* Titulo */}
                    <div className="space-y-2">
                        <label className="block text-base font-black text-slate-700 ml-2">Título del Curso</label>
                        <input
                            className="w-full px-6 py-4 rounded-3xl border-4 border-slate-50 bg-white text-slate-800 placeholder:text-slate-300 focus:border-primary/40 focus:ring-0 outline-none transition-all text-lg font-bold shadow-sm"
                            placeholder="Ej: Ilustración de Personajes Adorables"
                            type="text"
                            required
                            value={titulo}
                            onChange={onTituloChange}
                            disabled={isLoading}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Fecha Inicio */}
                        <div className="space-y-2">
                            <label className="block text-base font-black text-slate-700 ml-2">Comienzo del Curso</label>
                            <input
                                className="w-full px-6 py-4 rounded-3xl border-4 border-slate-50 bg-white text-slate-800 placeholder:text-slate-300 focus:border-primary/40 focus:ring-0 outline-none transition-all text-lg font-bold shadow-sm"
                                type="date"
                                required
                                value={fechaInicio}
                                onChange={onFechaInicioChange}
                                disabled={isLoading}
                            />
                        </div>

                        {/* Image Area Mockup - Smaller for better layout */}
                        <div className="border-4 border-dashed border-slate-100 rounded-3xl p-4 flex items-center gap-4 bg-slate-50/30 hover:bg-primary/5 hover:border-primary/20 transition-all cursor-pointer group shadow-sm">
                            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white text-primary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
                            </div>
                            <div className="text-left">
                                <p className="font-black text-slate-600 group-hover:text-primary transition-colors text-sm">Cargar Portada</p>
                                <p className="text-[10px] text-slate-400 font-medium">(Próximamente)</p>
                            </div>
                        </div>
                    </div>

                    {/* Descripcion */}
                    <div className="space-y-2">
                        <label className="block text-base font-black text-slate-700 ml-2">Descripción</label>
                        <textarea
                            className="w-full px-6 py-4 rounded-[2rem] border-4 border-slate-50 bg-white text-slate-800 placeholder:text-slate-300 focus:border-primary/40 focus:ring-0 outline-none transition-all text-lg font-medium min-h-[140px] resize-none shadow-sm"
                            placeholder="Cuéntales qué magia aprenderán en este curso..."
                            required
                            value={descripcion}
                            onChange={onDescripcionChange}
                            disabled={isLoading}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-full shadow-2xl shadow-primary/30 transition-all active:scale-[0.98] mt-6 flex items-center justify-center gap-3 text-xl disabled:opacity-50"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "CREANDO..." : "COMENZAR CURSO"}
                        {!isLoading && <span className="material-symbols-outlined text-2xl font-bold">magic_button</span>}
                    </button>
                </form>
            </main>
        </div>
    );
};
