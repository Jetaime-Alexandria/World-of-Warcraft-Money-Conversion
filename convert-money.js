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
