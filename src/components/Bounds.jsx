import { CuboidCollider, RigidBody } from "@react-three/rapier"

const Bounds =(props)=> {


    return <>
        <RigidBody type="fixed" restitution={ 0.2 } friction={ 0 }>
            <mesh 
                position={ [ 2.15, 0.75, -(props.length * 2) + 2]}
                geometry={props.geometry}
                material={props.material}
                scale={ [ 0.3, 1.5, 4 * props.length]}
                castShadow
            />
            <mesh 
                position={ [ -2.15, 0.75, -(props.length * 2) + 2]}
                geometry={props.geometry}
                material={props.material}
                scale={ [ 0.3, 1.5, 4 * props.length]}
                receiveShadow
            />
            <mesh 
                position={ [ 0, 0.75, -(props.length * 4) + 2]}
                geometry={props.geometry}
                material={props.material}
                scale={ [ 4, 1.5, 4 * 0.3]}
                receiveShadow
            />
            <CuboidCollider 
                args={ [ 2, 0.1, 2 * props.length ] } 
                position={ [ 0, -0.1, -(props.length * 2) + 2 ]}
                restitution={ 0.2 }
                friction={ 1 }
            />
        </RigidBody>
    </>
}

export default Bounds