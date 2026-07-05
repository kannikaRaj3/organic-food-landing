"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ShoppingBag, CheckCircle2, CreditCard, Smartphone,
  Truck, MapPin, User, Mail, Phone, ChevronDown, Minus, Plus, Trash2, Leaf
} from "lucide-react";
import { useCart } from "@/context/CartContext";

type PaymentMethod = "upi" | "card" | "cod";
type Step = "cart" | "form" | "payment" | "success";

interface FormData {
  name: string; email: string; phone: string;
  address: string; city: string; state: string; pincode: string;
  upiId: string; cardNumber: string; cardExpiry: string; cardCvv: string; cardName: string;
}

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
  "Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh",
];

// ── Defined OUTSIDE CheckoutPage so it is never re-created on re-render ──
function InputField({ label, id, value, onChange, placeholder, error, type = "text", icon }: {
  label: string; id: string; value: string; onChange: (v: string) => void;
  placeholder?: string; error?: string; type?: string; icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs font-semibold text-organic-darkGreen/70 uppercase tracking-wider">{label}</label>
      <div className="relative">
        {icon && <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-organic-darkGreen/30">{icon}</span>}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full ${icon ? "pl-10" : "pl-4"} pr-4 py-3 rounded-xl border text-sm text-organic-darkGreen bg-white focus:outline-none focus:ring-2 focus:ring-organic-green/40 transition-all ${error ? "border-rose-400 bg-rose-50/30" : "border-organic-green/15 hover:border-organic-green/30"}`}
        />
      </div>
      {error && <span className="text-[11px] text-rose-500 font-medium">{error}</span>}
    </div>
  );
}

export default function CheckoutPage() {
  const { cartItems, cartTotal, cartCount, updateQuantity, removeFromCart, clearCart } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [isPlacing, setIsPlacing] = useState(false);
  const [orderId] = useState(() => "KAN" + Math.floor(100000 + Math.random() * 900000));
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "",
    upiId: "", cardNumber: "", cardExpiry: "", cardCvv: "", cardName: "",
  });

  const setField = (key: keyof FormData, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const deliveryFee = 0;
  const gst = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + gst + deliveryFee;

  const validateDetails = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone)) newErrors.phone = "Valid 10-digit Indian mobile required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.state) newErrors.state = "Please select a state";
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode)) newErrors.pincode = "Valid 6-digit pincode required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors: Partial<FormData> = {};
    if (paymentMethod === "upi") {
      if (!form.upiId.trim() || !form.upiId.includes("@")) newErrors.upiId = "Valid UPI ID required (e.g. name@upi)";
    } else if (paymentMethod === "card") {
      if (!form.cardNumber.trim() || form.cardNumber.replace(/\s/g, "").length !== 16) newErrors.cardNumber = "Valid 16-digit card number required";
      if (!form.cardExpiry.trim() || !/^\d{2}\/\d{2}$/.test(form.cardExpiry)) newErrors.cardExpiry = "Format: MM/YY";
      if (!form.cardCvv.trim() || !/^\d{3,4}$/.test(form.cardCvv)) newErrors.cardCvv = "3 or 4 digit CVV required";
      if (!form.cardName.trim()) newErrors.cardName = "Name on card is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validatePayment()) return;
    setIsPlacing(true);
    await new Promise((r) => setTimeout(r, 2000)); // simulate API call
    clearCart();
    setStep("success");
    setIsPlacing(false);
  };


  // ── SUCCESS SCREEN ──
  if (step === "success") {
    return (
      <main className="min-h-screen bg-[#FFF8EE] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="h-24 w-24 rounded-full bg-organic-green flex items-center justify-center mx-auto mb-6 shadow-lg shadow-organic-green/30"
          >
            <CheckCircle2 className="h-12 w-12 text-white" />
          </motion.div>
          <h1 className="text-3xl font-extrabold font-serif text-organic-green mb-2">Order Placed!</h1>
          <p className="text-organic-darkGreen/70 text-sm mb-2">Thank you, <strong>{form.name}</strong>. Your order has been confirmed.</p>
          <div className="inline-block bg-organic-yellow/20 text-organic-darkGreen font-mono font-bold text-sm px-4 py-2 rounded-full mb-6">
            Order ID: #{orderId}
          </div>
          <div className="bg-white rounded-3xl p-6 border border-organic-green/5 shadow-sm mb-6 text-left space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-organic-green mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-organic-green mb-0.5">Delivery Address</div>
                <div className="text-xs text-organic-darkGreen/70">{form.address}, {form.city}, {form.state} – {form.pincode}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-4 w-4 text-organic-green flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-organic-green">Estimated Delivery</div>
                <div className="text-xs text-organic-darkGreen/70">3–5 business days · Carbon-neutral delivery</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-organic-green flex-shrink-0" />
              <div className="text-xs text-organic-darkGreen/70">Confirmation sent to <strong>{form.email}</strong></div>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <Link href="/pantry" className="px-6 py-3 rounded-full bg-organic-green text-white text-sm font-semibold hover:bg-organic-darkGreen transition-colors">
              Continue Shopping
            </Link>
            <Link href="/" className="px-6 py-3 rounded-full border border-organic-green/30 text-organic-green text-sm font-semibold hover:bg-organic-green/5 transition-colors">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF8EE]">
      {/* Header */}
      <div className="bg-white border-b border-organic-green/5 px-6 md:px-12 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-organic-green" />
            <span className="font-serif text-xl font-bold text-organic-green">Kannu</span>
          </Link>
          <div className="flex items-center gap-2">
            {(["cart", "form", "payment"] as Step[]).map((s, i) => (
              <React.Fragment key={s}>
                <div className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${step === s ? "text-organic-green" : (["cart", "form", "payment"].indexOf(step) > i ? "text-organic-sage" : "text-organic-darkGreen/30")}`}>
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${step === s ? "bg-organic-green text-white" : (["cart", "form", "payment"].indexOf(step) > i ? "bg-organic-sage/30 text-organic-sage" : "bg-organic-green/10 text-organic-green/40")}`}>
                    {i + 1}
                  </div>
                  <span className="hidden sm:block capitalize">{s === "cart" ? "Cart" : s === "form" ? "Details" : "Payment"}</span>
                </div>
                {i < 2 && <div className={`w-8 h-px transition-colors ${["cart", "form", "payment"].indexOf(step) > i ? "bg-organic-sage" : "bg-organic-green/15"}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT — Step Content */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">

            {/* STEP 1: CART */}
            {step === "cart" && (
              <motion.div key="cart" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-extrabold font-serif text-organic-green">Your Basket</h2>
                  <Link href="/pantry" className="inline-flex items-center gap-1.5 text-xs text-organic-darkGreen/60 hover:text-organic-green transition-colors">
                    <ArrowLeft className="h-3.5 w-3.5" /> Continue Shopping
                  </Link>
                </div>
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-3xl border border-organic-green/5">
                    <ShoppingBag className="h-12 w-12 text-organic-green/30 mx-auto mb-4" />
                    <p className="font-serif text-lg font-semibold text-organic-green mb-2">Your cart is empty</p>
                    <p className="text-xs text-organic-darkGreen/60 mb-6">Add some premium dry fruits to get started</p>
                    <Link href="/pantry" className="inline-block px-6 py-3 bg-organic-green text-white rounded-full text-sm font-semibold hover:bg-organic-darkGreen transition-colors">
                      Browse Pantry
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <motion.div key={item.id} layout className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-organic-green/5 shadow-sm">
                        <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-organic-cream flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-organic-green truncate">{item.name}</h4>
                          <div className="text-xs text-organic-darkGreen/60 mt-0.5">₹{item.price.toLocaleString("en-IN")} each</div>
                          <div className="flex items-center gap-2 mt-2">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-6 w-6 rounded-full border border-organic-green/20 flex items-center justify-center hover:bg-organic-cream transition-colors cursor-pointer"><Minus className="h-3 w-3" /></button>
                            <span className="text-xs font-bold text-organic-green w-5 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-6 w-6 rounded-full border border-organic-green/20 flex items-center justify-center hover:bg-organic-cream transition-colors cursor-pointer"><Plus className="h-3 w-3" /></button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="font-extrabold text-organic-green text-sm">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                          <button onClick={() => removeFromCart(item.id)} className="text-rose-400 hover:text-rose-600 transition-colors cursor-pointer"><Trash2 className="h-4 w-4" /></button>
                        </div>
                      </motion.div>
                    ))}
                    <button onClick={() => setStep("form")} disabled={cartItems.length === 0} className="w-full mt-4 py-4 bg-organic-green hover:bg-organic-darkGreen text-white font-semibold rounded-2xl transition-colors disabled:opacity-50 cursor-pointer">
                      Proceed to Delivery Details →
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* STEP 2: DELIVERY FORM */}
            {step === "form" && (
              <motion.div key="form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-3 mb-6">
                  <button onClick={() => setStep("cart")} className="p-2 rounded-full hover:bg-organic-cream transition-colors cursor-pointer"><ArrowLeft className="h-4 w-4 text-organic-darkGreen" /></button>
                  <h2 className="text-2xl font-extrabold font-serif text-organic-green">Delivery Details</h2>
                </div>
                <div className="bg-white rounded-3xl p-6 border border-organic-green/5 shadow-sm space-y-5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-organic-sage flex items-center gap-2"><User className="h-3.5 w-3.5" /> Personal Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Full Name" id="name" value={form.name} onChange={(v) => setField("name", v)} placeholder="Priya Sharma" error={errors.name} icon={<User className="h-4 w-4" />} />
                    <InputField label="Email Address" id="email" value={form.email} onChange={(v) => setField("email", v)} placeholder="priya@example.com" error={errors.email} type="email" icon={<Mail className="h-4 w-4" />} />
                    <InputField label="Mobile Number" id="phone" value={form.phone} onChange={(v) => setField("phone", v.replace(/\D/g, "").slice(0, 10))} placeholder="9876543210" error={errors.phone} icon={<Phone className="h-4 w-4" />} />
                  </div>
                  <div className="border-t border-organic-green/5 pt-5">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-organic-sage flex items-center gap-2 mb-4"><MapPin className="h-3.5 w-3.5" /> Delivery Address</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <InputField label="Full Address" id="address" value={form.address} onChange={(v) => setField("address", v)} placeholder="Flat 101, Green Gardens Apt, MG Road" error={errors.address} icon={<MapPin className="h-4 w-4" />} />
                      <div className="grid grid-cols-2 gap-4">
                        <InputField label="City" id="city" value={form.city} onChange={(v) => setField("city", v)} placeholder="Mumbai" error={errors.city} />
                        <div className="flex flex-col gap-1">
                          <label htmlFor="state" className="text-xs font-semibold text-organic-darkGreen/70 uppercase tracking-wider">State</label>
                          <div className="relative">
                            <select
                              id="state"
                              value={form.state}
                              onChange={(e) => setField("state", e.target.value)}
                              className={`w-full px-4 py-3 rounded-xl border text-sm text-organic-darkGreen bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-organic-green/40 ${errors.state ? "border-rose-400" : "border-organic-green/15"}`}
                            >
                              <option value="">Select State</option>
                              {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-organic-darkGreen/40 pointer-events-none" />
                          </div>
                          {errors.state && <span className="text-[11px] text-rose-500">{errors.state}</span>}
                        </div>
                      </div>
                      <InputField label="Pincode" id="pincode" value={form.pincode} onChange={(v) => setField("pincode", v.replace(/\D/g, "").slice(0, 6))} placeholder="400001" error={errors.pincode} />
                    </div>
                  </div>
                </div>
                <button onClick={() => { if (validateDetails()) setStep("payment"); }} className="w-full mt-4 py-4 bg-organic-green hover:bg-organic-darkGreen text-white font-semibold rounded-2xl transition-colors cursor-pointer">
                  Continue to Payment →
                </button>
              </motion.div>
            )}

            {/* STEP 3: PAYMENT */}
            {step === "payment" && (
              <motion.div key="payment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-3 mb-6">
                  <button onClick={() => setStep("form")} className="p-2 rounded-full hover:bg-organic-cream transition-colors cursor-pointer"><ArrowLeft className="h-4 w-4 text-organic-darkGreen" /></button>
                  <h2 className="text-2xl font-extrabold font-serif text-organic-green">Payment</h2>
                </div>

                {/* Payment Method Selector */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {([
                    { key: "upi", label: "UPI", icon: <Smartphone className="h-5 w-5" /> },
                    { key: "card", label: "Card", icon: <CreditCard className="h-5 w-5" /> },
                    { key: "cod", label: "Cash on Delivery", icon: <Truck className="h-5 w-5" /> },
                  ] as { key: PaymentMethod; label: string; icon: React.ReactNode }[]).map(({ key, label, icon }) => (
                    <button
                      key={key}
                      id={`pay-${key}`}
                      onClick={() => setPaymentMethod(key)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all cursor-pointer ${paymentMethod === key ? "border-organic-green bg-organic-green/5 text-organic-green" : "border-organic-green/10 text-organic-darkGreen/60 hover:border-organic-green/30"}`}
                    >
                      {icon}
                      <span className="text-xs font-bold">{label}</span>
                    </button>
                  ))}
                </div>

                <div className="bg-white rounded-3xl p-6 border border-organic-green/5 shadow-sm">
                  {paymentMethod === "upi" && (
                    <div className="space-y-4">
                      <p className="text-xs text-organic-darkGreen/60 leading-relaxed">Enter your UPI ID to complete payment instantly via GPay, PhonePe, Paytm, or any UPI app.</p>
                      <InputField label="UPI ID" id="upiId" value={form.upiId} onChange={(v) => setField("upiId", v)} placeholder="yourname@okaxis" error={errors.upiId} icon={<Smartphone className="h-4 w-4" />} />
                      <div className="flex gap-3 flex-wrap pt-2">
                        {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                          <div key={app} className="px-3 py-1.5 bg-organic-cream/60 rounded-lg text-[11px] font-semibold text-organic-darkGreen/70">{app}</div>
                        ))}
                      </div>
                    </div>
                  )}
                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <InputField label="Card Number" id="cardNumber" value={form.cardNumber} onChange={(v) => setField("cardNumber", v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim())} placeholder="1234 5678 9012 3456" error={errors.cardNumber} icon={<CreditCard className="h-4 w-4" />} />
                      <InputField label="Name on Card" id="cardName" value={form.cardName} onChange={(v) => setField("cardName", v)} placeholder="Priya Sharma" error={errors.cardName} icon={<User className="h-4 w-4" />} />
                      <div className="grid grid-cols-2 gap-4">
                        <InputField label="Expiry (MM/YY)" id="cardExpiry" value={form.cardExpiry} onChange={(v) => { const c = v.replace(/\D/g, "").slice(0, 4); setField("cardExpiry", c.length > 2 ? `${c.slice(0,2)}/${c.slice(2)}` : c); }} placeholder="08/26" error={errors.cardExpiry} />
                        <InputField label="CVV" id="cardCvv" value={form.cardCvv} onChange={(v) => setField("cardCvv", v.replace(/\D/g, "").slice(0, 4))} placeholder="•••" error={errors.cardCvv} type="password" />
                      </div>
                    </div>
                  )}
                  {paymentMethod === "cod" && (
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-organic-yellow/20 flex items-center justify-center flex-shrink-0"><Truck className="h-6 w-6 text-organic-darkGreen" /></div>
                      <div>
                        <h4 className="font-bold text-sm text-organic-green mb-1">Cash on Delivery</h4>
                        <p className="text-xs text-organic-darkGreen/70 leading-relaxed">Pay in cash when your order is delivered to your doorstep. Our delivery partner will collect ₹{grandTotal.toLocaleString("en-IN")} at delivery.</p>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  id="place-order-btn"
                  onClick={handlePlaceOrder}
                  disabled={isPlacing}
                  className="w-full mt-4 py-4 bg-organic-green hover:bg-organic-darkGreen text-white font-semibold rounded-2xl transition-colors disabled:opacity-70 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isPlacing ? (
                    <><div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" /> Processing…</>
                  ) : (
                    <>Place Order · ₹{grandTotal.toLocaleString("en-IN")}</>
                  )}
                </button>
                <p className="text-center text-[10px] text-organic-darkGreen/40 mt-3">🔒 256-bit SSL encrypted · Secured by Kannu</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT — Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl border border-organic-green/5 shadow-sm overflow-hidden sticky top-24">
            <div className="px-6 py-5 border-b border-organic-green/5 bg-[#FFF8EE]">
              <h3 className="font-serif font-bold text-organic-green flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" /> Order Summary
                <span className="text-xs bg-organic-yellow/30 text-organic-darkGreen px-2 py-0.5 rounded-full font-bold ml-auto">{cartCount} item{cartCount !== 1 ? "s" : ""}</span>
              </h3>
            </div>
            <div className="px-6 py-4 max-h-72 overflow-y-auto space-y-3">
              {cartItems.length === 0 ? (
                <p className="text-xs text-organic-darkGreen/50 text-center py-4">Your cart is empty</p>
              ) : cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-organic-cream flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-organic-green truncate">{item.name}</div>
                    <div className="text-[10px] text-organic-darkGreen/50">Qty: {item.quantity}</div>
                  </div>
                  <div className="text-sm font-bold text-organic-green">₹{(item.price * item.quantity).toLocaleString("en-IN")}</div>
                </div>
              ))}
            </div>
            <div className="px-6 py-5 border-t border-organic-green/5 space-y-2.5">
              <div className="flex justify-between text-xs text-organic-darkGreen/60">
                <span>Subtotal</span><span>₹{cartTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-xs text-organic-darkGreen/60">
                <span>GST (5%)</span><span>₹{gst.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-xs text-organic-darkGreen/60">
                <span>Delivery</span><span className="text-organic-sage font-semibold">FREE</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-organic-green pt-2 border-t border-organic-green/10">
                <span>Grand Total</span><span>₹{grandTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>
            {step === "form" && (
              <div className="px-6 pb-5">
                <div className="bg-organic-yellow/10 rounded-xl px-4 py-3 text-xs text-organic-darkGreen/70 flex items-start gap-2">
                  <Leaf className="h-3.5 w-3.5 text-organic-green mt-0.5 flex-shrink-0" />
                  <span>Carbon-neutral delivery in eco-friendly packaging. Estimated: <strong>3–5 business days</strong>.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
