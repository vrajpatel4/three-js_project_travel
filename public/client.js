// import * as THREE from '/build/three.module.js';
import * as THREE from 'three'
import Stats from './jsm/libs/stats.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';

// import * as THREE from '/build/three.module.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'
// import testVertextShaders from '/vertexShader.glsl'
// import testFragmentShaders from '/fragmentShader.glsl'
import { Points, TriangleFanDrawMode } from 'three'
import { TextureLoader } from 'three';
// import gsap from "/gsap"
// import src from 'gsap/src'

// Debug
// const gui = new dat.GUI()
// gui.hide()

// Canvas
const canvas = document.querySelector('canvas.webgl')



// let geometry = null
// let material = null
// let mesh = null



// const loadingmanager = new THREE.LoadingManager(

//     () => {

//      tl.to(materialplane.uniforms.alpha,{ duration : 1, value : 0})

//     },

//     () => {

//   console.log('progress')


//     }


// )




// texture

const texture = new THREE.TextureLoader()
const city3601 = texture.load('./images/city3.jpg')
const city3602 = texture.load('./images/city.jpg')
const galaxy = texture.load('./images/galaxy.jpg')
const city3603 = texture.load('./images/city2.jpg')
const tajmahal1 = texture.load('/images/tajmahal1.jpg')
const tajmahal2 = texture.load('./images/tajmahal2.jpg')
const tajmahal3 = texture.load('./images/tajmahal3.jpg')
const mumbai1 = texture.load('./images/mumbai1.jpg')
const mumbai2 = texture.load('./images/mumbai2.jpg')
const kutch1 = texture.load('./images/kutch1.jpg')
const kashmir1 = texture.load('./images/kashmir1.jpg')
const kerala1 = texture.load('./images/kerala1.jpg')
const goa1 = texture.load('./images/goa1.jpg')
const goa2 = texture.load('./images/goa2.jpg')
const goa3 = texture.load('./images/goa3.jpg')

const paris = texture.load('./images/paris4.jpg')
const france1 = texture.load('./images/france1.jpg')
const mountain1 = texture.load('./images/mountain1.jpg')
const museam1 = texture.load('./images/museam1.jpg')


// Scene
const scene360 = new THREE.Scene()
// scene360.background = new THREE.Color('white')

const sceneplanet = new THREE.Scene()

sceneplanet.background = galaxy

const sceneFinal = new THREE.Scene()
// sceneFinal.background = new THREE.Color('white')


// loader

// const geometryplane = new THREE.PlaneBufferGeometry(2,2,1,1)

// const materialplane = new THREE.ShaderMaterial({

//     transparent : true,
//     uniforms : { 
//         alpha :{ value : 1.0}
//     },
//     vertexShader:`


//     void main()
//     {


//         gl_Position = vec4(position,1.0);

//     }

//     `,
//     fragmentShader : `

//     uniform float alpha;

//     void main()
//     {

//         gl_FragColor = vec4(1.0,0.0,0.0,alpha);
//     }

//     `



// })



// const meshplane  = new THREE.Mesh(geometryplane,materialplane)
// sceneplanet.add(meshplane)

let points = [

    {

        title: 'kyiv',
        coords: {

            lat: 22.309425,
            lng: 72.136230

        },

        textureplace: paris
    },

    {

        title: 'cancun',
        coords: {

            lat: 80.5937,
            lng: 18.9629

        },

        textureplace: france1


    },

    {

        title: 'paris',
        coords: {

            lat: 149.8566,
            lng: 26.3522

        },

        textureplace: mountain1


    },

    {

        title: 'kyiv',
        coords: {

            lat: 22.309425,
            lng: 72.136230

        },

        textureplace: museam1
    },

    {

        title: 'cancun',
        coords: {

            lat: 80.5937,
            lng: 18.9629

        },

        textureplace: goa1


    },

    {

        title: 'paris',
        coords: {

            lat: 149.8566,
            lng: 26.3522

        },

        textureplace: city3603


    },

    {

        title: 'kyiv',
        coords: {

            lat: 22.309425,
            lng: 72.136230

        },

        textureplace: mumbai1
    },

    {

        title: 'cancun',
        coords: {

            lat: 80.5937,
            lng: 18.9629

        },

        textureplace: city3602


    },



]

var t = null
var s = null
let list = null
let el = null

// group for scene360

const group = new THREE.Group()


// Objects



// console.log(points[1].texture)


// creating sceneplanet

let x = 0
let y = 0


// function createplanet() {

const geometryplanet = new THREE.SphereGeometry(1, 32, 32);

// Materials

const materialplanet = new THREE.MeshStandardMaterial({

    map: texture.load('./images/earth5.jpg')


})
// material.color = new THREE.Color(0xff0000)

// Mesh
const sphereplanet = new THREE.Mesh(geometryplanet, materialplanet)
group.add(sphereplanet)



document.addEventListener('mousemove', function (e) {

    x = e.clientX
    y = e.clientY

})

// for coors on earth



function calcposFromLatLonRad(lat, lon) {


    var phi = (lat) * (Math.PI / 100)
    var theta = (lon + 100) * (Math.PI / 100)
    let x = Math.cos(phi) * Math.cos(theta)
    let y = Math.cos(phi) * Math.sin(theta)
    let z = Math.sin(phi)
    return {
        x, y, z
    };


}



for (let i = 0; i < points.length; i++) {

    // console.log(points[i].textureplace)



    // ]

    // points.forEach((p,index) => {

    let coords = calcposFromLatLonRad(points[i].coords.lat, points[i].coords.lng)

    // console.log(coords)

    let meshcoords = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xcfff0ff })
    )
    meshcoords.position.copy(coords)

    // group.add(meshcoords)



    // gui.add(meshcoords.position,'x').min(0).max(4).step(0.1).name('x')
    // gui.add(meshcoords.position,'y').min(0).max(4).step(0.1).name('y')
    // gui.add(meshcoords.position,'z').min(0).max(4).step(0.1).name('z')


    // })


}


sceneplanet.add(group)


// }


// creating finalscene






const geometry1 = new THREE.PlaneBufferGeometry(1, 1)


