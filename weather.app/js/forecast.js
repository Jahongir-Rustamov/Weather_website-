const KEY = "96b947a45d33d7dc1c49af3203966408";

//getdata function
const getdata = async (city) => {
  let base = "https://api.openweathermap.org/data/2.5/weather";
  let qeury = `?q=${city}&units=metric&appid=${KEY}`;
  loader(true);
  let req = await fetch(base + qeury);
  let data = await req.json();
  loader(false);
  return data;
 
};

getdata("London")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Error!....');
  });
