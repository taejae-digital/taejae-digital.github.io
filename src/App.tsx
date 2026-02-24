import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { BookPage } from './pages/BookPage'
import { ReportPage } from './pages/ReportPage'

export type SectionId = 'framework' | 'report' | 'scenarios' | 'agent-era' | 'strategy' | 'declaration' | 'researchers' | 'youth-crisis' | 'asl' | 'democratic-ai' | 'references'

export type AppView = 'report' | 'the_synergy_book'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/book/*', element: <BookPage /> },
  { path: '/202602_report/*', element: <ReportPage /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
