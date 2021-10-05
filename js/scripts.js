const list_container = document.getElementById("list-container");
const audio = document.getElementById("audio")
const favs = [
    {
        id: 1,
        title: "A tu merced",
        audio: "audio/A tu merced",
        cover: "img/YHLQMDLG.JPG",
        artist: "Bad Bunny"
    },
    {
        id: 2,
        title: "Ahora me llama",
        audio: "audio/Ahora me llama",
        cover: "img/unstoppable.JPG",
        artist: "Karol G"
    },
    {
        id: 3,
        title: "Ajena",
        audio: "audio/Ajena",
        cover: "img/ajena.JPG",
        artist: "Myke Towers"
    },
    {
        id: 4,
        title: "Amorfoda",
        audio: "audio/Amorfoda",
        cover: "img/amorfoda.JPG",
        artist: "Bad Bunny"
    },
    {
        id: 5,
        title: "Asesina",
        audio: "audio/Asesina",
        cover: "img/asesina.JPG",
        artist: "Brytiago"
    },
    
    {
        id: 6,
        title: "Candy",
        audio: "audio/Candy",
        cover: "img/love_and_sex.JPG",
        artist: "Plan B"
    },
    {
        id: 7,
        title: "Dákiti",
        audio: "audio/Dákiti",
        cover: "img/el_último_tour.JPG",
        artist: "Bad Bunny"
    },
    {
        id: 8,
        title: "Downtown",
        audio: "audio/Downtown",
        cover: "img/downtown.JPG",
        artist: "J Balvin"
    },
    {
        id: 9,
        title: "Dream Girl (Remix)",
        audio: "audio/Dream Girl",
        cover: "img/dream girl.JPG",
        artist: "ir Sairs"
    },
    {
        id: 10,
        title: "Es un secreto",
        audio: "audio/Es un secreto",
        cover: "img/house_of_pleasure.JPG",
        artist: "Plan B"
    },
    {
        id: 11,
        title: "Fanática sensual",
        audio: "audio/Fanática Sensual",
        cover: "img/love_and_sex.JPG",
        artist: "Plan B"
    },
    {
        id: 12,
        title: "Feel me",
        audio: "audio/Feel me",
        cover: "img/the_academy.JPG",
        artist: "Karol G"
    },
    {
        id: 13,
        title: "Girl",
        audio: "audio/Girl",
        cover: "img/easy_money_baby.JPG",
        artist: "Myke Towers"
    },
    {
        id: 14,
        title: "Hola (Remix)",
        audio: "audio/hola",
        cover: "img/hola.JPG",
        artist: "Dalex"
    },
    {
        id: 15,
        title: "Ignorantes",
        audio: "audio/Ignorantes",
        cover: "img/YHLQMDLG.JPG",
        artist: "Bad Bunny"
    },
    
    {
        id: 16,
        title: "Imagínate",
        audio: "audio/Imagínate",
        cover: "img/the_academy.JPG",
        artist: "Rich Music LTD"
    },
    {
        id: 17,
        title: "La forma en que me miras",
        audio: "audio/La forma en que me miras",
        cover: "img/la_forma_en_que_me_miras.JPG",
        artist: "Super Yei"
    },
    {
        id: 18,
        title: "Llamado de emergencia",
        audio: "audio/Llamado de emergencia",
        cover: "img/talento_de_barrio.JPG",
        artist: "J Balvin"
    },
    {
        id: 19,
        title: "Loca",
        audio: "audio/Loca",
        cover: "img/loca.JPG",
        artist: "Khea"
    },
    {
        id: 20,
        title: "Mala Influencia",
        audio: "audio/Mala Influencia",
        cover: "img/mala_influencia.JPG",
        artist: "Moriel"
    },
    {
        id: 21,
        title: "Mangú",
        audio: "audio/Mangú",
        cover: "img/mangú.JPG",
        artist: "Becky G"
    },
    {
        id: 22,
        title: "Mayores",
        audio: "audio/Mayores",
        cover: "img/mala_santa.JPG",
        artist: "Becky G"
    },
    {
        id: 23,
        title: "Me rehúso",
        audio: "audio/Me rehúso",
        cover: "img/me_rehúso.JPG",
        artist: "Danny Ocean"
    },
    {
        id: 24,
        title: "Mi gente",
        audio: "audio/Mi gente",
        cover: "img/vibras.JPG",
        artist: "J Balvin"
    },
    {
        id: 25,
        title: "Nada",
        audio: "audio/Nada",
        cover: "img/error_93.JPG",
        artist: "Cazzu"
    },
    {
        id: 26,
        title: "No me conoce (Remix)",
        audio: "audio/No me conoce",
        cover: "img/famouz.JPG",
        artist: "Jhay Cortez"
    },
    {
        id: 27,
        title: "Otro trago",
        audio: "audio/Otro trago",
        cover: "img/sueños.JPG",
        artist: "Sech"
    },
    {
        id: 28,
        title: "Perreo en la luna",
        audio: "audio/Perreo en la luna",
        cover: "imgthe_academy.JPG",
        artist: "Rich Music LTD"
    },
    {
        id: 29,
        title: "Quizás",
        audio: "audio/Quizás",
        cover: "img/the_academy.JPG",
        artist: "Rich Music LTD"
    },
    {
        id: 30,
        title: "Relación",
        audio: "audio/Relación",
        cover: "img/1_of_1.JPG",
        artist: "Sech"
    },
    {
        id: 31,
        title: "Safaera",
        audio: "audio/Safaera",
        cover: "img/YHLQMDLG.JPG",
        artist: "Bad Bunny"
    },
    {
        id: 32,
        title: "Safari",
        audio: "audio/Safari",
        cover: "img/energía_lado_b.JPG",
        artist: "J Balvin"
    },
    {
        id: 33,
        title: "Si no le contesto",
        audio: "audio/Si no le contesto",
        cover: "img/house_of_pleasure.JPG",
        artist: "Plan B"
    },
    {
        id: 34,
        title: "Si se da",
        audio: "audio/Si se da",
        cover: "img/easy_money_baby.JPG",
        artist: "Myke Towers"
    },
    {
        id: 35,
        title: "Sin contrato",
        audio: "audio/Sin contrato",
        cover: "img/pretty_boy_dirty_boy.JPG",
        artist: "Maluma"
    },
    
    {
        id: 36,
        title: "Sola",
        audio: "audio/Sola",
        cover: "img/sola.JPG",
        artist: "Becky G"
    },
    {
        id: 37,
        title: "Soltera (Remix)",
        audio: "audio/Soltera",
        cover: "img/épico.JPG",
        artist: "Lunay"
    },
    {
        id: 38,
        title: "Te boté (Remix)",
        audio: "audio/Te boté",
        cover: "img/te_bote_remix.JPG",
        artist: "Casper"
    },
    {
        id: 39,
        title: "Todo cambio",
        audio: "audio/Todo cambio",
        cover: "img/todo_cambio.JPG",
        artist: "Becky G"
    },
    {
        id: 40,
        title: "Vete",
        audio: "audio/Vete",
        cover: "img/YHLQMDLG.JPG",
        artist: "Bad Bunny"
    },
]