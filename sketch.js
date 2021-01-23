var canvas;
var title;
var button;
var bgChanger1, bgChanger2, bgChanger3, bgChanger4;
var disco1, disco2;

function setup(){
  
  createCanvas(600,400);


  button = createButton("hello2");
  button.position(400, 200);

  bgChanger1 = createButton("red");
  bgChanger1.position(400, 300);

  bgChanger2 = createButton("aqua");
  bgChanger2.position(100, 300);

  bgChanger3 = createButton("cyan");
  bgChanger3.position(300, 100);

  bgChanger4 = createButton("sky blue");
  bgChanger4.position(100, 100);

  disco1 = createButton("disco");
  disco1.position(300,200);

  disco2 = createButton("disco");
    disco2.position(300, 210);
    disco2.hide();



  background(255, 125, 77);

  hideDetails();
  changeBg();
  disco();
}


function draw(){

}

function hideDetails()
{
  button.mousePressed(()=>{
    text("button testing hello :)", 200, 200);
    title.hide();
    button.hide();
  });  

  
}

function changeBg()
{
  bgChanger1.mousePressed(()=>{
    background(255,0,0);
  }); 

  bgChanger2.mousePressed(()=>{
    background(127,255,212);
  });

  bgChanger3.mousePressed(()=>{
    background(224,255,255);
  });

  bgChanger4.mousePressed(()=>{
    background(131, 201, 228);
  }); 

}

function disco()
{

  disco1.mousePressed(()=>{
    disco1.hide();
    text("epilepsy warning...", 300, 180);
    disco2.show();

  });


  disco2.mousePressed(()=>{
    var r = Math.round(random(1,8));
    switch(r)
    {
      case 1 :  {background("red");
       break
      }
      case 2 :  {background("blue");
        break
       }
       case 3 :  {background("yellow");
        break
       }
       case 4 :  {background("purple");
        break
       }
       case 5 :  {background("black");
        break
       }
       case 6 :  {background("white");
        break
       }
       case 7 :  {background(64, 224, 208);
        break
       }
       case 8 :  {background("orange");
        break
       }

    }


  });
}