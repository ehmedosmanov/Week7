const place = document.querySelector('.place')

//LocalStorae
// localStorage.setItem('ad','ehmed')
// localStorage.setItem('soyad','osmanov')
// localStorage.setItem('yas','13')

// let name = localStorage.getItem('ad')
// let surname = localStorage.getItem('soyad')

// console.log(localStorage.length);
// console.log(localStorage.key(0));
// localStorage.clear()
// console.log(name,surname);

//SessionStorage
// sessionStorage.setItem('ad','axmed')
// sessionStorage.setItem('number','111')
// sessionStorage.setItem('as','1121')

// console.log(name);

// let files = document.getElementById('file')

// files.addEventListener('change', e => {
//     let file = e.target.files

//     for (let i = 0; i < file.length; i++) {
//         console.log(file[i]);
        
//     }
// })

// localStorage.setItem('name','ehmed')
// localStorage.setItem('surname','osmanov')
// localStorage.setItem('username','axhmed')
// localStorage.setItem('password','ehmed123')

// let name =  localStorage.getItem('name')
// let surname =  localStorage.getItem('surname')
// let username =  localStorage.getItem('username')
// let password =  localStorage.getItem('password')
// place.innerHTML = `${name} ${surname} ${username} ${password}`
const obj = {
    name: 'ehmed',
    surname: 'osmanov',
    username: 'axmed'
}

localStorage.setItem('obj', JSON.stringify(obj))

const localObj = localStorage.getItem("obj")
const tokenObject  = JSON.parse(localObj)

console.log(tokenObject);

for (const key in tokenObject) {
    console.log(tokenObject[key]);
    place.append(tokenObject[key])
}

//  place.innerHTML = `${tokenObject.name} ${tokenObject.surname} ${tokenObject.username}`
