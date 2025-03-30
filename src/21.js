function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }

    return arr;
}

// Example usage:
const input = [3, 5, 7, 9, 2];
console.log(reverseArray(input)); // Output: [9, 7, 5, 3, 2]
