// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    const hqBlockNumber = 42;
    const distance = Math.abs(blockNumber - hqBlockNumber);
    return distance;
}

function distanceFromHqInFeet(blockNumber) {
    const distanceInBlocks = distanceFromHqInBlocks(blockNumber);
    const blockLengthInFeet = 264;
    const distanceInFeet = distanceInBlocks * blockLengthInFeet;
    return distanceInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const blockLengthInFeet = 264;
    const distanceInFeet = distanceInBlocks * blockLengthInFeet;
    return distanceInFeet;
}

function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet <= 2000) {
        const farePrice = (distanceInFeet - 400) * 0.02;
        return farePrice;
    } else if (distanceInFeet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}