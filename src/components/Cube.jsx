import { useBox } from '@react-three/cannon';
import { MeshStandardMaterial } from 'three';

export const Cube = ({ id, position, texture }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach='geometry' />
            <meshStandardMaterial color='white' attach='material' />
        </mesh>
    )
}