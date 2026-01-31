'use client'

import React, { useState } from 'react';
// import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'sonner';
import { CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '../../../components/ui/dialog';

export default function ContactForm() {
    // const [state, handleSubmit] = useForm("xrbjoelq");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    const handleFakeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target as HTMLFormElement;
        const email = form.email.value;
        if (!email || !email.includes('@')) {
            toast.error("Please enter a valid email address.");
            setLoading(false);
            return;
        }
        // Simulate submission delay
        setTimeout(() => {
            setLoading(false);
            setShowDialog(true);
            setSubmitted(true);
        }, 2000);
    };

    if (submitted) {
        return (
            <Dialog open={showDialog} onOpenChange={setShowDialog}>
                <DialogContent className="bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-4 max-w-40 mx-auto">
                    <DialogHeader className="text-center">
                        <div className="flex justify-center mb-2">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <DialogTitle className="text-base font-bold text-white">Success!</DialogTitle>
                        <DialogDescription className="text-white/80 mt-1 text-xs">
                            Thank you! We'll notify you soon.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogClose className="absolute top-4 right-4 text-white/60 hover:text-white">
                        ✕
                    </DialogClose>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <form onSubmit={handleFakeSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex gap-4">
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    disabled={loading}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-800/40 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button type="submit" className="px-6 py-3 rounded-xl font-bold text-base shadow-md flex items-center justify-center gap-2 transition-all bg-gradient-to-r from-slate-900 to-slate-700 text-white hover:opacity-90">
                    Notify Me
                </button>
            </div>
        </form>
    );
}