const material1 = new THREE.ShaderMaterial({

    vertexShader: `
    
    varying vec2 vUv;
    varying vec2 vUvEarth;


    void main(){
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); 

        vUv = uv;
        vUvEarth = uv;


    }
    
    `,
    fragmentShader: `
    
    uniform sampler2D scene360;
    uniform sampler2D sceneplanet;
    // uniform sampler2D uScene;
    // uniform sampler2D uSceneEarth;
    uniform float progress;
    float pi = 3.14159265;
    varying vec2 vUv;
    varying vec2 vUvEarth;

    vec2 distort(vec2 olduv,float pr,float expo){

        vec2 p0 = 2.*olduv - 1.;

        vec2 p1 = p0/(1. - pr*length(p0)*expo);


        return (p1 + 1.)*0.5;

    }





    void main(){

    vec2 uv1 = distort(vUv,-10.*progress,progress*4.);
    vec2 uv2 = distort(vUv,-10.*(1.-progress),progress*4.);
    vec4 texturecolor = texture2D(scene360,uv2);
    vec4 texturecolorEarth = texture2D(sceneplanet,uv1);
    float mixer = smoothstep(cos(vUv.y*0.5),vUv.y*0.3,progress);

    vec4 finalTexture = mix(texturecolor,texturecolorEarth,mixer);

    gl_FragColor = finalTexture;    
    // gl_FragColor = texturecolor;    

    // gl_FragColor = texturecolorEarth;    


    }

    `,
    // side : THREE.DoubleSide,
    uniforms: {

        scene360: { value: null },
        sceneplanet: { value: null },
        progress: { value: 0 }


    }

})


const mesh1 = new THREE.Mesh(geometry1, material1)

sceneFinal.add(mesh1)




// add particles


const particlescustomGeometry = new THREE.BufferGeometry()
const count = 2000

const positions = new Float32Array(count * 3)

for (let i = 0; i < count * 3; i++) {

    positions[i] = (Math.random() - 0.5) * 10
}

particlescustomGeometry.setAttribute(

    'position',
    new THREE.BufferAttribute(positions, 3)
)

// Materials

