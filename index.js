// Function To Create New Image
const newImage = function(src, pos, left, bottom) {
    let image = document.createElement(`img`);
    image.src = src;
    image.style.position = pos;
    image.style.left = left + `px`;
    image.style.bottom = bottom + `px`;
    document.body.append(image);
}
// Function To Create New Item
const newItem = function(src, pos, left, bottom) {
    let item = document.createElement(`img`);
    item.src = src;
    item.style.position = pos;
    item.style.left = left + `px`;
    item.style.bottom = bottom + `px`;
    document.body.append(item);
    item.addEventListener(`dblclick`, function() {
        item.remove()
    })
    return item;
}

// Creating Images
// CREATING GREEN CHARACTER
const greenCharacter = newImage(`./assets/green-character.gif`, `fixed`, 100, 100);
// CREATING PINE TREE
const pineTree = newImage(`./assets/pine-tree.png`, `fixed`, 450, 200);
// Creating tree
const tree = newImage(`./assets/tree.png`, `fixed`, 200, 300);
// Creating pillar
const pillar = newImage(`./assets/pillar.png`, `fixed`, 350, 100);
// Creating crate 
const crate = newImage(`./assets/crate.png`, `fixed`, 150, 200);
// Creating Well
const well = newImage(`./assets/well.png`, `fixed`, 500, 425);
// Creating Sword
const sword = newItem(`./assets/sword.png`, `fixed`, 500, 405);

// Creating Shield
const sheild = newItem(`./assets/sheild.png`, `fixed`, 165, 185);
// Creating Staff
const staff = newItem(`./assets/staff.png`, `fixed`, 600, 100);
