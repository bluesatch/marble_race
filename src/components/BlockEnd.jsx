import { Text, useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

const BlockEnd =(props)=> {

    const hamburger = useGLTF('./hamburger.glb')

    hamburger.scene.children.forEach(mesh=> mesh.castShadow = true)

    return <group position={props.position}>

        <Text 
            font="/bebas-neue-v9-latin-regular.woff"
            scale={ 1 }
            position={ [ 0, 2.25, 2]}
        >
            Finish
            <meshBasicMaterial toneMapped={ false } />
        </Text>
        {/* Floor */}
        <mesh 
            position={ [ 0, 0, 0] } 
            scale={ [ 4, 0.2, 4 ] }
            receiveShadow
            material={props.material}
            geometry={props.geometry}
        />

        <RigidBody 
            type="fixed" 
            colliders="hull" 
            position={ [0, 0.25, 0]}
            restitution={0.2} 
            friction={0}
        >
            <primitive object={hamburger.scene} scale={0.2} />
        </RigidBody>

    </group>
    
}

export default BlockEnd