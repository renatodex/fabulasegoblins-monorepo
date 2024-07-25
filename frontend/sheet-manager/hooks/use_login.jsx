import { useState } from "react";
import Router from 'next/router'
import { toast } from 'react-toastify'

function setToken (token) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('token', token)
  }
}

function getToken () {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('token')
  }
}

function removeToken () {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('token')
  }
}

async function login (email, password) {
  const response = await fetch("/api/sessions/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })

  const data = await response.json()

  if (response.ok) {
    setToken(data.user.token)
    Router.push('/characters')
    toast.success("Login realizado!")
  } else {
    toast.error("Usuário ou senha inválidos.")
  }
}

async function ping () {
  const response = await fetch(`/api/sessions/get?token=${getToken()}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })

  const data = await response.json()

  if (!response.ok) {
    removeToken()
    Router.push('/login')
  }
}

export default function useLogin () {
  const [token, setToken] = useState(getToken())

  return {
    token,
    setToken,
    ping,
    login,
    removeToken
  }
}
