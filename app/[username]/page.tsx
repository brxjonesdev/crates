import React from 'react'

export default async function Profile({params}: {params: Promise<{ username: string;}>}) {
    const { username } = await params;
    const decoded = decodeURIComponent(username);
    if (!decoded.startsWith('@')) {
        throw new Error('Invalid username format');
    }
  return (
    <div>{decoded}</div>
  )
}
