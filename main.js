let imagenes = [
    {"url": "Assets/TOGENASHI_TOGEARI.jpg",},
    {"url": "Assets/rina_main1.jpg",},
    {"url": "Assets/rina_main2.png",},
    {"url": "Assets/yuri_main1.jpg",},
    {"url": "Assets/yuri_main2.png",},
    {"url": "Assets/mirei_main1.jpg",},
    {"url": "Assets/mirei_main2.png",},
    {"url": "Assets/natsu_main1.jpg",},
    {"url": "Assets/natsu_main2.png",},
    {"url": "Assets/shuri_main1.jpg",},
    {"url": "Assets/shuri_main2.png",},

]

let imagen = document.getElementById('img');
let actual = 0

function atras(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" ></img>`
} 
function adelante(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" ></img>`
}
