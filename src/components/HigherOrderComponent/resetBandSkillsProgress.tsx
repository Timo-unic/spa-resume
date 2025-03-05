import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const resetBandSkillsProgress = (WrappedComponent: React.FC) => {
    return (props: any) => {
        const location = useLocation()
        const [key, setKey] = useState(0)

        useEffect(() => {
            setKey((prevKey) => prevKey + 1)
        }, [location])

        return <WrappedComponent key={key} {...props} />
    }
}

export default resetBandSkillsProgress
