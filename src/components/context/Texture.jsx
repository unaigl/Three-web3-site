import { Plane, useTexture } from "@react-three/drei";

const Texture = ()=> {
    
    // LA FORMA DE HACERLO CON THREE
    // const material = new THREE.MeshBasicMaterial({ map: TextureLoader.load(props.url)})
    // const geometry = new THREE.PlaneGeometry(1, 1);
    // const img = new THREE.Mesh(geometry, materials);
    // img.position.set(0,0,-2)
    // scene.add(img)
    
    const [a,b,c,d,e,f] = useTexture(["photos/0.jpg", "photos/1.jpg", "photos/2.jpg", "photos/3.jpg", "photos/4.jpg", "photos/5.jpg"]);
    const photos = [a, b, c, d, e, f]
    
    // const [matcap0, matcap1, matcap2, matcap3, matcap4, matcap5] = useTexture(["photos/0.jpg", "photos/1.jpg", "photos/2.jpg", "photos/3.jpg", "photos/4.jpg", "photos/5.jpg" ]);
    // const matcap = useTexture(["photos/0.jpg", "photos/1.jpg", "photos/2.jpg", "photos/3.jpg", "photos/4.jpg", "photos/5.jpg" ]);
    return (<group>
        
        {photos && photos.map((photo, index) => {

            return (
                <Plane args={[1, 1]} position={[0, -1.5 * index, -2]}>
                    <meshMatcapMaterial matcap={photo} key={index}/>
                </Plane>
            )
        })}
        {photos && photos.map((photo, index) => {

            return (
                <Plane args={[1, 1]} position={[3, -1.5 * index, -4]}>
                    <meshMatcapMaterial matcap={photo} key={index}/>
                </Plane>
            )
        })}
        {/* <Plane args={[5,5]} position={[0, 0, -2.2]}>
            <meshMatcapMaterial matcap={matcap1} />
        </Plane>
        
        
        <Plane position={[0, 2, -2]}>
            <meshMatcapMaterial  matcap={matcap2} />
        </Plane>
        <Plane position={[-1, 0, -2]}>
            <meshMatcapMaterial  matcap={matcap2} />
        </Plane>
        <Plane position={[0, -1.5, -2]}>
            <meshMatcapMaterial  matcap={matcap2} />
        </Plane> */}
    </group>
    );
}

export default Texture;