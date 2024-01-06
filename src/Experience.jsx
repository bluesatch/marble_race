
import { Physics } from '@react-three/rapier'
import useGame from './stores/useGame'
/*
    In the latest versions of @react-three/rapier, the debug mode 
    is activated using the debug attribute (not <Debug>)

    <Physics debug>
*/
import Lights from './components/Lights.jsx'
import Level from './components/Level.jsx'
import Player from './components/Player.jsx'

const Experience =()=> {

    const blocksCount = useGame(state => state.blocksCount)
    const blocksSeed = useGame(state => state.blocksSeed)
    return <>

        <color args={ [ '#bdedfc'] } attach="background" />

        <Physics debug={ false }>
            <Lights />

            {/* <Level count={5} types={ [ BlockSpinner, BlockAxe, BlockLimbo ] }/> */}
            <Level count={blocksCount} seed={blocksSeed} />
            <Player />
        </Physics>

    </>
}

export default Experience