import React, { useState } from 'react'

interface AddMemberModalProps {
  isOpen: boolean
  onClose: () => void
  onPropose: (wallet: string, role: string) => void
}

const roles = ['Voter', 'Proposer', 'Executer']

const AddMemberModal: React.FC<AddMemberModalProps> = ({
  isOpen,
  onClose,
  onPropose,
}) => {
  const [wallet, setWallet] = useState('')
  const [role, setRole] = useState('')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-[#18191d] rounded-xl p-4 sm:p-8 w-full max-w-[95vw] sm:max-w-[500px] md:max-w-[600px] relative shadow-lg">
        {/* Close button */}
        <button
          className="absolute top-5 right-5 text-[#8E9BAE] text-2xl font-bold hover:text-white"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Add Member
        </h2>
        {/* Subtitle */}
        <p className="text-[#8E9BAE] text-center mb-7">
          Simply input the correct information to add a member to your account.
        </p>
        {/* Wallet Address */}
        <label className="block text-white mb-3">Wallet Address</label>
        <input
          className="w-full p-3 mb-6 rounded bg-[#23242a] text-[#b0b3c6] placeholder-[#8E9BAE] outline-none border-none"
          placeholder="Enter wallet address"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />
        {/* Assign Roles */}
        <div className="mb-8">
          <label className="block text-white mb-2">Assign Roles</label>
          <div className="flex gap-4">
            {roles.map((r) => {
              let borderColor = ''
              let accentColor = ''
              if (role === r) {
                if (r === 'Voter') {
                  borderColor = 'border-[#FF7BE9]'
                  accentColor = 'accent-[#FF7BE9]'
                } else if (r === 'Executer') {
                  borderColor = 'border-[#19B360]'
                  accentColor = 'accent-[#19B360]'
                } else if (r === 'Proposer') {
                  borderColor = 'border-[#FF8A25]'
                  accentColor = 'accent-[#FF8A25]'
                }
              } else {
                borderColor = 'border-[#23242a]'
                accentColor = 'accent-[#a259ff]'
              }
              return (
                <label
                  key={r}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors cursor-pointer bg-transparent text-sm font-medium ${borderColor} ${role === r ? 'text-white bg-[#23242a]' : 'text-[#8E9BAE] bg-transparent'}`}
                >
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={role === r}
                    onChange={() => setRole(r)}
                    className={`${accentColor}`}
                  />
                  {r}
                </label>
              )
            })}
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-8">
          <button
            className="w-full sm:flex-1 bg-[#272729] text-white text-sm sm:text-base font-medium py-2 sm:py-3 rounded-[8px] sm:rounded-lg hover:bg-[#6F2FCE] transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full sm:flex-1 bg-[#272729] text-white text-sm sm:text-base font-medium py-2 sm:py-3 rounded-[8px] sm:rounded-lg hover:bg-[#6F2FCE] transition-colors"
            disabled={!wallet || !role}
            onClick={() => {
              onPropose(wallet, role)
              onClose()
            }}
          >
            Propose Transaction
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddMemberModal
