$(function() {
  if ($('div').is('.content__text')) {
    function WordShuffler(holder,opt) {
      var that = this;
      var time = 0;
      this.now;
      this.then = Date.now();
    
      this.delta;
      this.currentTimeOffset = 0;
    
      this.word = null;
      this.currentWord = null;
      this.currentCharacter = 0;
      this.currentWordLength = 0;
  
  
      var options = {
        fps : 20,
        timeOffset : 5,
        textColor : '#000',
        fontSize : '50px',
        useCanvas : false,
        mixCapital : false,
        mixSpecialCharacters : false,
        needUpdate : true,
        colors : [
          '#000'
        ]
      };
      let key;
      if(typeof opt != 'undefined') {
        for(key in opt) {
          options[key] = opt[key];
        }
      }
  
  
    
      this.needUpdate = true;
      this.fps = options.fps;
      this.interval = 1000/this.fps;
      this.timeOffset = options.timeOffset;
      this.textColor = options.textColor;
      this.fontSize = options.fontSize;
      this.mixCapital = options.mixCapital;
      this.mixSpecialCharacters = options.mixSpecialCharacters;
      this.colors = options.colors;
  
      this.useCanvas = options.useCanvas;
    
      this.chars = [
        'A','B','C','D',
        'E','F','G','H',
        'I','J','K','L',
        'M','N','O','P',
        'Q','R','S','T',
        'U','V','X',
        'Y','Z'
      ];
      this.specialCharacters = [
        '!','§','$','%',
        '&','/','(',')',
        '=','?','_','<',
        '>','^','°','*',
        '#','-',':',';','~'
      ];
  
      if(this.mixSpecialCharacters) {
        this.chars = this.chars.concat(this.specialCharacters);
      }
  
      this.getRandomColor = function() {
        var randNum = Math.floor( Math.random() * this.colors.length );
        return this.colors[randNum];
      };
  
      //if Canvas
   
      this.position = {
        x : 0,
        y : 50
      };
  
      //if DOM
      if(typeof holder != 'undefined') {
        this.holder = holder;
      }
  
      if(!this.useCanvas && typeof this.holder == 'undefined') {
        console.warn('Holder must be defined in DOM Mode. Use Canvas or define Holder');
      }
  
  
      this.getRandCharacter = function(characterToReplace) {    
        if(characterToReplace === ' ') {
          return ' ';
        }
        var randNum = Math.floor(Math.random() * this.chars.length);
        var lowChoice =  -0.5 + Math.random();
        var picketCharacter = this.chars[randNum];
        var choosen = picketCharacter.toLowerCase();
        if(this.mixCapital) {
          choosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
        }
        return choosen;
      
      };
  
      this.writeWord = function(word) {
        this.word = word;
        this.currentWord = word.split('');
        this.currentWordLength = this.currentWord.length;
  
      };
  
      this.generateSingleCharacter = function(color,character) {
        var span = document.createElement('span');
        span.style.color = color;
        span.innerHTML = character;
        return span;
      };
  
      this.updateCharacter = function(time) {
      
        this.now = Date.now();
        this.delta = this.now - this.then;
  
         
  
        if (this.delta > this.interval) {
          this.currentTimeOffset++;
        
          var word = [];
  
          if(this.currentTimeOffset === this.timeOffset && this.currentCharacter !== this.currentWordLength) {
            this.currentCharacter++;
            this.currentTimeOffset = 0;
          }
          for(var k=0;k<this.currentCharacter;k++) {
            word.push(this.currentWord[k]);
          }
  
          for(var i=0;i<this.currentWordLength - this.currentCharacter;i++) {
            word.push(this.getRandCharacter(this.currentWord[this.currentCharacter+i]));
          }
  
  
          if(that.useCanvas) {
            c.clearRect(0,0,stage.x * stage.dpr , stage.y * stage.dpr);
            c.font = that.fontSize + ' sans-serif';
            var spacing = 0;
            word.forEach(function(w,index) {
              if(index > that.currentCharacter) {
                c.fillStyle = that.getRandomColor();
              }else{
                c.fillStyle = that.textColor;
              }
              c.fillText(w, that.position.x + spacing, that.position.y);
              spacing += c.measureText(w).width;
            });
          }else{
  
            if(that.currentCharacter === that.currentWordLength) {
              that.needUpdate = false;
            }
            this.holder.innerHTML = '';
            word.forEach(function(w,index) {
              var color = null;
              if(index > that.currentCharacter) {
                color = that.getRandomColor();
              }else{
                color = that.textColor;
              }
              that.holder.appendChild(that.generateSingleCharacter(color, w));
            }); 
          }
          this.then = this.now - (this.delta % this.interval);
        }
      };
  
      this.restart = function() {
        this.currentCharacter = 0;
        this.needUpdate = true;
      };
    
      this.destroy = function() {
        this.currentCharacter = 0;
      };
  
      function update(time) {
        time++;
        if(that.needUpdate) {
          that.updateCharacter(time);
        }
        requestAnimationFrame(update);
      }
  
      this.writeWord(this.holder.innerHTML);
  
  
      update(time);
    }

    var shuffler1Top = document.getElementById('content__text__1-top');
    var shuffler1Bottom = document.getElementById('content__text__1-bottom');
    var shuffler2Top = document.getElementById('content__text__2-top');
    var shuffler2Bottom = document.getElementById('content__text__2-bottom');
    var shuffler3Top = document.getElementById('content__text__3-top');
    var shuffler3Bottom = document.getElementById('content__text__3-bottom');
    var shuffler4Top = document.getElementById('content__text__4-top');
    var shuffler4Bottom = document.getElementById('content__text__4-bottom');
    var shuffler5Top = document.getElementById('content__text__5-top');
    var shuffler5Bottom = document.getElementById('content__text__5-bottom');
  
    $('#content__text__1').hide();
    $('#content__text__2').hide();
    $('#content__text__3').hide();
    $('#content__text__4').hide();
    $('#content__text__5').hide();
  
  
    var buttonText1Top = new WordShuffler(shuffler1Top,{
      textColor : '#000',
      timeOffset : 4
    });
    var buttonText1Bottom = new WordShuffler(shuffler1Bottom,{
      textColor : '#000',
      timeOffset : 4
    });
  
    var buttonText2Top = new WordShuffler(shuffler2Top,{
      textColor : '#000',
      timeOffset : 4
    });
    var buttonText2Bottom = new WordShuffler(shuffler2Bottom,{
      textColor : '#000',
      timeOffset : 4
    });
  
    var buttonText3Top = new WordShuffler(shuffler3Top,{
      textColor : '#000',
      timeOffset : 4
    });
    var buttonText3Bottom = new WordShuffler(shuffler3Bottom,{
      textColor : '#000',
      timeOffset : 4
    });

    var buttonText4Top = new WordShuffler(shuffler4Top,{
      textColor : '#000',
      timeOffset : 4
    });
    var buttonText4Bottom = new WordShuffler(shuffler4Bottom,{
      textColor : '#000',
      timeOffset : 4
    });

    var buttonText5Top = new WordShuffler(shuffler5Top,{
      textColor : '#000',
      timeOffset : 4
    });
    var buttonText5Bottom = new WordShuffler(shuffler5Bottom,{
      textColor : '#000',
      timeOffset : 4
    });

    function draw() {
	

      setTimeout(function() {
        $('#content__text__1').show();
        $('#content__text__5').hide();
        buttonText1Top.restart();
        buttonText1Bottom.restart();
        buttonText1Top.destroy();
        buttonText1Bottom.destroy();
      }, 0);


      setTimeout(function() {
        $('#content__text__1').hide();
        $('#content__text__2').show();
        buttonText2Top.restart();
        buttonText2Bottom.restart();
        buttonText2Top.destroy();
        buttonText2Bottom.destroy();
      }, 3000);
	
      setTimeout(function() {
        $('#content__text__2').hide();
        $('#content__text__3').show();
        buttonText3Top.restart();
        buttonText3Bottom.restart();
        buttonText3Top.destroy();
        buttonText3Bottom.destroy();
      }, 6000);
  
      setTimeout(function() {
        $('#content__text__3').hide();
        $('#content__text__4').show();
        buttonText4Top.restart();
        buttonText4Bottom.restart();
        buttonText4Top.destroy();
        buttonText4Bottom.destroy();
      }, 9000);

      setTimeout(function() {
        $('#content__text__4').hide();
        $('#content__text__5').show();
        buttonText5Top.restart();
        buttonText5Bottom.restart();
        buttonText5Top.destroy();
        buttonText5Bottom.destroy();
      }, 12000);
    }

    $(window).on('load', function() {
      setTimeout(function() {
        draw();
      }, 1000);

      setInterval(function() {
        draw();
      }, 15000);
    });
  }
});










