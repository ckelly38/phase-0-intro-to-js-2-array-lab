// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name)
{
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat()
{
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat()
{
    cats.shift(1);
    return cats;
}

function appendCat(name)
{
    let myarr = cats.slice();
    myarr.push(name);
    return myarr;
}

function prependCat(name)
{
    let myarr = cats.slice();
    myarr.unshift(name);
    return myarr;
}

function removeLastCat()
{
    if (cats.length > 1) return cats.slice(0, cats.length - 1);
    else if (cats.length == 1)
    {
        let myarr = new Array();
        return myarr;
    }
    else throw "no cats, cannot remove a cat from an array with no cats!";
}

function removeFirstCat()
{
    let myarr = cats.slice(1);
    return myarr;
}