const particlesMaterial = new THREE.ShaderMaterial({

    // uniforms:
    // {

    //     uSize: { value: 100 }
    // },
    vertexShader: `
    
    
        void main(){
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);

        gl_PointSize = 23.0;



        }

    `,
    fragmentShader: `
    
        void main()
        {
            float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
            float strength = 0.045 / distanceToCenter - 0.1  * 1.5;

            gl_FragColor = vec4(0.0, 1.0, 1.0, strength);
        }

    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false


})

particlesMaterial.color = new THREE.Color(0x00ff00)

// Mesh
// const particles = new THREE.Points(particlesGeometry,particlesMaterial)
const particles = new THREE.Points(particlescustomGeometry, particlesMaterial)
sceneplanet.add(particles)


// gui debug panel


// gui.add(material1.uniforms.progress, 'value').min(0).max(1).step(0.01).name('transition')


// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.8)
pointLight.position.x = 7
pointLight.position.y = 3
pointLight.position.z = 6
sceneplanet.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


// texture360 & texctureplanet

let texture360 = new THREE.WebGLRenderTarget(sizes.width, sizes.height, {

    format: THREE.RGBAFormat,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter

})

let textureplanet = new THREE.WebGLRenderTarget(sizes.width, sizes.height, {

    format: THREE.RGBAFormat,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter

})

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera1.aspect = sizes.width / sizes.height
    camera1.updateProjectionMatrix()

    camera2.aspect = sizes.width / sizes.height
    camera2.updateProjectionMatrix()

    camera3.aspect = sizes.width / sizes.height
    camera3.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera1 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera1.position.x = 0
camera1.position.y = 0
camera1.position.z = 0.5
scene360.add(camera1)

const camera2 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera2.position.x = 0
camera2.position.y = 0
camera2.position.z = 2
group.add(camera2)

var frustsize = 1
const camera3 = new THREE.OrthographicCamera(frustsize / -2, frustsize / 2, frustsize / 2, frustsize / -2, -1000, 1000)
camera3.position.x = 0
camera3.position.y = 0
camera3.position.z = 0
sceneFinal.add(camera3)

// Controls
const controls1 = new OrbitControls(camera1, canvas)
controls1.enableDamping = true

const controls2 = new OrbitControls(camera2, canvas)
controls2.enableDamping = true
controls2.enableZoom = false
// controls2.maxDistance = 2.0
// controls2.minDistance = 3.0


// const controls3 = new OrbitControls(camera3, canvas)
// controls3.enableDamping = true

// scene call

// create360()
// createplanet()
// createFinalScene()

// console.log(texture360)


// loader

// let loader = document.querySelector('.loader')
// let loadingcounter = document.querySelector('.loader .counter')

// let countloader = setInterval(function () {

//     let loading = ++(loadingcounter.textContent)
//     // console.log(loading)

//     if (loading == 100) {
//         clearInterval(countloader)
//         loadingcounter.classList.add('hideloading')
//         loader.classList.add('hideloader')
//         tl.to('.hideloading', { duration: 0.5, scale: 3, opacity: 0, ease: Expo.easeInOut })
//         tl.to('.hideloader', { duration: 2, translateY: -2000, ease: Expo.easeInOut })

//         // let tl = gsap.timeline()
//         tl.from(group.position, { z: 30, x: -23, ease: Expo.easeInOut, duration: 3 },'-=1.2')
//         // tl.from(sphereplanet.rotation, { z: 8, y: 20, x: 10, ease: Expo.easeOut, duration: 2 }, '-=1.5')
//         // tl.to(group.position, { z: 0.5, ease: Expo.easeOut, duration: 2 }, '+=0.5')
//         // tl.from(particles.position, { z: 10, ease: Expo.easeInOut, duration: 3 }, "-=6")
//         // tl.to(directionalLight.position, { x:-20,y:-20, ease: Expo.easeOut,duration:5 })  

//         tl.from('.button_login', {


//             y: -10,
//             opacity: 0,
//             scale: 0,
//             stagger: 0.1,
//             duration: 1.3,
//             ease: Expo.easeInOut


//         }, "-=0.8")

//         tl.from('li a', {


//             y: -10,
//             opacity: 0,
//             scale: 0,
//             stagger: 0.1,
//             duration: 1.3,
//             ease: Expo.easeInOut


//         }, "-=1")

//         tl.from('.logo', {


//             opacity: 0,
//             duration: 0.6,
//             x: -200,
//             ease: Expo.easeInOut


//         }, "-=1.2")

//         tl.from('#search', {


//             opacity: 0,
//             duration: 1.3,
//             y: -150,
//             ease: Expo.easeInOut


//         }, "-=1.2")

//         tl.from('#search_btn', {


//             opacity: 0,
//             duration: 1.1,
//             y: -150,
//             ease: Expo.easeInOut


//         }, "-=0.9")

//         tl.from(ho1_h1, { opacity: 0, y: -50, duration: 1.5, ease: Expo.easeOut })
//         tl.from(ho1_h12, { opacity: 0, y: -40, duration: 1.5, ease: Expo.easeOut }, '-=0.8')



//         document.body.addEventListener('load', () => {

//             tl.play();


//         })


//     }
// }, 60)



let navbar = document.querySelector('#navbar')
let a = document.querySelectorAll('#navbar li a')
let ho1_h1 = document.querySelector('.first-h1')
let ho1_h12 = document.querySelector('.second-h1')
let about = document.getElementById('about')
let explorebtn = document.querySelectorAll('#btn-about')
let images = document.querySelectorAll('#img')
let imagememu = document.querySelector('.image-menu')
let imagesplaces = document.querySelectorAll('.imagesplaces')
let imageheading = document.querySelectorAll('.image1 .imgheading')
let close = document.querySelector('.image-menu .close')
let close_planeyourtourbtn = document.querySelector('.planeyourtour_btn .close_planeyourtourbtn')
let imgheading_P = ""
let img_p = ""
let view360_btn = document.querySelector('#about #btn-360')
let close360 = document.querySelector('.close360')
let planeyourtour = document.querySelector('#btn-placedetails')
let googlemap = document.querySelector('#btn-googlemap')
let whether = document.querySelector('#btn-whether')
let distancebtn = document.querySelector('#btn-distance')
let loginpop = document.querySelector('.pop')
let close_googlebtn = document.querySelector('#map .close_googlebtn')
let close_whetherbtn = document.querySelector('#whether .close_whetherbtn')
let close_distancebtn = document.querySelector('#user_distance .close_distancebtn')


// let about_section = document.getElementById('#about')
let home = document.getElementById('home')
let service_section = document.getElementById('services')
let contact_section = document.getElementById('contact')
let footer_main = document.getElementById('footer')


let city = document.querySelector('.locationplace1')
let state = document.querySelector('.locationplace2')
let country = document.querySelector('.locationplace3')


let showmap = document.querySelector('#map .showmap')
let distancemap = document.querySelector('#user_distance')

let showwhether = document.querySelector('#whether .showwhether')
let footer = document.querySelector('.foot span')

let hotel_name1 = document.querySelector('#hotels .hotel_details .hotel_img .hotel1')
let hotel_name2 = document.querySelector('#hotels .hotel_details .hotel_img .hotel2')
let hotel_name3 = document.querySelector('#hotels .hotel_details .hotel_img .hotel3')

let hotel_img1 = document.querySelector('#hotels .hotel_detail .hote_img #img1')
let hotel_img2 = document.querySelector('#hotels .hotel_detail .hote_img #img2')
let hotel_img3 = document.querySelector('#hotels .hotel_detail .hote_img #img3')
let hotel_img4 = document.querySelector('#hotels .hotel_detail .hote_img #img4')
let hotel_img5 = document.querySelector('#hotels .hotel_detail .hote_img #img5')



distancebtn.addEventListener('click',() =>{

    loginpop.style.opacity = 1
    window.scrollTo(0,0)
    alert('please login');
    // container1.style.transform = 'translateX(-50%) scale(1)'
    container1.classList.add('active1')

})


var sound_a = new Audio('./audio/a.mp3')
var sound_explorebtn = new Audio('./audio/a.mp3')
var sound_enter360btn = new Audio('./audio/enter360.wav')
var sound_exit360btn = new Audio('./audio/exit360.wav')

// login form

let login_form = document.querySelector('.button_login')
let container1 = document.querySelector('section .container1')

login_form.addEventListener('click', function () {

    container1.classList.toggle('active1')

    let tl = gsap.timeline()

    // tl.to('.container1.active1',{ scale:1,duration:1,ease:Expo.easeOut})


})


//  360-details


let text_360_details = document.querySelectorAll('.text')

const raycaster = new THREE.Raycaster()
const point360 = [
    {
        position: new THREE.Vector3(1.55, 0.3, - 0.6),
        element: document.querySelector('.point-0')
    },
    {
        position: new THREE.Vector3(0.5, 0.8, - 1.6),
        element: document.querySelector('.point-1')
    },
    {
        position: new THREE.Vector3(1.6, - 1.3, - 0.7),
        element: document.querySelector('.point-2')
    },

    {
        position: new THREE.Vector3(0.9, - 0.8, -1.0),
        element: document.querySelector('.container .btn1')
    },

    {
        position: new THREE.Vector3(1.1, - 1.2, -0.89),
        element: document.querySelector('.container .btn2')
    },

    {
        position: new THREE.Vector3(-0.6, -0.3, 0.7),
        element: document.querySelector('.container .btn3')
    }
]




for (let i = 0; i < a.length; i++) {

    a[i].addEventListener('mouseenter', function () {

        sound_a.currentTime = 0
        sound_a.play()
        // console.log(sound_a)

    })

}





// search bar


let search = document.getElementById('search')
let search_btn = document.getElementById('search_btn')
let searchtext = ""
// let searcharray = []
let searcharray = ""


// search.addEventListener('keypress', function (e) {




//     search_btn.addEventListener('click', function () {


//         searcharray = search.value
//         searchtext = searcharray.split("")


//     })

//     let searchtext = ""
//     let searcharray = ""
//     if (searchtext == e.key) {

//         search.innerText = searchtext

//     }


// })


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/

    search_btn.addEventListener('click', function () {

        for (let i = 0; i < imageheading.length; i++) {


            // let searchtext = ""


            // console.log(inp.value)
            // console.log(imageheading[i].textContent)

            if (imageheading[i].textContent == inp.value) {

                //    searchtext = imageheading[i]

                //    console.log(searchtext)


                t = points[i].textureplace



                // console.log(points[index].textureplace,index)

                console.log(t)




                // creating scene360

                // function create360() {

                const geometry360 = new THREE.SphereGeometry(1, 32, 32);

                // Materials

                const material360 = new THREE.MeshBasicMaterial({

                    map: t,
                    side: THREE.BackSide

                })

                // tl.from(material1.uniforms.value,{ duration : 1})
                // material.color = new THREE.Color(0xff0000)

                // Mesh
                const sphere360 = new THREE.Mesh(geometry360, material360)
                scene360.add(sphere360)


                // }




                imgheading_P = document.createElement('div')
                img_p = document.createElement('img')
                img_p.id = 'img'
                img_p.setAttribute('alt', imageheading[i].textContent)
                img_p.src = images[i].src
                imgheading_P.className = 'imgheading'
                imgheading_P.innerText = imageheading[i].textContent
                imagememu.appendChild(img_p)
                imagememu.appendChild(imgheading_P)



                let tl = gsap.timeline()

                tl.to('.image-menu', {

                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: Expo.easeOut


                })


                console.log(imagememu)


            }






        }



        window.scrollTo(0, 800)



    })


    close.addEventListener('click', function () {

        let tl = gsap.timeline()

        tl.to('.image-menu', {

            opacity: 0,
            scale: 0,
            duration: 0.5,
            ease: Expo.easeOut


        })

        let imgh = document.querySelectorAll('.imgheading')

        for (let i = 0; i < imgh.length; i++) {


            // imgheading_P = document.createElement('div')
            // img_p = document.createElement('img')
            // img_p.id = 'img'
            // img_p.removeAttribute('alt', "")
            // img_p.src = ""
            // imgheading_P.className = 'imgheading'
            imgheading_P.innerText = ""
            // imagememu.appendChild(img_p)
            imagememu.appendChild(imgheading_P)

            // imgh[i].innerText = "" 
            // console.log(imgh[i].innerText)

        }

    })





    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*An array containing all the country names in the world:*/
//   var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
// var countries = ["tajmahal", "kutch", "kashmir", "kerala", "goa", "dargiling", "mumbai", "manali"]
var countries = ["paris", "Arc de Triomphe", "Le mont saint michel", "Museum de louvre"]

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("search"), countries);




// searcharray = searcharray.split("")


// searcharray.slice(0,3)
// console.log(searcharray)

// console.log(search)

// let imagemenuheading = document.querySelectorAll('.image-menu .imgheading')



for (let i = 0; i < images.length; i++) {

    images[0].src = "https://images.unsplash.com/photo-1542326754-1248fa5d9fdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    images[1].src = "https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    images[2].src = "https://images.unsplash.com/photo-1628285477029-e98c852cfb63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    images[3].src = "https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    // images[4].src = "https://images.unsplash.com/photo-1560605046-63c8d7526d9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    // images[5].src = "https://images.unsplash.com/photo-1578572714274-6771ac6d8d01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    // images[6].src = "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    // images[7].src = "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    // console.log(images[i])

}


// for (let i = 0; i < imageheading.length; i++) {

//     // console.log(imageheading[i])


// }


let mapdetails = [

    {

        maplink: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410655433!2d2.2769956218369782!3d48.858833639534964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1647058806323!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`


    },

    {

        maplink: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.1834497647183!2d2.2928269159324364!3d48.873779279289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec746d386b%3A0x8710a9c7965c5fa9!2sL&#39;Arc%20de%20Triomphe%20de%20l&#39;Etoile%2C%2075017%20Paris%2C%20France!5e0!3m2!1sen!2sin!4v1647059341454!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`


    },
    {

        maplink: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21097.88487964796!2d-1.5462077074981235!3d48.62447327296439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ea8d67c9ceeb3%3A0xc5834ce47e0dc3fe!2s50170%20Mont%20Saint-Michel%2C%20France!5e0!3m2!1sen!2sin!4v1647059221411!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`


    },
    {

        maplink: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.874102365142!2d2.3354553159320197!3d48.860611079287644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sLouvre%20Museum!5e0!3m2!1sen!2sin!4v1647059417289!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`


    },
    {

        maplink: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492485.5349690921!2d73.73211887497193!3d15.347038044697092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1643872567790!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`


    },
    {

        maplink: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56862.4684168531!2d88.22965560412257!3d27.033190567298863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e42e654cf501bb%3A0x4175555979d4702a!2sDarjeeling%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1643872611964!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`


    },
    {

        maplink: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609656434!2d72.74110147301643!3d19.082197840727325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1643872653887!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`


    },
    {

        maplink: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.532381772275!2d77.16961021508324!3d32.23947084279462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1643872678084!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`


    }

]



