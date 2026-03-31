function clickTracker(){
    let count=0;
    return function(){
        count++;
        document.getElementById("count").textContent=count;
        
    };
}
const trackClick=clickTracker();
document.getElementById("btn").addEventListener("click",trackClick);