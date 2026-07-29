const fetchData = async() =>{
    const res = await fetch("http://localhost:8000/users");

    const response = await res.json();

   renderData(response)
}

function renderData(data){
    const parent = document.getElementById("container");

    data.forEach((el, i) => {
            const childDiv = document.createElement("div");
            childDiv.style.border="1px solid green";

            const name = document.createElement("p");
            name.innerText=`Name:- ${el.name}`;

            const uni = document.createElement("p");
            uni.innerText=`University:- ${el.uni}`;

            childDiv.append(name, uni);
            parent.append(childDiv)
    });
}

fetchData();