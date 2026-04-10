import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import '@/index.css'

export default function Layout({ children }) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}
