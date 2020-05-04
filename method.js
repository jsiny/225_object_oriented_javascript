var greeter = {
  morning: function() {
    console.log('Good morning!');
  },
};

function evening() {
  console.log('Good evening');
}

// Method invocation
greeter.morning();

// Function invocation
evening();

var functionGreeter = greeter.morning;

// Function invocation
functionGreeter();