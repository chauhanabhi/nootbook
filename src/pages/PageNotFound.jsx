import React from 'react'
import {useTitle} from "../hooks/useTitle"
import { Link } from 'react-bootstrap-icons'

export const PageNotFound = ({title}) => {
    useTitle(title)
  return (
    <main>
             <section className="min-h-screen flex items-center justify-center bg-neutral-primary dark:bg-slate-800">
          <div className="text-center px-6">
            <h1 className="text-7xl font-bold text-brand mb-4">404</h1>
    
            <h2 className="text-2xl font-semibold text-heading mb-2">
              Page Not Found
            </h2>
    
            <p className="text-body mb-6 max-w-md mx-auto">
              Sorry, the page you’re looking for doesn’t exist or has been moved.
            </p>
    
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-brand rounded-base hover:bg-brand-strong focus:outline-none focus:ring-4 focus:ring-brand-medium"
            >
              Go back home
            </Link>
          </div>
        </section>
        </main>
  )
}
