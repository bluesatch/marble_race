import { RigidBody } from "@react-three/rapier"
import { useRef, useState } from 'react'
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

const BlockAxe =(props)=> {

    const obstacle = useRef()
    const [ timeOffset ] = useState(()=>(Math.random() * Math.PI * 2))

    // BlockLimbo animation
    useFrame((state)=> {
        const time = state.clock.getElapsedTime()

        const x = Math.sin(time + timeOffset) * 1.25

        obstacle.current.setNextKinematicTranslation({x: props.position[0] + x, y: props.position[1] + 0.75, z: props.position[2]})
        
        
    })

    return <group position={props.position}>

        {/* Floor */}
        <mesh 
            position={ [ 0, -0.1, 0] } 
            scale={ [ 4, 0.2, 4 ] }
            receiveShadow
            material={props.material}
            geometry={props.geometry}
        />

        <RigidBody 
            type="kinematicPosition" 
            position={ [ 0, 0.3, 0 ] } 
            restitution={ 0.2 } 
            friction={ 0 }
            ref={ obstacle }
        >
            <mesh 
                geometry={props.geometry}
                material={props.obstacleMaterial}
                scale={ [ 1.5, 1.5, 0.3 ] }
                castShadow
                receiveShadow
            />
        </RigidBody>

        
    </group>
}

export default BlockAxe