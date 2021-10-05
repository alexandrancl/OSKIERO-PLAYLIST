const playpauseBTN = document.getElementById('play-boton')
const stopBTN = document.getElementById('stop-boton')
const previousBTN = document.getElementById('previous-boton')
const nextBTN = document.getElementById('next-boton')
const randomBTN = document.getElementById('random-boton')
const imagen = document.getElementById('imagen')
const song = document.getElementById('audio')
const icono = document.getElementById('icono')
const icono2 = document.getElementById('icono2')
const volumen = document.getElementById('volume-control')
const tiempo = document.getElementById('tiempo-control')

const songs = [
    {
        id: 0,
        genero: 'reggaeton',
        title: 'Ahora me llama',
        audio: 'audio/Ahora me llama',
        cover: 'img/unstoppable.JPG',
        artist: 'Karol G ft. Bad Bunny'
    },
    {
        id: 1,
        genero: 'pop',
        title: 'Cuando nadie ve',
        audio: 'audio/Cuando nadie ve',
        cover: 'img/cuando_nadie_ve.JPG',
        artist: 'Morat'
    },
    {
        id: 2,
        genero: 'reggaeton',
        title: 'Dákiti',
        audio: 'audio/Dákiti',
        cover: 'img/el_último_tour.JPG',
        artist: 'Bad Bunny ft. Jhay Cortez'
    },
    {
        id: 3,
        genero: 'reggaeton',
        title: 'Es un secreto',
        audio: 'audio/Es un secreto',
        cover: 'img/house_of_pleasure.JPG',
        artist: 'Plan B'
    },
    {
        id: 4,
        genero: 'pop',
        title: 'Hips don´t lie',
        audio: 'audio/Hips don´t lie',
        cover: 'img/hips_dont_lie.JPG',
        artist: 'Shakira'
    },
    
    {
        id: 5,
        genero: 'reggaeton',
        title: 'Llamado de emergencia',
        audio: 'audio/Llamado de emergencia',
        cover: 'img/talento_de_barrio.JPG',
        artist: 'Daddy Yankee'
    },
    {
        id: 6,
        genero: 'reggaeton',
        title: 'Mala Influencia',
        audio: 'audio/Mala Influencia',
        cover: 'img/mala_influencia.JPG',
        artist: 'Noriel, Manuel Turizo'
    },
    {
        id: 7,
        genero: 'pop',
        title: 'Nunca te olvide',
        audio: 'audio/Nunca te olvide',
        cover: 'img/nunca_te_olvide.JPG',
        artist: 'Morat'
    },
    {
        id: 8,
        genero: 'reggaeton',
        title: 'Perreo en la luna',
        audio: 'audio/Perreo en la luna',
        cover: 'img/the_academy.JPG',
        artist: 'Rich Music LTD, Sech, Dalex ft. Justin Quiles, Lenny Tavárez, Feid'
    },
    {
        id: 9,
        genero: 'pop',
        title: 'Promiscuous',
        audio: 'audio/Promiscuous',
        cover: 'img/promiscuous.JPG',
        artist: 'Nelly Furtado'
    },
    {
        id: 10,
        genero: 'reggaeton',
        title: 'Sin contrato',
        audio: 'audio/Sin contrato',
        cover: 'img/pretty_boy_dirty_boy.JPG',
        artist: 'Maluma'
    },
    {
        id: 11,
        genero: 'pop',
        title: 'Thong song',
        audio: 'audio/Thong song',
        cover: 'img/thong_song.JPG',
        artist: 'Sisqo'
    },
    {
        id: 12,
        genero: 'pop',
        title: 'Total eclipse of the heart (Cover)',
        audio: 'audio/Total eclipse of the heart',
        cover: 'img/total.JPG',
        artist: 'Glee cast'
    },
    {
        id: 13,
        genero: 'pop',
        title: 'Worth it',
        audio: 'audio/Worth it',
        cover: 'img/worth_it.JPG',
        artist: 'Fifth Harmony ft. Kid Ink'
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
document.addEventListener('keypress',(xd)=>{
    if(xd.code === 'Space' && estado)
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