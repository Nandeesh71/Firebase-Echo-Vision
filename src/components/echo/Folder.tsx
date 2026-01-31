import React, { useState, useEffect, useRef } from 'react';

interface FolderProps {
    color?: string;
    size?: number;
    items?: React.ReactNode[];
    className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
    let color = hex.startsWith('#') ? hex.slice(1) : hex;
    if (color.length === 3) {
        color = color
            .split('')
            .map(c => c + c)
            .join('');
    }
    const num = parseInt(color, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;
    r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
    g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
    b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder: React.FC<FolderProps> = ({ color = '#0f172a', size = 1, items = [], className = '' }) => {
    const maxItems = 7;
    const papers = items.slice(0, maxItems);
    while (papers.length < maxItems) {
        papers.push(null);
    }

    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [autoIndex, setAutoIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<number | null>(null);

    const folderBackColor = darkenColor(color, 0.08);
    const paper1 = darkenColor('#ffffff', 0.15);
    const paper2 = darkenColor('#ffffff', 0.12);
    const paper3 = darkenColor('#ffffff', 0.09);
    const paper4 = darkenColor('#ffffff', 0.06);
    const paper5 = darkenColor('#ffffff', 0.03);
    const paper6 = darkenColor('#ffffff', 0.01);
    const paper7 = '#ffffff';

    const fanSlots = [
        { x: -65, y: -40, rot: -6 },
        { x: -45, y: -42, rot: -4 },
        { x: -25, y: -43, rot: -2 },
        { x: 0, y: -44, rot: 0 },
        { x: 25, y: -43, rot: 2 },
        { x: 45, y: -42, rot: 4 },
        { x: 65, y: -40, rot: 6 }
    ];

    useEffect(() => {
        if (open && !isPaused) {
            intervalRef.current = window.setInterval(() => {
                setAutoIndex(prev => (prev + 1) % maxItems);
            }, 3000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [open, isPaused, maxItems]);

    useEffect(() => {
        if (open && !isPaused && selectedIndex === null) {
            setSelectedIndex(autoIndex);
            const timer = setTimeout(() => {
                setSelectedIndex(null);
            }, 2800);
            return () => clearTimeout(timer);
        }
    }, [autoIndex, open, isPaused]);

    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.paper-item')) {
            return;
        }
        setOpen(prev => !prev);
        if (open) {
            setSelectedIndex(null);
            setAutoIndex(0);
            setIsPaused(false);
        }
    };

    const handlePaperClick = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        setIsPaused(true);
        if (!open) {
            setOpen(true);
            setTimeout(() => setSelectedIndex(index), 150);
        } else {
            setSelectedIndex(prev => {
                if (prev === index) {
                    setIsPaused(false);
                    return null;
                }
                return index;
            });
        }
    };

    const folderStyle: React.CSSProperties = {
        '--folder-color': color,
        '--folder-back-color': folderBackColor,
        '--paper-1': paper1,
        '--paper-2': paper2,
        '--paper-3': paper3
    } as React.CSSProperties;

    const scaleStyle = { transform: `scale(${size})` };

    const getFanTransform = (index: number) => {
        if (!open) {
            const offsetX = index * 2.5;
            const offsetY = index * 2;
            return `translate(${offsetX}px, ${offsetY}px)`;
        }

        const slot = fanSlots[index] || { x: 0, y: -44, rot: 0 };
        let x = slot.x;
        let y = slot.y;
        let rot = slot.rot;

        if (selectedIndex !== null) {
            if (selectedIndex === index) {
                y -= 15;
                rot *= 0.7;
            } else {
                const distance = Math.abs(selectedIndex - index);
                const spread = selectedIndex < index ? 10 : -10;
                x += spread * (1 - distance * 0.1);
                y += 3;
            }
        }

        return `translate(${x}%, ${y}%) rotate(${rot}deg)`;
    };

    const getPaperZIndex = (index: number) => {
        if (selectedIndex === index) return 45;
        return 20 + index;
    };

    const getPaperScale = (index: number) => {
        if (selectedIndex === index) return 1.15;
        if (selectedIndex === null && index === 3) return 1.05;
        return 1;
    };

    const getPaperColor = (index: number) => {
        if (index === 0) return paper1;
        if (index === 1) return paper2;
        if (index === 2) return paper3;
        if (index === 3) return paper4;
        if (index === 4) return paper5;
        if (index === 5) return paper6;
        return paper7;
    };

    return (
        <div style={{ ...scaleStyle, userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }} className={`${className} w-full max-w-[180px] mx-auto`}>
            <div
                className={`group relative transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer folder-container ${!open ? 'hover:-translate-y-2' : ''
                    }`}
                style={{ ...folderStyle, transform: open ? 'translateY(-8px)' : undefined, userSelect: 'none', WebkitUserSelect: 'none' }}
                onClick={handleClick}
            >
                <div
                    className="relative w-[180px] h-[144px] rounded-tl-0 rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] overflow-visible"
                    style={{ backgroundColor: folderBackColor, userSelect: 'none', WebkitUserSelect: 'none' }}
                >
                    <span
                        className="absolute z-0 bottom-[98%] left-0 w-[54px] h-[18px] rounded-tl-[9px] rounded-tr-[9px] rounded-bl-0 rounded-br-0"
                        style={{ backgroundColor: folderBackColor }}
                    ></span>
                    {papers.map((item, i) => {
                        const baseSize = 75 + (i * 2.5);
                        const heightSize = 80 + (i * 1.5);
                        const closedHeight = Math.max(70, heightSize - 10);
                        const scale = getPaperScale(i);

                        return (
                            <div
                                key={i}
                                onMouseDown={e => e.preventDefault()}
                                onClick={e => handlePaperClick(e, i)}
                                className={`paper-item absolute bottom-[10%] left-1/2 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${!open
                                        ? 'transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0'
                                        : ''
                                    }`}
                                style={{
                                    width: `${baseSize}%`,
                                    height: open ? `${heightSize}%` : `${closedHeight}%`,
                                    transform: `${getFanTransform(i)} scale(${scale})`,
                                    backgroundColor: getPaperColor(i),
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    zIndex: getPaperZIndex(i),
                                    userSelect: 'none',
                                    WebkitUserSelect: 'none',
                                    MozUserSelect: 'none',
                                    msUserSelect: 'none',
                                    WebkitTouchCallout: 'none'
                                }}
                            >
                                <div style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
                                    {item}
                                </div>
                            </div>
                        );
                    })}
                    <div
                        className={`absolute z-30 w-full h-full origin-bottom transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${!open ? 'group-hover:[transform:skew(8deg)_scaleY(0.7)]' : ''
                            }`}
                        style={{
                            backgroundColor: color,
                            borderRadius: '10px 16px 16px 16px',
                            ...(open && { transform: 'skew(8deg) scaleY(0.7)' })
                        }}
                    ></div>
                    <div
                        className={`absolute z-30 w-full h-full origin-bottom transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${!open ? 'group-hover:[transform:skew(-8deg)_scaleY(0.7)]' : ''
                            }`}
                        style={{
                            backgroundColor: color,
                            borderRadius: '10px 16px 16px 16px',
                            ...(open && { transform: 'skew(-8deg) scaleY(0.7)' })
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Folder;
