import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';
import './CollaborateCard.css';

interface CollaborateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CollaborateModal: React.FC<CollaborateModalProps> = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false); // Controls mounting
    const [isActive, setIsActive] = useState(false); // Controls opacity/scale styles

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setHasCelebrated(false); // Reset celebration each time modal opens
            // Small delay to ensure the element is mounted before animating in
            const timer = setTimeout(() => setIsActive(true), 10);
            document.body.style.overflow = 'hidden';
            return () => clearTimeout(timer);
        } else {
            setIsActive(false);
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = '';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const [hasCelebrated, setHasCelebrated] = useState(false);

    const fireConfetti = () => {
        const duration = 2000; // 2s to sync with card animation
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: ReturnType<typeof setInterval> = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 200);
    };

    const handleHover = () => {
        if (!hasCelebrated) {
            setHasCelebrated(true);
            fireConfetti();
        }
    };

    const handleCardClick = () => {
        // Redirect logic
        const email = "echovision.helpdesk.in@gmail.com";
        const subject = encodeURIComponent("Echo Vision Collaboration Inquiry");
        const body = encodeURIComponent(`Hello Echo Vision Team,

I would like to inquire about potential collaboration opportunities with Echo Vision. Please let me know how we may proceed further.

Thank you for your time and consideration.

Kind regards,
[Your Name]`);

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    const handleCloseWithRedirect = () => {
        handleCardClick(); // Redirect to email first
        onClose(); // Then close modal
    };

    if (!isVisible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
                onClick={handleCloseWithRedirect}
            />

            <button
                onClick={handleCloseWithRedirect}
                className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-[110]"
                aria-label="Close modal"
            >
                <X size={32} />
            </button>

            {/* Modal Content (Card) */}
            <div
                className={`relative z-[110] transform transition-all duration-700 mt-12 ${isActive ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-8 opacity-0'}`}
            >
                <div className="card-wrapper cursor-pointer" onMouseEnter={handleHover} onClick={handleCardClick}>
                    <div className="relative bg-zinc-900 w-[90vw] max-w-[500px] aspect-[16/10] group transition-all duration-700 flex items-center justify-center shadow-2xl rounded-md overflow-visible mx-auto">

                        {/* White Content Letter */}
                        <div className="card-animate flex flex-col items-center py-6 px-6 justify-between bg-white w-[92%] h-[88%] absolute bottom-0 mb-3 left-0 right-0 mx-auto group-hover:-translate-y-[65%] group-hover:scale-[1.02] rounded-lg shadow-lg text-center border border-slate-100">

                            {/* Header Content */}
                            <div className="flex flex-col items-center gap-2 mt-1 w-full max-w-[90%]">
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                                    Thank You for Reaching Out
                                </h3>
                                <div className="h-px w-12 bg-slate-200 my-1"></div>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                    We sincerely appreciate your interest in collaborating with Echo Vision. Your initiative and support mean a great deal to us as we work toward a more inclusive future.
                                </p>
                            </div>

                            {/* Footer / Signature */}
                            <div className="flex flex-col items-center gap-1.5 w-full">
                                <p className="text-[11px] text-slate-400 italic font-medium">
                                    Together, we can create a more accessible and inclusive world.
                                </p>
                                <div className="w-full border-t border-slate-100 pt-2.5">
                                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                                        Echo Vision Team
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Seal */}
                        <button className="seal w-12 aspect-square rounded-full z-40 text-xs flex items-center justify-center font-bold text-white bg-slate-900 transition-all duration-700 group-hover:opacity-0 group-hover:scale-50 border-[3px] border-zinc-800 shadow-xl">
                            EV
                        </button>

                        {/* Envelope Flaps */}
                        <div className="tp transition-all duration-700 absolute w-full h-full pointer-events-none" />
                        <div className="lft transition-all duration-700 absolute w-full h-full pointer-events-none" />
                        <div className="rgt transition-all duration-700 absolute w-full h-full pointer-events-none" />
                        <div className="btm transition-all duration-700 absolute w-full h-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollaborateModal;
