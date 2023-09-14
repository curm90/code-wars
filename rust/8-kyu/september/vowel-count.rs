// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/rust

fn get_count(string: &str) -> usize {
    let mut vowels_count: usize = 0;
    for c in string.chars() {
        match c.to_ascii_lowercase() {
            'a' | 'e' | 'i' | 'o' | 'u' => {
                vowels_count += 1;
            }
            _ => (),
        }
    }
    vowels_count
}
