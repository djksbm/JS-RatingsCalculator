function collect_ratings(){
    let ratings = {
        count:0,
        sum:0,
        average:0
    }
    const elements= document.querySelectorAll('.rating');
    let rating = 0;
    elements.forEach(element => {
        rating = Number.parseInt(element.id.replace('star',''));
        ratings.count += 1;;
        ratings.sum += Number.parseInt(element.value)*rating;
    });
    if(ratings.count !== 0 ){
        ratings.average=ratings.sum/ratings.count;
    }
    return ratings;
}

document.addEventListener('change', ()=>{
    const ratings = collect_ratings();
    document.querySelector('#average').value = ratings.average.toFixed(2);
})