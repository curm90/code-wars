// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/rust

fn even_or_odd(number: i32) -> &'static str {
    if number % 2 == 0 { "Even" } else { "Odd" }
}

fn even_or_odd(number: i32) -> &'static str {
    match number % 2 {
        0 => "Even",
        _ => "Odd",
    }
}
