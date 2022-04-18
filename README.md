
# World of Warcraft: Money Conversion
Just something I threw together in Node JavaScript for a project I was making, I found Lua, C# and different ways to convert a string of like (**2000000**) to 200g 00s 00c but couldn't ever find anything written in JavaScript, so I took it upon myself to learn little bit of something and made this.

I know it's probably really simple to achieve or do, but I'm not a expert into coding / JavaScript, really just a beginner and I know it'll probably come to some use for others who don't know, feel free to do whatever to this.

    function convertMoney(m){
        
    var result = [];
    
    var total = m;
    
    var copper = m % 100;
    
    total = (total - copper) / 100;
    
    var silver = total % 100;
    
    var gold = (total - silver) / 100;
    
    result.push(gold + " <img src='https://static.wikia.nocookie.net/wowwiki/images/1/10/Gold.png' width='14'> ", silver + " <img src='https://static.wikia.nocookie.net/wowwiki/images/0/0b/Silver.png' width='14'> ", copper + " <img src='https://static.wikia.nocookie.net/wowwiki/images/1/12/Copper.png' width='14'> ");
    
    return result;
    
    }
Then all you do is call the function and it'll return the results. 

## convertMoney(*amount*);
Returns amount of money in formatted amount. 

    convertMoney(2350); //returns 0G,23S,50C

## *.join(" ");
You can use .join(" ") at the end of the convertMoney() function so it prints out without the comma's.

    convertMoney(235934).join(" "); //returns 23G 59S 34C
