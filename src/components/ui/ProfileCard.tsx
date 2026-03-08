import React from 'react';

interface ProfileCardProps {
    colorBase: string;
    avatar: string;
    name: string;
    course: string;
    tags: React.ReactNode[];
    buttonText: string;
    onButtonClick: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
    colorBase,
    avatar,
    name,
    course,
    tags,
    buttonText,
    onButtonClick
}) => {
    return (
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden group hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <div className={`h-20 ${colorBase} relative`}></div>
            <div className="px-6 pb-6 text-center -mt-10 relative">
                <div className="inline-block p-1 bg-white rounded-full mb-3 shadow-sm">
                    <img
                        alt={name}
                        className="w-20 h-20 rounded-full object-cover"
                        src={avatar}
                    />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{name}</h2>
                <p className="text-slate-500 text-sm mb-4">{course}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {tags.map((tag, index) => (
                        <React.Fragment key={index}>{tag}</React.Fragment>
                    ))}
                </div>
                <button
                    onClick={onButtonClick}
                    className="w-full py-3 bg-pastel-lavender/50 text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-colors"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};
