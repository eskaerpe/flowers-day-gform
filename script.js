var hargaPaketA = 15000;
var hargaPaketB = 20000;
var hargaPaketC = 25000;
var hargaPesan = 5000;

var jumlahPenerima = 1;

var nameGoogleForms = {
	namaPengirim: "entry.287391154",
	kelasPengirim: "entry.2133329921",
};

// var elementPenerima = document.getElementById(IDPenerima);
// var namaPenerimaValue = document.getElementById("nama-penerima").value;
// var kelasPenerimaValue = document.getElementById("kelas-penerima").value;
// var paketAchecked = elementPenerima.querySelector("#paket-A").checked;
// var paketBchecked = elementPenerima.querySelector("#paket-B").checked;
// var paketCchecked = elementPenerima.querySelector("#paket-C").checked;
// var pesanValue = document.getElementById("pesan").value;
// var hargaElement = elementPenerima.querySelector("#harga");
var hargaTotal = 0;

function showHarga(IDPenerima) {
	// define element penerima
	var elementPenerima = document.getElementById(IDPenerima);

	// fetch all child  in element penerima
	var paketAchecked = elementPenerima.querySelector("#paket-A").checked;
	var paketBchecked = elementPenerima.querySelector("#paket-B").checked;
	var paketCchecked = elementPenerima.querySelector("#paket-C").checked;
	var pesan = elementPenerima.querySelector("#pesan");

	var harga = elementPenerima.querySelector("#harga");

	var hargaSatuPenerima = 0;

	if (paketAchecked) {
		hargaSatuPenerima += hargaPaketA;
		// hargaTotal += hargaPaketA;
	}
	if (paketBchecked) {
		hargaSatuPenerima += hargaPaketB;
		// hargaTotal += hargaPaketB;
	}
	if (paketCchecked) {
		hargaSatuPenerima += hargaPaketC;
		// hargaTotal += hargaPaketC;
	}

	if (paketAchecked || paketBchecked || paketCchecked) {
		pesan.removeAttribute("disabled");
	}
	if (!paketAchecked && !paketBchecked && !paketCchecked) {
		pesan.setAttribute("disabled", "");
	}
	if (pesan.value != "") {
		hargaSatuPenerima += hargaPesan;
		// hargaTotal += hargaPesan;
	}

	// console.log(hargaTotal);
	harga.textContent = `${hargaSatuPenerima}`;
}

function showHargaKeseluruhan() {
	hargaTotal = 0;
	var totalHargaElement = document.querySelector("#total-harga-keseluruhan");
	var hargaElements = document.querySelectorAll("#harga");
	for (var i = 0; i < hargaElements.length; i++) {
		// Pastikan elemen "harga" berisi angka
		if (!isNaN(hargaElements[i].textContent)) {
			hargaTotal += Number(hargaElements[i].textContent);
		}
	}
	totalHargaElement.textContent = ` Rp.${hargaTotal.toLocaleString("id-ID")}`;
}

// Gunakan loop for untuk menjumlahkan semua elemen "harga"

function addPenerima() {
	if (jumlahPenerima < 10) {
		jumlahPenerima += 1;
		console.log(jumlahPenerima);
		// Dapatkan referensi ke elemen template
		var template = document.querySelector("#template-penerima");

		// Gunakan metode cloneNode untuk mengkloning konten template
		var clone = template.content.cloneNode(true);

		// Tambahkan kloningan ke dokumen
		var allPenerima = document.getElementById("all-penerima");
		var tableBody = allPenerima.querySelector("tbody");
		tableBody.appendChild(clone);
		// Dapatkan referensi ke elemen tr yang baru ditambahkan
		var newTr = tableBody.querySelector(`#penerima`);

		// Ubah atribut onchange dan id dari elemen tr
		newTr.setAttribute("onchange", `showHarga('penerima-${jumlahPenerima}')`);
		newTr.setAttribute("id", `penerima-${jumlahPenerima}`);

		// Dapatkan referensi ke elemen removeButton yang baru ditambahkan
		var removeButton = newTr.querySelector("#remove-button");

		// Ubah atribut onclick dan id dari elemen removeButton
		removeButton.setAttribute(
			"onclick",
			`removePenerima('penerima-${jumlahPenerima}')`
		);
		removeButton.setAttribute("id", `remove-button-${jumlahPenerima}`);
	} else if (jumlahPenerima >= 10) {
		alert(
			"Maaf, jumlah penerima setiap transaksi maksimal sebanyak 10 orang. Silahkan selesaikan transaksi ini terlebih dahulu, lalu ulangi lagi dari awal dengan penerima yang berbeda."
		);
	}
}

function removePenerima(IDPenerima) {
	var penerima = document.getElementById(IDPenerima);
	var hargaPenerima = penerima.querySelector("#harga");
	hargaTotal -= Number(hargaPenerima.textContent);

	var totalHargaElement = document.querySelector("#total-harga-keseluruhan");
	totalHargaElement.textContent = ` Rp.${hargaTotal.toLocaleString("id-ID")}`;

	penerima.parentNode.removeChild(penerima);
	penerima.remove();
}

function Bayar() {}
