
// Mouseover/ Click sound effect- by JavaScript Kit (www.javascriptkit.com)
// Visit JavaScript Kit at http://www.javascriptkit.com/ for full source code

//** Usage: Instantiate script by calling: var uniquevar=createsoundbite("soundfile1", "fallbackfile2", "fallebacksound3", etc)
//** Call: uniquevar.playclip() to play sound

var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
    "mp3": "audio/mpeg",
    "mp4": "audio/mp4",
    "ogg": "audio/ogg",
    "wav": "audio/wav"
}

function createsoundbite(sound){
    var html5audio=document.createElement('audio')
    if (html5audio.canPlayType){ //check support for HTML5 audio
        for (var i=0; i<arguments.length; i++){
            var sourceel=document.createElement('source')
            sourceel.setAttribute('src', arguments[i])
            if (arguments[i].match(/\.(\w+)$/i))
                sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
            html5audio.appendChild(sourceel)
        }
        html5audio.load()
        html5audio.playclip=function(){
            html5audio.pause()
            html5audio.currentTime=0
            html5audio.play()
        }
        return html5audio
    }
    else{
        return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
    }
}

//Initialize two sound clips with 1 fallback file each:

var jumpSound = createsoundbite("media/Jumping.ogg", "media/Jumping.mp3");
var clicksound = createsoundbite("media/Button-Sound.mp3", "media/Button-Sound.mp3");
var backgroundMusic = createsoundbite("media/Technology.mp3", "media/Technology.mp3");
var mapTwoMusic = createsoundbite("media/MoveFast.mp3", "media/MoveFast.mp3");
var mainMenuMusic = createsoundbite("media/SpaceOdyssey.mp3", "media/SpaceOdyssey.mp3");