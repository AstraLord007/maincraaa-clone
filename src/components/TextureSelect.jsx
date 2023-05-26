import { useStore } from '../hooks/useStore';
import * as images from '../images/images';
import { useKeyboard } from '../hooks/useKeyboard';
import { useEffect, useState } from 'react';

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])
    
    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = useKeyboard()

    useEffect(() => {
        const options = {
            dirt,
            grass,
            glass,
            wood,
            log
        }

        const selectedTexture = Object
        .entries(options)
        .find(([texture, isEnabled]) => isEnabled)
        
        if(selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }

    }, [dirt, grass, glass, wood, log])
    
    if(!visible) return null

    return (
        <div>
            {
                Object.entries(images).map(([textureName, texture]) => {
                    return (
                        <img
                            key={textureName}
                            src={texture}
                            alt={textureName}
                            onClick={() => setTexture(textureName)}
                        />
                    )
                })
            }
        </div>
    )
}