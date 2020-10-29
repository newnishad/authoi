module.exports.log = function (msg) {
  if (msg.author.bot) return;
  console.log(
    `${msg.guild.name} - ${msg.member.id} - ${msg.author.username} - ${msg.content}`
  );
};
