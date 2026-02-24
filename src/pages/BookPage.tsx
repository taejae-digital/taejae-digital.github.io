import { useState, useCallback } from 'react'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { BookView } from '../components/BookView'

export function BookPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const closeSidebar = useCallback(() => setSidebarOpen(false), [])

  return (
    <div className="app-layout">
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(o => !o)}
        aria-label="메뉴 열기"
      >
        {sidebarOpen ? '\u2715' : '\u2630'}
      </button>
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={closeSidebar}
      />
      <Nav isOpen={sidebarOpen} onClose={closeSidebar} currentView="the_synergy_book" />
      <main className="main-content">
        <Header />
        <BookView />
      </main>
    </div>
  )
}
