const  {GatewayIntentBits,Client} = require("discord.js")
// const  {} = require("discord.js")

try {
    const client = new Client({ intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
   
   client.on("messageCreate",(message)=>{
        //   message.reply({
        //     content:"bot"
        //   })
        console.log(message.content);
    })
   
   client.login("MTE5ODE0ODk3ODEwMTk4NTM2MQ.GUyCFX.d7l8mYfRngEzHihl_u0aI3EhpvEJ_7naP4NaqM")
} catch (error) {
    console.log(error.message);
}