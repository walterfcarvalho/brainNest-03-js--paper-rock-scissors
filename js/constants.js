const MSG = {
    win: ["%c   😉      You win !!      ",
        "background-color: green ; color: white ; font-weight: bold ; " +
        "font-size: 40px ; widht:100%;  " +
        "font-family: 'american typewriter'; text-shadow: 1px 1px 5px black ;"]
        
        , lost: ["%c    😔  You lost...      ",
        "background-color: red ; color: white ; font-weight: bold ; " +
        "font-size: 40px ; " +
        "font-family: 'american typewriter'; text-shadow: 1px 1px 5px black ;"]
        
        , draw: ["%c    😐  Draw      ",
        "background-color: yellow; color: white ; font-weight: bold ; " +
        "font-size: 40px; " +
        "font-family: 'american typewriter'; text-shadow: 1px 1px 5px black ;"]

        , giveUp: ["%c  😢 Oh no, you choosed give up.      ",
        "background-color: gray ; color: white ; font-weight: bold ; " +
        "font-size: 40px ; " +
        "font-family: 'american typewriter'; text-shadow: 1px 1px 5px black ;"]

        , begin: ["%c✊  ✋  🖖  Let's begin  ",  
        "background-color: blue; color: white ; font-weight: bold ; " +
        "font-size: 40px ; " +
        "font-family: 'american typewriter'; text-shadow: 1px 1px 5px black ;"]
        
    , validation: [
        "No, no no, you should choose 1,2 or 3.",
        "Duh! there is only three options 1,2 or 3.",
        "Keep calm and choose 1,2 or 3. ",
        `if you are a machine, I'll explain in your language: 
    01000011 01101000 01101111 01101111 01110011 01100101 
    00100000 01111001 01101111 01110101 01110100 00100000 
    01010011 01101000 01101111 01110100 00101100 00100000 
    00110001 00111010 01010010 01101111 01100011 01101011 
    00101100 00100000 00110010 00111010 01010000 01100001 
    01110000 01100101 01110010 00101100 00100000 00110011 
    00111010 01010011 01100011 01101001 01110011 01110011 
    01101111 01110010 01110011`
    ]
}

const SHOTS_MAP = {
    'Rock-Paper': { value: -1, message: 'Rock is covered by Paper' },
    'Rock-Scissors': { value: 1, message: 'Rock breaks Scissors' },
    'Paper-Scissors': { value: -1, message: 'Paper is cutted by Scissors' },
    'Paper-Rock': { value: 1, message: 'Paper covers Rock' },
    'Scissors-Rock': { value: -1, message: 'Scissors is breaked by Rock' },
    'Scissors-Paper': { value: 1, message: 'Scissors cuts Paper' },
}

export { MSG, SHOTS_MAP }