let whetherdetails = [

    {


        whetherlink: `<a class="weatherwidget-io" href="https://forecast7.com/en/27d1878d01/agra/" style="width:500px" data-label_1="AGRA" data-label_2="WEATHER" data-theme="original" >AGRA WEATHER</a>

        <script>
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
        </script>
        `

    },
    {


        whetherlink: `<a class="weatherwidget-io" href="https://forecast7.com/en/23d7369d86/kutch/" style="width:500px" data-label_1="KUTCH" data-label_2="WEATHER" data-theme="original" >KUTCH WEATHER</a>
        <script>
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
        </script>`

    },
    {


        whetherlink: `<a class="weatherwidget-io" href="https://forecast7.com/en/33d7876d58/jammu-and-kashmir/" style="width:500px" data-label_1="JAMMU AND KASHMIR" data-label_2="WEATHER" data-theme="original" >JAMMU AND KASHMIR WEATHER</a>
        <script>
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
        </script>`

    },
    {


        whetherlink: `<a class="weatherwidget-io" href="https://forecast7.com/en/10d8576d27/kerala/" style="width:500px" data-label_1="KERALA" data-label_2="WEATHER" data-theme="original" >KERALA WEATHER</a>
        <script>
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
        </script>`

    },
    {


        whetherlink: `<a class="weatherwidget-io" href="https://forecast7.com/en/15d3074d12/goa/" style="width:500px" data-label_1="GOA" data-label_2="WEATHER" data-theme="original" >GOA WEATHER</a>
        <script>
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
        </script>`

    },
    {


        whetherlink: `<a class="weatherwidget-io" href="https://forecast7.com/en/27d0488d26/darjeeling/" style="width:500px data-label_1="DARJEELING" data-label_2="WEATHER" data-theme="original" >DARJEELING WEATHER</a>
        <script>
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
        </script>`

    },
    {


        whetherlink: `<a class="weatherwidget-io" href="https://forecast7.com/en/19d0872d88/mumbai/" style="width:500px data-label_1="MUMBAI" data-label_2="WEATHER" data-theme="original" >MUMBAI WEATHER</a>
        <script>
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
        </script>`

    },
    {


        whetherlink: `<a class="weatherwidget-io" href="https://forecast7.com/en/32d2477d19/manali/" style="width:500px data-label_1="MANALI" data-label_2="WEATHER" data-theme="original" >MANALI WEATHER</a>
        <script>
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
        </script>`

    },

]


