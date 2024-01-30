const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
        for (let names of this.username) {
            profile.names === newName;
        }
    },
    updatePlayTime(hours) {
        
    },
    getInfo() {
        
    }
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"