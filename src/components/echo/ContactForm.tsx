'use client'

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { CheckCircle, Loader2 } from 'lucide-react';
import './NotifyButton.css';

export function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const currentForm = formRef.current;

        if (!currentForm) return;

        const formData = new FormData(currentForm);
        const userEmail = formData.get('user_email') as string;

        if (!userEmail || !userEmail.includes('@')) {
            toast.error("Please enter a valid email address.");
            setLoading(false);
            return;
        }

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER_NOTIFY,
                currentForm,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSubmitted(true);
            currentForm.reset();
            toast.success("You're on the list! We'll notify you soon.");

        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 min-h-[350px] flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">You're All Set!</h3>
                <p className="text-slate-600 max-w-xs mx-auto leading-relaxed">
                    Thank you for joining the Echo Vision community. We'll notify you when we have important updates or launch announcements.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-slate-900 font-semibold hover:text-slate-700 underline underline-offset-4"
                >
                    Subscribe another email
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <form ref={formRef} onSubmit={handleSubmit} className="relative p-8 flex flex-col gap-5">
                {/* Header */}
                <div className="text-center mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">Stay Updated</h3>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                        Be the first to know about Echo Vision updates, launch announcements, and early access opportunities.
                    </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="user_name" className="sr-only">Full Name</label>
                        <input
                            id="user_name"
                            type="text"
                            name="user_name"
                            required
                            disabled={loading}
                            placeholder="Full Name"
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all font-medium"
                        />
                    </div>

                    <div>
                        <label htmlFor="user_email" className="sr-only">Email Address</label>
                        <input
                            id="user_email"
                            type="email"
                            name="user_email"
                            required
                            disabled={loading}
                            placeholder="Email Address"
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all font-medium"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="sr-only">Message (Optional)</label>
                        <textarea
                            id="message"
                            name="message"
                            disabled={loading}
                            placeholder="Any specific interest or feedback? (Optional)"
                            rows={3}
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all resize-none font-medium"
                        />
                    </div>
                </div>

                {/* Animated Submit Button */}
                <div className="pt-2 flex justify-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="notify-button"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : (
                            <>
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                fill="currentColor"
                                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <span>Notify Me</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Privacy Assurance */}
                <p className="text-xs text-slate-400 text-center mt-1">
                    Your information is secure. We only use it to send you Echo Vision updates.
                </p>
            </form>
        </div>
    );
}

export default ContactForm;
