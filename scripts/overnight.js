const currency = amt => "$" + amt.toFixed(2);
const percent = p => (p * 100).toFixed(0) + "%";

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("estimatedCost").addEventListener("click", ()=>{
        debugger
        let total = 0;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const checkInDate = new Date(document.getElementById("checkin").value);
        const nights = new Date(document.getElementById("checkout").value);         



        let room = "queenr";
        if(document.getElementById("kingr").checked){
            room = "king";
        } else if(document.getElementById("suiter").checked){
            room = "suite";
        }

        const adults = Number(document.getElementById("adults").value);
        const children = Number(document.getElementById("children").value);
       
        let discount = 0;
        if(document.getElementById("discountAAASenior").checked){
            discount = .10;
        } else if(document.getElementById("discountMilitary").checked){
            discount = .20;
        }
        const m = checkInDate.getMonth();
        const JUNE = 5; // 0 based e. January is zero
        const AUGUST = 7; // 0 based e. January is zero
        let peakSeason = (m >= JUNE && m <= AUGUST);

        let rate = 150;

        if(room=="suite" && peakSeason){
            rate = 350;
        }else if(room == "suite" && !peakSeason){
            rate = 210;
        }else if(peakSeason){
            rate = 250;
        }
        const days = nights - checkInDate
        const ms = 1000 * 60 * 60 * 24
        const costPerDay = days / ms
        total = costPerDay * rate;
        const discountAmount = total * discount;
        const discountedTotal = total - discountAmount;
        const tax = discountedTotal * 0.2
        const overallTotal = tax + discountedTotal

        // const text = `
        // Name: ${name}
        // Email: ${email}
        // Date: ${checkInDate.toLocaleDateString()}
        // Is Peak Season: ${peakSeason}
        // Nights: ${nights}
        // Room: ${room}
        // Adults: ${adults}
        // Children: ${children}

        // SubTotal: ${currency(total)}

        // Discount Percent: ${percent(discount)}
        // Discount Amount: ${currency(discountAmount)}

        // Discounted Total: ${currency(discountedTotal)}
        
        
        totalCost.value = overallTotal;
    });
    
});