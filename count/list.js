const myArray = [
    "SLH", "LBB", "YHY", "UDN", "MNR", "WF", "IDS", "DNN", "MRJ", "ANM", "SRR", "BDL", "USM", "KHL", "UHS", "ASY", "IDT", "MNS", "MSR", "DRW", "HFD",
    "YHY", "SLH", "LBB", "RIF", "WF", "IDS", "MRJ", "ANM", "MNR", "DNN", "BDL", "URB", "DMN", "USM", "KHL", "IDT", "UHS", "MSR", "DRW", "UMR", "MIS",
    "WF", "YHY", "SLH", "BGS", "RIF", "LBB", "ANM", "MRJ", "DNN", "BCH", "URB", "KHL", "BDL", "ASY", "BHJ", "UMR", "MSR", "AFF", "WHB", "MNS", "MRW",
    "MRW", "USY", "YHY", "RIF", "MNR", "ANM", "IDS", "FQH", "MRJ", "BCH", "SRR", "DMN", "HMD", "USM", "MZN", "UHS", "IDT", "DRW", "MNS", "MSR", "HFD",
    "USY", "MRW", "WF", "ASP", "RIF", "BGS", "ANM", "IDS", "FQH", "FRH", "DMN", "KHL", "USM", "HMD", "ASY", "WHB", "UMR", "MZN", "MSR", "DRW", "MRW",
    "SLH", "WF", "USY", "LBB", "BGS", "RIF", "BCH", "MRJ", "ANM", "MNR", "URB", "SRR", "KHL", "BHJ", "HMD", "UMR", "AFF", "MSR", "MZN", "WHB", "IBR2",
    "LBB", "SLH", "MTF", "MNJ", "UDN", "BGS", "IDS", "DNN", "BCH", "FQH", "MZN", "DMN", "USM", "KHL", "UHS", "AFF", "IDT", "MNS", "MSR", "DRW", "HFD",
    "MRW", "WF", "MNJ", "UDN", "LBB", "IDS", "BGS", "FQH", "MNR", "DNN", "DMN", "MZN", "HMD", "USM", "KHL", "IDT", "UHS", "MSR", "DRW", "MNS", "IBR2",
    "MNJ", "MRW", "SLH", "ASP", "MNR", "ANM", "BCH", "LBB", "DNN", "FRH", "KHL", "SDQ", "BHJ", "DMN", "IDT", "HMD", "MSR", "WHB", "MNS", "URB", "ASR",
    "YHY", "MNJ", "SLH", "BGS", "MNR", "WF", "MRJ", "BCH", "LBB", "ANM", "BDL", "SRR", "KHL", "USM", "ASY", "UHS", "MZN", "MSR", "MNS", "DRW", "MIS",
    "MNJ", "YHY", "MTF", "ASP", "WF", "BCH", "LBB", "IDS", "ANM", "FRH", "SRR", "BDL", "USM", "DMN", "IDT", "ASY", "MSR", "DRW", "URB", "MZN", "YDN",
    "YHY", "SLH", "MTF", "WF", "MNJ", "RIF", "BGS", "ANM", "MRJ", "MNR", "KHL", "BHJ", "BDL", "ASY", "HMD", "MZN", "WHB", "URB", "UMR", "MSR", "MRW",
    "SLH", "YHY", "WF", "MNJ", "RIF", "IDS", "MRJ", "BCH", "MNR", "FQH", "BDL", "URB", "DMN", "MZN", "IDT", "ASY", "UMR", "MNS", "DRW", "AFF", "MIS",
    "YHY", "SLH", "MNJ", "BGS", "UDN", "RIF", "FQH", "IDS", "MRJ", "MNR", "SRR", "BDL", "MZN", "DMN", "ASY", "IDT", "HMD", "DRW", "URB", "MNS", "IBR",
    "WF", "MRW", "YHY", "RIF", "BGS", "BCH", "IDS", "MRJ", "FQH", "LBB", "BHJ", "SRR", "BDL", "ASY", "SDQ", "UHS", "IDT", "UMR", "AFF", "MSR", "MNB",
    "USY", "MNJ", "YHY", "WF", "RIF", "BGS", "MRJ", "IDS", "BCH", "DNN", "BDL", "DMN", "SDQ", "ASY", "UHS", "IDT", "HMD", "URB", "MSR", "UMR", "MIS",
    "SLH", "YHY", "USY", "RIF", "BGS", "IDS", "FQH", "DNN", "MNR", "FRH", "SDQ", "BDL", "DMN", "HMD", "IDT", "ASY", "UHS", "UMR", "DRW", "MSR", "IBR",
    "MRW", "USY", "SLH", "ASP", "MNJ", "RIF", "BGS", "MRJ", "DNN", "MNR", "DMN", "SRR", "BDL", "SDQ", "ASY", "HMD", "MSR", "DRW", "UMR", "URB", "IBR2"
];

console.log([...new Set(myArray)]);

document.body.onkeydown((e) => console.log(e));