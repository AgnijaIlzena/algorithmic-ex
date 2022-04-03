let question = ['Essaye plus tard',
                'Essaye encore',
                'Pas d’avis',
                'C’est ton destin',
                'Le sort en est jeté',
                'Une chance sur deux',
                'Repose ta question',
                'D’après moi oui', 
                'C’est certain',
                'Oui absolument',
                'Tu peux compter dessus',
                'Sans aucun doute',
                'Très probable',
                'Oui',
                'C’est bien parti',
                'C’est non',
                'Peu probable',
                'Faut pas rêver',
                'N’y compte pas',
                'Impossible'
                ];


  

function randomAnswer(question){
    let randomIndex = Math.floor(Math.random()*question.length);
    for (let i=0; i < question.length; i++) {
        return question[randomIndex];
     }
 }

 console.log(randomAnswer(question));



 