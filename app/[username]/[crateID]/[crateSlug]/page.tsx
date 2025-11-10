import React from 'react'
import CrateDetails from './_components/crate-details';

export default async function CratePage({params}: {params: Promise<{ username: string; crateID: string; crateSlug: string }>}) {
  const { username, crateID, crateSlug } = await params
  return (
    <section className='flex-1'>
        <CrateDetails/>
        <div>
            
        </div>
    </section>
  )
}
