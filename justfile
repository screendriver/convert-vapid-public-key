export PATH := './node_modules/.bin:' + env_var('PATH')

default:
    @just --list

clean:
    rm -rf target

compile:
    tsc --build

lint:
    eslint .

format-check:
    prettier --check .

test-unit *options:
    mocha --config mocha.config.json {{options}}

test: compile lint format-check (test-unit)

test-coverage *options:
    c8 just test-unit {{options}}

release-dry:
    release-it --dry-run --no-npm

release:
    release-it
