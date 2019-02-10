document.addEventListener('DOMContentLoaded', appStart)

  
const sounds = {
113: 'boom', //q
119: 'clap',
101: 'hihat',
97: 'kick', //a
115: 'openhat',
100: 'ride',
122: 'snare',//z
120: 'tink',
99: 'tom',

49: 'a1', //1
50: 'b1',
51: 'c1',
52: 'd1',
53: 'e1',
54: 'f1',
55: 'f1s',
56: 'e1',
57: 'e1s', //9

82:     //R
83:
84:
85:     //F
86:
87:
88:     //V
89:
90:
}

const chanel1 = []
let isRecording = false
let recStart = 0

function recAudio(e){

    recStart = Date.now()
    isRecording = !isRecording
    e.target.innerHTML = isRecording ? "Stop" : "Nagrywaj"

}

function appStart(){
    window.addEventListener('keypress',playSound)
    document.querySelector('#rec').addEventListener('click', recAudio)
    document.querySelector('#play').addEventListener('click', playAudio)
}

function playSound(e){
    if(!sounds[e.charCode]){
        return
    }

    const soundName = sounds[e.charCode]
    audioDom = document.querySelector(`#${soundName}`)
    audioDom.currentTime = 0
    audioDom.play()

    if(isRecording){
        chanel1.push({
            name: soundName,
            time: Date.now()-recStart
        })
    }
}

function playAudio(){
    chanel1.forEach(sound =>{
        setTimeout(
            ()=>{
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
}


function openTab(evt, instrument) {
    let i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("instrumenty");
    for (i = 0; i < tabcontent.length; i++) {
      //tabcontent[i].style.visibility = "hidden";
      tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(instrument).style.display = "grid";
    evt.currentTarget.className += " active";

}

window.onload = function(){
    openTab(event, 'Perkusja')
};







