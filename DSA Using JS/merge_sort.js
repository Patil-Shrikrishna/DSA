//Question: Sort array using "Merge Sort".
function conquer(arr, start, mid, end) {
    let merged = new Array(end - start + 1)
    let idx1 = start; //starting index of first divided array
    let idx2 = mid + 1; //starting index of second divided array
    let x = 0;   //starting index of merged array

    while (idx1 <= mid && idx2 <= end) {
        if (arr[idx1] <= arr[idx2]) {
            merged[x] = arr[idx1]
            x++; idx1++
        } else {
            merged[x] = arr[idx2]
            x++; idx2++
        }
    }

    while (idx1 <= mid) { //merging remaining elements of first array
        merged[x] = arr[idx1]
        x++; idx1++
    }

    while (idx2 <= end) { //merging remaining elements of second array
        merged[x] = arr[idx2]
        x++; idx2++
    }

    for (let i = 0, j = start; i < merged.length; i++, j++) {
        arr[j] = merged[i]
    }

}

function divide(arr, start, end) {
    if (start >= end) { //if array is fully divided or has only one element then returning / stopping recursion
        return;
    }
    let mid = Math.floor(start + (end - start) / 2)  //calculating middle index of array
    // console.log(arr, start, end, mid)
    divide(arr, start, mid) // first array divided part
    divide(arr, mid + 1, end) //  second array divided part
    conquer(arr, start, mid, end) //sorting method
}

let array = [96, 41, 62, 10, 71, 56]
let n = array.length
divide(array, 0, n - 1)
console.log(array)

