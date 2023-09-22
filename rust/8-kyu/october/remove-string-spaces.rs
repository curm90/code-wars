// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/rust

fn no_space(x: String) -> String {
    x.replace(" ", "")
}

fn no_space(x: String) -> String {
    x.split_whitespace().collect()
}

fn main() {
    println!("{}", no_space("345 3 435    3454  3454545454 46".to_string()))
}
