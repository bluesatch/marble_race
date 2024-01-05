import { RigidBody, useRapier } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
// KeyboardControls and useKeyboardControls are hooks; they need to be used together
import { useKeyboardControls } from "@react-three/drei"
import { useRef, useEffect } from "react"

const Player =()=> { 
    
    const body = useRef()
    const [ subscribeKeys, getKeys ] = useKeyboardControls()

    /* 
        in the latest versions of react-three/rapier, useRapier returns the actual Rapier world.
    
        Don't need to use world.raw() and can use world directly 
    */
    const { rapier, world } = useRapier()
    const rapierWorld = world

    const jump =()=> {
        
        const origin = body.current.translation()
        origin.y -= 0.31
        const direction = { x: 0, y: -1, z: 0 }
        const ray = new rapier.Ray(origin, direction)
        const hit = rapierWorld.castRay(ray, 10, true)

        if(hit.toi < 0.15) {
            body.current.applyImpulse({x: 0, y: 0.5, z: 0})
        }


    }

    useEffect(()=> {
        const unsubscribeJump = subscribeKeys((state)=> state.jump, 
        (value)=> {
            if(value) {
                jump()
            }
        })

        return ()=> {
            unsubscribeJump()
        }
    }, [])

    useFrame((state, delta)=> {
        const {forward, backward, leftward, rightward } = getKeys()
        
        const impulse = { x: 0, y: 0, z: 0}
        const torque = { x: 0, y: 0, z: 0}

        const impulseStrength = 0.6 * delta
        const torqueStrength = 0.2 * delta 

        if(forward) {
            impulse.z -= impulseStrength
            torque.x -= torqueStrength
        }

        if(rightward) {
            impulse.x += impulseStrength
            torque.z -= torqueStrength       
        }

        if(backward) {
            impulse.z += impulseStrength
            torque.x += torqueStrength       
        }

        if(leftward) {
            impulse.x -= impulseStrength
            torque.z += torqueStrength       
        }



        body.current.applyImpulse(impulse)
        body.current.applyTorqueImpulse(torque)


    })

    return <RigidBody
                ref={body} 
                colliders="ball" 
                restitution={ 0.2} 
                friction={ 1 }
                linearDamping={ 0.5 }
                angularDamping={ 0.5 } 
                position={ [ 0, 1, 0 ]}
                // in latest version of @react-three/rapier, a RigidBody falls alseep after a few seonds of inaction; set canSleep to false 
                canSleep={ false }
            >
            <mesh castShadow>
                <icosahedronGeometry args={ [ 0.3, 1, 1]} />
                <meshStandardMaterial flatShading color="coral" />
            </mesh>
        </RigidBody>
    
}

export default Player