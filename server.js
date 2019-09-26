const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
const prefix = '!!'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "386503833213337601") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});
const moment = require('moment')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', function(){
    var ms = 100000
 ;
    var setGame = [`!!help *ツ☜❶BeGo❶☞ツ* `];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/beg0o`);
    }, ms);100000


});


////////////////////////////////////////////////////////////////////
client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#ff0000")
         .setThumbnail(message.channel.sendEmbed)
         .setDescription(`**
----------------------------------------------
🔱/help : أوامر البوت الخاصة في السيرفر 🔱
----------------------------------------------
♦️/id_____: لعرض حسابك الشخصي
♦️/server_: معلومات السيرفر
♦️/av : لعرض الصورة الشخصية الخاصة بك
♦️/vs: لأنشاء روم صوتي خلص بك
♦️/bot : عدد تواجد البوت في السيرفرات
♦️/لأنشاء رتب 10 "(للأدمن)"  : انشاء رتب
♦️/رابط السيرفر : رابط
-----------------------------------------------


 **`)


   message.channel.sendEmbed(embed)
   
   }
   });  





////////////////////////////////////////////////////////////

//تسجيل دخول
////////////////////////////////////////

client.on('message', message => {
     if (message.content === ("تسجيل دخول")) {
     const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00ff0f")
  .setDescription("✅ تم تسجيل دخولك بنجاح")
  message.channel.sendEmbed(embed)
}
});

////////////////////////////////////////
//تسجيل خروج
client.on('message', message => {
     if (message.content === ("تسجيل خروج")) {
     const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00ff0f")
  .setDescription("✅ تم تسجيل خروجك بنجاح")
  message.channel.sendEmbed(embed)
}
});



//////////////////////////////////////////////////////////////















client.on('message', message => {
    var prefix = "/"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
 
client.on('message', message => {
    if (message.content === (prefix + "av")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', function(message) {
    if(message.content.startsWith(prefix + '+_')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
//kick
client.on('message', message => {
if (message.content.startsWith("+_")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى : " + mention.tag);
};
});
//band
client.on('message', message => {
if (message.content.startsWith("+_")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "cl") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});




client.on('message', message => {
    if (message.content === (prefix + "رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.channel.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط   ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]   رابط سيرفر
---------------------
**`)
      message.channel.sendEmbed(Embed11)
    }
});





client.on('message', message => {
     if (message.content === "+_") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == '/11') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});



client.on("message", message => {

            if (message.content.startsWith(prefix + "o")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});




client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'of') {
if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .addField('# | الرسالة ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.sendMessage(args)
  });





         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
  const AziRo = new Discord.RichEmbed()   
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});
