let point360_details = [


    {

        text_airport: {

            text_airport_details: [

                `airport is 10km from paris ..`,
                `airport is 20km from paris ..`,
                `airport is 30km from paris ..`,
                `airport is 40km from paris ..`,

            ]

        },
        hotels: {

            hotel_details: [
                `<div>
            <a>HOTEL1</a>
            /div><br>
            <a>HOTEL1</a><br>
            <a>HOTEL1</a><br>`,
                `<a>HOTEL1</a><br>
            <a>HOTEL1</a><br>
            <a>HOTEL1</a><br>`,
                `<a>HOTEL1</a><br>
            <a>HOTEL1</a><br>
            <a>HOTEL1</a><br>`,
                `<a>HOTEL1</a><br>
            <a>HOTEL1</a><br>
            <a>HOTEL1</a><br>`,

            ]
        },
        hospital: {


            hospital_details: [
                `<a>HOSPITAL</a><br>,
            <a>HOSPITAL</a><br>,
            <a>HOSPITAL</a><br>,
            <a>HOSPITAL</a>`,

            ]

        }


    }



]


//HOTELS , FLIGHTS , GUIDES

let hotelname1 = [

    {

        hotelname: [

            'ibis Paris Tour Eiffel Cambronne 15eme ',
            'Novotel Paris Centre Tour Eiffel',
            'B&B Hotel Paris 17 Batignolles'


        ]

    },

    {

        hotelname: [

            'abcd2',
            'efgh2',
            'hijk2'


        ]

    },

    {

        hotelname: [

            'abcd3',
            'efgh3',
            'hijk3'


        ]

    },

    {

        hotelname: [

            'abcd4',
            'efgh4',
            'hijk4'


        ]

    },


]


let hotelimg1 = [


    {

        hotelimg: [

            [

                `<img src="https://r1imghtlak.mmtcdn.com/3f26f244585611eab5cb0242ac11000a.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg"
                                    id="img1" class=".grid-item item1">`,
                `<img src="https://r1imghtlak.mmtcdn.com/375372a4585611eabeec0242ac11000b.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg"
                                    id="img2" class=".grid-item item2">`,
                `<img src="https://r1imghtlak.mmtcdn.com/c904a9fa3ce211eab6310242ac110007.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg"
                                    id="img3" class=".grid-item item3">`,
                `<img src="https://r1imghtlak.mmtcdn.com/4010ed0e585611eaaa870242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg"
                                    id="img4" class=".grid-item item4">`,
                `<img src="https://r1imghtlak.mmtcdn.com/d64d945a3ce211eab2b20242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg"
                                    id="img5" class=".grid-item item5"></img>`

            ]


        ]

    },

    {

        hotelimg: [

            [

                `<img src="https://r1imghtlak.mmtcdn.com/04bdcf5aaec511e9a13e0242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg"
                                    id="img1" class=".grid-item item1">`,
                `<img src="https://r1imghtlak.mmtcdn.com/5057d0fe590c11eab86a0242ac110005.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg"
                                    id="img2" class=".grid-item item2">`,
                `<img src="https://r1imghtlak.mmtcdn.com/508d79d4590c11ea98920242ac110005.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg"
                                    id="img3" class=".grid-item item3">`,
                `<img src="https://r1imghtlak.mmtcdn.com/58038848590c11ea80b70242ac110005.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg"
                                    id="img4" class=".grid-item item4">`,
                `<img src="https://r1imghtlak.mmtcdn.com/6175f2f8590c11ea83af0242ac110005.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg"
                                    id="img5" class=".grid-item item5"></img>`

            ]


        ]

    },

    {

        hotelimg: [

            [

                `<img src="https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/4190725563801505-139434a_hb_a_007.jpg?&output-quality=75&downsize=910:612&crop=910:612;141,0&output-format=jpg&downsize=821:550&crop=821:550"
                                    id="img1" class=".grid-item item1">`,
                `<img src="https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/4190725563801505-259fc2f0_z.jpg?&output-quality=75&downsize=910:612&crop=910:612;141,0&output-format=jpg"
                                    id="img2" class=".grid-item item2">`,
                `<img src="https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/4190725563801505-2d26bb4f_z.jpg?&output-quality=75&downsize=910:612&crop=910:612;141,0&output-format=jpg"
                                    id="img3" class=".grid-item item3">`,
                `<img src="https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/4190725563801505-e84a0162_z.jpg?&output-quality=75&downsize=910:612&crop=910:612;141,0&output-format=jpg"
                                    id="img4" class=".grid-item item4">`,
                `<img src="https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/4190725563801505-53259e14_z.jpg?&output-quality=75&downsize=910:612&crop=910:612;141,0&output-format=jpg"
                                    id="img5" class=".grid-item item5"></img>`

            ]


        ]

    },

    {

        hotelimg: [

            [

                `<img src="https://r1imghtlak.mmtcdn.com/04bdcf5aaec511e9a13e0242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg"
                                    id="img1" class=".grid-item item1">`,
                `<img src="https://r1imghtlak.mmtcdn.com/5057d0fe590c11eab86a0242ac110005.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg"
                                    id="img2" class=".grid-item item2">`,
                `<img src="https://r1imghtlak.mmtcdn.com/508d79d4590c11ea98920242ac110005.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg"
                                    id="img3" class=".grid-item item3">`,
                `<img src="https://r1imghtlak.mmtcdn.com/58038848590c11ea80b70242ac110005.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg"
                                    id="img4" class=".grid-item item4">`,
                `<img src="https://r1imghtlak.mmtcdn.com/6175f2f8590c11ea83af0242ac110005.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg"
                                    id="img5" class=".grid-item item5"></img>`

            ]


        ]

    },


]

// console.log(hfg)



!function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'weatherwidget-io-js');



