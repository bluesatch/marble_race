const BlockSpinner =(props)=> {
    return <group position={props.position}>

        {/* Floor */}
        <mesh 
            position={ [ 0, -0.1, 0] } 
            scale={ [ 4, 0.2, 4 ] }
            receiveShadow
            material={props.material}
            geometry={props.geometry}
        />

        <mesh 
            geometry={props.geometry}
            material={props.obstacleMaterial}
            scale={ [ 3.5, 0.3, 0.3 ] }
            castShadow
            receiveShadow
        />

        
    </group>
}

export default BlockSpinner