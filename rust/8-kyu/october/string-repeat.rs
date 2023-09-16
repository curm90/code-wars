// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/rust

fn repeat_str(src: &str, count: usize) -> String {
    src.repeat(count)
}

fn repeat_str(src: &str, count: usize) -> String {
    let mut s = String::with_capacity(count * src.len());

    for _ in 0..count {
        s.push_str(src);
    }

    s
}
