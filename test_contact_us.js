// Script to test Contact Us Inputs

let e_mails = ['123@gmail.com' , 'james@gmail.com', 'john.com' ,'Arun.kumar@gmail.com']
let names = ['Soham' , 'K' , 'Mona#123@' , 'Lohadmsamasawmeknadaswertas ']
let queries = ['Product Faulty' , '' , 'krxuustdmyfqheddayusduvdeixsoygjjipvmywggkljimeadwruzdaqoksevweyxllbgjhyjosnxjrmwiyzsyobwjcqbofawydygecxbmbcurowgtmwbakoumxpsddinlpqxxzcrsmzxymlzriejljjqxesjldpsswddwutlamibyywbgjqzjulsmmauayfwmpjdbahpmuisycfiynilcssvjgtcmandcxupqdsingakeefcqwmidshvfjnywmpdckmropfyvugiagewqxluqafywtsygxppxfrnjmouffk']

let e_mail_checker = function(e_mail){
    bool_e_mail_length_check = (e_mail.length >= 10 && e_mail.length <= 30);
    bool_at_the_rate_symbol = e_mail.includes('@');
    bool_start_symbol = !(e_mail[0].toUpperCase() == e_mail[0].toLowerCase());


    return bool_e_mail_length_check && bool_at_the_rate_symbol && bool_start_symbol;
}

let query_checker = function(query){
    return (query.length > 0 && query.length <= 256)
}

let names_checker = function(name){
    if(name.length <= 1 || name.length > 20){
        return false;
    }
    for(j=0;j<name.length;j++){
        // check for alphabet
        if((name[j].toUpperCase() == name[j].toLowerCase()))
            return false;
    }
    // All checks passed
    return true;
}
// Check E_mails
console.log('--------------------E-mail Testing----------------')
for(i=0;i<e_mails.length;i++){
    console.log(e_mails[i]+':')
    console.log(e_mail_checker(e_mails[i]));
}

// Check Queries
console.log('------------------Query Testing-------------------')
for(i=0;i<queries.length;i++){
    console.log(queries[i]+':')
    console.log(query_checker(queries[i]));
}

// Check Names
console.log('------------------Names Testing-------------------')
for(i=0;i<names.length;i++){
    console.log(names[i]+':')
    console.log(names_checker(names[i]))
}