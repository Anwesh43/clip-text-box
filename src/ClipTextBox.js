import {
    useStyle, 
    useAnimatedScale, 
    useDimension 
} from './hooks'
import React from 'react'

const ClipTextBox = ({text}) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 20)
    const style = useStyle(w, h, scale)
    return <div style = {style} onClick = {start}>
      {text}
    </div>
}

export default ClipTextBox