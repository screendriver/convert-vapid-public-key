export PATH := './node_modules/.bin:' + env_var('PATH')

default:
    @just --list

clean:
    rm -rf target

compile:
    tsc --build

lint:
    eslint .

test-unit:
    mocha --config mocha.config.cjs

test-unit-coverage:
    c8 just test-unit

release-dry:
    release-it --dry-run --no-npm

release:
    release-it
