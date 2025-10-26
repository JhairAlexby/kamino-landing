'use client'

import { useRouter } from 'next/navigation'

export default function BackButton({ className = '' }: { className?: string }) {
  const router = useRouter()

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Regresar"
      className={`inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white hover:bg-white/20 transition ${className}`}
    >
      <span aria-hidden>←</span>
      <span>Regresar</span>
    </button>
  )
}