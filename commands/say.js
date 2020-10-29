const name = 'say';
module.exports = {
    name: name,
    command: async function(msg) {
        msg.delete({ timeout: 0 , reason: 'say command'});;
        var content = msg.content.split(' ').splice(1).join(' ');
        msg.channel.send(content);
    }
}