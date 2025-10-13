function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {
    // Konversi string mnjadi number
    gpa = parseFloat(gpa);

    // validasi GPA
    if (gpa < 0 || gpa > 4) {
        return 'Invalid gpa number'
    }

    // Daftar program studi
    const programNames = {
        'ACC': 'Akuntansi',
        'HIN': 'Hubungan Internasional',
        'IAB': 'Ilmu Administrasi Bisnis',
        'IAP': 'Ilmu Administrasi Publik',
        'MJN': 'Manajemen',
        'TKM': 'Teknik Kimia'
    }

    // Validasi ProgramID
    const programName = programNames[programId] 
    if (!programName) {
        return 'Invalid program ID'
    }

    let sks;
    let message;

    // Menentukan SKS berdasarkan GPA
    if (gpa > 2.99) {
        sks = 24
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan`
    } else if (gpa >= 2.5) {
        sks = 21;
        message = ` Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan`
    } else if (gpa >= 2) {
        sks = 18;
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembingbing pada prodi ${programName} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan`
    }else if (gpa >= 1.5) {
        sks = 15;
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembibing pada prodi ${programName} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan`
    } else {
        sks = 12;
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programName} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan`
    }

    return message
}

console.log(krsApplication("Agus", "HIN", "1"))
console.log(krsApplication("Rahmat", "IAB", "4"))
console.log(krsApplication("Sidqi", "HIN", "2"))


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;
