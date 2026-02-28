import { useEffect } from 'react'

function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [onClose])

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className={`${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3`}>
        <span>{message}</span>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          ✕
        </button>
      </div>
    </div>
  )
}

export default Toast