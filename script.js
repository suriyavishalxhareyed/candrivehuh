document.getElementById("bid").onclick= async function(){
    let num=document.getElementById("iid").value;
    const responce= await fetch(`http://localhost:3000/check?age=${age}`);
    const data =await responce.text();
    document.getElementById("oid").textContent=data;
}
