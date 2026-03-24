import { useState } from "react";
import { useLang } from "../context/LangContext";
import useFadeIn from "../hooks/useFadeIn";

export default function Contact() {
  const { t } = useLang();
  useFadeIn();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    requester: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const requesterOptions = [
    { value: "", label: t.requesterDefault },
    { value: "admin", label: t.requesterAdmin },
    { value: "commercant", label: t.requesterCommercant },
    { value: "industriel", label: t.requesterIndustriel },
    { value: "grossiste", label: t.requesterGrossiste },
    { value: "supermarche", label: t.requesterSupermarche },
    { value: "demenagement", label: t.requesterDemenagement },
    { value: "particulier", label: t.requesterParticulier },
    { value: "restaurant", label: t.requesterRestaurant },
    { value: "ecommerce", label: t.requesterEcommerce },
    { value: "scolaire", label: t.requesterScolaire },
    { value: "sante", label: t.requesterSante },
    { value: "autre", label: t.requesterAutre },
  ];

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t.requiredField;
    if (!form.email.trim()) {
      errs.email = t.requiredField;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t.invalidEmail;
    }
    if (!form.phone.trim()) errs.phone = t.requiredField;
    if (!form.requester) errs.requester = t.requiredField;
    if (!form.message.trim()) errs.message = t.requiredField;
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const resetForm = () => {
    setForm({ name: "", email: "", phone: "", requester: "", quantity: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border ${
      errors[field] ? "border-red-400 bg-red-50" : "border-brown/20 bg-white"
    } focus:outline-none focus:ring-2 focus:ring-green-mid/50 focus:border-green-mid transition-colors`;

  if (submitted) {
    return (
      <section className="py-20 bg-off-white min-h-[60vh] flex items-center">
        <div className="max-w-xl mx-auto px-4 text-center fade-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-mid/10 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#52B788" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2 className="font-heading text-3xl font-bold text-forest mb-4">
            {t.successTitle}
          </h2>
          <p className="text-brown/70 text-lg mb-8">{t.successMsg}</p>
          <button
            onClick={resetForm}
            className="bg-forest text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-mid transition-colors"
          >
            {t.sendAnother}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-in">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-brown/80 text-lg">{t.contactSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 fade-in">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-forest mb-1.5">
                    {t.labelName} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-forest mb-1.5">
                    {t.labelEmail} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-forest mb-1.5">
                    {t.labelPhone} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Requester type */}
                <div>
                  <label className="block text-sm font-semibold text-forest mb-1.5">
                    {t.labelRequester} *
                  </label>
                  <select
                    name="requester"
                    value={form.requester}
                    onChange={handleChange}
                    className={inputClass("requester")}
                  >
                    {requesterOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.requester && (
                    <p className="text-red-500 text-xs mt-1">{errors.requester}</p>
                  )}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-forest mb-1.5">
                  {t.labelQuantity}
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  className={inputClass("quantity")}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-forest mb-1.5">
                  {t.labelMessage} *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={inputClass("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-forest text-white px-10 py-3.5 rounded-xl font-semibold hover:bg-green-mid transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                )}
                {loading ? t.submitting : t.submitBtn}
              </button>
            </form>
          </div>

          {/* Info sidebar */}
          <div className="fade-in">
            <div className="bg-forest rounded-2xl p-8 text-white space-y-6">
              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#52B788" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="font-semibold text-green-mid mb-1">
                    {t.infoAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#52B788" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <p className="text-white/80">{t.infoPhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#52B788" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <p className="text-white/80">{t.infoEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#52B788" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="text-white/80">{t.infoHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
