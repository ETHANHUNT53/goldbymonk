import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchIndicativeGoldInrPerGram } from '../utils/goldRate'

/**
 * Live indicative rate from public API (PAX Gold → INR/gram).
 */
export function useIndicativeGoldRate() {
  const [status, setStatus] = useState('loading')
  const [inrPerGram24k, setInrPerGram24k] = useState(null)
  const [inrPerGram22k, setInrPerGram22k] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [updatedAt, setUpdatedAt] = useState(null)
  const seq = useRef(0)

  const startFetch = useCallback(() => {
    const mySeq = ++seq.current
    fetchIndicativeGoldInrPerGram()
      .then(({ inrPerGram24k: g24, inrPerGram22k: g22 }) => {
        if (mySeq !== seq.current) return
        setInrPerGram24k(g24)
        setInrPerGram22k(g22)
        setUpdatedAt(new Date())
        setStatus('ready')
      })
      .catch((e) => {
        if (mySeq !== seq.current) return
        setInrPerGram24k(null)
        setInrPerGram22k(null)
        setStatus('error')
        setErrorMessage(e instanceof Error ? e.message : 'Could not load rate')
      })
  }, [])

  useEffect(() => {
    startFetch()
    return () => {
      seq.current += 1
    }
  }, [startFetch])

  const retry = useCallback(() => {
    setStatus('loading')
    setErrorMessage('')
    startFetch()
  }, [startFetch])

  return {
    status,
    inrPerGram24k,
    inrPerGram22k,
    errorMessage,
    updatedAt,
    retry,
  }
}
