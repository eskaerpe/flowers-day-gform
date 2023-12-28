// HARGA ALL ITEMS
var hargaPaketA = 20000;
var hargaPaketB = 25000;
var hargaBouquet = 15000;
var hargaBatangan = 10000;
var hargaPesan = 5000;

var jumlahPenerima = 1;

var GFormsPengirimName = {
    // Data Pengirim
    emailPengirim: "entry.1592840593",
    nomorTeleponPengirim: "entry.812587699",
    namaPengirim: "entry.287391154",
    kelasPengirim: "entry.2133329921",

    // Data Penerima 1
    namaPenerima1: "entry.1336288915",
    kelasPenerima1: "entry.1967255455",
    paketPenerima1: "entry.851185307",
    pesanPenerima1: "entry.1519282563",

    // Data Penerima 2
    namaPengirim2: "entry.1352286003",
    kelasPengirim2: "entry.508962244",
    namaPenerima2: "entry.1016256525",
    kelasPenerima2: "entry.821868320",
    paketPenerima2: "entry.1083087706",
    pesanPenerima2: "entry.551598349",

    // Data Penerima 3
    namaPengirim3: "entry.1978832972",
    kelasPengirim3: "entry.1235934584",
    namaPenerima3: "entry.148643492",
    kelasPenerima3: "entry.1810191057",
    paketPenerima3: "entry.938679024",
    pesanPenerima3: "entry.1776113027",

    // Data Penerima 4
    namaPengirim4: "entry.747980189",
    kelasPengirim4: "entry.376659577",
    namaPenerima4: "entry.165216699",
    kelasPenerima4: "entry.1379831424",
    paketPenerima4: "entry.1701338243",
    pesanPenerima4: "entry.659937213",

    // Data Penerima 5
    namaPengirim5: "entry.2135190722",
    kelasPengirim5: "entry.1892512620",
    namaPenerima5: "entry.515182497",
    kelasPenerima5: "entry.866986164",
    paketPenerima5: "entry.61340545",
    pesanPenerima5: "entry.734914188",

    // Data Penerima 6
    namaPengirim6: "entry.1800169115",
    kelasPengirim6: "entry.1584508544",
    namaPenerima6: "entry.1707055056",
    kelasPenerima6: "entry.1394485322",
    paketPenerima6: "entry.1379899113",
    pesanPenerima6: "entry.1971979890",

    // Data Penerima 7
    namaPengirim7: "entry.1284844712",
    kelasPengirim7: "entry.1540408415",
    namaPenerima7: "entry.1048854697",
    kelasPenerima7: "entry.2010214485",
    paketPenerima7: "entry.1111240078",
    pesanPenerima7: "entry.334298897",

    // Data Penerima 8
    namaPengirim8: "entry.1343634214",
    kelasPengirim8: "entry.1174309652",
    namaPenerima8: "entry.27487306",
    kelasPenerima8: "entry.792640165",
    paketPenerima8: "entry.1187056581",
    pesanPenerima8: "entry.1497531873",

    // Data Penerima 9
    namaPengirim9: "entry.2125958449",
    kelasPengirim9: "entry.1032745196",
    namaPenerima9: "entry.1057268572",
    kelasPenerima9: "entry.1666668502",
    paketPenerima9: "entry.486274074",
    pesanPenerima9: "entry.915689266",

    // Data Penerima 10
    namaPengirim10: "entry.2083775575",
    kelasPengirim10: "entry.1587746048",
    namaPenerima10: "entry.173531334",
    kelasPenerima10: "entry.1564159708",
    paketPenerima10: "entry.664482798",
    pesanPenerima10: "entry.34184524",
};