for (let i = 3; i < point360.length; i++) {


    point360[i].element.addEventListener('click', function () {

        switch (point360[i]) {
            case point360[3]:
                t = points[0].textureplace
                break;
            case point360[4]:
                t = points[1].textureplace
                break;
            case point360[5]:
                t = points[2].textureplace
                break;

            default:
                break;
        }




        // creating scene360

        // function create360() {

        const geometry360 = new THREE.SphereGeometry(1, 32, 32);

        // Materials

        const material360 = new THREE.MeshBasicMaterial({

            map: t,
            side: THREE.BackSide

        })


        // tl.from(material1.uniforms.value,{ duration : 1})
        // material.color = new THREE.Color(0xff0000)

        // Mesh
        const sphere360 = new THREE.Mesh(geometry360, material360)
        scene360.add(sphere360)

        let tl = gsap.timeline()

        tl.to(material1.uniforms.progress, {

            duration: 1.5,
            value: 1

        })


        // if (point360[4]) {


        //     t = points[2].textureplace



        // // console.log(t)




        // // creating scene360

        // // function create360() {

        // const geometry360 = new THREE.SphereGeometry(1, 32, 32);

        // // Materials

        // const material360 = new THREE.MeshBasicMaterial({

        //     map: t,
        //     side: THREE.BackSide

        // })


        // // tl.from(material1.uniforms.value,{ duration : 1})
        // // material.color = new THREE.Color(0xff0000)

        // // Mesh
        // const sphere360 = new THREE.Mesh(geometry360, material360)
        // scene360.add(sphere360)

        // let tl = gsap.timeline()

        // tl.to(material1.uniforms.progress, {

        //     duration: 1.5,
        //     value: 1

        // })

        // }


        // if (point360[5]) {


        //     t = points[3].textureplace



        // // console.log(t)




        // // creating scene360

        // // function create360() {

        // const geometry360 = new THREE.SphereGeometry(1, 32, 32);

        // // Materials

        // const material360 = new THREE.MeshBasicMaterial({

        //     map: t,
        //     side: THREE.BackSide

        // })


        // // tl.from(material1.uniforms.value,{ duration : 1})
        // // material.color = new THREE.Color(0xff0000)

        // // Mesh
        // const sphere360 = new THREE.Mesh(geometry360, material360)
        // scene360.add(sphere360)

        // let tl = gsap.timeline()

        // tl.to(material1.uniforms.progress, {

        //     duration: 1.5,
        //     value: 1

        // })

        // }




    })

}


for (let i = 0; i < explorebtn.length; i++) {


    explorebtn[i].addEventListener('mouseenter', function () {

        sound_explorebtn.currentTime = 0
        sound_explorebtn.play()

    })

    explorebtn[i].addEventListener('click', function () {




        // list = document.getElementById('list')


        // el = document.createElement('div')
        // el.innerText = points[i].title
        // list.appendChild(el)


        t = points[i].textureplace

        // t_point_360 = points[i].textureplace

        // console.log(point360_details[i])



        // console.log(points[index].textureplace,index)

        // console.log(t)




        // creating scene360

        // function create360() {

        const geometry360 = new THREE.SphereGeometry(1, 32, 32);

        // Materials

        const material360 = new THREE.MeshBasicMaterial({

            map: t,
            side: THREE.BackSide

        })


        // tl.from(material1.uniforms.value,{ duration : 1})
        // material.color = new THREE.Color(0xff0000)

        // Mesh
        const sphere360 = new THREE.Mesh(geometry360, material360)
        scene360.add(sphere360)
        // console.log(text3601[i])
        // scene360.add(text360[i])


        // }


        let tl = gsap.timeline()

        tl.to('.image-menu', {

            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: Expo.easeOut


        })

        // adding google map in web

        showmap.innerHTML = mapdetails[i].maplink
        showwhether.innerHTML = whetherdetails[i].whetherlink
        // console.log(showwhether)
        // console.log(mapdetails[i].maplink)




        imgheading_P = document.createElement('div')
        img_p = document.createElement('img')
        img_p.id = 'img'
        img_p.setAttribute('alt', imageheading[i].textContent)
        img_p.src = images[i].src
        imgheading_P.className = 'imgheading'
        imgheading_P.innerText = imageheading[i].textContent
        imagememu.appendChild(img_p)
        imagememu.appendChild(imgheading_P)

        //  console.log(point360_details[0].hotels.hotel_details[i])
        text_360_details[0].innerHTML = point360_details[0].text_airport.text_airport_details[i]
        text_360_details[1].innerHTML = point360_details[0].hotels.hotel_details[i]
        text_360_details[2].innerHTML = point360_details[0].hospital.hospital_details[i]

        // hotel_name[0].innerHTML = hfg[0].hotel.hotelname[0]

        // hotel , flight & train , guide


        //  console.log(hotelname1[i].hotelname.hotel1)

        // for (let j = 0; j < explorebtn.length; j++) {





        // }

        hotel_name1.innerHTML = hotelname1[i].hotelname[0]
        hotel_name2.innerHTML = hotelname1[i].hotelname[1]
        hotel_name3.innerHTML = hotelname1[i].hotelname[2]




        for (let j = 0; j < 4; j++) {

            hotel_img1.src = hotelimg1[i].hotelimg[i][j]
            hotel_img2.src = hotelimg1[i].hotelimg[i][j]
            hotel_img3.src = hotelimg1[i].hotelimg[i][j]
            hotel_img4.src = hotelimg1[i].hotelimg[i][j]
            hotel_img5.src = hotelimg1[i].hotelimg[i][j]


        }

        console.log(hotelimg1[i].hotelimg[i][i])


        // console.log(hotel_name1)
        // console.log(hotel_name2)
        // console.log(hotel_name3)




        //         let myText1 = new Text()


        // // Set properties to configure:
        // myText1.text = 'paris'
        // myText1.fontSize = 1
        // myText1.position.z = -2
        // myText1.color = 0xffffff

        // // Update the rendering:
        // myText1.sync()
        // scene360[i].add(myText1)
        // console.log(scene360[i])

        // let myText2 = new Text()
        // // Set properties to configure:
        // myText2.text = 'Arc de Triomphe'
        // myText2.fontSize = 1
        // myText2.position.z = -2
        // myText2.color = 0xffffff

        // // Update the rendering:
        // myText2.sync()
        // scene360[i].add(myText2)


        // let myText3 = new Text()
        // // Set properties to configure:
        // myText3.text = 'Le mont saint michel!'
        // myText3.fontSize = 1
        // myText3.position.z = -2
        // myText3.color = 0xffffff

        // // Update the rendering:
        // myText3.sync()
        // scene360[i].add(myText3)


        // let myText4 = new Text()
        // // Set properties to configure:
        // myText4.text = 'Museum de louvre'
        // myText4.fontSize = 1
        // myText4.position.z = -2
        // myText4.color = 0xffffff

        // // Update the rendering:
        // myText4.sync()
        // scene360[i].add(myText4)


        // console.log(text360)


        // console.log(imgheading_P)
        //    console.log(imageheading[i])

    })
}



