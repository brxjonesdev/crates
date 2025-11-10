import CreateNewCrate from '@/lib/core/features/crates/components/create-new-crate'
import React from 'react'

export default function AppHeader() {
  return (
    <div>
                <h3>
                    Welcome to Crates!
                </h3>
                <CreateNewCrate/>
            </div>
  )
}
