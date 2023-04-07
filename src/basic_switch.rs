pub fn basic_switch(input: &str) -> Option<usize> {
    match input {
        "case" => {
            return Some(0);
        }
        "if" => {
            return Some(1);
        }
        "throw" => {
            return Some(2);
        }
        "else" => {
            return Some(3);
        }
        "var" => {
            return Some(4);
        }
        "number" => {
            return Some(5);
        }
        "string" => {
            return Some(6);
        }
        "get" => {
            return Some(7);
        }
        "module" => {
            return Some(8);
        }
        "type" => {
            return Some(9);
        }
        "instanceof" => {
            return Some(10);
        }
        "typeof" => {
            return Some(11);
        }
        "public" => {
            return Some(12);
        }
        "private" => {
            return Some(13);
        }
        "enum" => {
            return Some(14);
        }
        "export" => {
            return Some(15);
        }
        "finally" => {
            return Some(16);
        }
        "for" => {
            return Some(17);
        }
        "while" => {
            return Some(18);
        }
        "void" => {
            return Some(19);
        }
        "null" => {
            return Some(20);
        }
        "super" => {
            return Some(21);
        }
        "this" => {
            return Some(22);
        }
        "new" => {
            return Some(23);
        }
        "in" => {
            return Some(24);
        }
        "return" => {
            return Some(25);
        }
        "true" => {
            return Some(26);
        }
        "false" => {
            return Some(27);
        }
        "any" => {
            return Some(28);
        }
        "extends" => {
            return Some(29);
        }
        "static" => {
            return Some(30);
        }
        "let" => {
            return Some(31);
        }
        "package" => {
            return Some(32);
        }
        "implements" => {
            return Some(33);
        }
        "interface" => {
            return Some(34);
        }
        "function" => {
            return Some(35);
        }
        "try" => {
            return Some(36);
        }
        "yield" => {
            return Some(37);
        }
        "const" => {
            return Some(38);
        }
        "continue" => {
            return Some(39);
        }
        "do" => {
            return Some(40);
        }
        "catch" => {
            return Some(41);
        }
        _ => {}
    }

    return None;
}
