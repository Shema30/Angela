
function BellBoyData (name, age, job, language, moveBag){
    this.name = name;
    this.age = age;
    this.job = job;
    this.language = language;
    this.moveBag = function(){
        console.log("Moving Bags is in progress")
    }
}

var BellBoy1 = new BellBoyData(
    "Angela",
    25,
    "Teacher",
    "English",
)

BellBoy1.moveBag()



