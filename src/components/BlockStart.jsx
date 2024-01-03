const BlockStart =(props)=> {

    return <group position={props.position}>

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