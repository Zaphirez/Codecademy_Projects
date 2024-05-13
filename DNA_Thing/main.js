// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (int, BaseArr) => {
    const returnObj = {
        specimenNum: int,
        dna: BaseArr,

        mutate() {
          const randIndex = Math.floor(Math.random() * this.dna.length);
          let newBase = returnRandBase();
          while(this.dna[randIndex] === newBase) {
            newBase = returnRandBase();
          }
          this.dna[randIndex] = newBase;
          return this.dna
        },

        compareDNA(pAequor) {
          var commonDNA = 0;
          for (let i = 0; i < pAequor.length; ++i) {
            if(pAequor[i] === this.dna[i]){
              commonDNA += 1;
            }
          }
          if (commonDNA > 0) {
            return `Specimen #1 and Specimen #2 have ${commonDNA / pAequor.length * 100}% DNA in common!`
          } else {
            return `No common DNA!`
          }
        },

        willLikelySurvive() {
          var Count = 0;
          for (let i = 0; i < this.dna.length; ++i) {
            if (this.dna[i].toUpperCase() === "C" || this.dna[i].toUpperCase() === "G") {
              Count += 1;
            }
          }
          // Check if the Specimen Survives
          // it only survives if 60% is reached
          var one_percent = 15 / 100;
          var percentVal = Count / one_percent
          return percentVal > 60
        }
    };
    return returnObj
}






