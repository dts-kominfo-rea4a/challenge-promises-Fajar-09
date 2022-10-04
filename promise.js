const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve) => {
    let marah = 0;
    let tidakMarah = 0;
    (async () => {
      const IXX = await promiseTheaterIXX();
      const VGC = await promiseTheaterVGC();

      for (let i = 0; i < IXX.length; i++) {
        if (IXX[i].hasil === "marah") {
          marah++;
        } else {
          tidakMarah++;
        }
      }
      for (let i = 0; i < VGC.length; i++) {
        if (VGC[i].hasil === "marah") {
          marah++;
        } else {
          tidakMarah++;
        }
      }
      if (emosi === "marah") {
        resolve(marah);
      } else {
        resolve(tidakMarah);
      }
    })();
  });
};

module.exports = {
  promiseOutput,
};
