import {  Plane, useTexture } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

const TextureGSAP = ()=> {
    
    var dir = "public/photos/";
    
    // TODO automatizar
    const [a, b, c, d, e, f] = useTexture(["photos/0.jpg", "photos/1.jpg", "photos/2.jpg", "photos/3.jpg", "photos/4.jpg", "photos/5.jpg"]);
    const photos = [a, b, c, d, e, f]
    
    for (let i = 0; i < photos.length; i++) {
        // photos[i].offset.x = aspect > 1 ? (1 - 1 / aspect) / 2 : 0;
        // photos[i].repeat.x = aspect > 1 ? 1 / aspect : 1;

        // photos[i].offset.y = aspect > 1 ? 0 : (1 - aspect) / 2;
        // photos[i].repeat.y = aspect > 1 ? 1 : aspect;
        photos[i].offset.y = 45
        console.log([i + 1], photos[i].offset.x, 'XX', photos[i].repeat.x, [i + 1], photos[i].offset.y, 'XX', photos[i].repeat.y, 'AA', photos[i].updateMatrix)
        
    }
    
    // TODO tratando de ajustar la textura al mesh utilizando threejs. Crearemos una nueva escena ? NO, leer
    
    
    
    // Se ha creado un array de refs, para crear todas las refs automaticamente
    var refs =[];
    for (let i = 0; i < photos.length; i++) {
        const ref = useRef();
        refs.push(ref)
        
    }
    
    
    var imgs = [];
    // for (let i = 0; i < photos.length; i++) {
    //     imgs.push(refs[i].current)
    // }
    
    useEffect(() => {

        const allWithClass = Array.from(
            document.getElementsByClassName('marco')
        );
        const oneClass = document.getElementsByClassName('marco')[0];
        
        // // TODO LOG
        // document.getElementsByClassName('marco').item(0).innerHTML += "hola";
        // console.log()

        for (let i = 0; i < photos.length; i++) {
            imgs.push(refs[i].current)
        }
        var a = {b:0}
        gsap.fromTo(
            // Especifica sobre que elemento se modificaran sus valores
            oneClass, 
            { 
                // b: 1,
                x: 100},
            {
                // TODO las propiedades que se le pasen, deben de ser propiedades del objeto que se le pasen
                // Al usar scrollTrigger, el "duration" deja de funcionar
                x: 2000,
                y: 900,
                rotateX: 180,
                
                scrollTrigger: {
                    // Especifica sobre que elemento empieza el scrollTrigger
                    // trigger: imgs[0],
                    start: "150 100",
                    // Especifica sobre que elemento termina el scrollTrigger
                    // endTrigger: 
                    end: "+=400",
                    // Solo funciona en el objeto especificado arrriba como objetivo
                    scrub: 2,
                    // toggleActions: "play pause resume reset",
                    markers: true,
                    onUpdate: (self)=>{
                        imgs[0].position.x = 1 * self.progress * Math.PI * 2;
                        imgs[1].position.x = .5 * self.progress * Math.PI * 2;
                        imgs[2].position.x = 1.5 * self.progress * Math.PI * 2;
                        imgs[4].position.x = 1.2 * self.progress * Math.PI * 2;

                    },
                },
            
            }
        );
    }, [])
    
    return (<group>
        
        {photos && photos.map((photo, index) => {

            return ( // 2592 x 1936  72ppp
                <Plane args={[1, 1]} position={[0, -1.5 * index, -3]} ref={refs[index]} key={index} >
                    <meshMatcapMaterial matcap={photo} key={index} displacementBias={.5} displacementScale={.5}/>
                </Plane>
                
            )
        })}
        
        {/* <Plane args={[1, 1]} position={[0, -1.5, -2]} ref={ref} >
            <meshMatcapMaterial matcap={photos[0]} />
        </Plane>
        <Plane args={[1, 1]} position={[0, 2, -2]} ref={ref} >
            <meshMatcapMaterial matcap={photos[0]} />
        </Plane> */}
    </group>
    );
}

export default TextureGSAP;


