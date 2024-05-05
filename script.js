function volume_sphere() {
    let r=document.getElementById("radius").value;
	let v=(4/3) * Math.PI * Math.pow(r, 3);
	v = v.toFixed(4);
	document.getElementById("volume").value=v;
	return false;
	}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
