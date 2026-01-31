import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

interface FolderProps {
    color?: string;
    size?: number;
    items?: React.ReactNode[];
    className?: string;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export interface FolderRef {
    toggle: () => void;
}

const Folder = forwardRef<FolderRef, FolderProps>(({ color = '#0f172a', size = 1, items = [], className = '', isOpen: controlledOpen, onOpenChange }, ref) => {
    const [internalOpen, setInternalOpen] = useState(false);

    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;

    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const setOpen = (value: boolean | ((prev: boolean) => boolean)) => {
        if (!isControlled) {
            setInternalOpen(value);
        }
        if (onOpenChange) {
            const nextValue = typeof value === 'function' ? value(open) : value;
            onOpenChange(nextValue);
        }
    };

    useImperativeHandle(ref, () => ({
        toggle: () => setOpen(prev => !prev)
    }));

    // Reset index when folder closes
    useEffect(() => {
        if (!open) {
            setActiveIndex(0);
            if (intervalRef.current) clearInterval(intervalRef.current);
        } else {
            // Start loop
            intervalRef.current = window.setInterval(() => {
                setActiveIndex(prev => (prev + 1) % items.length);
            }, 2000); // 2 second interval
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [open, items.length]);

    // Folder styles
    const folderColor = color; // Main dark color
    // Gradients for 3D effect
    const backGradient = `linear-gradient(to bottom right, ${color}, #020617)`;
    const frontGradient = `linear-gradient(135deg, #334155 0%, ${color} 60%)`;

    // Scale container style
    const scaleStyle = {
        transform: `scale(${size})`,
        transformOrigin: 'center bottom'
    };

    return (
        <div
            className={`relative w-[320px] h-[250px] mx-auto ${className} perspective-1000`}
            style={scaleStyle}
            onClick={() => setOpen(prev => !prev)}
        >
            {/* --- Folder Back --- */}
            <div
                className="absolute bottom-0 left-0 w-full h-[190px] rounded-t-lg rounded-b-xl transition-transform duration-500 ease-out origin-bottom border border-slate-800/50"
                style={{
                    background: backGradient,
                    transform: open ? 'scaleY(1.02)' : 'scaleY(1)',
                    zIndex: 10,
                    boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.05)'
                }}
            >
                {/* Back Tab - integrated better visually */}
                <div
                    className="absolute -top-7 left-0 w-[40%] h-10 rounded-t-2xl border-t border-l border-r border-slate-800/50"
                    style={{
                        background: backGradient,
                        clipPath: 'polygon(0% 100%, 0% 0%, 82% 0%, 100% 100%)'
                    }}
                ></div>
            </div>

            {/* --- Papers Area --- */}
            <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 20 }}>
                {items.map((item, index) => {
                    let state = 'stacked';
                    if (open) {
                        if (index === activeIndex) state = 'active';
                        else if (index === (activeIndex + 1) % items.length) state = 'next';
                    } else {
                        state = 'closed';
                    }

                    // CSS Variables for motion
                    // Active: TranslateY(-65%) (fully out)
                    // Next: TranslateY(-15%) (peeking)
                    // Closed: TranslateY(10%) (tucked inside, NOT falling out bottom)

                    let translateY = '10%';
                    let zIndex = 5;
                    let opacity = 0;
                    let scale = 0.95;

                    if (state === 'closed') {
                        translateY = '15%'; // Stays INSIDE the folder, doesn't drop below
                        zIndex = 5;
                        opacity = 0;
                        scale = 0.9;
                    } else if (state === 'active') {
                        translateY = '-65%';
                        zIndex = 30;
                        opacity = 1;
                        scale = 1;
                    } else if (state === 'next') {
                        translateY = '-15%';
                        zIndex = 20;
                        opacity = 0.9;
                        scale = 0.98;
                    } else {
                        // Stacked / Background
                        translateY = '5%';
                        zIndex = 10;
                        opacity = 0;
                    }

                    return (
                        <div
                            key={index}
                            className="absolute left-6 right-6 h-[200px] bg-white rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border border-slate-200 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] flex items-center justify-center p-6 text-center select-none overflow-hidden"
                            style={{
                                bottom: '25px',
                                transform: `translateY(${translateY}) scale(${scale})`,
                                zIndex: zIndex,
                                opacity: open ? 1 : 0,
                            }}
                        >
                            <div className="w-full h-full flex flex-col justify-center items-center pointer-events-none">
                                {item}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* --- Folder Front --- */}
            <div
                className="absolute bottom-0 left-0 w-full h-[170px] rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_10px_10px_-5px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out origin-bottom border-t border-white/10"
                style={{
                    background: frontGradient,
                    zIndex: 100,
                    transform: open ? 'rotateX(12deg) translateY(6px)' : 'rotateX(0deg)',
                    boxShadow: open
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255,255,255,0.1)'
                        : '0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255,255,255,0.1)'
                }}
            >
                {/* Decorative cut/ridge on front */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20"></div>

                {/* Internal shadow gradient to show depth when open */}
                {open && (
                    <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black/20 to-transparent rounded-t-xl pointer-events-none"></div>
                )}
            </div>

        </div>
    );
});

export default Folder;
