mod basic_switch;
mod keywords;
mod nested_switch;

use std::time::{Duration, Instant};

use rand::seq::SliceRandom;
use rand::thread_rng;

use crate::basic_switch::basic_switch;
use crate::keywords::KEYWORDS_LIST;
use crate::nested_switch::nested_switch;

fn test_basic_switch(words: &[&str], res: &mut Vec<bool>) -> Duration {
    let start = Instant::now();
    for (i, word) in words.iter().enumerate() {
        let index = basic_switch(word);
        let is_keyword = if let Some(index) = index {
            *word == KEYWORDS_LIST[index]
        } else {
            false
        };
        res[i] = is_keyword;

        // println!("{} {:?} {}", word, index, is_keyword);
    }

    let took = start.elapsed();

    took
}

fn test_nested_switch(words: &[&str], res: &mut Vec<bool>) -> Duration {
    let start = Instant::now();
    for (i, word) in words.iter().enumerate() {
        let index = nested_switch(word);
        let is_keyword = if let Some(index) = index {
            *word == KEYWORDS_LIST[index]
        } else {
            false
        };
        res[i] = is_keyword;

        // println!("{} {:?} {}", word, index, is_keyword);
    }

    let took = start.elapsed();

    took
}

fn main() {
    let keywords = KEYWORDS_LIST.to_vec();

    let alpha_file = include_str!("../alpha.txt");
    let alpha: Vec<&str> = alpha_file.split("\n").collect();

    let mut words: Vec<&str> = vec![];
    words.append(&mut alpha.to_owned());
    for _ in 0..1000 {
        words.append(&mut keywords.to_owned());
    }

    let mut res: Vec<bool> = vec![false; words.len()];

    let iterations = 100;
    let mut time_basic_switch = Duration::default();
    let mut time_nested_switch = Duration::default();

    for iteration in 0..iterations {
        if iteration != 0 && iteration % (iterations / 10) == 0 {
            println!(
                "Iteration {} {:.3}",
                iteration,
                time_basic_switch.as_millis() as f64 / time_nested_switch.as_millis() as f64
            );
        }

        words.shuffle(&mut thread_rng());

        time_basic_switch = time_basic_switch + test_basic_switch(&words, &mut res);
        time_nested_switch = time_nested_switch + test_nested_switch(&words, &mut res);
    }

    println!("");
    println!("time_basic_switch: {:?}", time_basic_switch);
    println!("time_nested_switch: {:?}", time_nested_switch);
    println!("{} checks", iterations * words.len());

    // Make sure there is definity no optimization that breaks the benchmark
    println!("");
    res.shuffle(&mut thread_rng());
    println!(
        "random result (stop optimization) {:?}",
        res.get(0).unwrap()
    );
}
