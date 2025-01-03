const uList = document.querySelector('#uList');

fetch('https://jsonplaceholder.typicode.com/todos')

.then(resuon => {
    if (!resuon.ok) {
        throw new Error('ошибка сети')
    }
    return resuon.json();
})

.then(dat => {
    dat.forEach(user => {
    const userDiv = document.createElement('div');

    userDiv.innerHTML = `
    <a href='./users/details/todos.html?id=${user.id}'>
    <div class="shadow-xl w-[320px] bg-white py-[40px] px-[20px] mt-[20px] ml-[40px] hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-[12px]">
    <h1 class="hover:text-white">${user.userId}</h1>
    <h2 class="hover:text-white">${user.id}</h2>
    <h2 class="hover:text-white">${user.title}</h2>
    <h2 class="hover:text-white">${user.completed}</h2>
    </div>
    </a>
    ` 
    
    uList.appendChild(userDiv);
    });
    console.log(dat);
    
})
