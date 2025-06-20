// 1. 강아지 정보 페이지 프로젝트 

let dogArr = [];
let dogCount = 1;

async function getDogs() {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random/42');
        if (!res.ok) {
            throw new Error('error');
        }
        const data = await res.json();
        // console.log(data.message);
        return data.message;
    } catch (error) {
        console.error(error);
    }
}

function renderDogs() {
    const mainContainer = document.querySelector('.mainContainer');
    dogArr.forEach((x) => {
        let div = document.createElement('div');
        div.className = 'dogItem';
        div.innerHTML = `
            <img src='${x}' alt='dog'>
            <div>${dogCount}</div>
        `;
        dogCount++;''
        mainContainer.appendChild(div);
    });
}

async function init() {
    const dogImages = await getDogs();
    const breeds = await getBreed();

    dogArr = [...dogImages];
    renderDogs();
    renderBreeds(breeds);  
}

async function getBreed() {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/list/all');
        if (!res.ok) {
            throw new Error('error');
        }
        const data = await res.json();
        console.log(data.message);
        return data.message;
    } catch (error) {
        console.error(error);
    }
}

function renderBreeds(breeds) {
    const dogSelect = document.querySelector('#dogSelect');
    
    for (const breed in breeds) {
        const option = document.createElement('option');
        option.value = breed;
        option.textContent = breed;
        dogSelect.appendChild(option);
    }
}

init();

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.searchBtn');
    const searchInput = document.querySelector('.searchInput');
    const mainContainer = document.querySelector('.mainContainer');
    const dogSelect = document.querySelector('#dogSelect');

    searchBtn.addEventListener('click', function () {
        mainContainer.innerHTML = '';
        dogCount = 1;

        let filterDogs = dogArr.filter((item) => {
            return item.indexOf(searchInput.value) !== -1;
        })

        searchInput.value = '';

        if (filterDogs.length !== 0) {
                filterDogs.forEach((x) => {
                let div = document.createElement('div');
                div.className = 'dogItem';
                div.innerHTML = `
                    <img src='${x}' alt='dog'>
                    <div>${dogCount}</div>
                `;
                dogCount++;''
                mainContainer.appendChild(div);
            })
        } else {
            let div = document.createElement('div');
            div.style.display = 'flex';
            div.style.justifyContent = 'center';
            div.style.width = '100%';
            div.style.fontSize = '2rem';
            div.innerHTML = `
                <div>검색걸과가 없습니다</div>
            `;
            mainContainer.appendChild(div);
        }
    })

    dogSelect.addEventListener('change', function () {
        mainContainer.innerHTML = '';
        dogCount = 1;

        let filterDogs = dogArr.filter((item) => {
            return item.indexOf(dogSelect.value) !== -1;
        })

        if (filterDogs.length !== 0) {
                filterDogs.forEach((x) => {
                let div = document.createElement('div');
                div.className = 'dogItem';
                div.innerHTML = `
                    <img src='${x}' alt='dog'>
                    <div>${dogCount}</div>
                `;
                dogCount++;''
                mainContainer.appendChild(div);
            })
        } else {
            let div = document.createElement('div');
            div.style.display = 'flex';
            div.style.justifyContent = 'center';
            div.style.width = '100%';
            div.style.fontSize = '2rem';
            div.innerHTML = `
                <div>검색걸과가 없습니다</div>
            `;
            mainContainer.appendChild(div);
        }
    })
});