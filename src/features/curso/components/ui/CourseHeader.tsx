import React from 'react';

export const CourseHeader = () => {
    return (
        <header className="mb-10">
            <h1 className="text-5xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pastel-pink mb-2">
                Curso Procreate
            </h1>
            <p className="text-slate-500 font-medium">Aprende ilustración digital desde cero</p>

            <style dangerouslySetInnerHTML={{
                __html: `
        .glow-text {
          text-shadow: 0 0 20px rgba(153, 71, 235, 0.2);
        }
      `}} />
        </header>
    );
};
