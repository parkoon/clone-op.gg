import { useLayoutEffect, useRef } from 'react'

function useDidUpdate(callback: Function) {
  const firstUpdate = useRef(true)

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    console.log('componentDidUpdateFunction')

    callback()
  })
}

export default useDidUpdate
