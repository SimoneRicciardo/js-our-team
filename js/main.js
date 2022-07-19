const membriTeam = [

    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },

    
    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto': 'angela-caroll-chief-editor.jpg'
    },
    
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': 'walter-gordon-office-manager.jpg'
    },
    
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'angela-lopez-social-media-manager.jpg'
    },
    
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': 'scott-estrada-developer.jpg'
    },
    
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'barbara-ramos-graphic-designer.jpg'
    }
    
];

const nomeComponentiTeam = [];

let nameUser = document.getElementsByClassName('name');
for (let i = 0; i < membriTeam.length; i++){
    const nomeuser = membriTeam[i].nome;
    console.log(nomeuser);
    nomeComponentiTeam.push(nomeuser);
    nameUser[i].innerHTML = nomeuser;
}

console.log(nomeComponentiTeam);


const ruoloComponentiTeam = [];

let roleUser = document.getElementsByClassName('role');
for (let i = 0; i < membriTeam.length; i++){
    const ruolouser = membriTeam[i].ruolo;
    console.log(ruolouser);
    ruoloComponentiTeam.push(ruolouser);
    roleUser[i].innerHTML = ruolouser;
}

console.log(ruoloComponentiTeam);


const fotoComponentiTeam = [];

let photoUser = document.getElementsByClassName('photo');
for (let i = 0; i < membriTeam.length; i++){
    const fotouser = membriTeam[i].foto;
    console.log(fotouser);
    fotoComponentiTeam.push(fotouser);
    photoUser[i].innerHTML = `<img class='card-img-top' src='./img/${membriTeam.foto}' alt='foto utente' />`;
}

console.log(fotoComponentiTeam);
