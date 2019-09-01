import * as child_process from 'child_process';
import { docopt } from 'docopt';

import {
  description as pkgDescription,
  version as pkgVersion,
} from '../package.json';

import { bridge } from './bridge/auth.pb'

const doc = `typescript-repo-template version ${pkgVersion}

Usage:
  typescript-repo-template --help
  typescript-repo-template --version

${pkgDescription}

Options:
  -h --help                   Show this
  -v --version                Show current version`;

declare class TypescriptRepoTemplateOptions {
  '--help': boolean;
  '--version': boolean;
}

function help(): number {
  console.log(doc);
  return 0;
}

function version(): number {
  console.log(`typescript-repo-template version ${pkgVersion}`);
  return 0;
}

export async function main(argv: string[]): Promise<number> {
  const options: TypescriptRepoTemplateOptions = docopt(doc, {
    argv: process.argv.slice(2),
    help: false,
  });

  if (options['--help'] !== false) {
    return help();
  }

  if (options['--version'] !== false) {
    return version();
  }

  return 0;
}
