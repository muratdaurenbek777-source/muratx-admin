'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [salonName, setSalonName] = useState('')
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { salon_name: salonName } } })
    if (error) alert(error.message); else window.location.href = '/dashboard'
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#18181b] p-8 rounded-2xl border border-[#27272a]">
        <h1 className="text-3xl font-bold text-white mb-6">Создайте аккаунт MuratX</h1>
        <form onSubmit={handleRegister}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#27272a] text-white p-3 rounded-lg mb-4" required />
          <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-[#27272a] text-white p-3 rounded-lg mb-4" required />
          <input type="text" placeholder="Название салона" value={salonName} onChange={(e) => setSalonName(e.target.value)} className="w-full bg-[#27272a] text-white p-3 rounded-lg mb-6" required />
          <button type="submit" className="w-full bg-gradient-to-r from-[#f093fb] to-[#f5576c] text-white p-3 rounded-lg font-semibold">Создать аккаунт</button>
        </form>
      </div>
    </div>
  )
}