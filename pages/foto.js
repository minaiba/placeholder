
const ist = document.querySelector("#ist");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => {
    if (!res.ok) {
      throw new Error("Сетьте ката чыкты");
    }
    return res.json(); 
  })
  .then((data) => {
    const slicedFotos = data.slice(0, 48); 

    slicedFotos.forEach((foto) => {
      const fotoDiv = document.createElement("div");

      fotoDiv.innerHTML = `
    <div class="shadow-xl bg-white w-[320px] py-[40px] px-[20px] mt-[20px] ml-[40px] rounded-[30px] hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <h1>${foto.albumId}</h1>
    <h2>${foto.id}</h2>
    <img src="${foto.url}">
    <img src="${foto.thumbnailUrl}">

    </div>
      `;
      ist.appendChild(fotoDiv);
    });
    console.log(slicedFotos);  
  })
  .catch((error) => {
    console.error("Каталык чыкты:", error);
  });