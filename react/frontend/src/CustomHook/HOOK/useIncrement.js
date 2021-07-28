import {useEffect} from 'react'

function useIncrement(count) {
    useEffect(()=>{
        document.title = `count ${count} times`
    }, [count])
}

export default useIncrement
