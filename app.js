const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=9db05cab30149643209ef54a704c17a4&query=37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.current);

  if (error) {
    console.log("Unable to connect to weather service !");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        ". It is currently " +
        response.body.current.temperature +
        " degrees out . It feels like  " +
        response.body.current.feelslike +
        " degrees out ."
    );
  }
});

const geocodeUrl =
  "http://api.positionstack.com/v1/forward?access_key=de06c5ab2bf9c4125d81672caf8acb4e&query=1600 Pennsylvania Ave NW, Washington DC";

request({ url: geocodeUrl, json: true }, (error, response) => {
  // console.log(response.body.data[0].latitude)
  const longitude = response.body.data[0].longitude;
  const latitude = response.body.data[0].latitude;
  console.log(` longitude is ${longitude} and latitude is ${latitude}`);
});
