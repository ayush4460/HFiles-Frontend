'use client'

export default function FileList({ files, handleDelete }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 style={{
        color: '#1e3a8a',
        fontSize: '18px',
      }} className=" text-xl font-semibold mb-4">Uploaded Medical Reocords</h2>

      {files.length > 0 ? (
        <div style={{ gap: "15px" }} className="flex flex-wrap gap-10">
          {files.map((f: any) => (
            <div
              key={f.id}
              className="w-[200px] bg-white border rounded-lg shadow-md flex flex-col items-center text-center p-4"
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <div className="w-full h-[140px] border border-dashed rounded flex items-center justify-center text-[12px] text-gray-500 italic mb-2 overflow-hidden">
                {f.fileUrl.endsWith('.pdf') ? (
                  <embed
                    src={f.fileUrl}
                    type="application/pdf"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={f.fileUrl}
                    alt="File preview"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* <p className="font-bold text-sm">{f.fileName}</p>
              <p className="text-xs text-gray-500 mb-3">{f.fileType}</p> */}

              <div className="flex flex-col gap-2 w-full mt-auto" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <button
                  type="button"
                  onClick={() => window.open(f.fileUrl, '_blank')}
                  style={{ backgroundColor: '#facc15', padding: '5px' }}
                  className="w-full py-1 rounded text-sm font-semibold text-black"
                >
                  View
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(f.id)}
                  style={{ padding: '5px' }}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full py-1 rounded text-sm font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">No records uploaded yet.</p>
      )}
    </div>
  )
}
