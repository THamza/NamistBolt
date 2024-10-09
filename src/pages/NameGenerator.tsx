import React, { useState } from 'react'
import { Loader, RefreshCw } from 'lucide-react'

const NameGenerator: React.FC = () => {
  const [projectDetails, setProjectDetails] = useState('')
  const [generatedNames, setGeneratedNames] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Generate mock names based on project details
      const mockNames = [
        `${projectDetails.split(' ')[0]}Hub`,
        `${projectDetails.split(' ')[0]}Pro`,
        `${projectDetails.split(' ')[0]}Genius`,
        `${projectDetails.split(' ')[0]}Nova`,
        `${projectDetails.split(' ')[0]}Spark`
      ]
      
      setGeneratedNames(mockNames)
    } catch (err) {
      setError('Failed to generate names. Please try again.')
      console.error('Error generating names:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Name Generator</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
            Project Details
          </label>
          <textarea
            id="projectDetails"
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
            rows={4}
            placeholder="Describe your project, target audience, and any specific themes or keywords..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader className="animate-spin mr-2" />
              Generating...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2" />
              Generate Names
            </>
          )}
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {generatedNames.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Generated Names:</h2>
          <ul className="space-y-2">
            {generatedNames.map((name, index) => (
              <li
                key={index}
                className="bg-white p-3 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default NameGenerator