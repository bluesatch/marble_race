import * as THREE from 'three'
import { useMemo } from 'react'
import BlockStart from "./BlockStart"
import BlockSpinner from './BlockSpinner'
import BlockLimbo from './BlockLimbo'
import BlockAxe from './BlockAxe'
import BlockEnd from './BlockEnd'
import Bounds from './Bounds'


const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floor1Material = new THREE.MeshStandardMaterial({ color: 'forestgreen'})
const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow'})
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'dodgerblue'})
const wallMaterial = new THREE.MeshStandardMaterial({ color: 'rebeccapurple'})

const Level =({ count = 5, types = [ BlockSpinner , BlockLimbo , BlockAxe ], seed = 0 })=> {

    const blocks = useMemo(()=> {
        const blocks = []

        for(let i = 0; i < count; i++) {
            const type = types[ Math.floor(Math.random() * types.length) ]
            blocks.push(type)
        }
        return blocks
    }, [ count, types, seed ])

    return <>
    
        <BlockStart 
            position={ [0, 0, 0 ]  }
            geometry={boxGeometry} 
            material={floor1Material}
        />

        { blocks.map((Block, index) => {
            return <Block 
                        key={index}
                        position={ [0, 0, - (index + 1 ) * 4] }
                        geometry={boxGeometry}
                        material={floor2Material}
                        obstacleMaterial={obstacleMaterial}
                    />
        }) }

        <BlockEnd 
            position={ [0, 0, - (count + 1) * 4 ]  }
            geometry={boxGeometry} 
            material={floor1Material}
        />

        <Bounds 
            length={ count + 2 }
            geometry={boxGeometry}
            material={wallMaterial}
            />
    </>
}

export default Level