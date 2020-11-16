import {
  useState, 
  useEffect
} from 'react'

export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        if (!animated) {
            setAnimated(true)
            let currScale = scale 
            const interval = setInterval(() => {
                currScale += scGap
                setScale(currScale) 
                if (Math.abs(currScale) > 1) {
                    setScale(0)
                    setAnimated(false)
                    clearInterval(interval)
                }
            }, delay)
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerHeight)
            setH(window.innerHeight)
        }
        return () => {

        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w, h, scale) => {
    const sf = Math.sin(scale * Math.PI)
    const size = Math.min(w, h) / 10
    const position = 'absolute'
    const left = `0px`
    const top = `${h -size}px`
    const hBottom = `${Math.floor(100 * (1 - sf))}%`
    const clipPath = `polygon(0% 0%, 100% 0%, 100% ${hBottom}, 0% ${hBottom})`
    const width = `${w}px`
    const height = `${size}px`
    const background = 'teal'
    const color = 'white'
    const fontSize = `${size / 6}px`
    return {
        position,
        left, 
        top, 
        width,
        height, 
        background, 
        color, 
        fontSize,
        clipPath
    }
}