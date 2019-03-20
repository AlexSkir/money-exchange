// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var coins = {
        H: 0,
        Q: 0,
        D: 0,
        N: 0,
        P: 0,
        error: function(){
            return({ error:
            'You are rich, my friend! We don\'t have so much coins for exchange' });},
        empty: function(){ 
            return({});}
    };
    var change = Object.create(coins);
    
    if (currency>=10000) {
        return coins.error();
    } else if (currency === 0 || currency<0) { 
        return coins.empty();
    } else { 
        if (currency>0) {
            var z=currency;
            var h =0, q=0, d=0, n=0, p=0;
            while  (z>=50) {
                z= z-50;      
                h++;                                
            }
            while(z>=25){
                z= z-25;      
                q++;
            }
            while(z>=10){
                z= z-10;      
                d++;
            }
            while(z>=5){
                z= z-5;      
                n++;
            }
            while(z>=1){
                z= z-1;      
                p++;
            }

            if (h>0) {            
                change.H = h;
            }
            if (q>0) {            
                change.Q = q;
            }
            if (d>0) {            
                change.D = d;
            }
            if (n>0) {            
                change.N = n;
            }
            if (p>0) {            
                change.P = p;
            }
            
        } 
        
        for (var key in change) {
          key += change[key];
        } 
        return (change);
    }
}