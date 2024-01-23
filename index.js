const  Discord = require("discord.js")
// const  {} = require("discord.js")

try {
    // const client = new Client({ intents: [GatewayIntentBits.Guilds,
    //     GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
   
    const client = new Discord.Client({intents: ['Guilds' , 'GuildMessages' , 'MessageContent','GuildMembers']});

//    client.on("messageCreate",(message)=>{
        //   message.reply({
        //     content:"bot"
        //   })
        // console.log(message.content);
    // })
   
//    client.login("MTE5ODE0ODk3ODEwMTk4NTM2MQ.G949Li.DjRt2ulgceV2hPiNIiIC9YUPmZ2yEit_hAP9rc")
} catch (error) {
    console.log(error.message);
}