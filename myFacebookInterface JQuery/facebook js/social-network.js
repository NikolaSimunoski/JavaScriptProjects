function SocialNetwork() {
    this.users = [];
    this.event = [];

    this.generateUsers = function () {
        for (var index = 0; index < 50; index++) {
            var element = new Person(index);
            this.users.push(element);
        }
    }
    this.generateEvent = function () {
        for (var i = 1; i <= 5; i++) {
            var events = new SocialEvent(i);
            events.iventUsers(this.users)
            this.event.push(events);
        }
    }
    this.generateUsers();
    this.generateEvent();


}