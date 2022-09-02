module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        client.user.setPresence({
            activities: [{name: 'use !help to see a list of commands'}], status: 'idle'
          });
        console.log(`${client.user.tag} has logged in`);
    }
};