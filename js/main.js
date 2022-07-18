const membriTeam = [

    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': './img/wayne-barnett-founder-ceo.jpg'
    },

    
    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto': './img/angela-caroll-chief-editor.jpg'
    },
    
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': './img/walter-gordon-office-manager.jpg'
    },
    
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': './img/angela-lopez-social-media-manager.jpg'
    },
    
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': './img/scott-estrada-developer.jpg'
    },
    
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': './img/barbara-ramos-graphic-designer.jpg'
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





/*const ruoloComponentiTeam = [];

for (let i = 0; i < membriTeam.length; i++){
    const ruolouser = membriTeam[i].ruolo;
    console.log(ruolouser);
    ruoloComponentiTeam.push(ruolouser);
}

console.log(ruoloComponentiTeam);


const fotoComponentiTeam = [];

for (let i = 0; i < membriTeam.length; i++){
    const fotouser = membriTeam[i].foto;
    console.log(fotouser);
    fotoComponentiTeam.push(fotouser);
}

console.log(fotoComponentiTeam);*/

/*let nameUser = document.getElementById('name');

nameUser.innerHTML = nomeComponentiTeam;*/

/*let roleUser = document.getElementById('role');

roleUser.innerHTML = ruoloComponentiTeam;

let photoUser = document.getElementById('photo');

photoUser.innerHTML = fotoComponentiTeam;*/