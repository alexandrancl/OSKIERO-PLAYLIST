let playpauseBTN = document.getElementById('play-boton')
let stopBTN = document.getElementById('stop-boton')
let previousBTN = document.getElementById('previous-boton')
let nextBTN = document.getElementById('next-boton')
let randomBTN = document.getElementById('random-boton')
let imagen = document.getElementById('imagen')
let song = document.getElementById('audio')
let icono = document.getElementById('icono')
let icono2 = document.getElementById('icono2')
let volumen = document.getElementById('volume-control')
let tiempo = document.getElementById('tiempo-control')

let songs = [
    {
        id:0,
        genero: 'reggaeton',
        pista: 'Ahora me llama.mp4',
        imagen: 'unstoppable.JPG',
        artista: 'Karol G',
        titulo: 'Ahora me llama'
    },
    {
        id:1,
        genero: 'pop',
        pista: 'Cuando nadie ve.mp4',
        imagen: 'cuando_nadie_ve.JPG',
        artista: 'Morat',
        titulo: 'Cuando nadie ve'
    },
    {
        id:2,
        genero: 'reggaeton',
        pista: 'Dákiti.mp4',
        imagen: 'el_último_tour.JPG',
        artista: 'Bad Bunny',
        titulo: 'Dákiti'
    },
    {
        id:3,
        genero: 'reggaeton',
        pista: 'Es un secreto.mp4',
        imagen: 'house_of_pleasure.JPG',
        artista: 'Plan B',
        titulo: 'Es un secreto'
    },
    {
        id:4,
        genero: 'pop',
        pista: 'Hips don´t lie.mp4',
        imagen: 'hips_dont_lie.JPG',
        artista: 'Shakira',
        titulo: 'Hips don´t lie'
    },
    { 
        id:5,
        genero: 'reggaeton',
        pista: 'Llamado de emergencia.mp4',
        imagen: 'talento_de_barrio.JPG',
        artista: 'Daddy Yankee',
        titulo: 'Llamado de emergencia'
    },
    {
        id:6,
        genero: 'reggaaeton',
        pista: 'Mala influencia.mp4',
        imagen: 'mala_influencia.JPG',
        artista: 'Noriel x Manuel Turizo',
        titulo: 'Mala Influencia'
    },
    {
        id:7,
        genero: 'pop',
        pista: 'Nunca te olvide.mp4',
        imagen: 'nunca_te_olvide.JPG',
        artista: 'Morat',
        titulo: 'Nunca te olvidé'
    },
    {
        id:8,
        genero: 'reggaeton',
        pista: 'Perreo en la luna.mp4',
        imagen: 'the_academy.JPG',
        artista: 'Rich Music LTD, Sech, Dalex ft. Justin Quiles, Lenny Tavárez, Feid',
        titulo: 'Perreo en la luna'
    },
    {
        id:9,
        genero: 'pop',
        pista: 'Promiscuous.mp4',
        imagen: 'promiscuous.JPG',
        artista: 'Nelly Furtado',
        titulo: 'Promiscuous'
    },
    {
        id:10,
        genero: 'reggaeton',
        pista: 'Sin contrato.mp4',
        imagen: 'pretty_boy_dirty_boy.JPG',
        artista: 'Maluma',
        titulo: 'Sin contrato'
    },
    {
        id:11,
        genero: 'pop',
        pista: 'Thong song.mp4',
        imagen: 'thong_song.JPG',
        artista: 'Sisqo',
        titulo: 'Thong Song'
    },
    {
        id:12,
        genero: 'pop',
        pista: 'Total eclipse of the heart.mp4',
        imagen: 'total.JPG',
        artista: 'Glee Cast',
        titulo: 'Total eclipse of the heart (Cover)'
    },
    {
        id:13,
        genero: 'pop',
        pista: 'Worth it.mp4',
        imagen: 'worth_it.JPG',
        artista: 'Fifth Harmony ft. Kid Ink',
        titulo: 'Worth it'
    },
]


let num_pista = 0;
previousBTN.addEventListener('click',()=>{
    if(num_pista > 0)
    {
        num_pista--;
        playSong2(num_pista)
    }
})
nextBTN.addEventListener('click',()=>{
    if(num_pista < songs.length-1)
    {
        num_pista++;
        playSong2(num_pista)
    }
})
song.addEventListener('ended',()=>{
    if(num_pista < songs.length-1)
    {
        num_pista++;
        playSong2(num_pista)
    }
})


let estado = true;
let progress;
playpauseBTN.addEventListener('click',()=>{
    if (estado){
        playSong();
    }
    else{
        pausedSong(0);
    }
})
document.addEventListener('keypress',(xde)=>{
    if(xde.code === 'Space' && estado)
    {
        playSong()
    }
    else{
        pausedSong()
    }
})


stopBTN.addEventListener('click',()=>{
    pausedSong();
    song.currentTime = 0;
})

