import { OrbitControls } from "@react-three/drei";

export default function Experience()
{
    return<>
        <OrbitControls />

        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
    </>
}