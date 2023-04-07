pub fn nested_switch(input: &str) -> Option<usize> {
    match input.len() {
        // if, in, do
        2 => {
            match input.as_bytes()[0] as char {
                // do
                'd' => {
                    return Some(40);
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

                        _ => {}
                    }
                }

                _ => {}
            }
        }

        // var, get, for, new, any, let, try
        3 => {
            match input.as_bytes()[0] as char {
                // any
                'a' => {
                    return Some(28);
                }

                // for
                'f' => {
                    return Some(17);
                }

                // get
                'g' => {
                    return Some(7);
                }

                // let
                'l' => {
                    return Some(31);
                }

                // new
                'n' => {
                    return Some(23);
                }

                // try
                't' => {
                    return Some(36);
                }

                // var
                'v' => {
                    return Some(4);
                }

                _ => {}
            }
        }

        // case, else, type, enum, void, null, this, true
        4 => {
            match input.as_bytes()[0] as char {
                // case
                'c' => {
                    return Some(0);
                }

                // else, enum
                'e' => {
                    match input.as_bytes()[1] as char {
                        // else
                        'l' => {
                            return Some(3);
                        }

                        // enum
                        'n' => {
                            return Some(14);
                        }

                        _ => {}
                    }
                }

                // null
                'n' => {
                    return Some(20);
                }

                // type, this, true
                't' => {
                    match input.as_bytes()[1] as char {
                        // this
                        'h' => {
                            return Some(22);
                        }

                        // true
                        'r' => {
                            return Some(26);
                        }

                        // type
                        'y' => {
                            return Some(9);
                        }

                        _ => {}
                    }
                }

                // void
                'v' => {
                    return Some(19);
                }

                _ => {}
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
                            return Some(41);
                        }

                        // const
                        'o' => {
                            return Some(38);
                        }

                        _ => {}
                    }
                }

                // false
                'f' => {
                    return Some(27);
                }

                // super
                's' => {
                    return Some(21);
                }

                // throw
                't' => {
                    return Some(2);
                }

                // while
                'w' => {
                    return Some(18);
                }

                // yield
                'y' => {
                    return Some(37);
                }

                _ => {}
            }
        }

        // number, string, module, typeof, public, export, return, static
        6 => {
            match input.as_bytes()[0] as char {
                // export
                'e' => {
                    return Some(15);
                }

                // module
                'm' => {
                    return Some(8);
                }

                // number
                'n' => {
                    return Some(5);
                }

                // public
                'p' => {
                    return Some(12);
                }

                // return
                'r' => {
                    return Some(25);
                }

                // string, static
                's' => {
                    match input.as_bytes()[2] as char {
                        // static
                        'a' => {
                            return Some(30);
                        }

                        // string
                        'r' => {
                            return Some(6);
                        }

                        _ => {}
                    }
                }

                // typeof
                't' => {
                    return Some(11);
                }

                _ => {}
            }
        }

        // private, finally, extends, package
        7 => {
            match input.as_bytes()[0] as char {
                // extends
                'e' => {
                    return Some(29);
                }

                // finally
                'f' => {
                    return Some(16);
                }

                // private, package
                'p' => {
                    match input.as_bytes()[1] as char {
                        // package
                        'a' => {
                            return Some(32);
                        }

                        // private
                        'r' => {
                            return Some(13);
                        }

                        _ => {}
                    }
                }

                _ => {}
            }
        }

        // function, continue
        8 => {
            match input.as_bytes()[0] as char {
                // continue
                'c' => {
                    return Some(39);
                }

                // function
                'f' => {
                    return Some(35);
                }

                _ => {}
            }
        }

        // interface
        9 => {
            return Some(34);
        }

        // instanceof, implements
        10 => {
            match input.as_bytes()[1] as char {
                // implements
                'm' => {
                    return Some(33);
                }

                // instanceof
                'n' => {
                    return Some(10);
                }

                _ => {}
            }
        }

        _ => {}
    }

    return None;
}
