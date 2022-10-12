const hashStringToInt = (string, tableSize) => {
  let hash = 17;

  for ( let i = 0; i < string.length; i++) {
    hash = (13 * hash * string.charCodeAt(i)) % tableSize
  }
  return hash;

}

class HashTable {
  table = new Array(17);

  setItem = (key, value) => {
    const index = hashStringToInt( key, this.table.length);
    if (this.table[index]) {
      this.table[index].push[[key , value]]
    } else {
      this.table[index] = [[key, value]];
    }
  };

  getItem = key => {
    const index = hashStringToInt(key, this.table.length);
    return this.table[index].find(x =>[0] === key);
  }
}

const myTable = new HashTable();
myTable.setItem("Chris", "Abiva");
myTable.setItem("Ben");
myTable.setItem("Ben", "Abiva");
myTable.setItem("Axl", "Abiva");
// console.log(myTable.getItem("Chris"));
console.log(1, myTable.table);
console.log(2, myTable);