// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/rust

fn positive_sum(slice: &[i32]) -> i32 {
    let mut sum = 0;

    for &n in slice {
        if n > 0 {
            sum += n;
        }
    }

    sum
}

fn positive_sum(slice: &[i32]) -> i32 {
    slice
        .iter()
        .filter(|x| x.is_positive())
        .sum()
}

fn positive_sum(slice: &[i32]) -> i32 {
    slice
        .iter()
        .filter(|&&x| x > 0)
        .sum()
}
