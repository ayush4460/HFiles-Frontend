'use client'

import { useState } from 'react'

export default function FileUploadForm({ fileData, setFileData, setFile, handleUpload }: any) {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
    setSelectedFileName(selectedFile ? selectedFile.name : null)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await handleUpload(e)
    if (success) {
      setFile(null)
      setSelectedFileName(null)
      setFileData({ ...fileData, fileName: '' }) 
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2
        style={{
          color: '#1e3a8a',
          fontSize: '18px',
          display: 'flex',
          justifyContent: 'center'
        }}
        className="text-xl font-semibold"
      >
        Please Add Your Medical Records
      </h2>

      <form onSubmit={handleFormSubmit} className="space-y-4 text-sm">
        <select
          className="w-full p-2 border rounded"
          value={fileData.fileType}
          onChange={(e) => setFileData({ ...fileData, fileType: e.target.value })}
          required
        >
          <option value="" disabled>
            Select file type
          </option>
          <option value="Lab Report">Lab Report</option>
          <option value="Prescription">Prescription</option>
          <option value="X-Ray">X-Ray</option>
          <option value="Blood Report">Blood Report</option>
          <option value="MRI Scan">MRI Scan</option>
          <option value="CT Scan">CT Scan</option>
        </select>

        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter Name of File"
          value={fileData.fileName}
          onChange={(e) => setFileData({ ...fileData, fileName: e.target.value })}
          required
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            type="button"
            onClick={() => document.getElementById('hiddenFileInput')?.click()}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Upload File
          </button>

          <input
            type="file"
            id="hiddenFileInput"
            accept="application/pdf,image/*"
            onChange={handleFileChange}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '0px',
              height: '0px',
              opacity: 0,
              pointerEvents: 'none'
            }}
            required
          />

          {selectedFileName && (
            <span style={{ fontSize: '14px', color: '#374151' }}>
              {selectedFileName}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded w-full font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
