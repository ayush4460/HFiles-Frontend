'use client'

import { useState } from 'react';

export default function ProfileCard({ user, onSave }: any) {
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState({
    fullName: user.fullName,
    email: user.email,
    gender: user.gender,
    phoneNumber: user.phoneNumber,
  });

  return (
    <div
      className="p-6 rounded-xl shadow-md flex items-center gap-x-6 w-fit border "
      style={{
        backgroundColor: '#dbeafe', // Tailwind: bg-blue-100
        border: '2px solid #1e3a8a', // Tailwind: border-blue-900
        borderRadius: '12px',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        gridTemplateColumns: '1fr 2fr',
      }}
    >
      {/* Profile Image */}
      <img
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'cover',
          borderRadius: '100%', // ✅ Make image circular
          border: '2px solid #1e3a8a',
          backgroundColor: '#dbeafe' // optional, helps avoid checkerboard
        }}
        src="https://imgs.search.brave.com/wgeSZMoS5cF8uNKNtpUZASkZrfUGuOkv8hW-OYxiWs8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLWNsaXBhcnQv/MjAyMjAxMTMvb3Vy/bWlkL3BuZ3RyZWUt/Y2FydG9vbi1oYW5k/LWRyYXduLWRlZmF1/bHQtYXZhdGFyLXBu/Zy1pbWFnZV80MTU2/NjA5LnBuZw"
        alt="Profile"
      />
     

      {/* User Info */}


      {/* User Details */}
      <div style={{display:'grid', gap:"10px"}} className="flex flex-col gap-y-2 w-full max-w-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold" style={{ color: '#1e3a8a', fontSize: '20px' }}>
            {user.fullName}
          </h2>
        </div>

        {editMode ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSave(editForm);
              setEditMode(false);
            }}
            className="text-sm space-y-2"
          >
            <div>
              <label><strong>Email : </strong></label>
              <input
                type="email"
                className="ml-2 p-1 rounded border"
                style={{ borderColor: '#1e3a8a', marginBottom: '5px' }}
                value={editForm.email}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                placeholder="Email"
              />
            </div>
            <div>
              <label><strong>Phone : </strong></label>
              <input
                type="text"
                className="ml-2 p-1 rounded border"
                style={{ borderColor: '#1e3a8a', marginBottom: '5px' }}
                value={editForm.phoneNumber}
                onChange={(e) => setEditForm({ ...editForm, phoneNumber: e.target.value })}
                placeholder="Phone Number"
              />
            </div>
            <div style={{marginBottom: '5px' }} className="flex gap-4 items-center">
              <label><strong>Gender : </strong></label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={editForm.gender === 'Male'}
                  onChange={(e) => setEditForm({ ...editForm, gender: e.target.value })}
                />{' '}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={editForm.gender === 'Female'}
                  onChange={(e) => setEditForm({ ...editForm, gender: e.target.value })}
                />{' '}
                Female
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-1 rounded"
                style={{ backgroundColor: '#facc15', color: '#000000', padding: '5px 15px' }}
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <div className="text-sm space-y-1">
            <p style={{marginBottom: '5px' }}>
              <strong>Email:</strong> {user.email}
            </p>
            <p style={{marginBottom: '5px' }}>
              <strong>Phone:</strong> {user.phoneNumber}
            </p>
            <p style={{marginBottom: '5px' }}>
              <strong>Gender:</strong> {user.gender}
            </p>
            <button
               className="px-4 py-1 rounded"
               style={{ backgroundColor: '#facc15', color: '#000000', padding: '5px 15px' }}
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
