import * as THREE from 'three'
import BlockStart from "./BlockStart"
import BlockSpinner from './BlockSpinner'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floor1Material = new THREE.MeshStandardMaterial({ color: 'forestgreen'})
const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow'})
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'blue'})
const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey'})

const Level =()=> {
    return <>
    
        <BlockStart 
            position={ [0, 0, 4 ]  }
            geometry={boxGeometry} 
            material={floor1Material}
        />
        <BlockSpinner 
            position={ [ 0, 0, 0]}
            geometry={boxGeometry}
            material={floor2Material}
            obstacleMaterial={obstacleMaterial}
        />
    </>
}

export default Level