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
            // 1. Send Admin Notification (User → Echo Vision Team) - CRITICAL
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER_NOTIFY,
                currentForm,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            // 2. Send Auto-Reply Confirmation (Echo Vision → User) - NON-BLOCKING
            // Wrapped separately so a failure here doesn't block user success feedback
            try {
                await emailjs.sendForm(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTO_REPLY,
                    currentForm,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );
            } catch (autoReplyError) {
                // Log but don't fail the submission
                console.warn('Auto-reply email failed (non-critical):', autoReplyError);
            }

            setSubmitted(true);
            currentForm.reset();
            // No toast, inline feedback only

        } catch (error: any) {
            console.error('EmailJS Error:', error);
            const errorMessage = error?.text || error?.message || "Something went wrong. Please try again.";
            toast.error(`Error: ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <form ref={formRef} onSubmit={handleSubmit} className="relative p-8 flex flex-col gap-5">
                {/* Form Fields */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="user_name" className="sr-only">Full Name</label>
                        <input
                            id="user_name"
                            type="text"
                            name="user_name"
                            required
                            disabled={loading || submitted}
                            placeholder="Full Name"
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all font-medium disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="user_email" className="sr-only">Email Address</label>
                        <input
                            id="user_email"
                            type="email"
                            name="user_email"
                            required
                            disabled={loading || submitted}
                            placeholder="Email Address"
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all font-medium disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="sr-only">Message (Optional)</label>
                        <textarea
                            id="message"
                            name="message"
                            disabled={loading || submitted}
                            placeholder="Any specific interest or feedback? (Optional)"
                            rows={3}
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all resize-none font-medium disabled:opacity-50"
                        />
                    </div>
                </div>

                {/* Animated Submit Button */}
                <div className="pt-2 flex flex-col items-center">
                    <button
                        type="submit"
                        disabled={loading || submitted}
                        className={`notify-button ${submitted ? 'bg-green-600' : ''}`}
                        style={submitted ? { background: '#10b981', cursor: 'default', transform: 'none', boxShadow: 'none' } : {}}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : submitted ? (
                            <>
                                <CheckCircle className="w-5 h-5 text-white" />
                                <span>Notified</span>
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

                    {/* Inline Confirmation when Submitted */}
                    {submitted && (
                        <div className="mt-6 text-center animate-in fade-in slide-in-from-top-2 duration-500">
                            <h4 className="text-sm font-bold text-slate-900 mb-1">Request Received</h4>
                            <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                                Thank you for your interest in Echo Vision.
                                You will be notified when we share launch updates, early access opportunities, or important announcements.
                            </p>
                        </div>
                    )}
                </div>

                {/* Privacy Assurance (Only show when not submitted to reduce clutter) */}
                {!submitted && (
                    <p className="text-xs text-slate-400 text-center mt-1">
                        Your information is secure. We only use it to send you Echo Vision updates.
                    </p>
                )}
            </form>
        </div>
    );
}

export default ContactForm;
