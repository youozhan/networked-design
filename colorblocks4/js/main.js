function initDots() {

    var num = numCalc();

    for (var i = 0; i < num; i++) {

        var dot_id = "dot" + (i+1).toString()

        $('.wrapper').append($('<div></div>')
            .attr({ id : dot_id })
            .addClass("dots")
        );
        
        bindColorChangeListener(dot_id);
    }

    //Initialze color
    setTimeout(function() {
        $('.dots').each(function() {
            $(this).css("background-color", '#' + '000000');
        })
    }, 500)
}

function bindColorChangeListener(dot_id) {

    var theDot = $('#' + dot_id);

    db.ref(dot_id + "_color").on("value", function(snapshot) {
        theDot.css("background-color", '#' + snapshot.val());
        console.log('#' + dot_id + ':#' + snapshot.val())
    });
}


function initPressureJS() {
    // Define press event
    var block = {
        start: function(event){
            // this is called on force start
        },
        end: function(){        
            
        },
        change: function(force, event){
            db.ref(event.currentTarget.id + "_color").set(tinycolor.fromRatio({ 
                r: force, 
                g: force, 
                b: force
            }).toHex());
        },
        unsupported: function(){
            console.log('3D touch not supported on this browser');
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

    $('.dots').pressure(block);
}

function numCalc() {
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    console.log(`${vw} and ${vh}`);
    console.log(Math.floor(vw/80) * Math.floor(vh/80));
    return Math.floor(vw/80) * Math.floor(vh/80);

    // return 10;
}
