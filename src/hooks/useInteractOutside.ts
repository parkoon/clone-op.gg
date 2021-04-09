import { RefObject, useCallback, useEffect } from 'react'

interface UseInteractOutside<T> {
  ref: RefObject<T>
  excludedRefs?: RefObject<Node>[]
  onInteractOutside: (e?: MouseEvent) => void
}

function useInteractOutside<T extends HTMLElement>({
  ref,
  excludedRefs = [],
  onInteractOutside,
}: UseInteractOutside<T>) {
  const handleWindowClick = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return

      const target = e.target as Node

      if (excludedRefs.some((ref) => ref.current?.contains(target))) return

      if (!ref.current.contains(target)) {
        onInteractOutside(e)
      }
    },
    [excludedRefs, onInteractOutside, ref]
  )

  useEffect(() => {
    window.addEventListener('click', handleWindowClick)
    return () => window.removeEventListener('click', handleWindowClick)
  }, [handleWindowClick])
}

export default useInteractOutside
