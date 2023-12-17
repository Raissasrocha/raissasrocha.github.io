let n = 0

function animacao () {
    if (n === 0) {
        $('.coracao') .css('width', '440px')
        $('.coracao') .css('height', '440px')
        n+=1
    }else if (n === 1) {
        $('.coracao') .css('width', '444px')
        $('.coracao') .css('height', '444px')
        n+=1
    }else if (n === 2) {
        $('.coracao') .css('width', '446px')
        $('.coracao') .css('height', '446px')
        n+=1
    }else if (n === 3) {
        $('.coracao') .css('width', '448px')
        $('.coracao') .css('height', '448px')
        n+= 1
    }else if (n === 4) {
        $('.coracao') .css('width', '446px')
        $('.coracao') .css('height', '446px')
        n+=1
    }else if (n === 5) {
        $('.coracao') .css('width', '444px')
        $('.coracao') .css('height', '444px')
        n=0
    }
}

setInterval(animacao, 200)
