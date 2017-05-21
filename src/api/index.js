/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

export const getData = () => {
  return new Promise((resolve, reject) => {

    const vehicles = new XMLHttpRequest();
    vehicles.open('GET', 'http://localhost:9988/api/vehicle/');

    vehicles.onreadystatechange = function() {
        if(vehicles.readyState === 4) {
         if(vehicles.status === 200) {
           resolve(JSON.parse(vehicles.responseText).vehicles);
           } else {
            reject(new Error(`Error loading all vehicles`));
           }
        }
    };

    vehicles.send();

  })
};

export const getInfo = (id = '') => {
  return new Promise((resolve, reject) => {

    const vehicles = new XMLHttpRequest();
    vehicles.open('GET', `http://localhost:9988/api/vehicle/${id}`);

    vehicles.onreadystatechange = function() {
        if(vehicles.readyState === 4) {
         if(vehicles.status === 200) {
           resolve(JSON.parse(vehicles.responseText));
           } else {
            reject(new Error(`Error loading ${id}`));
           }
        }
    };

    vehicles.send();

  })
};


