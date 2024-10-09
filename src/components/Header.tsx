import React from 'react'
import { Link } from 'react-router-dom'
import { UserButton, SignInButton, useUser } from '@clerk/clerk-react'
import { Sparkles } from 'lucide-react'

const Header: React.FC = () => {
  const { isSignedIn } = useUser()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold text-indigo-600">
          <Sparkles className="mr-2" />
          NameGenius
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
            {isSignedIn && (
              <>
                <li><Link to="/dashboard" className="text-gray-600 hover:text-indigo-600">Dashboard</Link></li>
                <li><Link to="/generate" className="text-gray-600 hover:text-indigo-600">Generate Names</Link></li>
                <li><Link to="/projects" className="text-gray-600 hover:text-indigo-600">Projects</Link></li>
              </>
            )}
          </ul>
        </nav>
        <div>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header