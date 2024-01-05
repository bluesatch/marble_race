import { RigidBody} from "@react-three/rapier"
import { useRef, useState } from 'react'
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

const BlockSpinner =(props)=> {

    const obstacle = useRef()
    const [ speed ] = useState(()=>(Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1))

    // BlockSpinner rotation
    useFrame((state)=> {
        const time = state.clock.getElapsedTime()
        
        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0))
        obstacle.current.setNextKinematicRotation(rotation)
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
                scale={ [ 3.5, 0.3, 0.3 ] }
                castShadow
                receiveShadow
            />
        </RigidBody>

        
    </group>
}

export default BlockSpinner