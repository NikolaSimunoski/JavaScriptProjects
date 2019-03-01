function main(){
var socialNetwork = new SocialNetwork();
var user  = socialNetwork.users[0];



var renderer = new Renderer(user)
renderer.renderAll();
}
main();