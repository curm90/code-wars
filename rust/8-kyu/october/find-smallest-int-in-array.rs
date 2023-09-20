// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/rust

fn find_smallest_int(arr: &[i32]) -> i32 {
    *arr.iter().min().unwrap()
}

fn find_smallest_int(arr: &[i32]) -> i32 {
    let mut smallest: i32 = arr[0];

    for num in arr {
        if *num < smallest {
            smallest = *num;
        }
    }

    smallest
}

fn main() {
    println!("{}", find_smallest_int(&[5, 8, 19, 2]))
}
