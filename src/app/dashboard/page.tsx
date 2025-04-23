'use client'

import useAuth from '../../../utils/useAuth'
import { useEffect, useState } from 'react'
import ProfileCard from '../../../components/ProfileCard'
import FileUploadForm from '../../../components/FileUploadForm'
import FileList from '../../../components/FileList'

export default function DashboardPage() {
  useAuth()

  const [user, setUser] = useState<any>(null)
  const [files, setFiles] = useState([])
  const [fileData, setFileData] = useState({ fileName: '', fileType: '' })
  const [file, setFile] = useState<File | null>(null)

  const fetchUser = async () => {
    const res = await fetch('http://localhost:5138/api/user/me', { credentials: 'include' })
    const data = await res.json()
    setUser(data)
  }

  const fetchFiles = async () => {
    const res = await fetch('http://localhost:5138/api/file', { credentials: 'include' })
    const data = await res.json()
    setFiles(data)
  }

  const handleUpload = async (e: any) => {
    e.preventDefault()
    if (!file) return alert('Select a file')

    const formData = new FormData()
    formData.append('file', file)
    formData.append('fileName', fileData.fileName)
    formData.append('fileType', fileData.fileType)

    const res = await fetch('http://localhost:5138/api/file/upload', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    })

    if (res.ok) {
      setFile(null)
      setFileData({ fileName: '', fileType: 'Lab Report' })
      fetchFiles()
    }
  }

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:5138/api/file/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    fetchFiles()
  }

  const handleProfileSave = async (editForm: any) => {
    const res = await fetch('http://localhost:5138/api/user/me', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(editForm),
    })

    if (res.ok) {
      fetchUser()
    } else {
      alert('Failed to update')
    }
  }

  useEffect(() => {
    fetchUser()
    fetchFiles()
  }, [])

  if (!user) return <h1 className="text-center text-3xl">Loading...</h1>

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section with Blue Background */}
      <div
        className="p-6 mb-8 rounded-xl text-white bg-blue-500"
        style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">HFiles Dashboard</h1>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded font-medium hover:bg-red-700"
            onClick={async () => {
              await fetch('http://localhost:5138/api/auth/logout', {
                method: 'POST',
                credentials: 'include',
              })
              window.location.href = '/login'
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <ProfileCard user={user} onSave={handleProfileSave} />
        <FileUploadForm
          fileData={fileData}
          setFileData={setFileData}
          setFile={setFile}
          handleUpload={handleUpload}
        />
      </div>

      <FileList files={files} handleDelete={handleDelete} />
    </div>
  )
}
