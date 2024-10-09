import React from 'react'
import { Link } from 'react-router-dom'
import { Folder, PlusCircle, Activity } from 'lucide-react'

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const recentProjects = [
    { id: 1, name: 'Tech Startup', date: '2024-03-15' },
    { id: 2, name: 'Fashion Brand', date: '2024-03-10' },
    { id: 3, name: 'Food Delivery App', date: '2024-03-05' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <DashboardCard
          title="Recent Projects"
          icon={<Folder className="w-6 h-6 text-indigo-500" />}
          content={
            <ul className="space-y-2">
              {recentProjects.map(project => (
                <li key={project.id} className="flex justify-between items-center">
                  <span>{project.name}</span>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </li>
              ))}
            </ul>
          }
          action={
            <Link to="/projects" className="text-indigo-600 hover:underline">
              View all projects
            </Link>
          }
        />
        
        <DashboardCard
          title="Quick Actions"
          icon={<Activity className="w-6 h-6 text-green-500" />}
          content={
            <div className="space-y-2">
              <Link to="/generate" className="block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
                Generate New Names
              </Link>
              <Link to="/projects/new" className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
                Create New Project
              </Link>
            </div>
          }
        />
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <p className="text-gray-600">No recent activity to display.</p>
      </div>
    </div>
  )
}

const DashboardCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  action?: React.ReactNode;
}> = ({ title, icon, content, action }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold ml-2">{title}</h2>
      </div>
      <div className="mb-4">{content}</div>
      {action && <div className="text-right">{action}</div>}
    </div>
  )
}

export default Dashboard