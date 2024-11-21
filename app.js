


const userList = document.querySelector('#userList');

fetch('https://jsonplaceholder.typicode.com/users')

.then(res => {
    if (!res.ok) {
        throw new Error('ошибка сети')
    }
    return res.json();
})

.then(data => {
    data.forEach(user => {
    const userDiv = document.createElement('div');

    userDiv.innerHTML = `
    <div class="shadow-xl bg-white w-[320px] py-[40px] px-[20px] mt-[20px] ml-[40px] rounded-[30px] hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <h1 class="hover:text-white">${user.id}</h1>
    <h2 class="hover:text-white">${user.name}</h2>
    <h2 class="hover:text-white">${user.email}</h2>
    <h2 class="hover:text-white">${user.username}</h2>
    <h3 class="hover:text-white">${user.address.city}</h3>
    <h2 class="hover:text-white">${user.address.street}</h2>
    <h2 class="hover:text-white">${user.address.suite}</h2>
    <h2 class="hover:text-white">${user.address.zipcode}</h2>
    <h2 class="hover:text-white">${user.address.geo.lat}</h2>
    <h2 class="hover:text-white">${user.address.geo.lng}</h2>
    <h2 class="hover:text-white">${user.phone}</h2>
    <h2 class="hover:text-white">${user.website}</h2>
    <h2 class="hover:text-white">${user.company.name}</h2>
    <h2 class="hover:text-white">${user.company.catchPhrase}</h2>
    <h2 class="hover:text-white">${user.company.bs}</h2>
    </div>
    ` 
    
    userList.appendChild(userDiv);
    });
    console.log(data);
    
})
