const namaKelas = [
    "TSANAWIYAH 1-A",
    "TSANAWIYAH 1-B",
    "TSANAWIYAH 1-C",
    "TSANAWIYAH 1-D",
    "TSANAWIYAH 1-F",
    "TSANAWIYAH 1-G",
    "TSANAWIYAH 2-A",
    "TSANAWIYAH 2-B",
    "TSANAWIYAH 2-C",
    "TSANAWIYAH 2-D",
    "TSANAWIYAH 2-E",
    "TSANAWIYAH 2-F",
    "TSANAWIYAH 2-G",
    "TSANAWIYAH 2-H",
    "TSANAWIYAH 2-I",
    "TSANAWIYAH 2-J",
    "TSANAWIYAH 3-A",
    "TSANAWIYAH 3-B",
    "TSANAWIYAH 3-C",
    "TSANAWIYAH 3-D",
    "TSANAWIYAH 3-E",
    "TSANAWIYAH 3-F",
    "TSANAWIYAH 3-G",
    "TSANAWIYAH 3-H",
    "TSANAWIYAH 3-I",
    "TSANAWIYAH 3-J",
    "ISTI'DAD",
    "ALIYAH 1-A",
    "ALIYAH 1-B",
    "ALIYAH 1-C",
    "ALIYAH 1-D",
    "ALIYAH 1-E",
    "ALIYAH 1-F",
    "ALIYAH 2-A",
    "ALIYAH 2-B",
    "ALIYAH 2-C",
    "ALIYAH 2-D",
    "ALIYAH 3-A",
    "ALIYAH 3-B",
];

let selAP2 = "";

function print() {
    for (let i = 0; i < namaKelas.length; i++) {
        selAP2 = namaKelas[i];
        activeSheet.PrintOut;
    }
}