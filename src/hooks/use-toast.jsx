import React, { createContext, useContext, useState } from "react"

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000000

let count = 0

function generateId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const toastTimeouts = new Map()

// Create a Context to share toast state across the app
const ToastContext = createContext(undefined)

// Provider component that wraps your app and provides toast functionality
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismiss = (toastId) => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) =>
        toast.id === toastId
          ? {
              ...toast,
              open: false,
            }
          : toast
      )
    )
  }

  const dismissAll = () => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) => ({
        ...toast,
        open: false,
      }))
    )
  }

  const toast = (props) => {
    const id = props?.id || generateId()
    const timeout = props?.duration || 5000
    const toastData = {
      id,
      title: props?.title,
      description: props?.description,
      duration: timeout,
      variant: props?.variant || "default",
      open: true,
      ...props,
    }

    setToasts((prevToasts) => {
      const currentToasts = [...prevToasts]
      const toastIndex = currentToasts.findIndex((toast) => toast.id === id)

      if (toastIndex !== -1) {
        currentToasts[toastIndex] = { ...currentToasts[toastIndex], ...toastData }
      } else {
        if (currentToasts.length > TOAST_LIMIT - 1) {
          currentToasts.shift()
        }
        currentToasts.push(toastData)
      }

      return currentToasts
    })

    if (toastTimeouts.has(id)) {
      clearTimeout(toastTimeouts.get(id))
    }

    const timeout_id = setTimeout(() => {
      dismiss(id)
      
      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
      }, TOAST_REMOVE_DELAY)
    }, timeout)

    toastTimeouts.set(id, timeout_id)

    return id
  }

  const value = {
    toast,
    dismiss,
    dismissAll,
    toasts,
  }

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

// Hook to use toast
export function useToast() {
  const context = useContext(ToastContext)
  
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  
  return context
}

// Helper function to create toast outside of React components
export const toast = {
  // Helper method to show a toast with default configuration
  default: (props) => {
    console.error("Cannot use toast outside of React components. Use useToast() hook instead.")
  },
  // Helper method to show a destructive toast notification
  destructive: (props) => {
    console.error("Cannot use toast outside of React components. Use useToast() hook instead.")
  },
  // Helper method to show a success toast notification
  success: (props) => {
    console.error("Cannot use toast outside of React components. Use useToast() hook instead.")
  }
}