let vol = 1;
volumen.value = 1;
volumen.addEventListener('change',()=>{
    song.volume = volumen.value;
})
document.addEventListener('keypress',(xd)=>{
    console.log(xd.key)
    if(xd.key === 'ArrowUp' && vol<1)
    {
        song.volume = song.volume + 0.01
    }
    if(xd.key === 'ArrowDown' && vol>=0)
    {
        song.volume = song.volume - 0.01
    }
})


tiempo.value = 0;
setTimeout(()=>{
    tiempo.setAttribute('max', song.duration)
}, 500)
tiempo.addEventListener('change', ()=>{
    song.currentTime = tiempo.value
})
song.addEventListener('ended', ()=>{
    if(num_pista == songs.length-1)
    {
        pausedSong()
    }
    else
    {
        tiempo.value = 0;
        if(num_pista < songs.length-1)
        {   
            num_pista++;
            playSong2(num_pista)
        }
    }
})


function playSong(){
    song.play();
    imagen.style.animationPlayState = 'running';
    icono.classList.remove('mdi-play-pause')
    icono.classList.remove('mdi-pause')
    icono.classList.add('mdi-play')
    progress = setInterval(()=>{
        tiempo.value = song.currentTime;
    },1000)
    estado = false;
}
function pausedSong(){
    song.pause();
    clearInterval(progress)
    imagen.style.animationPlayState = 'paused';
    icono.classList.remove('mdi-play')
    icono.classList.add('mdi-pause')
    estado = true;
}
function playSong2(indice){
    song.src = 'audio/'+songs[indice].pista;
    imagen.src = 'img/'+songs[indice].imagen;
    setTimeout(()=>{
        progress_bar.max = cancion.duration
    },500)
    playSong();
    song.play();
    imagen.style.animationPlayState = 'running';
    icono.classList.remove('mdi-play-pause')
    icono.classList.remove('mdi-pause')
    icono.classList.add('mdi-play')
}


let start = true;
let num_random = Math.round(Math.random()*(songs.length-1));
randomBTN.addEventListener('click',()=>{
    if (num_random != 0 && start){
        icono2.classList.remove('mdi-shuffle-variant')
        icono2.classList.add('mdi-shuffle-disabled')
        playSong2(num_random)
        aleatorio(num_random)
        start = false;
    }
    else {
        icono2.classList.remove('mdi-shuffle-disabled')
        icono2.classList.add('mdi-shuffle-variant')
        playSong2(0)
        start = true;
    }
})
setInterval(()=>{
    num_random = Math.round(Math.random()*(songs.length-1))
}, 1000);
function aleatorio(){
    previousBTN.addEventListener('click',()=>{
        if(num_random > 0)
        {
         num_random--;
         playSong2(num_random)
        }
    })
    nextBTN.addEventListener('click',()=>{
        if(num_random < songs.length-1)
        {
         num_random++;
         playSong2(num_random)
        }
    })
}


let list_songs = document.getElementById('list_songs')
function generarLista(songs){
    list_songs.innerHTML = '';
    for(let item of songs)
    {
        list_songs.insertAdjacentHTML('beforeend',`
        <article class="list-item" id="${item.id}">
            <img src="img/${item.imagen}">
            <div class="data">
                <div><span>${item.titulo}</span> - <span>${item.artista}</span></div>                
            </div>
        </article>
        `)
    }
}
generarLista(songs)
list_songs.addEventListener('click',(event)=>{
    if(event.target.matches('.list-item img'))
    {
        playSong2(event.target.parentNode.id)
        num_pista = event.target.parentNode.id
    }
    else if(event.target.matches('.data'))
    {
        playSong2(event.target.parentNode.id)
        num_pista = event.target.parentNode.id
    }
    else if(event.target.matches('.data div'))
    {
        playSong2(event.target.parentNode.parentNode.id)
        num_pista = event.target.parentNode.parentNode.id
    }
    else if(event.target.matches('.data div span')){
        playSong2(event.target.parentNode.parentNode.parentNode.id)
        num_pista = event.target.parentNode.parentNode.parentNode.id
    }
    else if(event.target.matches('.list-item')){
        playSong2(event.target.id)
        num_pista = event.target.id
    }
   
})

let filter_genere = document.getElementById('filter-genere')
filter_genere.addEventListener('change',(event)=>{
    
    if(filter_genere.value === 'all')
    {
        generarLista(songs)
    }
    else{
        let filtrado = songs.filter(el => el.genero === filter_genere.value)
        generarLista(filtrado)
    }
})

let filter_title = document.getElementById('input.search')
filter_title.addEventListener('keyup',()=>{
    if(filter_title.value!='')
    {
        let fil = songs.filter(elemento=>elemento.titulo.toLowerCase().includes(filter_title.value.toLowerCase()))
        generarLista(fil)
    }
    else{
        generarLista(songs)
    }
})