// Create a variable to hold the NFTs
var nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
  var nft = {
    name: name,
    eyeColor: eyeColor,
    shirtType: shirtType,
    bling: bling
  };
  nfts.push(nft);
}

// Create a loop that will go through an array of NFTs
// and print their metadata with console.log()
function listNFTs() {
  console.log("NFT Details:");
  for (var i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name);
    console.log("Eye Color: " + nfts[i].eyeColor);
    console.log("Shirt Type: " + nfts[i].shirtType);
    console.log("Bling: " + nfts[i].bling);
    console.log("-------------------");
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total Supply: " + nfts.length);
}

// Call your functions below this line

mintNFT("Epic NFT 1", "Blue", "T-shirt", "Gold Chain");
mintNFT("Awesome NFT", "Green", "Hoodie", "Diamond Ring");

listNFTs();

getTotalSupply();