client.on('message',function(message) {
   if(message.content.startsWith(prefix + "bot")) {
       message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
   } 
});
//========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "users")) {
       message.channel.send(`Users: \`\`${client.users.size}\`\``);
   } 
});
//=========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "channels")) {
       message.channel.send(`channels: \`\`${client.channels.size}\`\``);
   } 
});
client.on('message', message => {
    if (message.content === "/انشاء رتب") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "1", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "2", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "3", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "4", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "5", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "6", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "7", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "8", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "9+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "10", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "11", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "12", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});


      client.on('message', async message => {
  if(message.content.startsWith(prefix + "vp0")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});



//welcome
client.on("guildMemberAdd", member => {
client.channels.find('id', '626801884732194818').send(` **welcome** `)


});







client.on('message', message => {
    var command = message.content.split(" ")[0];
    var args1 = message.content.split(" ").slice(1).join(" ");
    if(command == prefix + 'find') { // الامر : $find
        let sizePlayers = 1;
        
        if(message.author.bot) return;
        if(!message.channel.guild) return;
        if(!args1) return message.channel.send(`**? Useage:** ${prefix}find (اي حرف من الاسم الي تبيه)`).then(msg => msg.delete(5000));
        
        var playersFind = new Discord.RichEmbed()
        .setTitle(`:white_check_mark: **خاصية البحث عن الاعضاء**`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**\n? البحث عن الاعضاء الموجود بداخل اسمائهم:**\n " ${args1} "\n\n**? عدد الاعضاء:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`????????????????????????????????????????????????????????????????????????????????????????\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n????????????????????????????????????????????????????????????????????????????????????????\`\`\``)
        .setColor('GRAY')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        
        message.channel.send(playersFind);
        message.delete();
    }
});










client.login(process.env.BOT_TOKEN)















const devs = ['389090790984515594'];
const db = require('quick.db');
const premium = ['470896018603376640']
  
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   

const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 

const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 

var table = require('table').table
var ti={}  
,spee={}
,attentions={};











client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci
    let pages = [`**
        ***__General orders__***
**
${prefix}allbots/لعرض جميع البوتات الي بالسيرفر
${prefix}server/يعرض لك معلومات عن السيرفر
${prefix}bot/يعرض لك كل معلومات البوت
${prefix}count/يعرض لك عدد الاشخاص بالسيرفر بدون بوتات
${prefix}invites/ يعرض لك  عدد انفايتاتك بالسيرفر 
${prefix}invinfo <invitelink here> / لمعلومات عن الدعوه
 مثال : invinfo m82n8P
${prefix}invite-codes/يعرض لك روابط الانفايتات حكك في السيرفر 
${prefix}cal/اله حاسبة
${prefix}trans <language> <any thing>/يترجم لك الي تبيه من اي لغة
${prefix}short/يختصر لك رابط كبير الى رابط صغير
${prefix}tag/يكتب لك الكلمة بشكل جميل وكبير
${prefix}google/للبحث في قوقل عن طريق الدسكورد
${prefix}perms/يعرض لك برمشناتك بالسيرفر
${prefix}z5rf/يزخرف لك كلمة او جملة
${prefix}rooms/يعرض لك كل الرومات الي بالسيرفر مع عددها
${prefix}roles/يعرض لك كل الرانكات بالسيرفر بشكل جميل
${prefix}emojilist/يعرض لك كل الايموجيات الي بالسيرفر
${prefix}say/يكرر الكلام الي تكتبو
${prefix}image/صورة السيرفر
${prefix}members/عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص
${prefix}id/معلومات عنك
${prefix}bans / عدد الاشخاص المبندة 
${prefix}avatar/صورتك او صورة الي تمنشنو
${prefix}embed/يكرر الي تقولو بشكل حلو
${prefix}emoji <any things>/لتحويل اي كلمه تقولها الي ايموجي
${prefix}inv/لدعوة البوت الى سيرفرك
${prefix}support/سيرفر الدعم
${prefix}contact/ارسال اقتراح او لمراسلة صاحب البوت
**
  `
,`
        ***__Administrative Orders__***
**
${prefix}move @user /  لسحب الشخص الى روومك
${prefix}bc / رسالة جماعية الى كل اعضاء السيرفر
${prefix}bk / رسالة جماعيه مع
${prefix}rolebc <everyone or @role> / راسال رساله جماعيه لرتبه محدده
${prefix}role @user <rank> / لأعطاء رتبة لعضو معين
${prefix}roleremove @user <rank> / لازالة الرتبة من شخص معين
${prefix}give all <rank> / لأعطاء رتبة للجميع
${prefix}give humans <rank> / لأعطاء رتبة للاشخاص فقط
${prefix}give bots <rank> / لأعطاء رتبة لجميع البوتات
${prefix}hchannel / اخفاء الشات
${prefix}schannel / اضهار الشات المخفية
${prefix}clr <numbr> / مسح الشات بعدد
${prefix}clear / مسح الشات
${prefix}mute @user <time> / اعطاء العضو ميوت 
${prefix}unmute @user / لفك الميوت عن الشخص 
${prefix}kick @user <reason> / طرد الشخص من السيرفر
${prefix}ban @user <reason> / حضر الشخص من السيرفر
${prefix}mutechannel / تقفيل الشات
${prefix}unmutechannel / فتح الشات
${prefix}dc / مسح كل الرومات
${prefix}dr / <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات
${prefix}ct <name> / انشاء شات
${prefix}cv <name> / انشاء رووم فويس
${prefix}temp / لانشاء روم مؤقت
${prefix}delet <name> / مسح الشات او الرووم فويس
${prefix}make <number> / ينشا لك الوان مع كم الوان تبي
${prefix}color <number> / لختيار لون
${prefix}deletecolors <number> / لحذف الالوان
**
   `,`
        ***__Music orders__***
**
${prefix}play / لتشغيل أغنية برآبط أو بأسم
${prefix}skip / لتجآوز الأغنية الحآلية
${prefix}pause / إيقآف الأغنية مؤقتا
${prefix}resume / لموآصلة الإغنية بعد إيقآفهآ مؤقتا
${prefix}vol / لتغيير درجة الصوت 100 - 0
${prefix}stop / لإخرآج البوت من الروم
${prefix}np / لمعرفة الأغنية المشغلة حآليا
${prefix}queue / لمعرفة قآئمة التشغيل
**
        ***__Games orders__***
 **       
${prefix}rps / حجر ورقة مقص
${prefix}speed / اسرع كتابة
${prefix}quas / اسئلة عامة
${prefix}نكت / نكت 
${prefix}لعبة فكك / فكك
${prefix}عواصم عشوائي/عواصم
${prefix}لعبة كت تويت / كت تويت
${prefix}roll <number> / قرعة
${prefix}لو خيروك بطريقة حلوة / لو خيروك
${prefix}لعبة مريم / مريم
${prefix}فوائد ونصائح  / هل تعلم
${prefix}يعطيك عقابات قاسية / عقاب 
=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.
welcome يتم الترحيب فى روم باسم
G.setwelcomer <text channel name> لاختيار روم للترحيب
${prefix}voiceonline / لتفعيل روم الفويس اونلاين
**
   
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('⏮').then( r => {
            msg.react('⏭')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});


client.on('message', message => {
if (message.content.startsWith(prefix + 'تكبير')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })

}
});

client.on('message', message => {
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'google')) {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});

}});

//اظهار برمشن الاعب 

client.on('message', message => {
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)

                  message.channel.send({embed:zPeRms});

    }
});
//صور السيرفر
client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 

    }
});



//عرض سيرفرك الخاص
client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

/////////عرض الاونلاني والبوت ولاعضاء 
   client.on('message',function(message) {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info 
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      }); 

//سيرفر سبورت
client.on('message', message => {
     if (message.content === "!!support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/gvyXFEm**")
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message' , message => {
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");


client.users.get("516473846983950336").send(
    "\n" + "**" + "? السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ? المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ? الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : 3bker")
                                                

message.channel.send(embed);


}
    
});



