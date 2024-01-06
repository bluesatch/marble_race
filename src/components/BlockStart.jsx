import { Float, Text, useGLTF} from '@react-three/drei'

const BlockStart =(props)=> {

    return <group position={props.position}>

        <Float floatIntensity={ 0.25} rotationIntensity={ 0.25 }>
            <Text 
                font='/bebas-neue-v9-latin-regular.woff'
                scale={ 0.5 }
                maxWidth={ 0.25 }
                lineHeight={ 0.75 }
                textAlign="right"
                position={ [ 0.75, 0.65, 0 ] }
                rotation-y={ -0.25 }
            >
                Marble Race
                <meshBasicMaterial toneMapped={ false } />
            </Text>
        </Float>
        {/* Floor */}
        <mesh 
            position={ [ 0, -0.1, 0] } 
            scale={ [ 4, 0.2, 4 ] }
            receiveShadow
            material={props.material}
            geometry={props.geometry}
        />
        
    </group>
    
}

export default BlockStart