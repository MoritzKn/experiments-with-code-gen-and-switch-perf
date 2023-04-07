mod basic_switch;
mod keywords;
mod nested_switch;

use std::time::{Duration, Instant};

use rand::seq::SliceRandom;
use rand::thread_rng;

use crate::basic_switch::basicSwitch;
use crate::keywords::KEYWORDS_LIST;
use crate::nested_switch::nestedSwitch;

fn test_basic_switch(words: &[&str], res: &mut Vec<bool>) -> Duration {
    let start = Instant::now();
    for (i, word) in words.iter().enumerate() {
        let index = basicSwitch(word);
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
        let index = nestedSwitch(word);
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
    words.append(&mut keywords.to_owned());
    words.append(&mut alpha.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());

    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());
    words.append(&mut keywords.to_owned());

    let mut res: Vec<bool> = vec![false; words.len()];

    let iterations = 100000;
    let mut time_basic_switch = Duration::default();
    let mut time_nested_switch = Duration::default();

    for _ in 0..iterations {
        words.shuffle(&mut thread_rng());
        // time_basic_switch = time_basic_switch + test_basic_switch(&words, &mut res);
        time_nested_switch = time_nested_switch + test_nested_switch(&words, &mut res);
    }

    // println!("time_basic_switch: {:?}", time_basic_switch);
    println!("time_nested_switch: {:?}", time_nested_switch);
    println!(
        "{} checks in {:?}",
        iterations * words.len(),
        time_basic_switch
    )
}
