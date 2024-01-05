import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
/*
    In the latest versions of @react-three/rapier, the debug mode 
    is activated using the debug attribute (not <Debug>)

    <Physics debug>
*/
import Lights from './components/Lights.jsx'
import Level from './components/Level.jsx'
// import BlockSpinner from './components/BlockSpinner.jsx'
// import BlockAxe from './components/BlockAxe.jsx'
// import BlockLimbo from './components/BlockLimbo.jsx'

const Experience =()=> {
    return <>

        <OrbitControls makeDefault />

        <Physics debug>
            <Lights />

            {/* <Level count={5} types={ [ BlockSpinner, BlockAxe, BlockLimbo ] }/> */}
            <Level />
            
        </Physics>

    </>
}

export default Experience