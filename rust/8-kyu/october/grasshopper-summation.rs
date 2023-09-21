// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

fn summation(n: i32) -> i32 {
    let mut result = 0;

    for i in 1..=n {
        result += i;
    }

    result
}

fn summation(n: i32) -> i32 {
    (n * (n + 1)) / 2
}

fn summation(n: i32) -> i32 {
    (1..=n).sum()
}

fn summation(n: i32) -> i32 {
    match n {
        1 => 1,
        _ => summation(n - 1),
    }
}

fn main() {
    println!("{}", summation(5));
}
