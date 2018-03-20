//const say = require('say')
//say.speak('Cool', 'Ellen', 0.5)

var username = 'ccyz526';
var key = 'a33376607ad245188762757e903cedd4';
var feed = 'Awesome'

var mqtt = require('mqtt'),
  my_topic_name = username + '/feeds/' + feed;

var client = mqtt.connect('mqtts://io.adafruit.com',{
  port: 8883,
  username: username,
  password: key
});

client.on('connect', () => {
  client.subscribe(my_topic_name)
  console.log("yes");
});

// if an error occurs 
client.on('error', (error) => {
  console.log('MQTT Client Errored');
  console.log(error);
});

// when we get a new message / data
client.on('message',  (topic, message) => {
  console.log(message.toString() );
  console.log("Hello World");
});
