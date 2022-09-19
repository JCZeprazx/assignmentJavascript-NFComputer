function calculation(operator){

    let frm = document.getElementById('calcForm');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    
    switch (operator) {
        case 'plus':
            if (isNaN(a1) || isNaN(a2)) {
                swal({
                    title: "Yang anda input bukan angka"});
            }    
            else {
                let total = a1 + a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
        case 'minus':
            if (isNaN(a1) || isNaN(a2)) {
                swal({
                    title: "Yang anda input bukan angka"});
            }    
            else {
                let total = a1 - a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
        case 'multiply':
            if (isNaN(a1) || isNaN(a2)) {
                swal({
                    title: "Yang anda input bukan angka"});
            }
            else {
                let total = a1 * a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
        case 'divide':
            if (isNaN(a1) || isNaN(a2)) {
                swal({
                    title: "Yang anda input bukan angka"});
            }
            else {
                let total = a1 / a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
        case 'pow':
            if (isNaN(a1) || isNaN(a2)) {
                swal({
                    title: "Yang anda input bukan angka"});
            }
            else {
                let total = Math.pow(a1,a2); //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
    
        default:
            break;
    }
}