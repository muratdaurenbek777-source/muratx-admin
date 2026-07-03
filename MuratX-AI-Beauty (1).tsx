'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [salonName, setSalonName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email, password, options: { data: { salon_name: salonName } }
    })
    if (error) alert(error.message)
    else window.location.href = '/dashboard'
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#18181b] p-8 rounded-2xl border border-[#27272a]">
        <h1 className="text-3xl font-bold text-white mb-2">Создайте аккаунт MuratX</h1>
        <p className="text-[#a1a1aa] mb-6">Оплата $27 прошла. Остался 1 шаг.</p>
        <form onSubmit={handleRegister}>
          <input type="email" placeholder="Email для входа" value={email} onChange={(e) => setEmail(e.target.value)} 
            className="w-full bg-[#27272a] text-white p-3 rounded-lg mb-4 border border-[#3f3f46]" required />
          <input type="password" placeholder="Придумайте пароль" value={password} onChange={(e) => setPassword(e.target.value)} 
            className="w-full bg-[#27272a] text-white p-3 rounded-lg mb-4 border border-[#3f3f46]" required />
          <input type="text" placeholder="Название вашего салона" value={salonName} onChange={(e) => setSalonName(e.target.value)} 
            className="w-full bg-[#27272a] text-white p-3 rounded-lg mb-6 border border-[#3f3f46]" required />
          <button type="submit" disabled={loading}
            className="w-full bg-gradient-to-r from-[#f093fb] to-[#f5576c] text-white p-3 rounded-lg font-semibold">
            {loading ? 'Создаем...' : 'Создать аккаунт и войти'}
          </button>
        </form>
      </div>
    </div>
  )
}