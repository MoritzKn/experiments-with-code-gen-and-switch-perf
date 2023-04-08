pub fn nested_switch(input: &str) -> Option<usize> {
    match input.len() {
        // if, in, do
        2 => {
            match input.as_bytes()[0] as char {
                // do
                'd' => {
                    if input.as_bytes()[1] as char == 'o' {
                        return Some(40);
                    } else {
                        return None;
                    }
                }

                // if, in
                'i' => {
                    match input.as_bytes()[1] as char {
                        // if
                        'f' => {
                            return Some(1);
                        }

                        // in
                        'n' => {
                            return Some(24);
                        }

                        _ => {
                            return None;
                        }
                    }
                }

                _ => {
                    return None;
                }
            }
        }

        // var, get, for, new, any, let, try
        3 => {
            match input.as_bytes()[0] as char {
                // any
                'a' => {
                    if (input.as_bytes()[1] as char == 'n') & (input.as_bytes()[2] as char == 'y') {
                        return Some(28);
                    } else {
                        return None;
                    }
                }

                // for
                'f' => {
                    if (input.as_bytes()[1] as char == 'o') & (input.as_bytes()[2] as char == 'r') {
                        return Some(17);
                    } else {
                        return None;
                    }
                }

                // get
                'g' => {
                    if (input.as_bytes()[1] as char == 'e') & (input.as_bytes()[2] as char == 't') {
                        return Some(7);
                    } else {
                        return None;
                    }
                }

                // let
                'l' => {
                    if (input.as_bytes()[1] as char == 'e') & (input.as_bytes()[2] as char == 't') {
                        return Some(31);
                    } else {
                        return None;
                    }
                }

                // new
                'n' => {
                    if (input.as_bytes()[1] as char == 'e') & (input.as_bytes()[2] as char == 'w') {
                        return Some(23);
                    } else {
                        return None;
                    }
                }

                // try
                't' => {
                    if (input.as_bytes()[1] as char == 'r') & (input.as_bytes()[2] as char == 'y') {
                        return Some(36);
                    } else {
                        return None;
                    }
                }

                // var
                'v' => {
                    if (input.as_bytes()[1] as char == 'a') & (input.as_bytes()[2] as char == 'r') {
                        return Some(4);
                    } else {
                        return None;
                    }
                }

                _ => {
                    return None;
                }
            }
        }

        // case, else, type, enum, void, null, this, true
        4 => {
            match input.as_bytes()[0] as char {
                // case
                'c' => {
                    if (input.as_bytes()[1] as char == 'a')
                        & ((input.as_bytes()[2] as char == 's')
                            & (input.as_bytes()[3] as char == 'e'))
                    {
                        return Some(0);
                    } else {
                        return None;
                    }
                }

                // else, enum
                'e' => {
                    match input.as_bytes()[1] as char {
                        // else
                        'l' => {
                            if (input.as_bytes()[2] as char == 's')
                                & (input.as_bytes()[3] as char == 'e')
                            {
                                return Some(3);
                            } else {
                                return None;
                            }
                        }

                        // enum
                        'n' => {
                            if (input.as_bytes()[2] as char == 'u')
                                & (input.as_bytes()[3] as char == 'm')
                            {
                                return Some(14);
                            } else {
                                return None;
                            }
                        }

                        _ => {
                            return None;
                        }
                    }
                }

                // null
                'n' => {
                    if (input.as_bytes()[1] as char == 'u')
                        & ((input.as_bytes()[2] as char == 'l')
                            & (input.as_bytes()[3] as char == 'l'))
                    {
                        return Some(20);
                    } else {
                        return None;
                    }
                }

                // type, this, true
                't' => {
                    match input.as_bytes()[1] as char {
                        // this
                        'h' => {
                            if (input.as_bytes()[2] as char == 'i')
                                & (input.as_bytes()[3] as char == 's')
                            {
                                return Some(22);
                            } else {
                                return None;
                            }
                        }

                        // true
                        'r' => {
                            if (input.as_bytes()[2] as char == 'u')
                                & (input.as_bytes()[3] as char == 'e')
                            {
                                return Some(26);
                            } else {
                                return None;
                            }
                        }

                        // type
                        'y' => {
                            if (input.as_bytes()[2] as char == 'p')
                                & (input.as_bytes()[3] as char == 'e')
                            {
                                return Some(9);
                            } else {
                                return None;
                            }
                        }

                        _ => {
                            return None;
                        }
                    }
                }

                // void
                'v' => {
                    if (input.as_bytes()[1] as char == 'o')
                        & ((input.as_bytes()[2] as char == 'i')
                            & (input.as_bytes()[3] as char == 'd'))
                    {
                        return Some(19);
                    } else {
                        return None;
                    }
                }

                _ => {
                    return None;
                }
            }
        }

        // throw, while, super, false, yield, const, catch
        5 => {
            match input.as_bytes()[0] as char {
                // const, catch
                'c' => {
                    match input.as_bytes()[1] as char {
                        // catch
                        'a' => {
                            if (input.as_bytes()[2] as char == 't')
                                & ((input.as_bytes()[3] as char == 'c')
                                    & (input.as_bytes()[4] as char == 'h'))
                            {
                                return Some(41);
                            } else {
                                return None;
                            }
                        }

                        // const
                        'o' => {
                            if (input.as_bytes()[2] as char == 'n')
                                & ((input.as_bytes()[3] as char == 's')
                                    & (input.as_bytes()[4] as char == 't'))
                            {
                                return Some(38);
                            } else {
                                return None;
                            }
                        }

                        _ => {
                            return None;
                        }
                    }
                }

                // false
                'f' => {
                    if input == "false" {
                        return Some(27);
                    } else {
                        return None;
                    }
                }

                // super
                's' => {
                    if input == "super" {
                        return Some(21);
                    } else {
                        return None;
                    }
                }

                // throw
                't' => {
                    if input == "throw" {
                        return Some(2);
                    } else {
                        return None;
                    }
                }

                // while
                'w' => {
                    if input == "while" {
                        return Some(18);
                    } else {
                        return None;
                    }
                }

                // yield
                'y' => {
                    if input == "yield" {
                        return Some(37);
                    } else {
                        return None;
                    }
                }

                _ => {
                    return None;
                }
            }
        }

        // number, string, module, typeof, public, export, return, static
        6 => {
            match input.as_bytes()[0] as char {
                // export
                'e' => {
                    if input == "export" {
                        return Some(15);
                    } else {
                        return None;
                    }
                }

                // module
                'm' => {
                    if input == "module" {
                        return Some(8);
                    } else {
                        return None;
                    }
                }

                // number
                'n' => {
                    if input == "number" {
                        return Some(5);
                    } else {
                        return None;
                    }
                }

                // public
                'p' => {
                    if input == "public" {
                        return Some(12);
                    } else {
                        return None;
                    }
                }

                // return
                'r' => {
                    if input == "return" {
                        return Some(25);
                    } else {
                        return None;
                    }
                }

                // string, static
                's' => {
                    match input.as_bytes()[2] as char {
                        // static
                        'a' => {
                            if (input.as_bytes()[3] as char == 't')
                                & ((input.as_bytes()[4] as char == 'i')
                                    & (input.as_bytes()[5] as char == 'c'))
                            {
                                return Some(30);
                            } else {
                                return None;
                            }
                        }

                        // string
                        'r' => {
                            if (input.as_bytes()[3] as char == 'i')
                                & ((input.as_bytes()[4] as char == 'n')
                                    & (input.as_bytes()[5] as char == 'g'))
                            {
                                return Some(6);
                            } else {
                                return None;
                            }
                        }

                        _ => {
                            return None;
                        }
                    }
                }

                // typeof
                't' => {
                    if input == "typeof" {
                        return Some(11);
                    } else {
                        return None;
                    }
                }

                _ => {
                    return None;
                }
            }
        }

        // private, finally, extends, package
        7 => {
            match input.as_bytes()[0] as char {
                // extends
                'e' => {
                    if input == "extends" {
                        return Some(29);
                    } else {
                        return None;
                    }
                }

                // finally
                'f' => {
                    if input == "finally" {
                        return Some(16);
                    } else {
                        return None;
                    }
                }

                // private, package
                'p' => {
                    match input.as_bytes()[1] as char {
                        // package
                        'a' => {
                            if input == "package" {
                                return Some(32);
                            } else {
                                return None;
                            }
                        }

                        // private
                        'r' => {
                            if input == "private" {
                                return Some(13);
                            } else {
                                return None;
                            }
                        }

                        _ => {
                            return None;
                        }
                    }
                }

                _ => {
                    return None;
                }
            }
        }

        // function, continue
        8 => {
            match input.as_bytes()[0] as char {
                // continue
                'c' => {
                    if input == "continue" {
                        return Some(39);
                    } else {
                        return None;
                    }
                }

                // function
                'f' => {
                    if input == "function" {
                        return Some(35);
                    } else {
                        return None;
                    }
                }

                _ => {
                    return None;
                }
            }
        }

        // interface
        9 => {
            if input == "interface" {
                return Some(34);
            } else {
                return None;
            }
        }

        // instanceof, implements
        10 => {
            match input.as_bytes()[1] as char {
                // implements
                'm' => {
                    if input == "implements" {
                        return Some(33);
                    } else {
                        return None;
                    }
                }

                // instanceof
                'n' => {
                    if input == "instanceof" {
                        return Some(10);
                    } else {
                        return None;
                    }
                }

                _ => {
                    return None;
                }
            }
        }

        _ => {
            return None;
        }
    }
}
