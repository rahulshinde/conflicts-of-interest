var audio = document.getElementById('audio_player');
document.addEventListener('DOMContentLoaded', init);

function init(){
  fetch('https://extreme-ip-lookup.com/json/?callback=getIP&key=i4Y52DnPYebLbdQPMhVA')
  .then( res => res.json())
  .then(response => {
    console.log(response.region);
    if (response.region != 'Pennsylvania' && response.region != 'Philadelphia'){
      document.querySelectorAll('.movable').forEach((e) => {
        e.remove();
      });
      document.body.classList.add('not_pa');    
    } else{
      document.body.classList.add('pa');
    }
  })
  .catch((data, status) => { 
    document.body.classList.add('pa');

  })


  document.querySelectorAll('.play_button').forEach((e) => {
    e.addEventListener('click', toggleState);
  });
}

function toggleState(e){
  document.querySelector('.selected').classList.remove('selected');
  if (e.target.id == 'play'){
    audio.play();
  } else{
    audio.pause();
  }
  console.log(e);
  e.target.classList.add('selected');
}


