import CreateNewCrate from '@/lib/core/features/crates/components/create-new-crate'
import React from 'react'
import AppHeader from './_components/app-header'
import FeaturedCrates from './_components/featured-crates'
import UserCrates from './_components/user-crates'
import RecentCrates from './_components/recent-crates'
import PopularCrates from './_components/popular-crates'

export default async function CratesHomepage({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {
    const view = (await searchParams).view || 'popular'
  return (
    <section className='flex-1'>
        <AppHeader/>
        <div className='pt-4 md:grid grid-cols-12 grid-rows-11 gap-4 '>
            <UserCrates/>
            <FeaturedCrates/>
            <div>
                {view === "recent" ? <RecentCrates/> : <PopularCrates/>}
            </div>

        </div>
        
    </section>
  )
}
