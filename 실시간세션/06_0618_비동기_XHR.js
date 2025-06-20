// 비동기란?
// 
for (let i=0; i<10; i++) {
    setTimeout(() => {
        console.log(new Date());
    }, 1000);
}