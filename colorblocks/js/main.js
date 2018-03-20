// Pressure v2.1.1 | Created By Stuart Yamartino | MIT License | 2015 - 2017
// Reference: https://github.com/stuyam/pressure/blob/master/examples/example.js

var block = {
    start: function(event){
        // this is called on force start
        this.style.backgroundColor = '#0471A6';
    },
    end: function(){        
        var clickedCell = this;

        // this is called on force end
        setTimeout(function() {
            clickedCell.style.backgroundColor = '#3685B5';
        }, 500);

        $('#logBox').html('No button pressed');
    },
    change: function(force, event){
        $('#logBox').html(force);
    },
    unsupported: function(){
        $('#logBox').html('3D touch not supported on this browser');
    },
    startDeepPress: function(event){
        console.log('start deep press', event);
        this.style.backgroundColor = '#014566';
      },
    endDeepPress: function(){
        console.log('end deep press');
        this.style.backgroundColor = '#0471A6';
      }
};

$.pressureConfig({
    polyfill: false
});

$('td').pressure(block);