close.addEventListener('click', function () {

    let tl = gsap.timeline()

    tl.to('.image-menu', {

        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: Expo.easeOut


    })


    // sound_explorebtn.currentTime = 0
    // sound_explorebtn.play()

    let imgh = document.querySelectorAll('.imgheading')

    for (let i = 0; i < imgh.length; i++) {


        // imgheading_P = document.createElement('div')
        // img_p = document.createElement('img')
        // img_p.id = 'img'
        // img_p.removeAttribute('alt', "")
        // img_p.src = ""
        // imgheading_P.className = 'imgheading'
        showmap.innerHTML = ""
        showwhether.innerHTML = ""
        imgheading_P.innerText = ""
        // imagememu.appendChild(img_p)
        imagememu.appendChild(imgheading_P)
        // scene360.remove(text360[i])
        // imgh[i].innerText = "" 
        // console.log(imgh[i].innerText)

    }

})


view360_btn.addEventListener('click', function () {

    setTimeout(function () {

        sound_enter360btn.play()
        sound_enter360btn.currentTime = 0

    }, 2000)

    let tl = gsap.timeline()

    tl.to('.image-menu', {

        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: Expo.easeOut


    })

    tl.to('.imagesplaces', {


        opacity: 0,
        scale: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: Expo.easeInOut


    })

    tl.to('.heading-about', {


        opacity: 0,
        duration: 0.6,
        scale : 0,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('.button_login', {


        opacity: 0,
        duration: 0.6,
        scale : 0,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('li a', {


        y: -10,
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: Expo.easeInOut


    }, "-=1")

    tl.to('.first-h1', {


        x: -20,
        opacity: 0,
        duration: 0.6,
        scaleY : 0,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('.second-h1', {


        x: -20,
        opacity: 0,
        duration: 0.6,
        scaleY : 0,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('.logo', {


        opacity: 0,
        duration: 0.6,
        x: -200,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('#search', {


        opacity: 0,
        duration: 0.6,
        y: -200,
        scaleY : 0,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('#search_btn', {


        opacity: 0,
        duration: 0.6,
        scaleY : 0,
        y: -200,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('#container1', {


        opacity: 0,
        scale : 0,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('.close360', {


        opacity: 1,
        duration: 0.6,
        // x : -200,
        ease: Expo.easeInOut


    }, "-=1")

    tl.to('#services', {


        opacity: 0,
        duration: 0.6,
        // x : -200,
        ease: Expo.easeInOut


    }, "-=1")

    tl.to(material1.uniforms.progress, {

        duration: 1.5,
        value: 1

    })

    tl.to('.label', {

        duration: 1,
        opacity: 1,
        scale : 1

    })

    tl.to('.point', {

        duration: 1,
        opacity: 1,
        scale : 1

    })

    tl.to('.container #btn-360', {

        duration: 0.6,
        opacity: 1

    })

    window.scrollTo(0, 0)
    
    // contact_section.style.opacity = '0'
    // service_section.style.opacity = '0'
    // about.style.opacity = '0'
    // footer_main.style.opacity = '0'

    

})


close360.addEventListener('click', function () {

    // contact_section.style.opacity = '1'
    // service_section.style.opacity = '1'
    // about.style.opacity = '1'
    // footer_main.style.opacity = '1'

    sound_exit360btn.play()
    sound_exit360btn.currentTime = 0

    let tl = gsap.timeline()

    tl.to('.label', {

        duration: 1,
        opacity: 0,
        scale : 0,
        pointerEvents : false

    })

    tl.to('.point', {

        duration: 1,
        opacity: 0,
        scale : 0,
        pointerEvents : false


    })


    tl.to('.container #btn-360', {

        duration: 0.6,
        opacity: 0

    })

    tl.to(material1.uniforms.progress, {

        duration: 1.7,
        value: 0,
        delay: 0.2

    }, '-=2')


    tl.to('.image-menu', {

        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: Expo.easeOut


    })

    tl.to('.imagesplaces', {


        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: Expo.easeInOut


    })

    tl.to('.heading-about', {


        opacity: 1,
        duration: 0.6,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('.button_login', {


        opacity: 1,
        duration: 0.6,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('li a', {


        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.9,
        ease: Expo.easeInOut


    }, "-=1")

    tl.to('#search', {


        opacity: 1,
        duration: 0.8,
        y: 0,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('#search_btn', {


        opacity: 1,
        duration: 0.8,
        y: 0,
        ease: Expo.easeInOut


    }, "-=1")

    tl.to('.first-h1', {


        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('.second-h1', {


        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('.logo', {


        opacity: 1,
        duration: 0.6,
        x: 0,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('.close360', {


        opacity: 0,
        duration: 0.6,
        // x : -200,
        ease: Expo.easeInOut


    }, "-=1.2")

    tl.to('#services', {


        opacity: 1,
        duration: 0.6,
        // x : -200,
        ease: Expo.easeInOut


    }, "-=1")

    // window.scrollTo(0,0)

})


planeyourtour.addEventListener('click', function () {

    // }


    let tl = gsap.timeline()

    tl.to('.planeyourtour_btn', {

        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: Expo.easeOut


    })

    // imgheading_P = document.createElement('div')
    // img_p = document.createElement('img')
    // img_p.id = 'img'
    // img_p.setAttribute('alt', imageheading[i].textContent)
    // img_p.src = images[i].src
    // imgheading_P.className = 'imgheading'
    // imgheading_P.innerText = imageheading[i].textContent
    // imagememu.appendChild(img_p)
    // imagememu.appendChild(imgheading_P)


    // console.log(imgheading_P)
    //    console.log(imageheading[i])

})


close_planeyourtourbtn.addEventListener('click', function () {

    let tl = gsap.timeline()

    tl.to('.planeyourtour_btn', {

        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: Expo.easeOut


    })

})






// let file = '\file1.txt'
// // console.log(file)

// fetch(file).then(x => x.text()).then(y => document.getElementById("demo").innerHTML = y);




// google map

const success = (position) => {

    console.log(position)

    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    const urllocaton = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

    fetch(urllocaton).then(res => res.json()).then(data => {

        console.log(data)
        city.innerText = data.locality
        state.innerText = data.principalSubdivision
        country.innerText = data.countryName


    })

    // initialize services

    

    // const geocoder = new google.maps.Geocoder();
    const service = new google.maps.DistanceMatrixService();
    // build request
    const origin1 = { lat: 55.93, lng: -3.118 };
    const origin2 = "Greenwich, England";
    const destinationA = "Stockholm, Sweden";
    const destinationB = { lat: 50.087, lng: 14.421 };
    const request = {
        origins: [origin1, origin2],
        destinations: [destinationA, destinationB],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
    };
    // get distance matrix response
    service.getDistanceMatrix(request).then((response) => {
        // put response
        let dis = JSON.stringify(
            response,
            null,
            2
        );

        console.log(dis)

    })

}

const error = (error) => {

    console.log(error)

}

navigator.geolocation.getCurrentPosition(success, error)

// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(51.508742, -0.120850),
//         zoom: 5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }



googlemap.addEventListener('click', function () {





    // }

    let tl = gsap.timeline()

    tl.to('#map', {

        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: Expo.easeOut


    })

    // imgheading_P = document.createElement('div')
    // img_p = document.createElement('img')
    // img_p.id = 'img'
    // img_p.setAttribute('alt', imageheading[i].textContent)
    // img_p.src = images[i].src
    // imgheading_P.className = 'imgheading'
    // imgheading_P.innerText = imageheading[i].textContent
    // imagememu.appendChild(img_p)
    // imagememu.appendChild(imgheading_P)


    // console.log(imgheading_P)
    //    console.log(imageheading[i])

})


close_googlebtn.addEventListener('click', function () {

    let tl = gsap.timeline()

    tl.to('#map', {

        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: Expo.easeOut


    })

})


distancebtn.addEventListener('click', function () {





    // }

    let tl = gsap.timeline()

    tl.to('#user_distance', {

        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: Expo.easeOut


    })

    // imgheading_P = document.createElement('div')
    // img_p = document.createElement('img')
    // img_p.id = 'img'
    // img_p.setAttribute('alt', imageheading[i].textContent)
    // img_p.src = images[i].src
    // imgheading_P.className = 'imgheading'
    // imgheading_P.innerText = imageheading[i].textContent
    // imagememu.appendChild(img_p)
    // imagememu.appendChild(imgheading_P)


    // console.log(imgheading_P)
    //    console.log(imageheading[i])

})


close_distancebtn.addEventListener('click', function () {

    let tl = gsap.timeline()

    tl.to('#user_distance', {

        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: Expo.easeOut


    })

})


whether.addEventListener('click', function () {





    // }

    let tl = gsap.timeline()

    tl.to('#whether', {

        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: Expo.easeOut


    })

    // imgheading_P = document.createElement('div')
    // img_p = document.createElement('img')
    // img_p.id = 'img'
    // img_p.setAttribute('alt', imageheading[i].textContent)
    // img_p.src = images[i].src
    // imgheading_P.className = 'imgheading'
    // imgheading_P.innerText = imageheading[i].textContent
    // imagememu.appendChild(img_p)
    // imagememu.appendChild(imgheading_P)


    // console.log(imgheading_P)
    //    console.log(imageheading[i])

})


close_whetherbtn.addEventListener('click', function () {

    let tl = gsap.timeline()

    tl.to('#whether', {

        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: Expo.easeOut


    })

})



let footer_year = new Date().getFullYear()

footer.innerHTML = footer_year





// whether


//   console.log(images)


// animate using gsap

// let tl = gsap.timeline()
// tl.from(group.position, { z: 30, x: -23, ease: Expo.easeInOut, duration: 3 })
// // tl.from(sphereplanet.rotation, { z: 8, y: 20, x: 10, ease: Expo.easeOut, duration: 2 }, '-=1.5')
// // tl.to(group.position, { z: 0.5, ease: Expo.easeOut, duration: 2 }, '+=0.5')
// // tl.from(particles.position, { z: 10, ease: Expo.easeInOut, duration: 3 }, "-=6")
// // tl.to(directionalLight.position, { x:-20,y:-20, ease: Expo.easeOut,duration:5 })  
// tl.from(ho1_h1, { opacity: 0, y: -50, duration: 1.5, ease: Expo.easeOut })
// tl.from(ho1_h12, { opacity: 0, y: -40, duration: 1.5, ease: Expo.easeOut }, '-=0.8')



// document.body.addEventListener('load', () => {

//     tl.play();


// })


/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () => {

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    controls1.update()
    controls2.update()
    // controls3.update()

    // animate

    particles.position.x = 0.45 + x * .00008;
    particles.position.y = 0.45 + y * .00008;

    sphereplanet.rotation.x = (0.45 + x * .00009);
    group.rotation.y = (0.45 + y * .00009);


    particles.rotation.y = - (0.1 * elapsedTime)
    sphereplanet.rotation.y = 0.1 * elapsedTime


    // Go through each point
    for (const point of point360) {
        // Get 2D screen position
        const screenPosition = point.position.clone()
        screenPosition.project(camera1)

        // Set the raycaster
        raycaster.setFromCamera(screenPosition, camera1)
        const intersects = raycaster.intersectObjects(scene360.children, true)

        // No intersect found
        if (intersects.length === 0) {
            // Show
            point.element.classList.add('visible')
        }

        // Intersect found
        else {
            // Get the distance of the intersection and the distance of the point
            const intersectionDistance = intersects[0].distance
            const pointDistance = point.position.distanceTo(camera1.position)

            // Intersection is close than the point
            if (intersectionDistance < pointDistance) {
                // Hide
                point.element.classList.remove('visible')
            }
            // Intersection is further than the point
            else {
                // Show
                point.element.classList.add('visible')
            }
        }

        const translateX = screenPosition.x * sizes.width * 0.5
        const translateY = - screenPosition.y * sizes.height * 0.5
        point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
    }
    // Render

    renderer.setRenderTarget(texture360)
    renderer.render(scene360, camera1)
    renderer.setRenderTarget(textureplanet)
    renderer.render(sceneplanet, camera2)
    material1.uniforms.scene360.value = texture360.texture;
    material1.uniforms.sceneplanet.value = textureplanet.texture;
    renderer.setRenderTarget(null)
    // renderer.render(scene360, camera1)
    // renderer.render(sceneplanet, camera2)
    renderer.render(sceneFinal, camera3)

    // console.log(material1.uniforms.scene360.value)


    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()