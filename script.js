const arr_countries = [];
const results = document.querySelector("#results");
const my_tbody1 = document.querySelector("#my_tbody1");

// function get_from_api(from_search) {
//   if (from_search) {
//     from_search = "name/" + from_search;
//   } else {
//     from_search = "all";
//   }
//   fetch("https://restcountries.com/v3.1/" + from_search)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   for (let i = 0; i < data.length; i++) {
//     myJson = { name: input[i] };
//     list.push(myJson);
//   }

//   console.log(data);
// }
function get_from_api_search() {
  let from_search = document.querySelector("#search").value;
  // event.preventdefault();
  get_from_api(from_search);
  console.log(from_search);
}

async function get_from_api(from_search) {
  let search = "all";
  if (from_search) {
    search = "name/" + from_search;
  }

  try {
    const response = await fetch("https://restcountries.com/v3.1/" + search);
    const countries = await response.json();
    calculation_statistics(countries);
    console.log(countries.length);
  } catch (error) {
    alert("fail to conect");
  }
}

function calculation_statistics(countries) {
  let my_obj;

  let num_of_countries = countries.length;
  let population = 0;

  // let region;
  for (let i = 0; i < countries.length; i++) {
    my_obj = {
      name: countries[i].name.official,
      num_of_citizens: countries[i].population,
      region: countries[i].region,
    };

    my_tbody1.innerHTML += `
            <tr>
              <th scope="row">${i + 1}</th>
              <td>${countries[i].name}</td>
              <td>${ountries[i].population}</td>
            </tr>
    `;

    arr_countries.push(my_obj);

    population += countries[i].population;
  }
  console.log(population);
  console.log(population / num_of_countries);
  console.log(arr_countries);
  to_dom(arr_countries, population, num_of_countries, my);
}

function to_dom(arr_countries, population, num_of_countries) {
  results.innerHTML = `

  Total countries result: ${num_of_countries}
  </br>

  num_of_countries: ${population}
  </br>

  Average Population: ${population / num_of_countries}
  </br>
  
  
  

  
  `;
}
