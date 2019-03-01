function SocialEvent(id) {
    this.name = "events " + id;
    this.registeredUsers = [];


    this.iventUsers = function (users) {
        for (let index = 0; index < 5; index++) {
            var pickedUser = getRandomNumber(0, 49);
            users[pickedUser].respondToEventInvite(this);

        }
    }
}