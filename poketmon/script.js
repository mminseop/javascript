
const contentsDiv = document.querySelector('.pkmContainer .contents');
const drawBtn = document.querySelector('.pkmContainer .btnWrap .drawBtn');
const btnWrap = document.querySelector('.pkmContainer .btnWrap');

let isCurrent = null;

drawBtn.addEventListener('click', () => {
    const randomNum = Math.trunc(Math.random() * 1000) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        isCurrent = data;
        getPoketmon(data);
        updateBtn();
    })
})

function getPoketmon(data) {
    const name = data.name;
    const img = data.sprites.front_default;
    contentsDiv.innerHTML = `
        <img src='${img}' alt='${name}'>
        <h2>${name}</h2>
    `;
}

function updateBtn() {
    drawBtn.textContent = '다시뽑기';
    evolveBtn = document.querySelector('.evolveBtn');

    if (!evolveBtn) {
        const evolveBtn = document.createElement('button');
        evolveBtn.textContent = '진화';
        evolveBtn.classList.add('evolveBtn');
        btnWrap.appendChild(evolveBtn);
        evolveBtn.addEventListener('click', evolution(id));
    }
}

function evolution(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
}
// drawBtn.addEventListener('click', () => {
//     const randomNum = Math.floor(Math.random() * 1000) + 1;

//     fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
//         .then(response => response.json())
//         .then(data => {
//             currentPokemon = data;
//             renderPokemon(data);
//             updateButtons();
//         });
// });

// function renderPokemon(data) {
//     const name = data.name;
//     const img = data.sprites.front_default || '';
    
//     contentsDiv.innerHTML = `
//         <img src="${img}" alt="${name}" style="max-width: 200px;" />
//         <h2>${capitalize(name)}</h2>
//     `;
// }

// function updateButtons() {
//     drawBtn.textContent = "다시 뽑기";

//     // 진화 버튼이 없을 때만 추가
//     if (!btnWrap.querySelector('.evolveBtn')) {
//         const evolveBtn = document.createElement('button');
//         evolveBtn.textContent = '진화';
//         evolveBtn.classList.add('evolveBtn');
//         btnWrap.appendChild(evolveBtn);

//         evolveBtn.addEventListener('click', handleEvolution);
//     }
// }

// function handleEvolution() {
//     if (!currentPokemon) return;

//     // 진화 정보 불러오기
//     fetch(currentPokemon.species.url)
//         .then(res => res.json())
//         .then(speciesData => {
//             return fetch(speciesData.evolution_chain.url);
//         })
//         .then(res => res.json())
//         .then(evoData => {
//             const chain = evoData.chain;
//             const currentName = currentPokemon.name;

//             // 진화 단계를 찾아서 다음 단계 찾기
//             let nextName = findNextEvolution(chain, currentName);
//             if (nextName) {
//                 return fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`);
//             } else {
//                 alert("더 이상 진화할 수 없어요!");
//                 return null;
//             }
//         })
//         .then(res => res && res.json())
//         .then(newData => {
//             if (newData) {
//                 currentPokemon = newData;
//                 renderPokemon(newData);
//             }
//         });
// }

// function findNextEvolution(chain, currentName) {
//     if (chain.species.name === currentName && chain.evolves_to.length > 0) {
//         return chain.evolves_to[0].species.name;
//     }

//     for (let evo of chain.evolves_to) {
//         const result = findNextEvolution(evo, currentName);
//         if (result) return result;
//     }

//     return null;
// }

// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
