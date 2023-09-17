// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/rust

pub fn remove_char(s: &str) -> String {
    let first_last_off: &str = &s[1..s.len() - 1];

    first_last_off.to_string()
}

pub fn remove_char(s: &str) -> String {
    s[1..s.len() - 1].to_string()
}

pub fn remove_char(s: &str) -> String {
    let mut chars = s.chars();
    chars.next();
    chars.next_back();
    chars.as_str().to_string()
}
