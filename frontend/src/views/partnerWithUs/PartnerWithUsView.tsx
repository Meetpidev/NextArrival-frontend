"use client";

import { useState, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import { partnerApi } from "@/apis/partner";
=======
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
import {
  Handshake,
  Clock,
  Shield,
  ChevronDown,
  Send,
<<<<<<< HEAD
} from "lucide-react";
import { motion } from "framer-motion";

type FieldErrors = Partial<Record<
  | "partnershipType"
  | "organizationName"
  | "contactName"
  | "email"
  | "phone"
  | "country"
  | "city"
  | "partnershipGoal"
  | "message",
  string
>>;

=======
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
function PartnerFormContent() {
  const [formData, setFormData] = useState({
    partnerType: "Landlord Association",
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    partnershipGoal: "",
    message: "",
  });
<<<<<<< HEAD
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
=======
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
  const [submitState, setSubmitState] = useState<{
    status: "idle" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
<<<<<<< HEAD
  const phonePattern = /^\+\d{7,15}$/;
  const namePattern = /^[A-Za-z][A-Za-z\s.'-]*$/;
  const countryPattern = /^[A-Za-z][A-Za-z\s.'-]*$/;
  const cityPattern = /^[A-Za-z][A-Za-z\s.'-]*$/;

  const updateField = <T extends keyof typeof formData>(field: T, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

=======
  const phonePattern = /^\+1\s\d{11}$/;
  const hasNumber = /[0-9]/;

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

<<<<<<< HEAD
  const validate = () => {
    const nextErrors: FieldErrors = {};
    const organizationName = formData.organizationName.trim();
    const contactName = formData.contactName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const country = formData.country.trim();
    const city = formData.city.trim();
    const partnershipGoal = formData.partnershipGoal.trim();
    const message = formData.message.trim();

    if (!formData.partnerType.trim()) {
      nextErrors.partnershipType = "Please select a partnership type.";
    }

    if (!organizationName) {
      nextErrors.organizationName = "Organization name is required.";
    } else if (organizationName.length < 2) {
      nextErrors.organizationName = "Organization name must be at least 2 characters.";
    }

    if (!contactName) {
      nextErrors.contactName = "Your full name is required.";
    } else if (contactName.length < 2) {
      nextErrors.contactName = "Your full name must be at least 2 characters.";
    } else if (!namePattern.test(contactName)) {
      nextErrors.contactName = "Use letters, spaces, apostrophes, periods, or hyphens only.";
    }

    if (!email) {
      nextErrors.email = "Work email is required.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Enter a valid work email address.";
    }

    if (!phone) {
      nextErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(phone)) {
      nextErrors.phone = "Phone number must be in international format, for example +14165550123.";
    }

    if (!country) {
      nextErrors.country = "Country is required.";
    } else if (!countryPattern.test(country)) {
      nextErrors.country = "Country should contain letters only.";
    }

    if (city && !cityPattern.test(city)) {
      nextErrors.city = "City should contain letters only.";
    }

    if (!partnershipGoal) {
      nextErrors.partnershipGoal = "Please select a partnership goal.";
    } else if (partnershipGoal.length < 2) {
      nextErrors.partnershipGoal = "Partnership goal is required.";
    }

    if (!message) {
      nextErrors.message = "Tell us more about your organization.";
    } else if (message.length < 10) {
      nextErrors.message = "Tell us more must be at least 10 characters.";
    } else if (message.length > 3000) {
      nextErrors.message = "Tell us more must not exceed 3000 characters.";
    }

    return nextErrors;
  };

  const mapApiErrors = (details?: Array<{ field?: string; message?: string }>) => {
    const nextErrors: FieldErrors = {};

    for (const detail of details || []) {
      if (!detail?.field || !detail?.message) {
        continue;
      }

      if (
        detail.field === "partnershipType" ||
        detail.field === "organizationName" ||
        detail.field === "fullName" ||
        detail.field === "email" ||
        detail.field === "phone" ||
        detail.field === "country" ||
        detail.field === "cityRegion" ||
        detail.field === "partnershipGoal" ||
        detail.field === "tellUsMore"
      ) {
        const mappedField =
          detail.field === "fullName"
            ? "contactName"
            : detail.field === "cityRegion"
              ? "city"
              : detail.field === "tellUsMore"
                ? "message"
                : detail.field;
        nextErrors[mappedField] = detail.message;
      }
    }

    return nextErrors;
  };

=======
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

<<<<<<< HEAD
    const nextErrors = validate();
=======
    const nextErrors: Record<string, string> = {};

    if (!formData.organizationName.trim()) {
      nextErrors.organizationName = "Organization name is required.";
    }

    if (!formData.contactName.trim()) {
      nextErrors.contactName = "Your full name is required.";
    } else if (hasNumber.test(formData.contactName)) {
      nextErrors.contactName = "Numbers are not allowed in your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Work email is required.";
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid work email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(formData.phone.trim())) {
      nextErrors.phone = "Phone number must match +1 67849506774.";
    }

    if (!formData.country.trim()) {
      nextErrors.country = "Country is required.";
    } else if (hasNumber.test(formData.country)) {
      nextErrors.country = "Numbers are not allowed in country name.";
    }

    if (!formData.city.trim()) {
      nextErrors.city = "City is required.";
    } else if (hasNumber.test(formData.city)) {
      nextErrors.city = "Numbers are not allowed in city name.";
    }

    if (!formData.partnershipGoal.trim()) {
      nextErrors.partnershipGoal = "Please select a partnership goal.";
    }

    if (formData.message.trim().length < 10) {
      nextErrors.message = "Tell us more must be at least 10 characters.";
    }

>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setSubmitState({
        status: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      setSubmitting(false);
      return;
    }

    setFieldErrors({});

    try {
<<<<<<< HEAD
      await partnerApi.submitInquiry({
        partnershipType: formData.partnerType,
        organizationName: formData.organizationName.trim(),
        fullName: formData.contactName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        country: formData.country.trim(),
        cityRegion: formData.city.trim() || undefined,
        partnershipGoal: formData.partnershipGoal.trim(),
        tellUsMore: formData.message.trim(),
      });
=======
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 900));
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0

      setSubmitState({
        status: "success",
        message:
          "Your partnership inquiry has been received! Our partnerships team will reach out within 2 business days.",
      });

      setFormData({
        partnerType: "Landlord Association",
        organizationName: "",
        contactName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        partnershipGoal: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitState({ status: "idle", message: "" });
      }, 6000);
<<<<<<< HEAD
    } catch (err) {
      const responseErrors = mapApiErrors(
        (err as { response?: { data?: { details?: Array<{ field?: string; message?: string }> } } })
          ?.response?.data?.details,
      );

      if (Object.keys(responseErrors).length > 0) {
        setFieldErrors(responseErrors);
        setSubmitState({
          status: "error",
          message: "Some fields need attention before we can submit this form.",
        });
        return;
      }

=======
    } catch {
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
      setSubmitState({
        status: "error",
        message: "We couldn't send your inquiry right now. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#2D2924] font-sans px-4 sm:px-6 py-16 md:py-24 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
<<<<<<< HEAD
=======
        {/* Left Info Column */}
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
        <div className="lg:col-span-5 flex flex-col space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#E6DCD0] rounded-full px-5 py-2 text-[11px] font-semibold tracking-wider text-[#A38A70] uppercase mb-6 shadow-sm bg-[#FCFAF7]">
              <Handshake className="w-3.5 h-3.5" />
              Partnership Program
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#1A1816] mb-4">
              Partner With NestArrival
            </h1>
            <p className="text-sm text-[#635A51] leading-relaxed max-w-md font-normal">
              Join our growing network of landlord associations, settlement agencies, colleges, and relocation providers. Fill out the form and our dedicated partnerships team will reach out to discuss collaboration.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-[#FAF3EA] border border-[#EADFCF] rounded-xl text-[#B39067] flex-shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A1816] mb-0.5">Response Time</h4>
                <p className="text-xs text-[#635A51] leading-relaxed font-normal">
<<<<<<< HEAD
                  Mon - Fri: Within 24 hours | Weekends: Within 48 hours
=======
                  Mon – Fri: Within 24 hours | Weekends: Within 48 hours
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2 bg-[#FAF3EA] border border-[#EADFCF] rounded-xl text-[#B39067] flex-shrink-0 mt-0.5">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A1816] mb-0.5">Trust & Verification</h4>
                <p className="text-xs text-[#635A51] leading-relaxed font-normal">
                  All partners undergo rigorous vetting to maintain a safe ecosystem for international newcomers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FCFAF7]/45 border border-[#EDE6DC] rounded-2xl p-5 md:p-6 max-w-md mt-4">
            <p className="text-xs md:text-[13px] text-[#635A51] italic leading-relaxed font-normal">
<<<<<<< HEAD
              "Partnering with NestArrival gave our settlement agency a trusted platform to recommend to every international client. Our referrals now arrive with verified housing in place."
=======
              &quot;Partnering with NestArrival gave our settlement agency a trusted platform to recommend to every international client. Our referrals now arrive with verified housing in place.&quot;
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
            </p>
            <span className="block text-[10px] md:text-[11px] font-bold text-[#A69B8F] tracking-wider uppercase mt-4">
              - Settlement Agency Partner, Toronto
            </span>
          </div>
        </div>

<<<<<<< HEAD
=======
        {/* Right Form Column */}
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 bg-white border border-[#EDE6DC] rounded-3xl p-6 md:p-8 shadow-[0_18px_60px_rgba(45,41,36,0.10)] ring-1 ring-black/5"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
<<<<<<< HEAD
=======
            {/* Partnership Type */}
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
            <div className="relative">
              <label className="block text-[11px] font-bold text-[#B39067] uppercase tracking-wide mb-1.5">
                Partnership Type *
              </label>
              <div className="relative">
                <select
                  value={formData.partnerType}
<<<<<<< HEAD
                  onChange={(e) => updateField("partnerType", e.target.value)}
=======
                  onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
                  className="w-full bg-[#FCFAF7] border border-[#EFE9E0] rounded-xl py-3 pl-4 pr-10 text-xs md:text-sm text-[#2D2924] appearance-none outline-none focus:border-[#CFA26B] focus:ring-1 focus:ring-[#CFA26B] transition-all"
                >
                  <option>Landlord Association</option>
                  <option>College / University</option>
                  <option>Settlement Agency</option>
                  <option>Real Estate Agency</option>
                  <option>Corporate Relocation Provider</option>
                  <option>Government / Municipality</option>
                  <option>Other Organization</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#A39E98] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
<<<<<<< HEAD
              {fieldErrors.partnershipType && (
                <p className="mt-1.5 text-[11px] text-red-600">{fieldErrors.partnershipType}</p>
              )}
            </div>

=======
            </div>

            {/* Organization & Contact Name */}
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-[#B39067] uppercase tracking-wide mb-1.5">
                  Organization Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Toronto Settlement Hub"
                  value={formData.organizationName}
                  onChange={(e) => updateField("organizationName", e.target.value)}
                  className="w-full bg-[#FCFAF7] border border-[#EFE9E0] rounded-xl py-3 px-4 text-xs md:text-sm text-[#2D2924] placeholder-[#A39E98] outline-none focus:border-[#CFA26B] focus:ring-1 focus:ring-[#CFA26B] transition-all"
                />
                {fieldErrors.organizationName && (
<<<<<<< HEAD
                  <p className="mt-1.5 text-[11px] text-red-600">{fieldErrors.organizationName}</p>
=======
                  <p className="mt-1.5 text-[11px] text-red-600">
                    {fieldErrors.organizationName}
                  </p>
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
                )}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#B39067] uppercase tracking-wide mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Johnson"
                  value={formData.contactName}
                  onChange={(e) => updateField("contactName", e.target.value)}
                  className="w-full bg-[#FCFAF7] border border-[#EFE9E0] rounded-xl py-3 px-4 text-xs md:text-sm text-[#2D2924] placeholder-[#A39E98] outline-none focus:border-[#CFA26B] focus:ring-1 focus:ring-[#CFA26B] transition-all"
                />
                {fieldErrors.contactName && (
<<<<<<< HEAD
                  <p className="mt-1.5 text-[11px] text-red-600">{fieldErrors.contactName}</p>
=======
                  <p className="mt-1.5 text-[11px] text-red-600">
                    {fieldErrors.contactName}
                  </p>
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
                )}
              </div>
            </div>

<<<<<<< HEAD
=======
            {/* Email & Phone */}
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-[#B39067] uppercase tracking-wide mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  placeholder="e.g. sarah@organization.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full bg-[#FCFAF7] border border-[#EFE9E0] rounded-xl py-3 px-4 text-xs md:text-sm text-[#2D2924] placeholder-[#A39E98] outline-none focus:border-[#CFA26B] focus:ring-1 focus:ring-[#CFA26B] transition-all"
                />
                {fieldErrors.email && (
<<<<<<< HEAD
                  <p className="mt-1.5 text-[11px] text-red-600">{fieldErrors.email}</p>
=======
                  <p className="mt-1.5 text-[11px] text-red-600">
                    {fieldErrors.email}
                  </p>
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
                )}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#B39067] uppercase tracking-wide mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +1 67849506774"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full bg-[#FCFAF7] border border-[#EFE9E0] rounded-xl py-3 px-4 text-xs md:text-sm text-[#2D2924] placeholder-[#A39E98] outline-none focus:border-[#CFA26B] focus:ring-1 focus:ring-[#CFA26B] transition-all"
                />
                {fieldErrors.phone && (
<<<<<<< HEAD
                  <p className="mt-1.5 text-[11px] text-red-600">{fieldErrors.phone}</p>
=======
                  <p className="mt-1.5 text-[11px] text-red-600">
                    {fieldErrors.phone}
                  </p>
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
                )}
              </div>
            </div>

<<<<<<< HEAD
=======
            {/* Country & City */}
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-[#B39067] uppercase tracking-wide mb-1.5">
                  Country *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Canada"
                  value={formData.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  className="w-full bg-[#FCFAF7] border border-[#EFE9E0] rounded-xl py-3 px-4 text-xs md:text-sm text-[#2D2924] placeholder-[#A39E98] outline-none focus:border-[#CFA26B] focus:ring-1 focus:ring-[#CFA26B] transition-all"
                />
                {fieldErrors.country && (
<<<<<<< HEAD
                  <p className="mt-1.5 text-[11px] text-red-600">{fieldErrors.country}</p>
=======
                  <p className="mt-1.5 text-[11px] text-red-600">
                    {fieldErrors.country}
                  </p>
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
                )}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#B39067] uppercase tracking-wide mb-1.5">
<<<<<<< HEAD
                  City / Region
=======
                  City / Region *
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
                </label>
                <input
                  type="text"
                  placeholder="e.g. Toronto"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className="w-full bg-[#FCFAF7] border border-[#EFE9E0] rounded-xl py-3 px-4 text-xs md:text-sm text-[#2D2924] placeholder-[#A39E98] outline-none focus:border-[#CFA26B] focus:ring-1 focus:ring-[#CFA26B] transition-all"
                />
                {fieldErrors.city && (
<<<<<<< HEAD
                  <p className="mt-1.5 text-[11px] text-red-600">{fieldErrors.city}</p>
=======
                  <p className="mt-1.5 text-[11px] text-red-600">
                    {fieldErrors.city}
                  </p>
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
                )}
              </div>
            </div>

<<<<<<< HEAD
            <div className="relative">
              <label className="block text-[11px] font-bold text-[#B39067] uppercase tracking-wide mb-1.5">
                  Partnership Goal *
                </label>
              <div className="relative">
                <select
=======
            {/* Partnership Goal */}
            <div className="relative">
              <label className="block text-[11px] font-bold text-[#B39067] uppercase tracking-wide mb-1.5">
                Partnership Goal *
              </label>
              <div className="relative">
                  <select
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
                  value={formData.partnershipGoal}
                  onChange={(e) => updateField("partnershipGoal", e.target.value)}
                  className="w-full bg-[#FCFAF7] border border-[#EFE9E0] rounded-xl py-3 pl-4 pr-10 text-xs md:text-sm text-[#2D2924] appearance-none outline-none focus:border-[#CFA26B] focus:ring-1 focus:ring-[#CFA26B] transition-all"
                >
                  <option value="">Select a goal...</option>
                  <option>List verified properties for international tenants</option>
                  <option>Refer international newcomers to NestArrival</option>
                  <option>Co-market housing solutions for students</option>
                  <option>Provide corporate relocation housing</option>
                  <option>Academic / Research collaboration</option>
                  <option>Other partnership goal</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#A39E98] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {fieldErrors.partnershipGoal && (
<<<<<<< HEAD
                <p className="mt-1.5 text-[11px] text-red-600">{fieldErrors.partnershipGoal}</p>
              )}
            </div>

=======
                <p className="mt-1.5 text-[11px] text-red-600">
                  {fieldErrors.partnershipGoal}
                </p>
              )}
            </div>

            {/* Message */}
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
            <div>
              <label className="block text-[11px] font-bold text-[#B39067] uppercase tracking-wide mb-1.5">
                Tell Us More *
              </label>
              <textarea
                rows={4}
                placeholder="Describe your organization, the volume of newcomers you work with, and how you envision the partnership..."
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="w-full bg-[#FCFAF7] border border-[#EFE9E0] rounded-xl py-3 px-4 text-xs md:text-sm text-[#2D2924] placeholder-[#A39E98] outline-none resize-none focus:border-[#CFA26B] focus:ring-1 focus:ring-[#CFA26B] transition-all"
              />
              {fieldErrors.message && (
<<<<<<< HEAD
                <p className="mt-1.5 text-[11px] text-red-600">{fieldErrors.message}</p>
=======
                <p className="mt-1.5 text-[11px] text-red-600">
                  {fieldErrors.message}
                </p>
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
              )}
            </div>

            {submitState.status !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`w-full rounded-xl px-4 py-3 text-xs md:text-sm font-medium border ${
                  submitState.status === "success"
                    ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                {submitState.message}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={submitting}
              className="w-full bg-[#CFA052] hover:bg-[#221f19] text-white rounded-xl py-3.5 px-4 font-semibold text-xs md:text-sm flex items-center justify-center gap-2 tracking-wide transition-colors duration-200 mt-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>{submitting ? "Submitting..." : "Submit Partnership Inquiry"}</span>
              <Send className="w-3.5 h-3.5 fill-white" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default function PartnerWithUsView() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] text-[#5c544d] overflow-x-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(207,160,82,0.04)_0%,transparent_60%)] pointer-events-none z-0 h-[700px]" />
      <Suspense
        fallback={
          <div className="text-center py-32 text-xs text-[#8a7d6a]">
<<<<<<< HEAD
            Loading Partnership Portal...
=======
            Loading Partnership Portal…
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
          </div>
        }
      >
        <PartnerFormContent />
      </Suspense>
      <Footer />
    </div>
  );
}
