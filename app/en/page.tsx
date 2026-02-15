'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Heart, MessageCircle, ChevronDown, Lock, Check, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function VIPSubscriptionPageEN() {
  const [showVIP, setShowVIP] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [pageReady, setPageReady] = useState(false)
  const [vipContentVisible, setVipContentVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setPageReady(true), 50)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showVIP) {
      const timer = setTimeout(() => setVipContentVisible(true), 100)
      return () => clearTimeout(timer)
    }
  }, [showVIP])

  const faqItems = [
    {
      question: "Is it discreet? Will it show on my bank statement?",
      answer: "Yes, it is 100% discreet. Only a generic name will appear on your statement, with no reference to the content."
    },
    {
      question: "Do I get immediate access to the content?",
      answer: "Access is immediate! As soon as the payment is confirmed, you can access all of my exclusive content right away."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel at any time. The subscription does not renew automatically — you have full control."
    },
    {
      question: "Is there a refund or guarantee?",
      answer: "We offer a 7-day guarantee. If you are not satisfied, we will refund 100% of your money."
    },
    {
      question: "How will I access the content?",
      answer: "After subscribing, you will receive an exclusive invitation via email to the VIP Group with extra content, direct interaction, and daily updates."
    }
  ]

  const checkoutLinks = {
    '15': 'https://seguro.lanaalvarenga.bio/checkout/v4/CVWw6klT1phj7NH9oCOZ',
    '30': 'https://seguro.lanaalvarenga.bio/checkout/v4/CVWw6klT1phj7NH9oCOZ',
    '90': 'https://seguro.lanaalvarenga.bio/checkout/v4/CVWw6klT1phj7NH9oCOZ',
    '180': 'https://seguro.lanaalvarenga.bio/checkout/v4/CVWw6klT1phj7NH9oCOZ',
  }

  const [promoDate, setPromoDate] = useState('')

  useEffect(() => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    setPromoDate(tomorrow.toLocaleDateString('en-US', { 
      month: '2-digit', 
      day: '2-digit', 
      year: 'numeric' 
    }))
  }, [])

  const handleAccessContent = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setShowVIP(true)
      setIsTransitioning(false)
    }, 1500)
  }

  return (
    <>
      {/* Transition Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500 ${isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-foreground font-semibold">Loading content...</p>
        </div>
      </div>

      {/* Landing Page */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center p-4 transition-opacity duration-700 ease-out ${pageReady && !showVIP ? 'opacity-100' : 'opacity-0'} ${showVIP ? 'hidden' : ''}`}
      >
        <div className="w-full max-w-md">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 rounded-full bg-white p-1 mx-auto mb-4 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white/10">
                <Image
                  src="/images/lana-black-top.jpg"
                  alt="Lana Alvarenga"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Lana Alvarenga
            </h1>
            <p className="text-white/90 text-lg">
              @lana.alvarenga
            </p>
          </div>

          {/* Button */}
          <div>
            <button
              onClick={handleAccessContent}
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-4 px-6 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Exclusive content here 😈🙈
            </button>
          </div>
        </div>
      </div>

      {/* VIP Content Page */}
      <div 
        className={`min-h-screen bg-background transition-opacity duration-700 ease-out ${showVIP && vipContentVisible ? 'opacity-100' : 'opacity-0'} ${!showVIP ? 'hidden' : ''}`}
      >
        {/* Promotional Banner */}
        <div className="bg-primary text-white text-center py-3 px-4 font-semibold text-sm">
          THIS PROMOTION IS VALID UNTIL {promoDate}
        </div>

        {/* Logo Section */}
        <div className="bg-background py-2 px-4 flex justify-center border-b">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
              C
            </div>
            <h1 className="text-xl font-bold text-foreground">VIP Content</h1>
          </div>
        </div>

        {/* Profile Header Section */}
        <div className="px-4 py-4 bg-white">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f78f3e] to-[#fbba78] flex-shrink-0 overflow-hidden">
              <Image
                src="/images/lana-white-top.jpg"
                alt="Lana Alvarenga"
                width={64}
                height={64}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-bold text-foreground">Lana Alvarenga</h2>
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">@lana.alvarenga</p>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="text-center">
                  <span className="font-bold text-foreground">59</span>
                  <span className="text-muted-foreground ml-1">Photos</span>
                </div>
                <div className="text-center">
                  <span className="font-bold text-foreground">38</span>
                  <span className="text-muted-foreground ml-1">Videos</span>
                </div>
                <div className="text-center">
                  <span className="font-bold text-foreground">6.2K</span>
                  <span className="text-muted-foreground ml-1">Likes</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-foreground leading-relaxed">
            {"Want to see my 🌸 with vitiligo...? 🙈"}
            <br />
            {"My skin makes my body one of a kind — and here I'll show you everything uncensored. 😈"}
          </p>
        </div>

        {/* Divider line */}
        <div className="h-px bg-zinc-200" />

        {/* Hero Image Section - Preview */}
        <div className="relative">
          <div className="w-full h-[400px] bg-zinc-800 relative overflow-hidden flex items-center justify-center">
            <Image
              src="/images/vip-preview-2.png"
              alt="Exclusive Content"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            
            {/* Lock Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center bg-zinc-100 rounded-2xl px-8 py-6 shadow-lg">
                <div className="w-14 h-14 rounded-full bg-zinc-200 flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-7 h-7 text-zinc-600" />
                </div>
                <p className="text-foreground font-semibold mb-1">Exclusive Content</p>
                <p className="text-muted-foreground text-sm">Subscribe to unlock</p>
              </div>
            </div>

            {/* Engagement Stats Overlay */}
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <Heart className="w-5 h-5" />
                <span className="font-semibold text-sm">2.5K</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold text-sm">342</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="px-4 py-6 bg-zinc-50">
          <h3 className="text-2xl font-bold text-foreground mb-4">Subscription <span className="text-base font-medium text-muted-foreground">(monthly)</span></h3>
          
          <div className="flex gap-2 mb-4">
            <Badge variant="secondary" className="bg-[#fef3e8] text-[#f78f3e] border-0 font-semibold">
              SEE EVERYTHING NOW
            </Badge>
            <Badge variant="secondary" className="bg-[#f78f3e] text-white border-0 font-semibold">
              Sale
            </Badge>
          </div>

          {/* Featured Plan */}
          <Card className="bg-gradient-to-br from-[#f78f3e] to-[#fbba78] text-white p-6 mb-4 border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-lg font-semibold mb-1">Full access</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/70 line-through">$39.90</p>
                <p className="text-3xl font-bold">$9.90</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="w-full bg-[#e07a2e] text-white hover:bg-[#c96a22] font-bold text-base h-12 active:scale-95 transition-transform duration-150 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = checkoutLinks['15']}
            >
              Subscribe now!
            </Button>
          </Card>

          <div className="bg-[#fef3e8] border-2 border-[#f78f3e] rounded-lg p-3 mb-4">
            <p className="text-sm font-bold text-primary text-center">
              Immediate access via email!
            </p>
          </div>

          {/* Security Badges */}
          <div className="flex items-center justify-center gap-4 text-sm mb-6">
            <div className="flex items-center gap-1 text-[#f78f3e]">
              <Lock className="w-4 h-4" />
              <span className="font-medium">100% secure payment</span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div className="flex items-center gap-1 text-primary">
              <Check className="w-4 h-4" />
              <span className="font-medium">Immediate access</span>
            </div>
          </div>

          {/* Locked Content Preview - Portrait */}
          <div className="relative aspect-[3/4] bg-zinc-800 rounded-2xl overflow-hidden -mb-6">
            <Image
              src="/images/vip-preview-1.png"
              alt="Exclusive Content"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            
            {/* Lock Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center bg-zinc-100 rounded-2xl px-8 py-6 shadow-lg">
                <div className="w-14 h-14 rounded-full bg-zinc-200 flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-7 h-7 text-zinc-600" />
                </div>
                <p className="text-foreground font-semibold mb-1">Exclusive Content</p>
                <p className="text-muted-foreground text-sm">Subscribe to unlock</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-4 py-6 bg-zinc-50">
          <h3 className="text-2xl font-bold text-primary mb-4">Frequently Asked Questions</h3>
          
          <div className="flex flex-col gap-3">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-zinc-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-4 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-foreground text-sm pr-4">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-6 bg-white border-t">
          <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
            <button className="hover:text-primary">Terms of Use</button>
            <span>|</span>
            <button className="hover:text-primary">Privacy Policy</button>
          </div>
        </div>
      </div>
    </>
  )
}
