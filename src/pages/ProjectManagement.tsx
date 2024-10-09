import React, { useState } from 'react'
import { Folder, Plus, Trash2 } from 'lucide-react'

const ProjectManagement: React.FC = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Tech Startup', description: 'A new innovative tech startup' },
    { id: 2, name: 'Fashion Brand', description: 'Luxury fashion brand for millennials' },
    { id: 3, name: 'Food Delivery App', description: 'On-demand food delivery service' },
  ])

  const [newProject, setNewProject] = useState({ name: '', description: '' })

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault()
    if (newProject.name && newProject.description) {
      setProjects([...projects, { id: Date.now(), ...newProject }])
      setNewProject({ name: '', description: '' })
    }
  }

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Project Management</h1>

      <form onSubmit={handleAddProject} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
        <div className="mb-4">
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-2">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
            Project Description
          </label>
          <textarea
            id="projectDescription"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center"
        >
          <Plus className="mr-2" />
          Add Project
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Folder className="mr-2 text-indigo-500" />
                {project.name}
              </h3>
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 />
              </button>
            </div>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectManagement