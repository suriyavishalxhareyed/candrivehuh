document.getElementById("bid").onclick= async function(){
    let num=document.getElementById("iid").value;
    const responce= await fetch(`/check?age=${age}`);
    const data =await responce.text();
    document.getElementById("oid").textContent=data;
}