import * as THREE from 'three'
import { useMemo } from 'react'
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

const Level =({ count = 5, types = [ BlockSpinner ,BlockLimbo , BlockAxe ] })=> {

    const blocks = useMemo(()=> {
        const blocks = []

        for(let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)]
            blocks.push(type)
        }
        return blocks
    }, [ count, types ])

    console.log(blocks);


    return <>
    
        <BlockStart 
            position={ [0, 0, 0 ]  }
            geometry={boxGeometry} 
            material={floor1Material}
        />

        { blocks.map((Block, index) => {
            {console.log(Block)}
            <Block 
                key={ index } 
                position={ [ 0, 0, index * 4 ]}
                geometry={boxGeometry} 
                material={floor2Material}
                obstacleMaterial={obstacleMaterial}
            />}
        )}
        {/* <BlockSpinner 
            position={ [ 0, 0, 12 ] }
            geometry={boxGeometry}
            material={floor2Material}
            obstacleMaterial={obstacleMaterial}
        />
        <BlockLimbo 
            position={ [ 0, 0, 8] }
            geometry={boxGeometry}
            material={floor2Material}
            obstacleMaterial={obstacleMaterial}
        />
        <BlockAxe 
            position={ [ 0, 0, 4 ] }
            geometry={boxGeometry}
            material={floor2Material}
            obstacleMaterial={obstacleMaterial}
        />
        <BlockEnd 
            position={ [ 0, 0, 0 ] }
            geometry={boxGeometry}
            material={floor1Material}
        /> */}


    </>
}

export default Level