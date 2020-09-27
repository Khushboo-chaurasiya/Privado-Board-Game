var body = document.getElementById("outerBox"), // Get the canvas element by Id
        canvas = document.createElement("canvas"),
        ctx = canvas.getContext('2d'), // Canvas 2d rendering context
        x = Math.random()*500, //intial horizontal & verticle position of draw First Blue rectangle
        y = Math.random()*500, 
        width = 100, //width & height of the drawn rectangle
        height = 100; 
        canvas.height = 600; //intial horizontal & verticle position of drawn Bigger rectangle
        canvas.width = 600;

        var x2, y2; //intial horizontal & verticle position of drawn Second Green rectangle

        let overLap = true;
        while(overLap){
            x2 = Math.random()*500 ; 
            y2 = Math.random()*500;
            if(Math.abs(x-x2) > 100 || Math.abs(y-y2) > 100){
                overLap = false;
            }
        }

//Draw Box1 Rectangle function		
function drawRectBox1(x,y,width,height,color) {
    ctx.fillStyle = color; // Fill color of rectangle drawn 
    ctx.fillRect(x, y, width, height); //This will draw a rectangle of 100x100
    body.appendChild(canvas);

    // listener, using W3C style for example 
    canvas.addEventListener('click', function(e) {
        var clickX = e.offsetX;
        var clickY = e.offsetY;
        
        if((clickX >= x && clickX < x+100) && (clickY >= y && clickY < y+100)){
            //move First Box rectangle inside the canvas using arrow keys
            boxArrow1();
        } else{
            window.onkeydown = null;
        }
        
    });
}

/* On Arrow key for First Blue Box */
function boxArrow1(){
    window.onkeydown = function(event){
        var keyPr = event.keyCode; 
    
        if(keyPr === 39 && x<499){ 
            if(x+101 < x2 || y>y2+100 || y+100<y2 || x>x2+100)
            x = x+1; //right arrow add 1 from current
        }
        else if(keyPr === 37 && x>1){
            if(x+99 < x2 || y>y2+100 || y+100<y2 || x-1>x2+100)
            x = x-1; //left arrow subtract 1 from current
        }
        else if(keyPr === 38 && y>1) {
            if(x+100 < x2 || y-1>y2+100 || y+99<y2 || x>x2+100)
            y = y-1; //top arrow subtract 1 from current
        }
        else if(keyPr === 40 && y<499){
            if(x+100 < x2 || y+1>y2+100 || y+101<y2 || x>x2+100)
            y = y+1; //bottom arrow add 1 from current
        }
            
        /*clearing anything drawn on canvas
        *comment this below do draw path */
        ctx.clearRect(0,0, 600, 600);
    
        //Drawing rectangle at new position
        drawRectBox1(x,y,width,height, "blue");
        drawRectBox2(x2,y2,width,height, "green");
    };
}

//Draw Box2 Green Rectangle function		
function drawRectBox2(x,y,width,height,color) {
    ctx.fillStyle = color; // Fill color of rectangle drawn 
    ctx.fillRect(x, y, width, height); //This will draw a rectangle of 100x100
    body.appendChild(canvas);

    // listener, using W3C style for example 
    canvas.addEventListener('click', function(e) {
        var clickX = e.offsetX;
        var clickY = e.offsetY;
        if((clickX >= x && clickX < x+100) && (clickY >= y && clickY < y+100)){
            boxArrow2();
        }
        
    });
}
/* On Arrow key for second Green box */
function boxArrow2(){
    window.onkeydown = function(event){
        var keyPr = event.keyCode; 
    
        if(keyPr === 39 && x2<499){ 
            if(x2+101 < x || y2>y+100 || y2+100<y || x2+1>x+100)
            x2 = x2+1; //right arrow add 1 from current
        }
        else if(keyPr === 37 && x2>1){
            if(x2+99 < x || y2>y+100 || y2+100<y || x2-1>x+100)
            x2 = x2-1; //left arrow subtract 1 from current
        }
        else if(keyPr === 38 && y2>1) {
            if(x2+100 < x || y2-1>y+100 || y2+99<y || x2>x+100)
            y2 = y2-1; //top arrow subtract 1 from current
        }
        else if(keyPr === 40 && y2<499){
            if(x2+100 < x || y2+1>y+100 || y2+101<y || x2>x+100)
            y2 = y2+1; //bottom arrow add 1 from current
        }
            
        /*clearing anything drawn on canvas
        *comment this below do draw path */
        ctx.clearRect(0,0, 600, 600);
    
        //Drawing rectangle at new position
        drawRectBox1(x,y,width,height, "blue");
        drawRectBox2(x2,y2,width,height, "green");
    };
}

drawRectBox1(x,y,width,height,"blue"); //Drawing rectangle on initial load
drawRectBox2(x2,y2,width,height, "green");

