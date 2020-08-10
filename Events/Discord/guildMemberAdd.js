const aplicarTexto = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px Uni Sans Heavy`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};
const Discord = require("discord.js");
const Canvas = require('canvas');
const path = require('path');
module.exports = async (nearby, member) => {
	nearby.metodos.totalCount(nearby, member);
 	nearby.metodos.memberCount(nearby, member);
 	nearby.metodos.botCount(nearby, member);
	var colorStatus = "#ffffff";
	const channel = member.guild.channels.find(ch => ch.name === '【💬】chat');
	if (!channel) return;
	Canvas.registerFont('./unisansheavy.otf', { family: 'Uni Sans Heavy' })
	const canvas = Canvas.createCanvas(1024, 450);
	const ctx = canvas.getContext('2d');
  if (member.presence.status === 'idle') colorStatus = "#faa61a";
  if (member.presence.status === 'offline') colorStatus = "#747f8d";
  if (member.presence.status === 'dnd') colorStatus = "#f04747";
	const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/554533921010745345/591522912394018826/1532450712e4d0ebe52b4d8a9ce974d9105037b5.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '70px Uni Sans Heavy';
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
	ctx.fillText('Bienvenid@', 512, 290);

	ctx.font = aplicarTexto(canvas, `${member.user.tag}`);
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
	ctx.fillText(`${member.user.tag}`, 512, 340);
  ctx.textBaseline = 'top';

	ctx.beginPath();
  ctx.lineWidth = 8;
  ctx.strokeStyle = colorStatus;
	ctx.arc(512, 125, 100, 0, Math.PI * 2, true);
  ctx.stroke();
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 410, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'bienvenida.png');

	channel.send(attachment);
};