function checkFieldsAndShowSection() {
    // Dapatkan elemen input dan section
    var namaPengirim = document.getElementById("nama-pengirim");
    var kelasPengirim = document.getElementById("kelas-pengirim");
    var emailPengirim = document.getElementById("email-pengirim");
    var nomorTeleponPengirim = document.getElementById("nomor-telepon-pengirim");
    var penerimaSection = document.getElementById("penerima-section");

    // Periksa apakah semua field telah diisi
    if (namaPengirim.value !== "" && kelasPengirim.value !== "" && emailPengirim.value !== "" && nomorTeleponPengirim.value !== "") {
        // Jika semua field telah diisi, tampilkan section penerima
        penerimaSection.style.display = "";
        document.querySelector(".tombol-next").style.display = "none";
        // document.querySelector("#tombol-submit").style.display = "";
        // document.querySelector("#tambah-penerima-btn").style.display = "";
        document.querySelector(".keterangan").style.display = "";
    } else {
        // Jika tidak, beri peringatan kepada pengguna
        // alert("Harap isi semua field data pengirim sebelum melanjutkan.");
        $("#warningIsiDataPengirimModal").modal("show");
    }
}

function showTutorial() {
    $("#onLoadModal").modal("show");
}

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
    var bouquetChecked = elementPenerima.querySelector("#bouquet").checked;
    var batanganChecked = elementPenerima.querySelector("#batangan").checked;
    var pesan = elementPenerima.querySelector("#pesan");

    var harga = elementPenerima.querySelector("#harga");

    var hargaSatuPenerima = 0;

    if (paketAchecked) {
        hargaSatuPenerima += hargaPaketA;
    }
    if (paketBchecked) {
        hargaSatuPenerima += hargaPaketB;
    }
    if (bouquetChecked) {
        hargaSatuPenerima += hargaBouquet;
    }
    if (batanganChecked) {
        hargaSatuPenerima += hargaBatangan;
    }

    if (paketAchecked || paketBchecked || bouquetChecked || batanganChecked) {
        pesan.removeAttribute("disabled");
    }
    if (!paketAchecked && !paketBchecked && !bouquetChecked && !batanganChecked) {
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
        removeButton.setAttribute("onclick", `removePenerima('penerima-${jumlahPenerima}')`);
        removeButton.setAttribute("id", `remove-button-${jumlahPenerima}`);

        // GOOGLE FORMS THINGY WITH THE NAME
        var namaPengirimClone = newTr.querySelector("#nama-pengirim");
        var kelasPengirimClone = newTr.querySelector("#kelas-pengirim");

        var namaPenerima = newTr.querySelector("#nama-penerima");
        var kelasPenerima = newTr.querySelector("#kelas-penerima");
        var paketPenerimaA = newTr.querySelector("#paket-A");
        var paketPenerimaB = newTr.querySelector("#paket-B");
        var bouquetPenerima = newTr.querySelector("#bouquet");
        var batanganPenerima = newTr.querySelector("#batangan");
        var pesanPenerima = newTr.querySelector("#pesan");

        // Testing in console
        console.log(namaPengirimClone);
        console.log(kelasPengirimClone);

        console.log(namaPenerima);
        console.log(kelasPenerima);
        console.log(paketPenerimaA);
        console.log(paketPenerimaB);
        console.log(bouquetPenerima);
        console.log(batanganPenerima);
        console.log(pesanPenerima);
        // EDIT GOOGLE FORMS ATTRIBUTE NAME
        namaPengirimClone.setAttribute("name", GFormsPengirimName[`namaPengirim${jumlahPenerima}`]); //
        kelasPengirimClone.setAttribute("name", GFormsPengirimName[`kelasPengirim${jumlahPenerima}`]); //

        namaPenerima.setAttribute("name", GFormsPengirimName[`namaPenerima${jumlahPenerima}`]); //
        kelasPenerima.setAttribute("name", GFormsPengirimName[`kelasPenerima${jumlahPenerima}`]); //
        paketPenerimaA.setAttribute("name", GFormsPengirimName[`paketPenerima${jumlahPenerima}`]); //
        paketPenerimaB.setAttribute("name", GFormsPengirimName[`paketPenerima${jumlahPenerima}`]); //
        bouquetPenerima.setAttribute("name", GFormsPengirimName[`paketPenerima${jumlahPenerima}`]); //
        batanganPenerima.setAttribute("name", GFormsPengirimName[`paketPenerima${jumlahPenerima}`]); //
        pesanPenerima.setAttribute("name", GFormsPengirimName[`pesanPenerima${jumlahPenerima}`]); //

        namaPengirimClone.setAttribute("value", document.getElementById("nama-pengirim").value);
        kelasPengirimClone.setAttribute("value", document.getElementById("kelas-pengirim").value);

        console.log(namaPengirimClone.value);
        console.log(kelasPengirimClone.value);
    } else if (jumlahPenerima >= 10) {
        $("#maxPenerimaModal").modal("show");
    }
}

