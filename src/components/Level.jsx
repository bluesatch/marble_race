import * as THREE from 'three'
import BlockStart from "./BlockStart"
import BlockSpinner from './BlockSpinner'
import BlockLimbo from './BlockLimbo'
import BlockAxe from './BlockAxe'
import BlockEnd from './BlockEnd'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floor1Material = new THREE.MeshStandardMaterial({ color: 'forestgreen'})
const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow'})
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'dodgerblue'})
const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey'})

const Level =()=> {
    return <>
    
        <BlockStart 
            position={ [0, 0, 12 ]  }
            geometry={boxGeometry} 
            material={floor1Material}
        />
        <BlockSpinner 
            position={ [ 0, 0, 8 ] }
            geometry={boxGeometry}
            material={floor2Material}
            obstacleMaterial={obstacleMaterial}
        />
        <BlockLimbo 
            position={ [ 0, 0, 4] }
            geometry={boxGeometry}
            material={floor2Material}
            obstacleMaterial={obstacleMaterial}
        />
        <BlockAxe 
            position={ [ 0, 0, 0 ] }
            geometry={boxGeometry}
            material={floor2Material}
            obstacleMaterial={obstacleMaterial}
        />


    </>
}

export default Level