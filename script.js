const VIP_KEY = "VIP-2026-XK8M-H4QP";

fetch("https://api.ipify.org?format=json")
.then(r=>r.json())
.then(data=>{
document.getElementById("ip").innerText=data.ip;
});

function activeKey(){

const key=document.getElementById("key").value.trim();

if(key!==VIP_KEY){

document.getElementById("status").innerHTML="❌ Không hợp lệ";
document.getElementById("type").innerHTML="---";
document.getElementById("active").innerHTML="---";
document.getElementById("expire").innerHTML="---";

return;
}

const today=new Date();
const expire=new Date(today);

expire.setFullYear(expire.getFullYear()+10);

document.getElementById("status").innerHTML="🟢 Đã kích hoạt";
document.getElementById("type").innerHTML="VIP";
document.getElementById("active").innerHTML=today.toLocaleDateString("vi-VN");
document.getElementById("expire").innerHTML=expire.toLocaleDateString("vi-VN");

}
