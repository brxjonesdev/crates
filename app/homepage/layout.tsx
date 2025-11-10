import { Avatar, AvatarFallback, AvatarImage } from '@/lib/components/shadcn/avatar'
import React from 'react'

export default function CratesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex h-dvh flex-col items-center'>
        <div className='w-full max-w-7xl flex-1 flex flex-col pt-4'>
        <section className='flex w-full items-center justify-between border-b '>
            <p>Crates</p>
            <Avatar className='size-14 border-2 border-solid border-black/60'>    
                <AvatarImage src="https://64.media.tumblr.com/0f2e4ed6cfc0cce37c954f74ab79c78d/c1aec6a0fa6ed8ec-15/s400x600/dcea074ff13cb9ade93c6fec5a5bf41c8c25a625.jpg" />
                <AvatarFallback>BR</AvatarFallback>
            </Avatar>
        </section>
        {children}
        </div>
    </main>
  )
}
