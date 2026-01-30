"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Terminal,
  Loader2,
  Send,
  Building2,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { submitContactForm } from "@/actions/contact";
import { toast } from "sonner";

const ContactCTASection = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    companyName: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // New state for success view
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { companyName: "", email: "" };

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "companyName" || name === "email") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const token = await recaptchaRef.current?.executeAsync();

      if (!token) {
        toast.error("Security check failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      const submissionData = new FormData();
      submissionData.append("companyName", formData.companyName);
      submissionData.append("email", formData.email);
      submissionData.append("phone", formData.phone);
      submissionData.append("comment", formData.comment);
      submissionData.append("recaptchaToken", token);

      const result = await submitContactForm(
        { success: false, message: "" },
        submissionData,
      );

      if (result.success) {
        // Trigger Success Animation
        setIsSuccess(true);
        toast.success(result.message);
        setFormData({ companyName: "", email: "", phone: "", comment: "" });
        recaptchaRef.current?.reset();
      } else {
        toast.error(result.message);
        recaptchaRef.current?.reset();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-muted/30 border-t border-border relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Get Access to <br />
              <span className="text-[#f99e1f]">HireTrack</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Streamline your entire recruitment process with our powerful,
              data-driven platform. Contact us today to request access for your
              organization and start hiring smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                className="shadow-lg shadow-accent/20 group"
                asChild
              >
                <a href="/installation-guide">
                  <Terminal className="mr-2 h-5 w-5" />
                  Installation Guide
                  <ArrowRight className="ml-2 h-4 w-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Side: Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            {/* The Card */}
            <div className="bg-card/80 backdrop-blur-xl border border-border/60 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f99e1f]/50 to-transparent" />

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: 0.1,
                      }}
                      className="w-20 h-20 bg-[#f99e1f]/10 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-[#f99e1f]" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Request Received!
                    </h3>
                    <p className="text-muted-foreground max-w-xs mx-auto mb-8">
                      Thank you for your interest. Our team will review your
                      details and get back to you shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSuccess(false)}
                      className="mt-2"
                    >
                      Send another request
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        Request Access
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Fill out the details below to get in touch with our
                        team.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      {/* Company Name */}
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <div className="relative group">
                          <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                          <Input
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            className={`pl-9 bg-background/50 border-input transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                              errors.companyName
                                ? "border-destructive focus-visible:ring-destructive/20"
                                : "focus:border-primary"
                            }`}
                          />
                        </div>
                        <AnimatePresence>
                          {errors.companyName && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-destructive text-xs font-medium pl-1"
                            >
                              {errors.companyName}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Email */}
                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email</Label>
                          <div className="relative group">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="you@company.com"
                              className={`pl-9 bg-background/50 border-input transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                                errors.email
                                  ? "border-destructive focus-visible:ring-destructive/20"
                                  : "focus:border-primary"
                              }`}
                            />
                          </div>
                          <AnimatePresence>
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-destructive text-xs font-medium pl-1"
                              >
                                {errors.email}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <div className="relative group">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 (555) 000-0000"
                              className="pl-9 bg-background/50 border-input transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Comment */}
                      <div className="space-y-2">
                        <Label htmlFor="comment">Message</Label>
                        <Textarea
                          id="comment"
                          name="comment"
                          value={formData.comment}
                          onChange={handleChange}
                          placeholder="Tell us about your hiring needs..."
                          className="min-h-[100px] bg-background/50 border-input resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 text-base font-semibold bg-[#f99e1f] text-primary-foreground hover:bg-[#f99e1f]/90 hover:shadow-lg hover:shadow-[#f99e1f]/25 transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center justify-center gap-2"
                            >
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Sending Request...</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="idle"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center justify-center gap-2 "
                            >
                              <span>Send Message</span>
                              <Send className="w-4 h-4" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        badge="bottomleft"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        theme="light"
      />
    </section>
  );
};

export default ContactCTASection;