function isNumber(value) {
    return typeof value === "number";
}

function removePenerima(IDPenerima) {
    var form = document.querySelector("form");
    form.removeAttribute(onchange);

    var penerima = document.getElementById(IDPenerima);
    var hargaPenerima = penerima.querySelector("#harga");

    if (isNumber(hargaPenerima)) {
        hargaTotal -= Number(hargaPenerima.textContent);

        var totalHargaElement = document.querySelector("#total-harga-keseluruhan");
        totalHargaElement.textContent = ` Rp.${hargaTotal.toLocaleString("id-ID")}`;
    }
    penerima.parentNode.removeChild(penerima);
    penerima.remove();
    form.setAttribute(onchange, "showHargaKeseluruhan()");
    console.log(hargaTotal);
}

function Bayar() {}

function validateForm() {
    var form = document.querySelector("form");
    var inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute("required") && inputs[i].value === "") {
            $("#warningIsiDataPengirimModal").modal("show");
            return false;
        }
    }
    return true;
}

function validateFormTable() {
    var table = document.querySelector("table");
    for (var i = 1; i < table.rows.length; i++) {
        console.log(i);
        var colHarga = document.querySelector(`table tr:nth-child(${i + 1}) td:nth-child(9)`);
        if (colHarga.textContent === "-" || colHarga.textContent === "0") {
            $("#warningPilihProdukModal").modal("show");
            return false;
        }
        // var cols = rows[i].getElementsByTagName("td");
        // if (cols.length > 7) {
        //     var value = cols[7].innerText;
        //     if (value === "-" || value === "0") {
        //         alert('Kolom ke-8 tidak boleh berisi "-" atau 0');
        //         return false;
        //     }
        // }
    }

    return true;
}

linkBuktiPembayaran = "";

var fileInput = document.getElementById("bukti-pembayaran-input-file");
fileInput.addEventListener("change", (e) => {
    var gambar = fileInput.files[0];
    document.getElementById("status-file-bukti-pembayaran").src = URL.createObjectURL(gambar);
});

function validateBuktiPembayaran() {
    var fileInput = document.getElementById("bukti-pembayaran-input-file");

    var gambar = fileInput.files[0];
    if (!gambar) {
        $("#buktiPembayaranConfirmationModal").modal("show");
        return false;
    }
    let payload = new FormData();
    payload.append("image", gambar); // Ganti 'File' dengan file gambar Anda

    fetch("https://api.imgbb.com/1/upload?key=1b4ee72305d5537e9aecb8ab2336e1f0", {
        method: "POST",
        body: payload,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("response", data);
            console.log("response URL", data.data.image.url); // Ini adalah URL gambar Anda
            linkBuktiPembayaran = data.data.image.url;
        })
        .catch((error) => {
            console.log("error", error);
        });
    return true;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function submitFormModal() {
    if (validateForm() == true) {
        if (validateFormTable() == true) {
            if (validateBuktiPembayaran() == true) {
                $("#loadingModal").modal("show");
                sleep(5000).then(() => {
                    $("#loadingModal").modal("hide");
                    console.log("hlo");
                    document.getElementById("total-harga-keseluruhan-to-form").value = hargaTotal;
                    document.getElementById("link-bukti-pembayaran-to-form").value = linkBuktiPembayaran;
                    $("#submitConfirmationModal").modal("show");
                });
            }
        }
    }
}

function submitForm() {
    // var form = document.querySelector("form");
    // form.submit();

    var tombolSubmitDalamFormTag = document.getElementById("button-submit-inside-form");
    tombolSubmitDalamFormTag.click();
}

window.onload = function () {
    if (!window.location.hash) {
        window.location = window.location + "#loaded";
        window.location.reload();
    }
};

// $(document).ready(function () {
//     // Show the Modal on load
//     $("#onLoadModal").modal("show");
// });
