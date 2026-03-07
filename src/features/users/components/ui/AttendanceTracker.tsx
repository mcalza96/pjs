import React from 'react';
import { Asistencia } from '../../types';

interface AttendanceTrackerProps {
    asistencia: Asistencia;
}

export const AttendanceTracker: React.FC<AttendanceTrackerProps> = ({ asistencia }) => {
    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-slate-700">Asistencia a Clases</h3>
            <div className="grid grid-cols-5 gap-3">
                {asistencia.detalle.map((status, index) => {
                    if (status === 'attended') {
                        return (
                            <div key={index} className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mx-auto">
                                <span className="material-symbols-outlined text-lg">check</span>
                            </div>
                        );
                    }
                    if (status === 'missed') {
                        return (
                            <div key={index} className="w-10 h-10 rounded-full bg-pastel-pink flex items-center justify-center text-red-500 font-bold mx-auto">
                                <span className="material-symbols-outlined text-lg">close</span>
                            </div>
                        );
                    }
                    return (
                        <div key={index} className="w-10 h-10 rounded-full border-2 border-dashed border-pastel-lavender flex items-center justify-center text-slate-300 mx-auto">
                            •
                        </div>
                    );
                })}
            </div>
            <p className="text-sm font-medium text-slate-500">{asistencia.asistidas}/{asistencia.total} clases asistidas</p>
        </div>
    );
};
