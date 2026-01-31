'use client'

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { CheckCircle, Send, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '../../../components/ui/dialog';

export function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const currentForm = formRef.current;

        if (!currentForm) return;

        const formData = new FormData(currentForm);
        const userName = formData.get('user_name') as string;
        const userEmail = formData.get('user_email') as string;
        const message = formData.get('message') as string;

        if (!userEmail || !userEmail.includes('@')) {
            toast.error("Please enter a valid email address.");
            setLoading(false);
            return;
        }

        try {
            // 1. Send Admin Notification (User -> Team)
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER_NOTIFY,
                currentForm,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            // 2. Send Auto-Reply (Team -> User)
            // We pass the same data manually for the second template
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTO_REPLY,
                {
                    user_name: userName,
                    user_email: userEmail,
                    message: message,
                    // Add any other variables your auto-reply template needs
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSubmitted(true);
            setShowDialog(true);
            currentForm.reset();
            toast.success("Message sent successfully!");

        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <>
                {/* Re-render form to keep layout stability if needed, or just the success dialog */}
                {/* For this specific design request, we'll keep the form invisible or just return the dialog if that's the UX pattern, 
                     but typically replacing the form with a success message is better. 
                     The original code returned just the Dialog. Let's stick to that but ensure we render something in the layout space. */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 max-w-xs mx-auto">
                        Thank you for reaching out, {formRef.current?.user_name?.value}. We'll get back to you shortly.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-slate-900 font-semibold hover:text-slate-700 underline underline-offset-4"
                    >
                        Send another message
                    </button>
                </div>
            </>
        );
    }

    return (
        <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <form ref={formRef} onSubmit={handleSubmit} className="relative p-8 flex flex-col gap-5">
                <div className="text-center mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">Get in Touch</h3>
                    <p className="text-slate-500 text-sm mt-1">We'd love to hear from you</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="user_name" className="sr-only">Name</label>
                        <input
                            id="user_name"
                            type="text"
                            name="user_name"
                            required
                            disabled={loading}
                            placeholder="Your Name"
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all font-medium"
                        />
                    </div>

                    <div>
                        <label htmlFor="user_email" className="sr-only">Email</label>
                        <input
                            id="user_email"
                            type="email"
                            name="user_email"
                            required
                            disabled={loading}
                            placeholder="your@email.com"
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all font-medium"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            disabled={loading}
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all resize-none font-medium"
                        />
                    </div>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl font-bold text-lg bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Send Message
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
