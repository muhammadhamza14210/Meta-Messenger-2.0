'use client';
import React from 'react'
import { SessionProvider } from 'next-auth/react';

const providers = ({session, children}: any) => {
  return (
    <SessionProvider session={session}>{children}</SessionProvider>
  )
}

export default providers
