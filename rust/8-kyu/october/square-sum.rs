// https://www.codewars.com/kata/515e271a311df0350d00000f/train/rust

fn square_sum(vec: Vec<i32>) -> i32 {
    let mut result = 0;

    for n in vec {
        result += n * n;
    }

    result
}

fn square_sum(vec: Vec<i32>) -> i32 {
    vec.iter()
        .map(|n| n * n)
        .sum()
}

fn square_sum(vec: Vec<i32>) -> i32 {
    vec.iter()
        .map(|n| n.pow(2))
        .sum()
}

fn square_sum(vec: Vec<i32>) -> i32 {
    vec.iter()
        .map(|n| n.pow(2))
        .fold(0, |a, n| a + n)
}

fn main() {
    println!("{}", square_sum(vec![2, 2]));
}
