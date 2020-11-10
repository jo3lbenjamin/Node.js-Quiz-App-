//Name : Joel Benjamin Surya
//Class: DIT/FT/1A/08
//Admission Number:P1935446
var input = require("readline-sync")
//Global Variables
var userans = []; //array to store what the user puts for the answers
var pointsystem=[];//array to store the points of all the levels. 
var i; //i is declared here for the for loop in 'submit' and 'calcScore' function to be usable
var nameregex=/^[a-zA-Z\-]+$/; //for name validation
//Classes
class MCQ{
    constructor(question,choice,answer,category){ //For the questions, choices,answers and category
        this.question=question;
        this.choice=choice;
        this.answer=answer;
        this.category=category;
    }
    getQuestion(){ //Structure of how questions will be displayed
        return this.question
        +"\n(1) "+this.choice[0]
        +"\n(2) "+this.choice[1]
        +"\n(3) "+this.choice[2]
        +"\n(4) "+this.choice[3]
    }
} //End MCQ class
class Quiz{
    constructor() { //For level 1 of the quiz
        this.questionPool = [];  //declare the questionPool property of the Quiz class
        //Chemistry
        this.questionPool.push(new MCQ("Which of these is an element??", ["Ethanol", "Steel", "Water", "Bromine"], 3, 1));    //1st question
        this.questionPool.push(new MCQ("Which of the following is not a mixture?", ["Air", "Milk", "Oil", "Mercury"], 3, 1));    //2nd Question
        this.questionPool.push(new MCQ("Which of the following is reacts most violently in water?", ["Potassium", "Zinc", "Chlorine", "Calcium"], 0, 1));    //3rd Question
        this.questionPool.push(new MCQ("In which process is energy released into the atmosphere?", ["Dissolving ammonium nitrate in water", "Reacting hydrochloric acid with sodium hydroxide", "Sublimation of dry ice", "Thermal decomposition of copper(II) carbonate"], 1, 1));    //4th Question
        this.questionPool.push(new MCQ("Which of these substances can be used to decrease acidity in soil?", ["Calcium Manganate", "Calcium Hydroxide", "Calcium Nitrate", "Calcium Sulfate"], 1, 1));    //5th Question
        //Physics
        this.questionPool.push(new MCQ("Which of these is the correct instrument to measure the diameter of a coin?", ["Metre rule", "Measuring tape", "Micrometer screw gauge", "Vernier calipers"], 3, 2));    //6th
        this.questionPool.push(new MCQ("A ball of mass 0.4kg was thrown vertically upwards into the air. It reached a maximum height of 3 meters. \nWhat was the force on it at the highest point?", ["1.2 N", "40 N", "12 N", "4 N"], 3, 2));    //7th
        this.questionPool.push(new MCQ("Why does hot air rise?", ["The cooler air is denser than the hotter air", "The hotter air is denser than the cooler air", "Cooler air is heavier than hot air", "Hot air rises to cool itself"], 0, 2));    //8th
        this.questionPool.push(new MCQ("Which object has the greatest inertia?", ["A 2kg mass at rest","A 5kg mass moving at constant acceleration","A 5kg mass moving at constant velocity" ,"A 10kg mass at rest"],1,2));    //9th
        this.questionPool.push(new MCQ("Which of the following electromagnetic waves has the highest frequency?", ["Radio waves", "Gamma rays", "Infrared", "UV rays"], 1, 2));    //10th question
        //Biology
        this.questionPool.push(new MCQ("Penicillin is obtained from?",["Ethanol","Water","Steel","Fungi"],3,3)); //Question 11
        this.questionPool.push(new MCQ("What fraction of the body's calcium is stored into bones and teeth?", ["10%","1.507%","86%","99%"],3,3)); //Question 12
        this.questionPool.push(new MCQ("Which of the following is essential gene transfer material?",["DNA","Chromosome","Neurons","Red blood cells"],0,3)); //Question 13
        this.questionPool.push(new MCQ("Which of the following part of the body stores Vitamin A, Vitamin D and Vitamin B12?",["Small intestine","Liver","Mouth","Heart"],1,3)); //Question 14
        this.questionPool.push(new MCQ("Which of the following is the building blocks of the human body?",["Genes","Cells","DNA","Bones"],1,3)); //Question 15
        //Astronomy
        this.questionPool.push(new MCQ("What is the name of Saturn's largest moon?",["Bulan","Giant","Mega","Titan"],3,4)); //Question 16
        this.questionPool.push(new MCQ("What is the name of the force holding us down?",["Weight","Electricity","Kinetic","Gravity"],3,4)); //Question 17
        this.questionPool.push(new MCQ("Which planet does the moon, Ganymede belong to?",["Jupiter","Mars","Mercury","Neptune"],0,4)); //Question 18
        this.questionPool.push(new MCQ("Which planet is known as the red planet?",["Zeus","Mars","Mercury","Ruby"],1,4)); //Question 19
        this.questionPool.push(new MCQ("Which planet is famous for the ring that surrounds it?",["Kepler-452b","Saturn","Jupiter","Gliese"],1,4)); //Question 20
        //Geography
        this.questionPool.push(new MCQ("In which country does the Nile river meet the sea?",["Israel","Turkey","Qatar","Egypt"],3,5)); //Question 21
        this.questionPool.push(new MCQ("What is the largest country in Scandinavia?",["Norway","Denmark","Sweden","Copenhagen"],3,5)); //Question 22
        this.questionPool.push(new MCQ("What is the hottest continent on Earth?",["Africa","Europe","Asia","South America"],0,5)); //Question 23
        this.questionPool.push(new MCQ("Which part of Earth lies beneath the crust?",["Tectonic Plate","Mantle","Ionospehere","Hemisphere"],1,5)); //Question 24
        this.questionPool.push(new MCQ("How old is Earth?",["2019 years","4.54 billion years","80 trillion years","430 million years"],1,5)); //Question 25
        }
    questionPool2(){ //This resets this.questionPool for the next level
        this.questionPool=[]; //Declare questionpool for level 2, then spawn in questions
        //Biochemistry
        this.questionPool.push(new MCQ("Which of the following is an imino acid?", ["Alanine", "Glycine", "Proline", "Serine"], 2, 1));    //1st question
        this.questionPool.push(new MCQ("Which of the following is an essential amino acid?", ["Cysteine", "Asparagine", "Glutamine", "Phenylalanine"], 3, 1));    //2nd Question
        this.questionPool.push(new MCQ("Which of the following is the smallest division?", ["Actin", "Fiber", "Fibril", "Filament"], 0, 1));    //3rd Question
        this.questionPool.push(new MCQ("Arrangement of nucleotides in DNA can be seen by?", ["Ultracentrifuge", "X-Ray crystallography", "Microscope", "Telescope"], 1, 1));    //4th Question
        this.questionPool.push(new MCQ("Where does triacylglycerol form?", ["Tongue", "Liver", "Large Intestine", "Small Intestine"], 1, 1));    //5th Question
        //Ecology
        this.questionPool.push(new MCQ("What is the definition of a community?", ["Two or more species of organisms living in their environment", "The interaction of living organisms and the environment", "The relationship between an organism and its family", "Two or more population of organisms"], 3, 2));    //6th
        this.questionPool.push(new MCQ("The human population is increasing at an exponential rate. What are some of the reasons of this?", ["The population is aging", "There are more oxygen in the air", "Healthcare is improving", "Less people are dying"], 2, 2));    //7th
        this.questionPool.push(new MCQ("Which of these problems are caused due to an unbalanced carbon cycle?", ["Global Warming", "Volcano Eruptions", "Eutrophication", "Condensation"], 0, 2));    //8th
        this.questionPool.push(new MCQ("Which of the processes below create clouds?", ["Precipitaion","Condensation","Evaporation" ,"Polymerisation"],1,2));    //9th
        this.questionPool.push(new MCQ("The Greenhouse Effect is caused by?", ["Warming up the air", "Lack of Sulfur in the atmospheric air", "Excess oxygen in the atmosphere", "Excess carbon dioxide causes too much heat in the earth's atmosphere to be trapped"], 3, 2));    //10th question
        //Geology
        this.questionPool.push(new MCQ("How many years did the palezoic era last?",["325 million years","125 million years","425 million years","225 million years"],0,3)); //Question 11
        this.questionPool.push(new MCQ("Which earth layer has the coolest temperature?", ["Mantle","Crust","Inner Core","Outer Core"],1,3)); //Question 12
        this.questionPool.push(new MCQ("Which era had the first birds, mammals, deciduous trees and flowering plants?",["Cenozoic","Jurassic","Triassic","Mesozoic"],0,3)); //Question 13
        this.questionPool.push(new MCQ("The Great Rift Valley of East Africa is characterised by?",["Mainly anticlinal and synclinal folding as Africa collides with Madagascar","Mainly thrust faulting as Africa collides with Arabia ","Mainly transform faulting along zones connecting the rift with the Red Sea ","Mainly normal faulting as East Africa begins to fragment "],3,3)); //Question 14
        this.questionPool.push(new MCQ("Which of the following are examples of horizontal compression and shortening in layered sedimentary rocks?",["Tight Folds","Normal Faults","Expanded Folds","Reverse folds"],0,3)); //Question 15
    }
    questionPool3(){ //This resets this.questionPool for the next level
        this.questionPool=[];//Declare questionpool for level 3, then spawn in questions
        //Quantum Physics
        this.questionPool.push(new MCQ("Who is known to be the father of Quantum Physics?", ["Werner Heisenberg", "Albert Einstein", "Max Planck", "Thomas Edison"], 2, 1));    //1st
        this.questionPool.push(new MCQ("Which of these components are not part of quantum theory?", ["Wave-particle duality", "Biochemistry", "Superconducting magnets", "Quantum chemistry"], 3, 1));    //2nd
        this.questionPool.push(new MCQ("What does the word 'quantum' mean?", ["How great or how much", "Size", "Relativity", "How small"], 0, 1));    //3rd
        this.questionPool.push(new MCQ("Which of the principles below is incorporated by quantum physics?", ["Principle of uncertainty","Principle of quantum logic","Principle of projective space" ,"Principle of classical mechanics"],0,2));    //4th
        this.questionPool.push(new MCQ("Who discovered cathode rays?", ["Benjamin Franklin", "Michael Faraday", "Erwin Schrodinger", "Ria Ricis"], 1, 2));    //5th 
        //Geology
        this.questionPool.push(new MCQ("How many different colours can the human eye distinguish?",["2 Million","500,000","10 Million","8.5 Million"],2,3)); //Question 6
        this.questionPool.push(new MCQ("How many particles of skin do the average human shed every hour?", ["5000","600,000","2 Million","1000"],1,3)); //Question 7
        this.questionPool.push(new MCQ("In the human body, what is the percentage of oxygen used by the brain?",["50%","20%","11%","5%"],1,3)); //Question 8
        this.questionPool.push(new MCQ("What is the estimated length of the human gastrointestinal tract?",["1.3km","5 m","9.14 m","2 km"],2,3)); //Question 9
        this.questionPool.push(new MCQ("What is the strongest muscle in the human body?",["Jaw-Muscle","Biceps","Quadriceps","Brain"],0,3)); //Question 10
    }
    getQuestionAt(index){
        return this.questionPool[index] //This has to be put to define the question.
    } //End
    genQuiz(category){ //category is used as the parameter. 
        var count=0;
        for(var i = category*5-5 ; i < category*5 ; i++) { //Mathematical expression used here so that the appropriate category will be chosen
            var q = quiz.getQuestionAt(i);
            do{userans[count] =input.question("\n"+(count+1) + ". " + q.getQuestion()+"\n>> ")
            if(userans[count]<1||userans[count]>4||isNaN(userans[count])){console.log("Input a number from 1 to 4 only please!")}} while(userans[count]<1||userans[count]>4||isNaN(userans[count]));
            console.log("\n");
            count++;
        }
    } //End
    dispAns(category){ //Display the summary of what the user puts in for the answers
        console.log("\n-----Here is the answers summary, do review your answers before submitting!-----\n")
        var count=0;
        for(var i = category*5-5 ; i < category*5 ; i++){
            var q = quiz.getQuestionAt(i);
            console.log("Question-"+(count+1)+": "+ q.question)
            var m = userans[count]-1
            console.log("Your answer: "+q.choice[m]+"\n")
            count++;
        }
    } //End
    submit(category){ //Before submitting, user can redo their questions if they want to.
        console.log("\nIf you have made a typo, no worries! You can change your answers here!\n")
        do{var submit=parseInt(input.question("Enter 0 to submit part 1 of your quiz or [1 to 5] to change your answer.\n>> ")) 
             if(submit<0||submit>5||isNaN(submit)){console.log("Enter a number from 0 to 5 only, please!")}} while (submit<0||submit>5||isNaN(submit))
         for(submit;submit>0;i++){
             var q = quiz.getQuestionAt(category*5-5 + submit-1)
             do{userans[submit-1] =input.question((submit) + ". " + q.getQuestion()+"\n>> ") 
             if(userans[submit-1]<1||userans[submit-1]>4||isNaN(userans[submit-1])){console.log("Input a number from 1 to 4 only please!")}} while(userans[submit-1]<1||userans[submit-1]>4||isNaN(userans[submit-1])) 
             do{var submit=parseInt(input.question("Enter 0 to submit part 1 of your quiz or [1 to 5] to change your answer.\n>> ")) 
             if(submit<0||submit>5||isNaN(submit)){console.log("Enter a number from 0 to 5 only, please!")}} while (submit<0||submit>5||isNaN(submit))
         }
    } //End
    calcScore(category,level){ //to calculate score
        var points=0;
        var count=0;
        for( var i=category*5-5;i<category*5;i++){
            var q = quiz.getQuestionAt(i);
            var m = userans[count]-1;
            if(m==q.answer){
                if(level==1){ //calc level 1 score
                    points++} 
                    if(level==2){ //calc level 2 score
                        points+=2
                    } if (level==3){ //calc level 3 score
                        points += 5
                    }
            } if (m!=q.answer && level==3){
                points -= 2
            }
            count++
        }
        console.log("\n"+name+", you got "+points+" points for level " + level +"!")
        return points
    } //End
    ansSummary(category){ //so user can see which questions they got wrong and which questions they got right
        console.log("Now, this is the summary of how you did!")
        var count=0;
        for(var i = category*5-5 ; i < category*5 ; i++){
            var q = quiz.getQuestionAt(i);
            console.log("\nQuestion-"+(count+1)+": "+ q.question)
            var m = userans[count]-1
            if (q.choice[m]==q.choice[q.answer]){console.log("Your answer: "+q.choice[m]+ " ✓")}else{console.log("Your answer:"+q.choice[m]+" ✖")}
            console.log("Correct Answer: "+ q.choice[q.answer]) 
            count++;
        }
    }
} // End Quiz Class
//Defining Functions
function getName(){
    do{var name=input.question("Please enter your name here: ") 
    if (name.length=0||name.match(nameregex)==null){console.log("Please enter a valid name!")}}while(name.length=0||name.match(nameregex)==null)
    return name
}
function dispRules(){ //So user can read rules step by step
var rules = ["\nHello " + name + "! Thank you for taking the time to attempt this quiz. \nIn this quiz, there are 3 levels. ",
"\nFor the first level, you will be asked basic and generic science questions from a category of your choice; each question in this level is worth one point. \nAlso, in this level, you are allowed to reattempt the quiz again.", 
"\nIn the second level, you will be asked more advanced science questions and the category will become more specific too. Each question in this level is worth 2 points.", 
"\nFor the last level, which is level 3, you are going to be asked on more specific and extremely difficult science questions that will guarantee a brainfart. Each question here is worth 5 points and for every wrong answer that you get, 2 points will be taken out. Good luck!"]
var i=0;
    while(i<rules.length){
        console.log(rules[i])
        var ask = input.question("\nPress 'n' to proceed\n>> ") 
        if(ask != 'n'){console.log("Please put 'n' only!")}
        switch (ask){
            case 'n':
                i++
                break;
        }

    }
}
function getCategory(){
    var category = ["Complicated Chemistry","Puzzling Physics","Baffling Biology","Amazing Astronomy","Gruelling Geography"]
    var promptMsg = "\nPlease enter the quiz category you would like to participate in for part 1 of the quiz: " + "\n"
    + "(1) " + category[0] + "\n"
    + "(2) " + category[1] + "\n"
    + "(3) " + category[2] + "\n"
    + "(4) " + category[3] + "\n"
    + "(5) " + category[4] + "\n"
    + ">> " ;

    do{var category = input.questionInt(promptMsg)
        if(category>5||category<1){console.log("Input a valid number, please")}} while(category>5||category<1)
    console.log("\n")
    return category //Where the value of category as parameter is from
}
function checkBigger(){ //user is able to retry level 1 again. For the programme to take the higher score, this function must be used
    if (pointsystem[0] > pointsystem[1]) {return pointsystem[0]} else {return pointsystem[1]}
}
function getCategory2(){
    var category2 = ["Burdensome Biochemistry","Exhausting Ecology","Gnarly Geology"]
    var promptMsg = "\nPlease enter the quiz category you would like to participate in for part 2 of the quiz: " + "\n"
    + "(1) " + category2[0] + "\n"
    + "(2) " + category2[1] + "\n"
    + "(3) " + category2[2] + "\n"
    + ">> " ;

    do{var category2 = input.questionInt(promptMsg)
        if(category2>3||category2<1){console.log("Input a valid number, please")}} while(category2>3||category2<1)
    console.log("\n")
    return category2
}
function getCategory3(){
    var category3 = ["Quizzical Quantum Physics","Abominable Anatomy"]
    var promptMsg = "\nPlease enter the quiz category you would like to participate in for part 3 of the quiz: " + "\n"
    + "(1) " + category3[0] + "\n"
    + "(2) " + category3[1] + "\n"
    + ">> " ;
    do{var category3 = input.questionInt(promptMsg)
        if(category3>2||category3<1){console.log("Input a valid number, please")}} while(category3>2||category3<1)
    console.log("\n")
    return category3
}
function displayGrade(){ //Grading system so user can see their grade and percentage.
    var pointtotal=level1score+pointsystem[2]+pointsystem[3]
    console.log("In total, you have achieved " +pointtotal+ " out of 40 points!")
}
//Main Programme
//Intro
console.log("\n,.-~*´¨¯¨`*·~-.¸-(Welcome to the Science Questionnaire!)-,.-~*´¨¯¨`*·~-.¸\n")
var name = getName()
dispRules()
//Run level
var category1 = getCategory();
var quiz = new Quiz();
quiz.genQuiz(category1)
quiz.dispAns(category1)
quiz.submit(category1)
pointsystem[0] =  quiz.calcScore(category1,1)
quiz.ansSummary(category1)
//User retries quiz here if they want to
var cat2 = input.question("Would you like to attempt part 1 of the quiz again? Type 'y' for yes or press enter to proceed. You can try a different category this time! We will take the higher score!\n>> ")
switch(cat2){
    case 'y':    
        var category1 = getCategory();
        quiz.genQuiz(category1)
        quiz.dispAns(category1)
        quiz.submit(category1)
        pointsystem[1]=quiz.calcScore(category1,1)
        quiz.ansSummary(category1)
        var level1score = checkBigger()
        console.log("Your calculated score for level 1 is " + level1score)
        break;
    default:
        var level1score = pointsystem[0]
        break;}
//Run level 2
console.log("\nNow, we will move on to part 2 of the quiz.")
//Part 2 of quiz
var category2 = getCategory2()
quiz.questionPool2()
quiz.genQuiz(category2)
quiz.dispAns(category2)
quiz.submit(category2)
pointsystem[2]=quiz.calcScore(category2,2)
quiz.ansSummary(category2)
//Run level 3
console.log("\nNow, its the final level! Good luck!")
var category3 = getCategory3()
quiz.questionPool3()
quiz.genQuiz(category3)
quiz.dispAns(category3)
quiz.submit(category3)
pointsystem[3]=quiz.calcScore(category3,3)
quiz.ansSummary(category3)
displayGrade()
console.log("-------------------------------End of Quiz-------------------------------")


